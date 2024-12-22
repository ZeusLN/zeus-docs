---
title: Concepts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import outpoint from '/static/img/outpoint.png';

# Concepts

## What is an Outpoint?

Here comes the technical stuff...
An "outpoint" refers to a specific output of a previous transaction. Every transaction in Bitcoin consists of inputs and outputs. Inputs refer to the funds being spent. It specifies where the bitcoins being spent come from. It uses an outpoint to reference a previous unspent output on the blockchain, while outputs are the destinations where the funds are being sent. This defines who receives the bitcoins and the conditions for spending them.

An outpoint is a reference to a particular output of a previous transaction. It consists of two parts:

- Transaction ID (txid): This is a unique identifier for a specific transaction on the Bitcoin blockchain.
- Output Index (vout): This denotes which specific output of the referenced transaction is being spent.

For example, let's say there's a transaction with the ID `a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d`, and it has several outputs. If someone wants to spend the first output of this transaction, they would refer to it using the outpoint `a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d:0`, where `a1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d` is the transaction ID and 0 is the output index (indexing starts from 0).
The transaction above is an actual transaction - the 10,000 BTC used to pay for a pizza in 2010.

Using the transaction ID above on a blockchain explorer like [mempool.space](https://mempool.space) or [blockstream.info](https://blockstream.info) would show you information about the transaction and its input and output. 

<img src={outpoint} style={{width: 800}} />

At the left hand side, we can see the the inputs and its corresponding outpoints while on the right hand side we can see the output.

## What are Anchor Outputs?

Anchor outputs are additional outputs added to a commitment transaction in a channel, with each party having one output. These outputs are encumbered with a CSV condition, acting as timelocks, allowing parties to bump fees using Child Pays for Parent (CPFP) to facilitate transaction confirmation. This mechanism enables users to set fees for closing transactions, enhancing flexibility and security within the Lightning Network. 

Anchor outputs address the challenge of delayed confirmation due to preset transaction fees at the time of crafting commitment transactions. By allowing parties to adjust fees post-transaction creation, anchor outputs empower users to adapt to changing fee dynamics, ensuring timely and efficient transaction processing. 
