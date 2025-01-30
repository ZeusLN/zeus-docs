---
---

# Open a channel to the embedded LND node

## Overview

This page will walk you through how to open up a channel from another lightning node to the embedded LND node in ZEUS v0.8+.

The embedded node lives on your phone and is usually offline so it doesn't make sense to expose a URI or node address on the lightning network for others to connect to. Instead, you must initiate the peer connection yourself from the embedded node.

## Steps

### 1. From the embedded node, connect to your remote node as a peer

Go to the Open Channel view in ZEUS. You can get there by going to the channels pane in the bottom right corner of the main view. Once you're on the Channels pane, press the plus icon (+) in the top right corner to get to the Open Channel view.

In the Open Channel view, you will now see two tabs in the header: **Open Channel** and **Connect Peer**. You can switch between these tabs to change the view accordingly.

From the Connect Peer tab, you will see a Peer input field with a dropdown. By default, it is set to OLYMPUS BY ZEUS, you need to tap on it and select Custom to manually enter the values. Once set to Custom, enter the remote node's pubkey and host, then press the Connect Peer button. If successful, ZEUS will return a message confirming that you've successfully connected to your peer.

![zeus-screen1](../../../static/img/zeus-connect-peer.png)

### 2. From the remote node, open up a channel

Now that you've established a peer connection from the embedded node to the remote node, you can now open up a channel from the remote node to the embedded node.

You may also want to consider <a href="/for-users/embedded-node/trusted-funding">opening a trusted channel</a> instead so that you don't pay any on-chain fees and reap other benefits.
