---
title: Introduction
---

# Overview ZEUS embedded node

### What is ZEUS "embedded node" ?

[Starting with v.0.8.0](https://blog.zeusln.com/new-release-zeus-v0-8-0/) Zeus introduced a new way to run a node directly into your mobile device, without the need to connect to a remote node (at home or a VPS / cloud one).

This embedded ndoe is a full LND node that is using Neutrino protocol to sync the blocks necessary to operate the LND node. This is a very important aspect that new users should pay attention to it. Without a proper sync, your embedded node will not function properly. In the [FAQ page](https://docs.zeusln.app/for-users/embedded-node/faq) we have described all sorts of situations and steps to do, in order to debug and fix possible issues regarding this sync procedure. As a new Zeus user it is important to know and learn these aspects if you want to have a smooth usage of your node in the phone.

Beside the embedded node you can also run one or multiple remote nodes or additional lndhub and NWC accounts. Starting with [Zeus v.0.10.0](https://blog.zeusln.com/new-release-zeus-v0-10-0/) you can even run multiple embedded nodes (but NOT on the same time). You can switch between any of these nodes and connections very easily from the top right icon.

insert zeus-node-phone-meme.jpg

### Main features of the Zeus embedded node

1. **Private LND node** - That means this node will NOT do public routing of others payments through your node. The node and the channels are unannounced (private, not visible on the public LN graph). To receive and make payments will be done thorough your connected LSP peers. REMEMBER: Zeus Embedded Node will NOT do public routing!
2. **Persistent LND service** - user can activate this feature and keep the LND service active continuously as any regular LN node. The app doesn’t have to be open, the persistent service will keep all the communication online. This is a very helpful feature in case you are running Zeus embedded node on a tablet with Zeus PoS, for a small shop. So you will have an "always online" LN node, ready to take payments.
3. **Neutrino block filters** - block sync is done using block filters and the Neutrino protocol (given no information about our users on-chain funds). Reminder: for high-latency / slow internet connections this block sync based on neutrino, sometimes could fail. Trying to switch to a near neutrino server could help restore the sync. Without this sync your LND node could not start!
4. **Simple Taproot Channels** - When closing these channels, users are incur less fees and are given more privacy as they appear to like any other Taproot spend when examining their on-chain footprint.
5. **Integrated LSP** - Olympus is the new LSP node for Zeus. Users can receive sats over LN straight away, without having previously set up LN channels. Simply will have to create a LN invoice and pay from any other LN wallet, with Zeus 0-conf channel service. Read more about Zeus LSP here. The LSP also provides added privacy to our users by providing them with wrapped invoices that conceal their nodes public keys from payers.

**NOTE**: LSP = Liquidity Service Provider, [read more here](https://docs.zeusln.app/lsp/intro).
6. **Channels Management** - apart from [easy onboarding on Lightning](https://docs.zeusln.app/for-users/embedded-node/lightning-onboarding) you can open various LN channels with any other LN node you want. But keep in mind - this embedded node it meant to be a "private" node with unannounced channels. You can open channels with funds from your Zeus onchain wallet or with any other LSP by buying [JiT (just-in-time) channels](https://docs.zeusln.app/lsp/services/flow).

**NOTE**: just for a personal mobile node like Zeus embedded is not really necessary to have open too many LN channels. One channel with [Olympus LSP](https://docs.zeusln.app/for-users/embedded-node/lightning-onboarding) plus 2-3 more with other good LSPs will be more than enough. You can see more "vouched" peers for your Zeus node [here](https://docs.zeusln.app/for-users/embedded-node/lightning-onboarding). Size wisely your channels, do not open too small channels, like 50-100k sats, but enough big to cover your regular payments.
7. **Contacts Book** - you can save manually contacts or import from NOSTR, for easy send payments to your regular destinations.
8. **Full support for LNURL, LN Address send and receive** - now you can setup your own self-custodial LN Address with @zeuspay.com. Reminder: You can also use Zeus for LN-auth on sites where you can login with a LN authentication. Is very handy.
9. **Point of Sale** - Now merchant users can setup their own product items and sell directly from Zeus, with integrated PoS. For the moment contain basic needs but in the future will contain extended features.
10. **LND logs** - user can read in real time the LND service logs and use them to debug possible issues (mainly for bad connections)
11. **Chantools Sweep** - advanced command used to recover funds from closed channels. [More details here](https://docs.zeusln.app/for-users/embedded-node/backup-and-recovery#chantools-sweepremoteclosed).
12. **Developer Tools** - advanced CLI commands that can be run directly in your embedded node to debug, test, obtain more information from your LND node.
13. **Speed-up transaction** - in case you were opening / closing a channel or doing a simple onchain TX and the mempool fees were spiking up, you have the option to increase the fee for your tx with this easy integrated tool.
14. **Automated Backups** - the LN node channels are automatically back up on the Olympus server. This automated backup is encrypted with your node wallet seed (without the seed is totally useless). User also can export manually a SCB (static channels backup) for a disaster recovery.

**NOTE**: In the `Backup` section you could also export your Zeus embedded node xpriv/zpriv. For what is this useful? In case you want to restore your Zeus onchain wallet into Sparrow wallet, in case of disaster (your phone was robbed or broken) or you want to extract the xpub keys for using it as an "watch-only wallet. This is a very useful good feature for advanced users.

### Additional guides

If you want to know more about how to run Zeus embedded node and its advanced features, here are some community guides:
- [Getting started with Zeus Mobile Node](https://darth-coin.github.io/wallets/getting-started-zeus-wallet-en.html)
- [Advanced use case for Zeus Mobile Node](https://darth-coin.github.io/wallets/zeus-node-advanced-usage-en.html)