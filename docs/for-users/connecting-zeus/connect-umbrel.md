---
title: Connect with Umbrel
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connecting Umbrel with ZEUS

Umbrel supports CLN and LND implementations. Also after Umbrel v 0.5.2 you can run it on clearnet too, not only Tor.
Another new type of connection is through LNC (Lightning Node Connect), a kind of private encrypted connection, using the Lightning Terminal. [See more details about LNC here](https://docs.lightning.engineering/lightning-network-tools/lightning-terminal/lightning-node-connect).

### Using Tor or clearnet (domain/IP) network

1. Open ZEUS and go to **Settings -> Connect a node -> +**.
2. Click on **Node interface** and select **LND** or **C-lightning REST** (depending on which LN implementation you run your node).
3. Scroll down and press **SCAN LN node QR**.
4. Open your Umbrel dashboard and go to **Connect Wallet -> Select your wallet -> Zeus**.
5. Scan the QR Code.
6. Enable **Use Tor** only if you Umbrel is running only on Tor network.
7. Click on **SAVE NODE CONFIG**.
8. ZEUS is now connected to your Umbrel and you can use it manage your node and make payments.

### Using Lightning Node Connect

1. Make sure you have Lightning Terminal (litd) installed on your node.
2. Go to the Lightning Terminal web interface and go to the Connect page.
3. Generate a new session with Admin permissions, then click the QR icon.
4. Open ZEUS and go to **Settings -> Connect a node -> add +**.
5. Click on **Node interface** and select **LNC (Lightning Node Connect)** as your implementation.
6. Press **Scan QR from Lightning Terminal** and scan the QR presented to you after step 3
7. Click on **SAVE NODE CONFIG**.
8. ZEUS is now connected to your Umbrel and you can use it manage your node and make payments.

### Using Tailscale network

What is Tailscale?

Tailscale is zero config VPN that creates a secure private network between your home Tor node and your other devices.

Even when separated by firewalls or subnets, Tailscale just works. Tailscale will assign to your Umbrel node machine a stable private IP and an auto-assigned domain that stays consistent, no matter what network your Umbrel machine is connected to. It’s like a local network that works everywhere. Tailscale builds on top of WireGuard Noise protocol encryption, a peer-reviewed and trusted standard.

The connection through Tailscale will be much faster and stable than Tor, encrypted and safe.

1. Go to [Tailscale.com](https://tailscale.com) and create an account. No need to use real identity.
2. Install Tailscale app in Umbrel (see App Store) and login with that Tailscale account you just created. In your Tailscale account you would see all your devices connected and each one will have a dedicated private IP.
3. Install Tailscale in your mobile device and login with that same created account. Immediately you will see in the app the IP of your node. Will be a private IP, not a public one. Copy it.
4. Open ZEUS and go to **Settings -> Connect a node -> +**.
5. Click on **Node interface** and select **LND** or **C-lightning REST**(depending on which LN implementation you run your node).
6. Scroll down and press **SCAN LN node QR**.
7. Open your Umbrel dashboard and go to **Connect Wallet -> Select your wallet -> Zeus**.
8. Scan the QR Code.
9. Before hit save config, remove the **Use Tor** option and replace all the onion address with that Tailscale IP of your node (see point 2).
10. Click on **SAVE NODE CONFIG** and you will connect in few moments. ZEUS is now connected to your Umbrel and you can use it manage your node and make payments.

Optional: if you do not want to use Tailscale, the alternative is [ZeroTier.com](https://zerotier.com) (works the same as Tailscale) or [WireGuard](https://wireguard.com) (more advanced).