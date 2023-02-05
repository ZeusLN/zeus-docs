---
title: Connect with Embassy
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connecting Embassy with Zeus

Embassy supports CLN and LND implementations and by default is available only through Tor network.
Another new type of connection is through LNC (Lightning Node Connect), a kind of private encrypted connection, using the Lightning Terminal. [See more details about LNC here](https://docs.lightning.engineering/lightning-network-tools/lightning-terminal/lightning-node-connect).

### Using Tor or clearnet (domain/IP) network

1. Open Zeus and go to **Settings -> Connect a node -> +**.
2. Click on **Node interface** and select **LND** or **C-Lightning REST**.
3. Scroll down and press **SCAN LND node QR**.
4. Open your Embassy dashboard and go to **Services -> LND tile -> Properties - lndconnect REST URL or C-lightning REST**.
5. Scan the QR Code.
6. Enable **Use Tor**.
7. Click on **SAVE NODE CONFIG**.
8. Zeus is now connected to your Embassy node.

### Using Lightning Node Connect

1. Make sure you have Lightning Terminal (litd) installed on your node.
2. Go to the Lightning Terminal web interface and go to the Connect page.
3. Generate a new session with Admin permissions, then click the QR icon.
4. Open Zeus and go to **Settings -> Connect a node -> add +**.
5. Click on **Node interface** and select **LNC (Lightning Node Connect)** as your implementation.
6. Press **Scan QR from Lightning Terminal** and scan the QR presented to you after step 3
7. Click on **SAVE NODE CONFIG**.
8. Zeus is now connected to your Emabssy and you can use it manage your node and make payments.

### Using Tailscale network

What is Tailscale?

Tailscale is zero config VPN that creates a secure private network between your home Tor node and your other devices.

Even when separated by firewalls or subnets, Tailscale just works. Tailscale will assign to your Embassy node machine a stable private IP and an auto-assigned domain that stays consistent, no matter what network your Embassy machine is connected to. It’s like a local network that works everywhere. Tailscale builds on top of WireGuard Noise protocol encryption, a peer-reviewed and trusted standard.

The connection through Tailscale will be much faster and stable than Tor, encrypted and safe.

1. Go to [Tailscale.com](https://tailscale.com) and create an account. No need to use real identity.
2. Install Tailscale app in Embassy and login with that Tailscale account you just created. In your Tailscale account you would see all your devices connected and each one will have a dedicated private IP.
3. Install Tailscale in your mobile device and login with that same created account. Immediately you will see in the app the IP of your node. Will be a private IP, not a public one. Copy it.
4. Open Zeus and go to **Settings -> Connect a node -> +**.
5. Click on **Node interface** and select **LND** or **C-lightning REST**(depending on which LN implementation you run your node).
6. Scroll down and press **SCAN LN node QR**.
7. Open your Embassy dashboard and go to **Services -> LND tile -> Properties - lndconnect REST URL or C-lightning REST**.
8. Scan the QR Code.
9. Before hit save config, remove the **Use Tor** option and replace all the onion address with that Tailscale IP of your node (see point 2).
10. Click on **SAVE NODE CONFIG** and you will connect in few moments. Zeus is now connected to your Embassy and you can use it manage your node and make payments.

Optional: if you do not want to use Tailscale, the alternative is [ZeroTier.com](https://zerotier.com) (works the same as Tailscale) or [WireGuard](https://wireguard.com) (more advanced).