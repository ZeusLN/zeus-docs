---
title: Connecting to Zeus
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connecting to Zeus

## Full node solutions

<Tabs>

<TabItem value="Umbrel">

> Connect your Umbrel node

Umbrel is using CLN and LND implementations. Also after Umbrel v 0.5.2 you can run it on clearnet too, not only Tor.

### A - Connect Umbrel with LND/CLN interface, using Tor or clearnet (domain/IP) network:
1. Open Zeus and go to **Settings -> Connect a node -> +**.
2. Click on **Node interface** and select **LND** or **C-lightning REST** (depending on which LN implementation you run your node).
3. Scroll down and press **SCAN LN node QR**.
4. Open your Umbrel dashboard and go to **Connect Wallet -> Select your wallet -> Zeus**.
5. Scan the QR Code.
6. Enable **Use Tor** only if you Umbrel is running only on Tor network.
7. Click on **SAVE NODE CONFIG**.
8. Zeus is now connected to your Umbrel and you can use it manage your node and make payments.

### B - Connect Umbrel with LND/CLN interface, using Tailscale network.

What is Tailscale?

Tailscale is zero config VPN that creates a secure private network between your home Tor node and your other devices.

Even when separated by firewalls or subnets, Tailscale just works. Tailscale will assign to your Umbrel node machine a stable private IP and an auto-assigned domain that stays consistent, no matter what network your Umbrel machine is connected to. It’s like a local network that works everywhere. Tailscale builds on top of WireGuard Noise protocol encryption, a peer-reviewed and trusted standard.

The connection through Tailscale will be much faster and stable than Tor, encrypted and safe.

1. Go to [Tailscale.com](https://tailscale.com) and create an account. No need to use real identity.
2. Install Tailscale app in Umbrel (see App Store) and login with that Tailscale account you just created. In your Tailscale account you would see all your devices connected and each one will have a dedicated private IP.
3. Install Tailscale in your mobile device and login with that same created account. Immediately you will see in the app the IP of your node. Will be a private IP, not a public one. Copy it.
4. Open Zeus and go to **Settings -> Connect a node -> +**.
5. Click on **Node interface** and select **LND** or **C-lightning REST**(depending on which LN implementation you run your node).
6. Scroll down and press **SCAN LN node QR**.
7. Open your Umbrel dashboard and go to **Connect Wallet -> Select your wallet -> Zeus**.
8. Scan the QR Code.
9. Before hit save config, remove the **Use Tor** option and replace all the onion address with that Tailscale IP of your node (see point 2).
10. Click on **SAVE NODE CONFIG** and you will connect in few moments. Zeus is now connected to your Umbrel and you can use it manage your node and make payments.

Optional: if you do not want to use Tailscale, the alternative is [ZeroTier.com](https://zerotier.com) (works the same as Tailscale) or [WireGuard](https://wireguard.com) (more advanced).

</TabItem>
<TabItem value="Raspiblitz">

> Connect to your Raspiblitz node

Raspiblitz is using CLN and LND implementations.

### A - Connect Raspiblitz with LND/CLN interface, using Tor or clearnet (domain/IP) network:
1. Open Zeus and go to **Settings -> Connect a node -> +**.
2. Click on **Node interface** and select **LND** or **C-lightning REST** (depending on which LN implementation you run your node).
3. Scroll down and press **SCAN LN node QR**.
4. Go to Raspiblitz dashboard, **Connect menu/ Mobile – Connect Mobile wallet / Zeus Android/ Continue/**
5. Scan the QR Code.
6. Enable **Use Tor** only if you Raspiblitz is running only on Tor network.
7. Click on **SAVE NODE CONFIG**.
8. Zeus is now connected to your Raspiblitz and you can use it manage your node and make payments.

### B - Connect Raspiblitz with LND/CLN interface, using Tailscale/ZeroTier network.
What is Tailscale?

Tailscale is zero config VPN that creates a secure private network between your home Tor node and your other devices.
Even when separated by firewalls or subnets, Tailscale just works. Tailscale will assign to your Raspiblitz node machine a stable private IP and an auto-assigned domain that stays consistent, no matter what network your Umbrel machine is connected to. It’s like a local network that works everywhere. Tailscale builds on top of WireGuard Noise protocol encryption, a peer-reviewed and trusted standard.

The connection through Tailscale will be much faster and stable than Tor, encrypted and safe.

1. Go to [Tailscale.com](https://tailscale.com) or [ZeroTier.com](https://zerotier.com) and create an account. No need to use real identity.
2. Install Tailscale on your Raspiblitz machine. [Here is a guide how to install ZeroTier on Raspiblitz](https://openoms.github.io/bitcoin-tutorials/zerotier/) (is the same for Tailscale). Then login with that Tailscale/ZeroTier account you just created. In your Tailscale account you would see all your devices connected and each one will have a dedicated private IP.
3. Install Tailscale in your mobile device and login with that same created account. Immediately you will see in the app the IP of your node. Will be a private IP, not a public one. Copy it.
4. Open Zeus and go to **Settings -> Connect a node -> +**.
5. Click on **Node interface** and select **LND** or **C-lightning REST**(depending on which LN implementation you run your node).
6. Scroll down and press **SCAN LN node QR**.
7. Open your Raspiblitz dashboard and go to **Connect Wallet -> Select your wallet -> Zeus**.
8. Scan the QR Code.
9. Before hit save config, remove the **Use Tor** option and replace all the onion address with that Tailscale IP of your node (see point 2).
10. Click on **SAVE NODE CONFIG** and you will connect in few moments. Zeus is now connected to your Umbrel and you can use it manage your node and make payments.

</TabItem>
<TabItem value="Citadel">

> Connect to your Citadel node

Citadel is using LND implementation.
### A - Connect Citadel with LND interface, using Tor network:
1. Open Zeus and go to **Settings -> Connect a node -> +**.
2. Click on **Node interface** and select **LND**.
3. Scroll down and press **SCAN LND node QR**.
4. Open your Citadel dashboard and go to **Connect Wallet -> Select your wallet -> Zeus**.
5. Scan the QR Code.
6. Enable **Use Tor**.
7. Click on **SAVE NODE CONFIG**.
8. Zeus is now connected to your Citadel.

### B - Connect Umbrel with LND interface, using Tailscale network.
What is Tailscale?

Tailscale is zero config VPN that creates a secure private network between your home Tor node and your other devices.

Even when separated by firewalls or subnets, Tailscale just works. Tailscale will assign to your Citadel node machine a stable private IP and an auto-assigned domain that stays consistent, no matter what network your Citadel machine is connected to. It’s like a local network that works everywhere. Tailscale builds on top of WireGuard Noise protocol encryption, a peer-reviewed and trusted standard.

The connection through Tailscale will be much faster and stable than Tor, encrypted and safe.

1. Go to [Tailscale.com](https://tailscale.com) and create an account. No need to use real identity.
2. Install Tailscale app in Citadel (see App Store) and login with that Tailscale account you just created. In your Tailscale account you would see all your devices connected and each one will have a dedicated private IP.
3. Install Tailscale in your mobile device and login with that same created account. Immediately you will see in the app the IP of your node. Will be a private IP, not a public one. Copy it.
4. Open Zeus and go to **Settings -> Connect a node -> +**.
5. Click on **Node interface** and select **LND**.
6. Scroll down and press **SCAN LN node QR**.
7. Open your Citadel dashboard and go to **Connect Wallet -> Select your wallet -> Zeus**.
8. Scan the QR Code.
9. Before hit save config, remove the **Use Tor** option and replace all the onion address with that Tailscale IP of your node (see point 2).
10. Click on **SAVE NODE CONFIG** and you will connect in few moments. Zeus is now connected to your Citadel and you can use it manage your node and make payments.

Optional: if you do not want to use Tailscale, the alternative is [ZeroTier.com](https://zerotier.com) (works the same as Tailscale) or [WireGuard](https://wireguard.com) (more advanced).

</TabItem>
<TabItem value="MyNode">

> Connect to MyNodeBTC

myNodeBTC is using LND implementation.
### A - Connect myNodeBTC with LND interface, using Tor network:
1. Open Zeus and go to **Settings -> Connect a node -> +**.
2. Click on **Node interface** and select **LND**.
3. Scroll down and press **SCAN LND node QR**.
4. Open the QR Pairing page on myNode and select **REST Tor** tab.
5. Scan the QR Code.
6. Enable **Use Tor**.
7. Click on **SAVE NODE CONFIG**.
8. Zeus is now connected to your myNodeBTC.

### B - Connect myNodeBTC with LND interface, using Tailscale/ZeroTier network:
1. Go to [Tailscale.com](https://tailscale.com) or [ZeroTier.com](https://zerotier.com) and create an account. No need to use real identity.
2. Install Tailscale on your myNodeBTC machine. [Here is a guide how to install ZeroTier on myNodeBTC](https://docs.nodl.it/guides/zerotier.html) (is the same for Tailscale). Then login with that Tailscale/ZeroTier account you just created. In your Tailscale account you would see all your devices connected and each one will have a dedicated private IP.
3. Install Tailscale in your mobile device and login with that same created account. Immediately you will see in the app the IP of your node. Will be a private IP, not a public one. Copy it.
4. Open Zeus and go to **Settings -> Connect a node -> +**.
5. Click on **Node interface** and select **LND**.
6. Scroll down and press **SCAN LN node QR**.
7. Open the QR Pairing page on myNode and select **REST Tor** tab.
8. Scan the QR Code.
9. Before hit save config, remove the **Use Tor** option and replace all the onion address with that Tailscale/ZeroTier IP of your node (see point 2).
10. Click on **SAVE NODE CONFIG** and you will connect in few moments. Zeus is now connected to your myNodeBTC and you can use it manage your node and make payments.

</TabItem>
<TabItem value="Nodl">

> Connect to NODL

NODL is using LND implementation.

1. Open Zeus and go to **Settings -> Connect a node -> +**.
2. Click on **Node interface** and select **LND**.
3. Scroll down and press **SCAN LND node QR**.
4. Open your NODL dashboard and go to **LND tile -> Select your wallet -> Zeus**.
5. Scan the QR Code.
6. Enable **Use Tor**.
7. Click on **SAVE NODE CONFIG**.
8. Zeus is now connected to your NODL.

</TabItem>
</Tabs>

## Payment platforms

<Tabs>

<TabItem value="BTCPay Server">

> Connect to your BTCPay Server

BTCPay Server could be used with two modes: as node management (CLN or LND) or as LNDhub with the plugin LNBank activated on BTCPay.
### A. Using CLN/LND interface to connect BTCPay Server
1. In your your BTCPay instance, go to services and select Zeus. It will show you a QR code to scan.
2. Open Zeus app and go to **Settings -> Connect a node -> +**.
3. Click on **Node interface** and select **LND** or **CLN**.
4. Scroll down and press **SCAN BTCPAY config QR**. Scan the lnd/cln QR code from your BTCPay Server config.
5. Disable **Certificate Verification**.
6. Enable **Use Tor** if your BTCPay is running behind Tor.
7. Click on **SAVE NODE CONFIG**.
8. You can now use your BTCPay account as a LN wallet with Zeus.

### B. Using LNBank plugin of BTCPay Server to connect Zeus:
Keep in mind that lndhub interfaces will not provide any on-chain bitcoin address, only Lightning use.
Unfortunately there is [an issue with Zeus, which prevents import via QR scan](https://github.com/ZeusLN/zeus/issues/1081). Until this is fixed you have to import the wallet by entrering the details manually.

In Zeus you can use this path to import the wallet:
1. Open the settings by clicking on the node icon in the top left corner.
2. In the settings click the node (first row) to get to the list of nodes.
3. Click the plus icon in the top right corner to add a new node/wallet.
You will land on the following screen and have to …

- Choose "LNDHub" as the "Node Interface"
- Enable the "Existing account" toggle

On that screen you then have to fill in the host, username and password fields. The values for these fields are included in the account URL which you can copy on the LNbank wallet settings page.

Copy the account URL and paste it into a note app on your mobile device. It consists of the following parts:

```lndhub:// USERNAME : PASSWORD @ HOST```

You can ignore the ```lndhub:// part```, the username and password are separated by an ```:``` and the host is what comes after the ```@```. Copy those values into the corresponding fields in Zeus and then click "Save node config".

The parts map like this:

- Username = LNbank Wallet ID
- Password = LNbank Wallet Access Key (Admin)
- Host = ```YOUR_BTCPAY/plugins/lnbank/api/lndhub```

</TabItem>
<TabItem value="LNBits">

> Connect to LNbits account

LNbits is using LNDhub interface for accounts.

Keep in mind that lndhub interfaces will not provide any on-chain bitcoin address, only Lightning use.

1. In your your LNbits instance, go to LNDhub extension and select the wallet you want to connect in Zeus (if you have many).
2. You could use two types of accounts: "invoice only" (only receive) or "admin" (send/receive).
3. Open Zeus app and go to **Settings -> Connect a node -> +**.
4. Click on **Node interface** and select **LNDHUB**.
5. Scroll down and press **SCAN LNDHUB QR**. Scan the lndhub QR code from your LNbits lndhub extension.
6. Disable **Certificate Verification**.
7. Enable **Use Tor** if your LNbits is running behind Tor.
8. Click on **SAVE NODE CONFIG**. It will popup an alert about certificate validation, just click "I understand".
9. You can now use your LNbits account as a LN wallet with Zeus.

</TabItem>
<TabItem value="LNtxBot">

>Connect your LNtxBot account

LNtxBot is using LNDhub interface for accounts.

Keep in mind that lndhub interfaces will not provide any on-chain bitcoin address, only Lightning use.

1. In your Telegram chat with @lntxbot, type /bluewallet to get your lndhub QR code.
2. Open Zeus app and go to **Settings -> Connect a node -> +**.
3. Click on **Node interface** and select **LNDHUB**.
4. Scroll down and press **SCAN LNDHUB QR**. Scan the lndhub QR code.
5. Disable **Certificate Verification**.
6. Enable **Use Tor** if you would like (but not recommended)
7. Click on **SAVE NODE CONFIG**. It will popup an alert about certificate validation, just click "I understand".
8. You can now use your @lntxbot wallet with Zeus, as any other LN wallet.

</TabItem>

</Tabs>
