---
title: lndhub / Alby / LNbits
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connecting lndhub accounts with ZEUS
A lndhub account is not a real LN wallet, but can be used as a LN wallet with all funcionalities of a LN wallet. Practically is an accounting system on top of a LN node, that means is a credit based account.

**Remember: the operator of the server can take your funds at any time and can surveil your activity. Not your keys, not your coins.**

LNDHub: [GitHub](https://github.com/BlueWallet/LndHub) | [Documentation](https://bluewallet.io/lndhub/)

### Connect an Alby account

Vist the [Alby guides website](https://guides.getalby.com/user-guide/v/alby-account-and-browser-extension/alby-lightning-account/connect-your-alby-lightning-account-to-other-apps/connect-to-mobile-apps/connect-to-zeus) for a full tutorial on how to connect your Alby account to ZEUS.

### Connect a LNbits account

[LNbits](https://lnbits.com) is using LNDhub interface and is an accounting system on top of your LN node. That means, it will use lndhub accounts instead of wallets to manage users balances and payments. But will use your node liquidity, in their limits.

Keep in mind that lndhub interfaces will not provide any on-chain bitcoin address, only Lightning use.

1. In your your LNbits instance, go to LNDhub extension and select the wallet you want to connect in ZEUS (if you have many).
2. You could use two types of accounts: "invoice only" (only receive) or "admin" (send/receive).
3. Display the lndhub QR code from your LNbits lndhub extension, **admin mode** (if you want full access) or **invoice mode** (if you want restricted access, only to receive).
4. Open ZEUS and go to **Settings -> Wallets -> +**, press the scan icon in the top-right corner, and scan the QR code.
5. ZEUS will pre-fill a new wallet config with **LNDHub** as the wallet interface.
6. Enable **Use Tor** if your LNbits is running behind Tor.
7. Click on **Save Wallet Config**.
8. You can now use your LNbits account as a LN wallet with ZEUS.
