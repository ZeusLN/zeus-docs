---
title: StartOS
---

# Connecting StartOS with ZEUS

This guide covers StartOS 0.4.x. StartOS supports both LND and Core Lightning (CLN). Each node publishes a connection QR code that already contains its address and credentials, so ZEUS only needs to scan it.

The QR code is only reachable at the address inside it. StartOS lists several addresses for each service interface, and you choose one of them when you scan:

| Address | Works from | Needs |
| --- | --- | --- |
| LAN | Your home network | [StartOS Root CA](https://docs.start9.com/start-os/trust-ca.html) installed on your phone |
| VPN (StartTunnel or router) | Anywhere | A WireGuard connection and the StartOS Root CA on your phone |
| Tor (`.onion`) | Anywhere | The Tor service installed on StartOS |
| Clearnet domain | Anywhere | A domain, set up as described in [Start9's clearnet docs](https://docs.start9.com/start-os/clearnet.html) |

You can also connect to LND with LNC (Lightning Node Connect), which needs no address setup. [See more details about LNC here](https://docs.lightning.engineering/lightning-network-tools/lightning-terminal/lightning-node-connect).

:::warning

The connection QR code contains your admin macaroon (LND) or rune (CLN). Anyone who has it can spend from your node. Do not share it or include it in screenshots.

:::

### LND

1. Open your StartOS dashboard and go to **Services -> LND**, then open the **REST** interface.
2. Pick the address you want to connect through (see the table above) and display its QR code.
3. Open ZEUS and go to **Settings -> Wallets -> +**.
4. Click on **Wallet interface** and select **LND (REST)**.
5. Scroll down and press **Scan lndconnect config**, then scan the QR code.
6. For a LAN, VPN or clearnet address, leave **Use Tor** off and **Certificate Verification** on. For a `.onion` address, enable **Use Tor** and turn **Certificate Verification** off.
7. Click on **Save Wallet Config**.
8. ZEUS is now connected to your StartOS node and you can use it to manage your node and make payments.

### Core Lightning

StartOS publishes Core Lightning's CLNRest API as a single URL with the rune embedded. ZEUS v0.12.0 and newer can scan it directly.

1. Open your StartOS dashboard and go to **Services -> Core Lightning**, then open the **CLNrest** interface. If it is not listed, enable CLNrest in the service's settings first.
2. Pick the address you want to connect through (see the table above) and display its QR code.
3. Open ZEUS and go to **Settings -> Wallets -> +**, press the scan icon in the top-right corner, and scan the QR code.
4. ZEUS will pre-fill a new wallet config with your node's host, port, and rune. For a `.onion` address, check that **Use Tor** is enabled and **Certificate Verification** is off. For any other address, leave **Use Tor** off and **Certificate Verification** on.
5. Click on **Save Wallet Config**.
6. ZEUS is now connected to your StartOS node and you can use it to manage your node and make payments.

:::tip

If you enter the details by hand, the **Server address** must start with `https://` for a LAN, VPN or clearnet address, or `http://` for a `.onion` address. Do not include the `clnrest+` prefix.

:::

### Using StartTunnel

[StartTunnel](https://docs.start9.com/start-tunnel) is Start9's self-hosted WireGuard router. It runs on a VPS that you rent, and gives your phone a private connection to your StartOS server from anywhere. It is faster than Tor and works even if your home internet is behind CGNAT.

1. Rent a VPS and install StartTunnel on it. Follow [Start9's installation guide](https://docs.start9.com/start-tunnel/installing.html).
2. In StartTunnel, go to **Devices** and add your StartOS server under **Servers**. Import the resulting config in StartOS under **System -> Gateways -> Add**.
3. In StartTunnel, go to **Devices** and add your phone under **Clients**.
4. Install the [WireGuard app](https://www.wireguard.com/install/) on your phone, scan the QR code shown by StartTunnel, and activate the tunnel.
5. Install the [StartOS Root CA](https://docs.start9.com/start-os/trust-ca.html) on your phone if you have not done so already.
6. Connect ZEUS as described above for LND or Core Lightning, picking the address that belongs to your StartTunnel gateway.
7. Keep the WireGuard tunnel active on your phone whenever you use this wallet in ZEUS.

See Start9's [Devices](https://docs.start9.com/start-tunnel/devices.html) and [Inbound VPN](https://docs.start9.com/start-os/inbound-vpn.html) docs for details. If your router has its own VPN server, you can use that in place of StartTunnel.

StartTunnel can also publish an interface on a clearnet domain without revealing your home IP address. In that case no WireGuard app or Root CA is needed on your phone, but the interface is reachable from the public internet and protected only by the macaroon or rune.

### Using Tor

Tor is not built in to StartOS 0.4.x. It is a separate service.

1. Install and start the **Tor** service from the StartOS Marketplace.
2. Add an onion address to the LND **REST** or Core Lightning **CLNrest** interface. See [Start9's Tor docs](https://docs.start9.com/start-os/tor.html).
3. Connect ZEUS as described above for LND or Core Lightning, picking the `.onion` address.

### Using Lightning Node Connect

1. Make sure you have Lightning Terminal (litd) installed on your node.
2. Go to the Lightning Terminal web interface and go to the Connect page.
3. Generate a new session with Admin permissions, then click the QR icon.
4. Open ZEUS and go to **Settings -> Wallets -> +**.
5. Click on **Wallet interface** and select **LND (Lightning Node Connect)** as your implementation.
6. Press **Scan LNC QR from Lightning Terminal** and scan the QR presented to you after step 3.
7. Click on **Save Wallet Config**.
8. ZEUS is now connected to your StartOS node and you can use it to manage your node and make payments.
