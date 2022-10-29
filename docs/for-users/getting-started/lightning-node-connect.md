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
4. Open your myNodeBTC dashboard and go to **Connect Wallet -> Select your wallet -> Zeus**.
5. Scan the QR Code.
6. Enable **Use Tor**.
7. Click on **SAVE NODE CONFIG**.
8. Zeus is now connected to your myNodeBTC.

</TabItem>
<TabItem value="Nodl">

> NODL

NODL is using LND implementation.

1. Open Zeus and go to **Settings -> Connect a node -> +**.
2. Click on **Node interface** and select **LND**.
3. Scroll down and press **SCAN LND node QR**.
4. Open your NODL dashboard and go to **Connect Wallet -> Select your wallet -> Zeus**.
5. Scan the QR Code.
6. Enable **Use Tor**.
7. Click on **SAVE NODE CONFIG**.
8. Zeus is now connected to your NODL.

</TabItem>
</Tabs>

## Payment platforms

<Tabs>

<TabItem value="BTCPay Server">

> BTCPay Server

BTCPay Server could be used with two modes: as node management (CLN or LND) or as LNDhub with the plugin LNBank activated on BTCPay.

A. Using CLN/LND interface to connect BTCPay Server
1. In your your BTCPay instance, go to services and select Zeus. It will show you a QR code to scan.
2. Open Zeus app and go to **Settings -> Connect a node -> +**.
3. Click on **Node interface** and select **LND** or **CLN**.
4. Scroll down and press **SCAN BTCPAY config QR**. Scan the lnd/cln QR code from your BTCPay Server config.
5. Disable **Certificate Verification**.
6. Enable **Use Tor** if your BTCPay is running behind Tor.
7. Click on **SAVE NODE CONFIG**.
8. You can now use your BTCPay account as a LN wallet with Zeus.

B. Using LNBank plugin of BTCPay Server to connect Zeus:
Keep in mind that lndhub interfaces will not provide any on-chain bitcoin address, only Lightning use.
Unfortunately there is [an issue with Zeus, which prevents import via QR scan](https://github.com/ZeusLN/zeus/issues/1081). Until this is fixed you have to import the wallet by entrering the details manually.

In Zeus you can use this path to import the wallet:

- Open the settings by clicking on the node icon in the top left corner.
- In the settings click the node (first row) to get to the list of nodes.
- Click the plus icon in the top right corner to add a new node/wallet.
You will land on the following screen and have to …

- Choose "LNDHub" as the "Node Interface"
- Enable the "Existing account" toggle
<<<<<<< HEAD
=======
![image](../static/img/zeus-lnbank-btcpay.png)
>>>>>>> 15665dc196736ce83418f48f5113244e358aff31

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

> LNbits

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

>LNtxBot

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
