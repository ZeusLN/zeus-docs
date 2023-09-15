---

---

# Open a trusted funding channel to the embedded node

## Overview

One potential setup you can have with your in-app, embedded node in Zeus v0.8: connect to your routing node at home (or in the cloud) with a private 0-conf channel.

There are a lot of perks to this set up. You skip on-chain fees, save on routing fees, segregate your main LN funds from your phone, and potentially skip the need to backup your mobile wallet.

## Steps

### 1. From the embedded node, connect to your remote node as a peer

Go to the Open Channel view in Zeus. You can get there by going to the channels pane in the bottom right corner of the main view. Once you're on the Channels pane, press the plus icon (+) in the top right corner to get to the Open Channel view.

From the Open Channel view, you can press on the header to switch to Connect Peer mode. The header and the fields will change to reflect the mode.

From the Connect Peer mode, enter in the remote node's pubkey and host, and then press the Connect Peer button. If successful, Zeus should return a message saying that you've successfully connected to your peer.

![zeus-screen1](../../../static/img/zeus-screen1.png)


### 2. Add your remote node as a zero conf peer

Navigate to `Settings` > `Embedded Node` > `Peers` > `Zero conf Peers`, and add your remote node's public key to the Zero conf peers list.

![zeus-screen2](../../../static/img/zeus-screen-zeroconf.png)



### 3. From the remote node, open up a trusted funding channel using Balance of Satoshis (BOS)

Now that you've established a peer connection from the embedded node to the remote node, you can now open up a channel from the remote node to the embedded node.

To open up the trusted funding channel, you must be using an LND node with the <a href="https://github.com/alexbosworth/balanceofsatoshis/">BOS command line tool</a>

On the remote node run:

`bos open <embedded-node-public-key> --type private-trusted --avoid-broadcast --amount <amount-in-sats>`

The `--avoid-broadcast` flag will ensure that sure you never broadcast the transaction. This channel will never be reflected on-chain.