---
description: >-
  This page introduces ZEUS Swaps API v2, the latest and recommended API for all
  integrations.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# REST API

Our swaps service is powered by a [Boltz backend](https://github.com/BoltzExchange/boltz-backend), however endpoints and functionality may vary. Please refer to this document for the most up to date information on our endpoints.

## REST Endpoints

The Swagger specifications of the latest ZEUS Swaps REST API can be found [here](https://swaps.zeuslsp.com/api/swagger).

## WebSocket

The endpoints are available at:

* Mainnet: `wss://swaps.zeuslsp.com/api/v2/ws`
* Testnet: `wss://testnet-swaps.zeuslsp.com/api/v2/ws`

### Swap Updates

Instead of polling for swap status updates, clients can subscribe to updates with a WebSocket.

To subscribe to swap status updates, send a message like below. `args` is a list of swap ids to subscribe to.

```json
{
  "op": "subscribe",
  "channel": "swap.update",
  "args": ["swap id 1", "swap id 2"]
}
```

ZEUS Swaps API will respond with a message like below, to confirm that the subscription was created successfully.

```json
{
  "event": "subscribe",
  "channel": "swap.update",
  "args": ["swap id 1", "swap id 2"]
}
```

After the initial subscription confirmation message and whenever a swap status is updated, ZEUS Swaps API will send a message containing details about the status update.

`args` is a list of objects. These objects correspond to responses of `GET /swap/{id}`, but additionally contain the id of the swap.

```json
{
  "event": "update",
  "channel": "swap.update",
  "args": [
    {
      "id": "swap id 1",
      "status": "invoice.set"
    }
  ]
}
```

To unsubscribe from the updates of one or more swaps, send an `unsubscribe` message.

```json
{
  "op": "unsubscribe",
  "channel": "swap.update",
  "args": ["swap id 1"]
}
```

The backend will respond with a message that contains all swap ids the WebSocket is still subscribed to.

```json
{
  "op": "unsubscribe",
  "channel": "swap.update",
  "args": ["swap id 2"]
}
```

### Application Level Pings

To ensure the connection is alive, besides the native WebSocket pings, ZEUS Swaps API will also respond to application-level pings, which is useful when the WebSocket client cannot control the low-level WebSocket connection (like on browsers). To send a ping, send a message like below.

```json
{
  "op": "ping"
}
```

The backend will respond with a `pong` message.

```json
{
  "event": "pong"
}
```

## Examples

Below are some examples covering the flow of a given swap type from beginning to end, using API v2 and its WebSocket.

### Submarine Swap (Chain -> Lightning)

<Tabs>

<TabItem value="typescript" label="TypeScript Bitcoin">

```typescript
import zkpInit from '@vulpemventures/secp256k1-zkp';
import axios from 'axios';
import { crypto } from 'bitcoinjs-lib';
import bolt11 from 'bolt11';
import { Musig, SwapTreeSerializer, TaprootUtils } from 'boltz-core';
import { randomBytes } from 'crypto';
import { ECPairFactory } from 'ecpair';
import * as ecc from 'tiny-secp256k1';
import ws from 'ws';

// Endpoint of the Boltz instance to be used
const endpoint = 'http://127.0.0.1:9001';
const webSocketEndpoint = 'ws://127.0.0.1:9004';

// The invoice you want to have paid
const invoice = '<invoice that should be paid>';

const submarineSwap = async () => {
  const keys = ECPairFactory(ecc).makeRandom();

  // Create a Submarine Swap
  const createdResponse = (
    await axios.post(`${endpoint}/v2/swap/submarine`, {
      invoice,
      to: 'BTC',
      from: 'BTC',
      refundPublicKey: keys.publicKey.toString('hex'),
    })
  ).data;

  console.log('Created swap');
  console.log(createdResponse);
  console.log();

  // Create a WebSocket and subscribe to updates for the created swap
  const webSocket = new ws(`${webSocketEndpoint}/v2/ws`);
  webSocket.on('open', () => {
    webSocket.send(
      JSON.stringify({
        op: 'subscribe',
        channel: 'swap.update',
        args: [createdResponse.id],
      }),
    );
  });

  webSocket.on('message', async (rawMsg) => {
    const msg = JSON.parse(rawMsg.toString('utf-8'));
    if (msg.event !== 'update') {
      return;
    }

    console.log('Got WebSocket update');
    console.log(msg);
    console.log();

    switch (msg.args[0].status) {
      // "invoice.set" means Boltz is waiting for an onchain transaction to be sent
      case 'invoice.set': {
        console.log('Waiting for onchain transaction');
        break;
      }

      // Create a partial signature to allow Boltz to do a key path spend to claim the mainchain coins
      case 'transaction.claim.pending': {
        console.log('Creating cooperative claim transaction');

        // Get the information request to create a partial signature
        const claimTxDetails = (
          await axios.get(
            `${endpoint}/v2/swap/submarine/${createdResponse.id}/claim`,
          )
        ).data;

        // Verify that Boltz actually paid the invoice by comparing the preimage hash
        // of the invoice to the SHA256 hash of the preimage from the response
        const invoicePreimageHash = Buffer.from(
          bolt11
            .decode(invoice)
            .tags.find((tag) => tag.tagName === 'payment_hash')!.data as string,
          'hex',
        );
        if (
          !crypto
            .sha256(Buffer.from(claimTxDetails.preimage, 'hex'))
            .equals(invoicePreimageHash)
        ) {
          console.error('Boltz provided invalid preimage');
          return;
        }

        const boltzPublicKey = Buffer.from(
          createdResponse.claimPublicKey,
          'hex',
        );

        // Create a musig signing instance
        const musig = new Musig(await zkpInit(), keys, randomBytes(32), [
          boltzPublicKey,
          keys.publicKey,
        ]);
        // Tweak that musig with the Taptree of the swap scripts
        TaprootUtils.tweakMusig(
          musig,
          SwapTreeSerializer.deserializeSwapTree(createdResponse.swapTree).tree,
        );

        // Aggregate the nonces
        musig.aggregateNonces([
          [boltzPublicKey, Buffer.from(claimTxDetails.pubNonce, 'hex')],
        ]);
        // Initialize the session to sign the transaction hash from the response
        musig.initializeSession(
          Buffer.from(claimTxDetails.transactionHash, 'hex'),
        );

        // Give our public nonce and the partial signature to Boltz
        await axios.post(
          `${endpoint}/v2/swap/submarine/${createdResponse.id}/claim`,
          {
            pubNonce: Buffer.from(musig.getPublicNonce()).toString('hex'),
            partialSignature: Buffer.from(musig.signPartial()).toString('hex'),
          },
        );

        break;
      }

      case 'transaction.claimed':
        console.log('Swap successful');
        webSocket.close();
        break;
    }
  });
};

(async () => {
  await submarineSwap();
})();
```
</TabItem>

<TabItem value="go" label="Go Bitcoin">

```go
package main

import (
	"bytes"
	"crypto/sha256"
	"encoding/json"
	"fmt"
	"github.com/btcsuite/btcd/btcec/v2"
	"os"

	"github.com/BoltzExchange/boltz-client/v2/pkg/boltz"
	"github.com/lightningnetwork/lnd/zpay32"
)

const endpoint = "<ZEUS Swaps API endpoint>"
const invoice = "<the invoice you want to pay"

var network = boltz.Regtest

func printJson(v any) {
	b, err := json.MarshalIndent(v, "", "  ")
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	fmt.Println(string(b))
}

func submarineSwap() error {
	keys, err := btcec.NewPrivateKey()
	if err != nil {
		return err
	}

	boltzApi := &boltz.Api{URL: endpoint}

	swap, err := boltzApi.CreateSwap(boltz.CreateSwapRequest{
		From:            boltz.CurrencyBtc,
		To:              boltz.CurrencyBtc,
		RefundPublicKey: keys.PubKey().SerializeCompressed(),
		Invoice:         invoice,
	})
	if err != nil {
		return fmt.Errorf("Could not create swap: %s", err)
	}

	boltzPubKey, err := btcec.ParsePubKey(swap.ClaimPublicKey)
	if err != nil {
		return err
	}

	tree := swap.SwapTree.Deserialize()
	if err := tree.Init(boltz.CurrencyBtc, false, keys, boltzPubKey); err != nil {
		return err
	}

	decodedInvoice, err := zpay32.Decode(invoice, network.Btc)
	if err != nil {
		return fmt.Errorf("could not decode swap invoice: %s", err)
	}

	// Check the scripts of the Taptree to make sure Boltz is not cheating
	if err := tree.Check(boltz.NormalSwap, swap.TimeoutBlockHeight, decodedInvoice.PaymentHash[:]); err != nil {
		return err
	}

	// Verify that Boltz is giving us the correct address
	if err := tree.CheckAddress(swap.Address, network, nil); err != nil {
		return err
	}

	fmt.Println("Swap created")
	printJson(swap)

	boltzWs := boltzApi.NewWebsocket()
	if err := boltzWs.Connect(); err != nil {
		return fmt.Errorf("Could not connect to Boltz websocket: %s", err)
	}

	if err := boltzWs.Subscribe([]string{swap.Id}); err != nil {
		return err
	}

	for update := range boltzWs.Updates {
		parsedStatus := boltz.ParseEvent(update.Status)

		printJson(update)

		switch parsedStatus {
		case boltz.InvoiceSet:
			fmt.Println("Waiting for onchain transaction")
			break

		case boltz.TransactionMempool:
			fmt.Println("Boltz found transaction in mempool")
			break

		case boltz.TransactionConfirmed:
			fmt.Println("Boltz found transaction in blockchain")
			break

		case boltz.TransactionClaimPending:
			// Create a partial signature to allow Boltz to do a key path spend to claim the onchain coins
			claimDetails, err := boltzApi.GetSwapClaimDetails(swap.Id)
			if err != nil {
				return fmt.Errorf("Could not get claim details from Boltz: %s", err)
			}

			// Verify that the invoice was actually paid
			preimageHash := sha256.Sum256(claimDetails.Preimage)
			if !bytes.Equal(decodedInvoice.PaymentHash[:], preimageHash[:]) {
				return fmt.Errorf("Boltz returned wrong preimage: %x", claimDetails.Preimage)
			}

			session, err := boltz.NewSigningSession(tree)
			partial, err := session.Sign(claimDetails.TransactionHash, claimDetails.PubNonce)
			if err != nil {
				return fmt.Errorf("could not create partial signature: %s", err)
			}

			if err := boltzApi.SendSwapClaimSignature(swap.Id, partial); err != nil {
				return fmt.Errorf("could not send partial signature to Boltz: %s", err)
			}
			break

		case boltz.TransactionClaimed:
			fmt.Println("Swap succeeded", swap.Id)
			if err := boltzWs.Close(); err != nil {
				return err
			}
			break
		}

	}

	return nil
}

func main() {
	if err := submarineSwap(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
```
</TabItem>
</Tabs>

### Reverse Swap (Lightning -> Chain)

<Tabs>

<TabItem value="typescript" label="TypeScript Bitcoin">

```typescript
import zkpInit from '@vulpemventures/secp256k1-zkp';
import axios from 'axios';
import {
  Transaction,
  address,
  crypto,
  initEccLib,
  networks,
} from 'bitcoinjs-lib';
import {
  Musig,
  OutputType,
  SwapTreeSerializer,
  TaprootUtils,
  constructClaimTransaction,
  detectSwap,
  targetFee,
} from 'boltz-core';
import { randomBytes } from 'crypto';
import { ECPairFactory } from 'ecpair';
import * as ecc from 'tiny-secp256k1';
import ws from 'ws';

// Endpoint of the Boltz instance to be used
const endpoint = 'http://127.0.0.1:9001';
const webSocketEndpoint = 'ws://127.0.0.1:9004';

// Amount you want to swap
const invoiceAmount = 100_000;

// Address to which the swap should be claimed
const destinationAddress = '<Bitcoin address>';

const network = networks.regtest;

const reverseSwap = async () => {
  initEccLib(ecc);

  // Create a random preimage for the swap; has to have a length of 32 bytes
  const preimage = randomBytes(32);
  const keys = ECPairFactory(ecc).makeRandom();

  // Create a Reverse Swap
  const createdResponse = (
    await axios.post(`${endpoint}/v2/swap/reverse`, {
      invoiceAmount,
      to: 'BTC',
      from: 'BTC',
      claimPublicKey: keys.publicKey.toString('hex'),
      preimageHash: crypto.sha256(preimage).toString('hex'),
    })
  ).data;

  console.log('Created swap');
  console.log(createdResponse);
  console.log();

  // Create a WebSocket and subscribe to updates for the created swap
  const webSocket = new ws(`${webSocketEndpoint}/v2/ws`);
  webSocket.on('open', () => {
    webSocket.send(
      JSON.stringify({
        op: 'subscribe',
        channel: 'swap.update',
        args: [createdResponse.id],
      }),
    );
  });

  webSocket.on('message', async (rawMsg) => {
    const msg = JSON.parse(rawMsg.toString('utf-8'));
    if (msg.event !== 'update') {
      return;
    }

    console.log('Got WebSocket update');
    console.log(msg);
    console.log();

    switch (msg.args[0].status) {
      // "swap.created" means Boltz is waiting for the invoice to be paid
      case 'swap.created': {
        console.log('Waiting invoice to be paid');
        break;
      }

      // "transaction.mempool" means that Boltz sent an onchain transaction
      case 'transaction.mempool': {
        console.log('Creating claim transaction');

        const boltzPublicKey = Buffer.from(
          createdResponse.refundPublicKey,
          'hex',
        );

        // Create a musig signing session and tweak it with the Taptree of the swap scripts
        const musig = new Musig(await zkpInit(), keys, randomBytes(32), [
          boltzPublicKey,
          keys.publicKey,
        ]);
        const tweakedKey = TaprootUtils.tweakMusig(
          musig,
          SwapTreeSerializer.deserializeSwapTree(createdResponse.swapTree).tree,
        );

        // Parse the lockup transaction and find the output relevant for the swap
        const lockupTx = Transaction.fromHex(msg.args[0].transaction.hex);
        const swapOutput = detectSwap(tweakedKey, lockupTx);
        if (swapOutput === undefined) {
          console.error('No swap output found in lockup transaction');
          return;
        }

        // Create a claim transaction to be signed cooperatively via a key path spend
        const claimTx = targetFee(2, (fee) =>
          constructClaimTransaction(
            [
              {
                ...swapOutput,
                keys,
                preimage,
                cooperative: true,
                type: OutputType.Taproot,
                txHash: lockupTx.getHash(),
              },
            ],
            address.toOutputScript(destinationAddress, network),
            fee,
          ),
        );

        // Get the partial signature from Boltz
        const boltzSig = (
          await axios.post(
            `${endpoint}/v2/swap/reverse/${createdResponse.id}/claim`,
            {
              index: 0,
              transaction: claimTx.toHex(),
              preimage: preimage.toString('hex'),
              pubNonce: Buffer.from(musig.getPublicNonce()).toString('hex'),
            },
          )
        ).data;

        // Aggregate the nonces
        musig.aggregateNonces([
          [boltzPublicKey, Buffer.from(boltzSig.pubNonce, 'hex')],
        ]);

        // Initialize the session to sign the claim transaction
        musig.initializeSession(
          claimTx.hashForWitnessV1(
            0,
            [swapOutput.script],
            [swapOutput.value],
            Transaction.SIGHASH_DEFAULT,
          ),
        );

        // Add the partial signature from Boltz
        musig.addPartial(
          boltzPublicKey,
          Buffer.from(boltzSig.partialSignature, 'hex'),
        );

        // Create our partial signature
        musig.signPartial();

        // Witness of the input to the aggregated signature
        claimTx.ins[0].witness = [musig.aggregatePartials()];

        // Broadcast the finalized transaction
        await axios.post(`${endpoint}/v2/chain/BTC/transaction`, {
          hex: claimTx.toHex(),
        });

        break;
      }

      case 'invoice.settled':
        console.log('Swap successful');
        webSocket.close();
        break;
    }
  });
};

(async () => {
  await reverseSwap();
})();
```
</TabItem>

<TabItem value="go" label="Go Bitcoin">

```go
package main

import (
	"crypto/rand"
	"crypto/sha256"
	"encoding/json"
	"fmt"
	"os"

	"github.com/BoltzExchange/boltz-client/v2/pkg/boltz"
	"github.com/btcsuite/btcd/btcec/v2"
)

const endpoint = "<ZEUS Swaps API endpoint>"
const invoiceAmount = 100000
const destinationAddress = "<address to which the swap should be claimed>"

// Swap from Lightning to BTC mainchain
var toCurrency = boltz.CurrencyBtc

var network = boltz.Regtest

func printJson(v interface{}) {
	b, err := json.MarshalIndent(v, "", "  ")
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	fmt.Println(string(b))
}

func reverseSwap() error {
	ourKeys, err := btcec.NewPrivateKey()
	if err != nil {
		return err
	}

	preimage := make([]byte, 32)
	_, err = rand.Read(preimage)
	if err != nil {
		return err
	}
	preimageHash := sha256.Sum256(preimage)

	boltzApi := &boltz.Api{URL: endpoint}

	swap, err := boltzApi.CreateReverseSwap(boltz.CreateReverseSwapRequest{
		From:           boltz.CurrencyBtc,
		To:             toCurrency,
		ClaimPublicKey: ourKeys.PubKey().SerializeCompressed(),
		PreimageHash:   preimageHash[:],
		InvoiceAmount:  invoiceAmount,
	})
	if err != nil {
		return fmt.Errorf("Could not create swap: %s", err)
	}

	boltzPubKey, err := btcec.ParsePubKey(swap.RefundPublicKey)
	if err != nil {
		return err
	}

	tree := swap.SwapTree.Deserialize()
	if err := tree.Init(toCurrency, false, ourKeys, boltzPubKey); err != nil {
		return err
	}

	if err := tree.Check(boltz.ReverseSwap, swap.TimeoutBlockHeight, preimageHash[:]); err != nil {
		return err
	}

	fmt.Println("Swap created")
	printJson(swap)

	boltzWs := boltzApi.NewWebsocket()
	if err := boltzWs.Connect(); err != nil {
		return fmt.Errorf("Could not connect to Boltz websocket: %w", err)
	}

	if err := boltzWs.Subscribe([]string{swap.Id}); err != nil {
		return err
	}

	for update := range boltzWs.Updates {
		parsedStatus := boltz.ParseEvent(update.Status)

		printJson(update)

		switch parsedStatus {
		case boltz.SwapCreated:
			fmt.Println("Waiting for invoice to be paid")
			break

		case boltz.TransactionMempool:
			lockupTransaction, err := boltz.NewTxFromHex(toCurrency, update.Transaction.Hex, nil)
			if err != nil {
				return err
			}

			vout, _, err := lockupTransaction.FindVout(network, swap.LockupAddress)
			if err != nil {
				return err
			}

			satPerVbyte := float64(2)
			claimTransaction, _, err := boltz.ConstructTransaction(
				network,
				boltz.CurrencyBtc,
				[]boltz.OutputDetails{
					{
						SwapId:            swap.Id,
						SwapType:          boltz.ReverseSwap,
						Address:           destinationAddress,
						LockupTransaction: lockupTransaction,
						Vout:              vout,
						Preimage:          preimage,
						PrivateKey:        ourKeys,
						SwapTree:          tree,
						Cooperative:       true,
					},
				},
				satPerVbyte,
				boltzApi,
			)
			if err != nil {
				return fmt.Errorf("could not create claim transaction: %w", err)
			}

			txHex, err := claimTransaction.Serialize()
			if err != nil {
				return fmt.Errorf("could not serialize claim transaction: %w", err)
			}

			txId, err := boltzApi.BroadcastTransaction(toCurrency, txHex)
			if err != nil {
				return fmt.Errorf("could not broadcast transaction: %w", err)
			}

			fmt.Printf("Broadcast claim transaction: %s\n", txId)
			break

		case boltz.InvoiceSettled:
			fmt.Println("Swap succeeded", swap.Id)
			if err := boltzWs.Close(); err != nil {
				return err
			}
			break
		}
	}
	return nil
}

func main() {
	if err := reverseSwap(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
```
</TabItem>
</Tabs>

