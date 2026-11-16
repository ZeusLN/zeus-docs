---
title: Citadel
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connecting Citadel with ZEUS

Citadel supports LND implementations. Also with the latest version of Citadel you can run it on clearnet too, not only Tor.
Another new type of connection is through LNC (Lightning Node Connect), a kind of private encrypted connection, using the Lightning Terminal. [See more details about LNC here](https://docs.lightning.engineering/lightning-network-tools/lightning-terminal/lightning-node-connect).

### Using Tor or clearnet (domain/IP) network

1. Open your Citadel dashboard and go to **Connect Wallet -> Select your wallet -> Zeus**.
2. Open ZEUS and go to **Settings -> Wallets -> +**, press the scan icon in the top-right corner, and scan the QR code.
3. ZEUS will pre-fill a new wallet config with **LND (REST)** as the wallet interface.
4. Enable **Use Tor** only if the scanned address is a `.onion` address.
5. Click on **Save Wallet Config**.
6. ZEUS is now connected to your Citadel and you can use it to manage your node and make payments.

### Using Lightning Node Connect

1. Make sure you have Lightning Terminal (litd) installed on your node.
2. Go to the Lightning Terminal web interface and go to the Connect page.
3. Generate a new session with Admin permissions, then click the QR icon.
4. Open ZEUS and go to **Settings -> Wallets -> +**, press the scan icon in the top-right corner, and scan the QR code presented to you after step 3.
5. ZEUS will pre-fill a new wallet config with **LND (Lightning Node Connect)** as the wallet interface. Click on **Save Wallet Config**.
6. ZEUS is now connected to your Citadel and you can use it to manage your node and make payments.

### Using Tailscale network

What is Tailscale?

Tailscale is zero config VPN that creates a secure private network between your home Tor node and your other devices.

Even when separated by firewalls or subnets, Tailscale just works. Tailscale will assign to your Citadel node machine a stable private IP and an auto-assigned domain that stays consistent, no matter what network your Citadel machine is connected to. It’s like a local network that works everywhere. Tailscale builds on top of WireGuard Noise protocol encryption, a peer-reviewed and trusted standard.

The connection through Tailscale will be much faster and stable than Tor, encrypted and safe.

1. Go to [Tailscale.com](https://tailscale.com) and create an account. No need to use real identity.
2. Install Tailscale app in Citadel (see App Store) and login with that Tailscale account you just created. In your Tailscale account you would see all your devices connected and each one will have a dedicated private IP.
3. Install Tailscale in your mobile device and login with that same created account. Immediately you will see in the app the IP of your node. Will be a private IP, not a public one. Copy it.
4. Connect ZEUS to your node as described above.
5. Before you hit save, disable the **Use Tor** option and replace the host in **Server address** with the Tailscale IP of your node (see point 2), keeping the `https://` prefix.
6. Click on **Save Wallet Config** and you will connect in few moments. ZEUS is now connected to your Citadel and you can use it to manage your node and make payments.

Optional: if you do not want to use Tailscale, the alternative is [ZeroTier.com](https://zerotier.com) (works the same as Tailscale) or [WireGuard](https://wireguard.com) (more advanced).