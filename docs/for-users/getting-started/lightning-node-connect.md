---
title: Connecting to Zeus
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connecting to Zeus

## Full node solutions

<Tabs>

<TabItem value="Umbrel">

> Umbrel

Umbrel is using CLN and LND implementations. Also after Umbrel v 0.5.2 you can run it on clearnet too, not only Tor.

A - Connect Umbrel using LND interface:
1. Open Zeus and go to **Settings -> Connect a node -> +**.
2. Click on **Node interface** and select **LND**.
3. Scroll down and press **SCAN LND node QR**.
4. Open your Umbrel dashboard and go to **Connect Wallet -> Select your wallet -> Zeus**.
5. Scan the QR Code.
6. Enable **Use Tor**. If you run it on clearnet, this option is not recommended.
7. Click on **SAVE NODE CONFIG**.
8. Zeus is now connected to your Umbrel and you can use it manage your node and make payments.

B - Connect Umbrel using CLN interface:
1. Open Zeus and go to **Settings -> Connect a node -> +**.
2. Click on **Node interface** and select **C-lightning REST**.
3. Scroll down and press **SCAN LN node QR**.
4. Open your Umbrel dashboard and go to **Connect Wallet -> Select your wallet -> Zeus**.
5. Scan the QR Code.
6. Enable **Use Tor**. If you run it on clearnet, this option is not recommended.
7. Click on **SAVE NODE CONFIG**.
8. Zeus is now connected to your Umbrel and you can use it manage your node and make payments.

</TabItem>
<TabItem value="Raspiblitz">

> Raspiblitz

</TabItem>
<TabItem value="Citadel">

> Citadel

Citadel is using LND implementation.

1. Open Zeus and go to **Settings -> Connect a node -> +**.
2. Click on **Node interface** and select **LND**.
3. Scroll down and press **SCAN LND node QR**.
4. Open your Citadel dashboard and go to **Connect Wallet -> Select your wallet -> Zeus**.
5. Scan the QR Code.
6. Enable **Use Tor**.
7. Click on **SAVE NODE CONFIG**.
8. Zeus is now connected to your Citadel.

</TabItem>
<TabItem value="MyNode">

> MyNodeBTC

myNodeBTC is using LND implementation.

1. Open Zeus and go to **Settings -> Connect a node -> +**.
2. Click on **Node interface** and select **LND**.
3. Scroll down and press **SCAN LND node QR**.
4. Open your Citadel dashboard and go to **Connect Wallet -> Select your wallet -> Zeus**.
5. Scan the QR Code.
6. Enable **Use Tor**.
7. Click on **SAVE NODE CONFIG**.
8. Zeus is now connected to your Citadel.

</TabItem>
<TabItem value="Nodl">

> NODL

</TabItem>
</Tabs>

## Payment platforms

<Tabs>

<TabItem value="BTCPay Server">

> BTCPay Server

</TabItem>
<TabItem value="LNBits">

> LNbits

LNbits is using LNDhub interface for accounts.

1. In your your LNbits instance, go to LNDhub extension and select the wallet you want to connect in Zeus (if you have many).
2. You could use two types of accounts: "invoice only" (only receive) or "admin" (send/receive).
3. Open Zeus app and go to **Settings -> Connect a node -> +**.
4. Click on **Node interface** and select **LNDHUB**.
5. Scroll down and press **SCAN LNDHUB QR**. Scan the lndhub QR code from your LNbits lndhub extension.
6. Disable **Certificate Verification**.
7. Enable **Use Tor** if your LNbits is running behind Tor.
8. Click on **SAVE NODE CONFIG**.
9. You can now use your LNbits account as a LN wallet with Zeus.

</TabItem>
<TabItem value="LNtxBot">

>LNtxBot

LNtxBot is using LNDhub interface for accounts.

1. In your Telegram chat with @lntxbot, type /bluewallet to get your lndhub QR code.
2. Open Zeus app and go to **Settings -> Connect a node -> +**.
3. Click on **Node interface** and select **LNDHUB**.
4. Scroll down and press **SCAN LNDHUB QR**. Scan the lndhub QR code.
5. Disable **Certificate Verification**.
6. Enable **Use Tor** if you would like (but not recommended)
7. Click on **SAVE NODE CONFIG**.
8. You can now use your @lntxbot wallet with Zeus, as any other LN wallet.

</TabItem>

</Tabs>
