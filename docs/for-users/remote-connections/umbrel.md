---
title: Umbrel
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connecting Umbrel with ZEUS

Umbrel supports both LND and Core Lightning (CLN) implementations. Since Umbrel v0.5.2 you can connect over clearnet too, not only Tor.
Another type of connection is through LNC (Lightning Node Connect), a kind of private encrypted connection, using the Lightning Terminal. [See more details about LNC here](https://docs.lightning.engineering/lightning-network-tools/lightning-terminal/lightning-node-connect).

### LND: using Tor or clearnet (domain/IP) network

1. Open ZEUS and go to **Settings -> Wallets -> +**.
2. Click on **Wallet interface** and select **LND (REST)**.
3. Scroll down and press **Scan lndconnect config**.
4. Open your Umbrel dashboard and go to **Connect Wallet -> Select your wallet -> Zeus**.
5. Scan the QR Code.
6. Enable **Use Tor** only if your Umbrel is running only on Tor network.
7. Click on **Save Wallet Config**.
8. ZEUS is now connected to your Umbrel and you can use it to manage your node and make payments.

### Core Lightning: using CLNRest

Umbrel's Core Lightning app (v24.05 and newer) runs CLNRest on port 2107, on both clearnet and Tor. ZEUS v0.12.0 and newer can connect to it by scanning a single QR code.

1. Open the **Core Lightning** app on your Umbrel dashboard.
2. Open the **Connect wallet** screen (QR icon in the header).
3. Under **Network**, select **REST** for clearnet, or **REST (Tor)** if you want to connect over Tor.
4. Open ZEUS and go to **Settings -> Wallets -> +**, press the scan icon in the top-right corner, and scan the QR code displayed by the Core Lightning app.
5. ZEUS will pre-fill a new wallet config with your node's host, port, and rune. Review it and click on **Save Wallet Config**.
6. ZEUS is now connected to your Umbrel and you can use it to manage your node and make payments.

:::tip

If the connection fails on clearnet, your phone may not be able to resolve the `umbrel.local` hostname. Edit the wallet config and replace the host with your Umbrel's local IP address (keeping the `https://` prefix), and make sure your phone is on the same network as your Umbrel.

:::

### Using Nostr Wallet Connect

1. Make sure you have Alby Hub installed on your node.
2. Go to the App Store in the Alby Hub web interface and scroll down until you see ZEUS.
3. Press 'Connect' and follow the on-screen instructions.

### Using Lightning Node Connect

1. Make sure you have Lightning Terminal (litd) installed on your node.
2. Go to the Lightning Terminal web interface and go to the Connect page.
3. Generate a new session with Admin permissions, then click the QR icon.
4. Open ZEUS and go to **Settings -> Wallets -> +**.
5. Click on **Wallet interface** and select **LND (Lightning Node Connect)** as your implementation.
6. Press **Scan LNC QR from Lightning Terminal** and scan the QR presented to you after step 3.
7. Click on **Save Wallet Config**.
8. ZEUS is now connected to your Umbrel and you can use it to manage your node and make payments.

### Using Tailscale network

What is Tailscale?

Tailscale is zero config VPN that creates a secure private network between your home Tor node and your other devices.

Even when separated by firewalls or subnets, Tailscale just works. Tailscale will assign to your Umbrel node machine a stable private IP and an auto-assigned domain that stays consistent, no matter what network your Umbrel machine is connected to. It’s like a local network that works everywhere. Tailscale builds on top of WireGuard Noise protocol encryption, a peer-reviewed and trusted standard.

The connection through Tailscale will be much faster and stable than Tor, encrypted and safe.

1. Go to [Tailscale.com](https://tailscale.com) and create an account. No need to use real identity.
2. Install Tailscale app in Umbrel (see App Store) and login with that Tailscale account you just created. In your Tailscale account you would see all your devices connected and each one will have a dedicated private IP.
3. Install Tailscale in your mobile device and login with that same created account. Immediately you will see in the app the IP of your node. Will be a private IP, not a public one. Copy it.
4. Connect ZEUS to your node over clearnet as described above (for LND or Core Lightning).
5. Before you hit save, disable the **Use Tor** option and replace the host with the Tailscale IP of your node (see point 2).
6. Click on **Save Wallet Config** and you will connect in few moments. ZEUS is now connected to your Umbrel and you can use it to manage your node and make payments.

Optional: if you do not want to use Tailscale, the alternative is [ZeroTier.com](https://zerotier.com) (works the same as Tailscale) or [WireGuard](https://wireguard.com) (more advanced).
