---
title: NWC - Nostr Wallet Connect
---

# Connecting NWC sub-accounts from a node with ZEUS
Nostr Wallet Connect (NWC) is an open protocol to connect lightning wallets to apps.

NWC describes a way for client apps to access a remote bitcoin lightning wallet through a standardized protocol. Wallets and apps want to implement this to allow users to seamlessly connect their own wallet accounts for native payments in apps. [Read more details about NWC here](https://nwc.dev/).

insert nwc-protocol.png

Now you can connect various NWC accounts from your own LN node (Alby Hub, LNbits) or custodial ones like: CoinOS.io, Cashu.me, LNwallet.app, Rizful.com etc

### Connect a NWC account

Keep in mind that NWC accounts will not provide any on-chain bitcoin address, only Lightning use.

1. Obtain from your account provider the NWC connection string. They should provide 2 types of strings: receive-only and send-receive (full access).
2. The string will be in this format: `nostr+walletconnect://ba7299......?relay=wss//relay.domain.com&secret=vrt1F.....=user@domain.com`
3. Open ZEUS app and click to top right icon or `-> Wallets -> click on top right +`
4. Click on `Wallet interface` and select `Nostr Wallet Connect`
5. In the next field `Nostr Wallet Connect URL` paste the NWC string you obtained from your account provider. 
6. Put an alias name for your NWC account and optional you can add a nice avatar image.
7. Click on `SAVE WALLET CONFIG` and is all done.
8. You can add multiple NWC accounts and switch between them on-the-fly.