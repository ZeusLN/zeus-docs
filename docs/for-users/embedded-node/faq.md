---

---

# FAQ

Frequently asked questions

## I'm having problems making a payment / I can't find a route

By default, ZEUS finds out information about the lightning network graph using P2P. This can take some time. To speed up the graph sync and improve your payment success probability, go to `Settings` -> `Embedded Node` -> `Express Graph Sync`. Enable it and restart ZEUS to take effect. You can go to `Settings` > `Network Info` at any point to see how much of the lightning network your node knows about.

If you still can't complete a payment after running Express Graph Sync, you may need to bump up your max payment fee. You can see this tucked away under 'Advanced settings' on the payment request view or under `Settings` -> `Payments`.

## I'm having issues restoring my wallet

Read our documentation on [Backup and Recovery](https://docs.zeusln.app/for-users/embedded-node/backup-and-recovery#restoring-a-wallet). Please be patient and leave ZEUS running for at least 10 minutes after going through the restore process.

## Can I move on-chain funds to lightning or vice versa?

You can move on-chain funds to lightning by opening up a channel and move lightning funds on-chain by closing a channel.

ZEUS currently doesn't have a swap service, but we're considering launching one in the future.

## How are backups handled?

On-chain funds: You are presented with a 24 word seed phrase that you can back up at any time.

LN funds: By default we send encrypted (with your seed phrase) backups to our server, you can also do manual backups to our server or to your clipboard under `Settings` -> `Embedded node` -> `Disaster recovery`.

Learn more on our [Backups and Recovery](https://docs.zeusln.app/for-users/embedded-node/backup-and-recovery) page.

## Where can I read more about Neutrino and the privacy that block filters provide when syncing ZEUS to the blockchain?

Here's a less technical explanation from [Bitcoin Magazine](https://bitcoinmagazine.com/technical/why-bitcoin-wallets-need-block-filters).

Here are more technical resources from [Bitcoin Optech](https://bitcoinops.org/en/topics/compact-block-filters/).

## Does ZEUS PAY work if you use another LSP or if you have your own channels set up?

Yes, but for best results, a 0-conf channel from OLYMPUS will work best because then you'll reap the benefits of the zero fee routing.

There's a fixed routing budget and it can be tricky trying to redeem small amounts if OLYMPUS cannot find a cheap enough route to you.

## How do I open up a channel to the embedded node? The hostname isn't shown.

Please read our document on how to [Open a channel to the embedded LND node](https://docs.zeusln.app/for-users/embedded-node/open-channel-to-embedded-node).

## Simple Taproot Channels sound great. Is there any reason to not use them?

Simple Taproot Channels offer up better on-chain privacy and lower fees on channel closing. There are only two reasons you wouldn't want to use them:

1. They are new, and there still may be bugs in LND when using them.
2. Your counterparty doesn't support them. Even LND nodes have to explicitly opt into them, for now.

## I've previously installed ZEUS, and now I can't install the Android package from your website / GitHub. What's going on?

Many Android systems do not allow you to install app upgrades from sources that aren't where you initially downloaded and installed it from. Unfortunately, you'll have to uninstall and reinstall the new version. Be aware, this will clear out your settings so make sure you have backups of your seeds and/or connection strings.
