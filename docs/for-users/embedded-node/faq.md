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

## Does ZEUS Pay work if you use another LSP or if you have your own channels set up?

Yes, but for best results, a 0-conf channel from OLYMPUS will work best because then you'll have a direct routing path from the service to your node.

There's a fixed routing budget and it can be tricky trying to redeem small amounts if OLYMPUS cannot find a cheap enough route to you.

## How do I open up a channel to the embedded node? The hostname isn't shown.

Please read our document on how to [Open a channel to the embedded LND node](https://docs.zeusln.app/for-users/embedded-node/open-channel-to-embedded-node).

## Simple Taproot Channels sound great. Is there any reason to not use them?

Simple Taproot Channels offer up better on-chain privacy and lower fees on channel closing. There are only two reasons you wouldn't want to use them:

1. They are new, and there still may be bugs in LND when using them.
2. Your counterparty doesn't support them. Even LND nodes have to explicitly opt into them, for now.

## Why do I have to enter in my Nostr nsec key when setting up a ZEUS PAY account?

You don't **have** to use your own Nostr key, but it does allow you, and people paying you, to reap the benefits of [Zaplocker attestation scheme](https://github.com/supertestnet/zaplocker#four-problems-zaplocker-solves).

The key will be used to sign:

- All of the hashes sent to the ZEUS PAY service
- The list of relays you provide to the service

When the sender attempts to pay you from a Zaplocker compatible wallet, like ZEUS, they will be able to the see if the payment request they are being served up is attached to the associated Nostr profile.

![ 500](../../../static/img/zaplocker-verification.png)

Once paid, the sender will then use the relay list to broadcast the attestation. You'll be able to check it in ZEUS by clicking the Nostrich icon next to your payments.

Lastly, you can also opt to receive your ZEUS PAY notifications via Nostr DM, instead of push notifications. They will be sent to the Nostr account of the nsec you profile.

The nsec will never leave your ZEUS wallet.

## I've previously installed ZEUS, and now I can't install the Android package from your website / GitHub. What's going on?

Many Android systems do not allow you to install app upgrades from sources that aren't where you initially downloaded and installed it from. Unfortunately, you'll have to uninstall and reinstall the new version. Be aware, this will clear out your settings so make sure you have backups of your seeds and/or connection strings.

## Help! My wallet balance has disappeared!

### What's happened?

#### If it's on-chain funds that have gone missing

ZEUS uses Neutrino block filters to fetch on-chain information in private manner. Sometimes your wallet can get out of sync with the default Neutrino peers.

#### If it's lightning funds that have gone missing

It is possible that your lightning channel has been closed. You will receive the funds on-chain once the channel has been closed.


### What should I do?

#### If it's on-chain funds that have gone missing

First, you should try doing a rescan by going to `Settings` -> `Embedded node` -> `Rescan` and restarting the app. Please leave the app running in the foreground for up to 15 minutes to complete the process. During the rescan process you will not be able to full use the app - for example, you will not be able to generate invoices. You can follow the rescan process by following the LND logs at `Settings` -> `Embedded node` -> `LND Logs`.

If rescan fails to correct the balance, you'll likely have to add some more Neutrino peers, especially if the LND logs display messages about peer connection timeouts.

To add more Neutrino peers got to `Settings` -> `Embedded node` -> `Peers` -> `Neutrino Peers`. Then uncheck `Connect only to the specified peers`, restart the app, and try another rescan. This will allow your ZEUS wallet node to find new peers to connect to automatically.

If you have your own remote node, you may also want manually add it in the Peers list. You can [use this guide to enabled 'Neutrino mode' in Bitcoin Core](https://docs.lightning.engineering/lightning-network-tools/lnd/enable-neutrino-mode-in-bitcoin-core). BTCD has Neutrino on by default.

#### If it's lightning funds that have gone missing

Go to the Channels view by hitting the icon in the bottom right corner of the main view then, hit the header at the top of the Channels view to toggle between open, pending, and closed channels. Mutually closed channels should return to your on-chain balance once they settle on-chain. Force closed channels can take up to two weeks to return to your on-chain wallet. These channels will appear in the pending channels list until settled.

## I'm having payments sending lightning payments with ZEUS

First, go to `Settings` > `Network Info` and make sure there are no zombie channels. Zombie channels are channels that are most likely dead but are still around, but with the embedded node sometimes we get false positives.

If you have zombie channels, go to `Settings` -> `Embedded node` -> `Express Graph Sync` and enable the second toggle labeled `Reset express graph sync on startup`, then restart. Be sure to go back to `Settings` > `Network Info` and ensure your zombie channel count is now zero.

If you don't have zombie channels and are still having issues sending lightning payments, go to `Settings` -> `Embedded node` -> `Advanced` -> `Pathfinding` and press the button labeled `Reset payment routing profile`.

## My channels are showing as offline. How can I get them to show as active again?

This typically happens when either the blockchain headers or lightning network graph is out of sync, or the RPC server is having issues starting up. Here are some steps you can try to remedy the situation:

 1. You can pull down on the channels list to refresh it. If channels still show as offline, leave app running 10 minutes or so. Sometimes the RPC server just needs time to start up.

 2. Go to `Settings` -> `Embedded node` -> `Advanced` and press the button labeled `Stop LND and Delete Neutrino files`, then restart the app. This will resync your blockchain data.

 3. Go to `Settings` -> `Embedded node` -> `Express Graph Sync` and enable the second toggle labeled `Reset express graph sync on startup`, then restart the app. This will resync your lightning network graph data.

 4. Restarting the app to jostle the state and get it online again.