---
title: Connect with lndhub
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connecting lndhub accounts with Zeus
A lndhub account is not a real LN wallet, but can be used as a LN wallet with all funcionalities of a LN wallet. Practically is an accounting system on top of a LN node, that means is a credit based account.
LNDHub: [GitHub](https://github.com/BlueWallet/LndHub) | [Documentation](https://bluewallet.io/lndhub/)

### Connect lndhub.io account**

[Bluewallet LNDhub](https://bluewallet.io/lndhub/) is using LNDhub interface for accounts and is a custodial service on any LND node that run the Bluewallet LNDhub server. You can also use the default lndhub server from Bluewallet, from https://lndhub.io.

Keep in mind that lndhub interfaces will not provide any on-chain bitcoin address, only Lightning use.

1. Open Zeus app and go to **Settings -> Connect a node -> +**.
2. Click on **Node interface** and select **LNDHUB**.
3. In the host box, type: **https://lndhub.io**
4. Leave **Existing account** disabled.
5. Enable **Use Tor** if you would like (but not recommended)
6. Click on **Create LNDHUB account**. It will popup an alert about certificate validation, just click "I understand".
7. Click on **SAVE NODE CONFIG**.
8. You can now use your new LNDHUB account with Zeus, as any other LN wallet.
9. Save that URI address created, in a safe place, out of your Zeus app. That is the only way you could recover your LNDHUB account.

### Connect a LNbits account

[LNbits](https://lnbits.com) is using LNDhub interface and is an accounting system on top of your LN node. That means, it will use lndhub accounts instead of wallets to manage users balances and payments. But will use your node liquidity, in their limits.

Keep in mind that lndhub interfaces will not provide any on-chain bitcoin address, only Lightning use.

1. In your your LNbits instance, go to LNDhub extension and select the wallet you want to connect in Zeus (if you have many).
2. You could use two types of accounts: "invoice only" (only receive) or "admin" (send/receive).
3. Open Zeus app and go to **Settings -> Connect a node -> +**.
4. Click on **Node interface** and select **LNDHUB**.
5. Scroll down and press **SCAN LNDHUB QR**. 
6. Scan the lndhub QR code from your LNbits lndhub extension, **admin mode** (if you want full access) or **invoice mode** (if you want restricted access, only to receive).
7. Disable **Certificate Verification**.
8. Enable **Use Tor** if your LNbits is running behind Tor.
9. Click on **SAVE NODE CONFIG**. It will popup an alert about certificate validation, just click "I understand".
10. You can now use your LNbits account as a LN wallet with Zeus.

### Connect LNTipBot account**

[LNtipBot](https://t.me/LightningTipBot) is using LNDhub interface for accounts and is a custodial service bot for Telegram.

Keep in mind that lndhub interfaces will not provide any on-chain bitcoin address, only Lightning use.

1. In your Telegram chat with @LightningTipBot, type /link to get your lndhub QR code.
2. Open Zeus app and go to **Settings -> Connect a node -> +**.
3. Click on **Node interface** and select **LNDHUB**.
4. Scroll down and press **SCAN LNDHUB QR**.
5. Scan the lndhub QR code.
6. Disable **Certificate Verification**.
7. Enable **Use Tor** if you would like (but not recommended)
8. Click on **SAVE NODE CONFIG**. It will popup an alert about certificate validation, just click "I understand".
9. You can now use your LNtipBot accountwallet with Zeus, as any other LN wallet.
