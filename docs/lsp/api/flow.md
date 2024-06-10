---

---

# Just-in-time channels API

Get 0-conf channels, just in time, using the Flow 2.0 spec

## Spec

The just-in-time, 0-conf channel service currently follows the [Flow 2.0](https://docs.voltage.cloud/flow/flow-2.0) specification.

## Base URLs

Mainnet: https://0conf.lnolymp.us

Testnet: https://testnet-0conf.lnolymp.us

Mutinynet: https://mutinynet-flow.lnolymp.us

## Calls

#### `GET /api/v1/info`

*Response*

```
{
  "connection_methods": [
    {
      "address": "45.79.192.236",
      "port": 9735,
      "type": "ipv4"
    },
    {
      "address": "r46dwvxcdri754hf6n3rwexmc53h5x4natg5g6hidnxfzejm5xrqn2id.onion",
      "port": 9735,
      "type": "torv3"
    }
  ],
  "pubkey": "031b301307574bbe9b9ac7b79cbe1700e31e544513eae0b5d7497483083f99e581"
}
```

#### `POST /api/v1/fee`

*Request*

```
{
    "amount_msat": 100000000,
    "pubkey": "027e6e...274e"
}
```

*Response*

```
{
  "amount_msat": 2500000,              #Fee amount in msats, charged in the wrapped invoice
  "id": "9b1deb4d-...-2b0d7b3dcb6d"    #Fee rate id, to be passed into the /proposal endpoint
}
```

#### `POST /api/v1/proposal`

*Request*

```
{
    "bolt11": "lntb1...",                   #Original Lightning invoice from the client.
    "fee_id": "9b1deb4d-...-2b0d7b3dcb6d"   #Fee ID returned from the /fee endpoint
    "simpleTaproot": true                   #Optional flag to request a Simple Taproot Channel. If not specified, a standard anchor channel will be opened.
    "host": "1.2.3.4",                      #Optional Host connection information for the client. Not needed if client peers to the LSP first.
    "port": 9735                            #Optional Port connection information for the client. Not needed if client peers to the LSP first.
}
```

*Response*

```
{
    "jit_bolt11": "lntb5..."    #Wrapped Bolt11 invoice which can be sent to the sender for payment
}
```