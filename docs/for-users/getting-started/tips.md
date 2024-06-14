---
title: Concepts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import outpoint from '/static/img/outpoint.png';


# What is an Outpoint?

An "outpoint" refers to a specific output of a previous transaction. Every transaction in Bitcoin consists of inputs and outputs. Inputs refer to the funds being spent. It specifies where the bitcoins being spent come from. It uses an outpoint to reference a previous unspent output on the blockchain, while outputs are the destinations where the funds are being sent. This defines who receives the bitcoins and the conditions for spending them.

An outpoint is a reference to a particular output of a previous transaction. It consists of two parts:

- Transaction ID (txid): This is a unique identifier for a specific transaction on the Bitcoin blockchain.
- Output Index (vout): This denotes which specific output of the referenced transaction is being spent.

For example, let's say there's a transaction with the ID `a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d`, and it has several outputs. If someone wants to spend the first output of this transaction, they would refer to it using the outpoint `a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d:0`, where `a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d` is the transaction ID and 0 is the output index (indexing starts from 0).
The transaction above is an actual transaction - the 10,000 BTC used to pay for a pizza in 2010.

Using the transaction ID above on a blockchain explorer like [mempool.space](https://mempool.space) or [blockstream.info](https://blockstream.info) would show you information about the transaction and its input and output. 

<img src={outpoint} style={{width: 800}} />

At the left hand side, we can see the the inputs and its corresponding outpoints while on the right hand side we can see the output.

# What are Anchor Outputs?

Anchor outputs are additional outputs added to a commitment transaction in a channel, with each party having one output. These outputs are encumbered with a CSV condition, acting as timelocks, allowing parties to bump fees using Child Pays for Parent (CPFP) to facilitate transaction confirmation. This mechanism enables users to set fees for closing transactions, enhancing flexibility and security within the Lightning Network. 

Anchor outputs address the challenge of delayed confirmation due to preset transaction fees at the time of crafting commitment transactions. By allowing parties to adjust fees post-transaction creation, anchor outputs empower users to adapt to changing fee dynamics, ensuring timely and efficient transaction processing.

# What is a Neutrino peer ?

Neutrino is a lightweight Bitcoin Core client (that was implemented with [BIP157](https://github.com/bitcoin/bips/blob/master/bip-0157.mediawiki)) which enable our Bitcoin node to serve block data to remote LND nodes in a private P2P mode and with minimum data storage needed (almost insignificant), ideal for mobile LN nodes like Zeus.

More Neutrino nodes, well distributed across the world, will help a lot the use of mobile LN nodes like Zeus, with a more decentralized distribution of neutrino peers. A lower response time (ping) it means that is closer to your location and will reduce drastically the sync issues of your Zeus node. A higher response time (in ms) it means you are too far to the neutrino peer and the communication could have a serious impact onto your Zeus sync.

This can be useful if we are already running a fully synced Bitcoin node somewhere and want to use it for one or multiple remote instances of LND. If we have the additional bandwidth and storage available, we might also want to make our existing Bitcoin node available to the public as a free service. 

Easily available public Neutrino instances help the network grow more robust and remove bottlenecks. Such services are a prerequisite to light clients, which do not have a copy of the Bitcoin Blockchain available locally.

If you run a full Bitcoin Core node you can connect your Zeus embedded node with it by amend your Core node bitcoin.conf, add the following paramenters:
```
blockfilterindex=1
peerblockfilters=1
```

Once you restart your node, it will resync the Blockchain and build the blockfilterindex. This may take a while depending on your node’s available memory and computing power.

As soon as Bitcoin Core is running, it will now advertise itself to the network if you have set this in your configuration. To disable discovery, you may set `discover=0` in your bitcoin.conf.

Connect from your Zeus embedded node:

This option is good in case you are connecting from a location where the default Neutrino peers provided in Zeus will have a high latency that could not provide a good sync time. So connecting directly to your local node will improve a lot the use of Zeus.

Go to Zeus `Settings --> Embedded Node --> Peers --> Neutrino peers` then add your Bitcoin Neutrino node IP (or FQDN if you have one). It must be delivered over clearnet.

If your Bitcoin node operate only over Tor network it will not serve too much for this purpose, due to high latency offeered over Tor and will not offer more privacy anyways (Neutrino already offer enough privacy).
