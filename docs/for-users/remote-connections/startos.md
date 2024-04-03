---
title: StartOS
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connecting StartOS with ZEUS

StartOS supports CLN and LND implementations and by default is available only through Tor network.
Another new type of connection is through LNC (Lightning Node Connect), a kind of private encrypted connection, using the Lightning Terminal. [See more details about LNC here](https://docs.lightning.engineering/lightning-network-tools/lightning-terminal/lightning-node-connect).

### Using Tor or clearnet (domain/IP) network

1. Open ZEUS and go to **Settings -> Connect a node -> +**.
2. Click on **Node interface** and select **LND** or **C-Lightning REST**.
3. Scroll down and press **SCAN LND node QR**.
4. Open your StartOS dashboard and go to **Services -> CLN/LND -> Properties - C-lightning REST/lndconnect REST URL**.
5. Scan the QR Code.
6. Enable **Use Tor**.
7. Click on **SAVE NODE CONFIG**.
8. ZEUS is now connected to your StartOS lightning node.

### Using Lightning Node Connect

1. Make sure you have Lightning Terminal (litd) installed on your node.
2. Go to the Lightning Terminal web interface and go to the Connect page.
3. Generate a new session with Admin permissions, then click the QR icon.
4. Open ZEUS and go to **Settings -> Connect a node -> add +**.
5. Click on **Node interface** and select **LNC (Lightning Node Connect)** as your implementation.
6. Press **Scan QR from Lightning Terminal** and scan the QR presented to you after step 3
7. Click on **SAVE NODE CONFIG**.
8. ZEUS is now connected to your StartOS node and you can use it manage your node and make payments.