---
---

# FAQ

Frequently asked questions

## I'm having problems making a payment / I can't find a route

The LDK Node wallet learns about the lightning network graph using Rapid Gossip Sync (RGS), which downloads a compressed gossip snapshot from a server instead of syncing the graph from peers. This normally finishes within seconds of the app starting. You can go to `Menu` > `Network Info` at any point to see how much of the lightning network your node knows about.

If your node's view of the network looks sparse, or routes aren't being found, go to `Menu` > `Settings` > `Embedded Node` > `Troubleshooting` and press `Reset and resync network graph`. This clears the graph and re-downloads the full snapshot, then reports the channel and node counts it ended up with.

If you still can't complete a payment, you may need to bump up your max payment fee. You can see this tucked away under 'Advanced settings' on the payment request view or under `Menu` > `Settings` > `Payments`.

## Why can I send less than my Lightning balance?

Your Lightning balance on the Home screen and your **sending capacity (outbound)** represent different things. The balance includes funds on your side of your channels, while sending capacity accounts for channel reserves and whether your channels are active.

A **channel reserve** is an amount you must keep on your side of a channel rather than spend through Lightning. It is still part of your balance, not a fee that has been charged or funds that have disappeared. Funds in offline channels also cannot be sent until those channels are active again.

For example, your Home screen might show **12,291 sats**, but your sending capacity might be **11,243 sats**. A **12,000-sat** payment exceeds that capacity even though it is less than your balance. Check the **Outbound** amount in Channels and the **Local Reserve** in each channel's details. See [Channel Balance](../../using-zeus/channels.md#channel-balance) for an explanation of these amounts.

If your version of ZEUS shows **Available to send** on the Lightning row in **Select payment method**, that amount is your sending capacity, not your full Lightning balance. The Home screen balance is unchanged.

Sending capacity is **before routing fees**, so leave room for the payment amount plus its fees. A payment below your sending capacity can still fail if there is no suitable route, not enough liquidity along the route, or other channel constraints. Increasing your maximum routing fee does not unlock your channel reserve.

## I'm having issues restoring my wallet

Read our documentation on [Backup and Recovery](./backup-and-recovery.md#restoring-a-wallet).

Two things are worth double checking if a restore doesn't produce what you expect. First, select the correct seed phrase length — ZEUS asks whether your backup is 12 or 24 words before you enter it, and the wrong choice will derive a different wallet. Second, restore against the same VSS server the wallet was using, which you can select in the same flow. Your lightning channel state lives on VSS, so pointing at a different server means there is no channel data to recover.

## Can I move on-chain funds to lightning or vice versa?

Yes, and you have two options.

The easiest is a **swap**, which moves funds between on-chain and lightning without opening or closing a channel. Go to `Menu` > `Swaps`. A **submarine swap** moves on-chain funds to lightning, and a **reverse swap** moves lightning funds on-chain. Swaps are performed without custody or counterparty risk.

The first time you use the service, ZEUS will have you create or import a 12 word **rescue key**. Back it up. It is what lets you recover funds from a swap that doesn't complete if you lose access to your device. Note that this is separate from your wallet's seed phrase. Your swap history, along with refunds for swaps that didn't go through, lives under `Menu` > `Swaps`.

Swaps carry a service fee and an on-chain network fee, both shown before you confirm, and the provider sets a minimum and maximum swap amount. See our [Swaps](../../../swaps/intro.md) documentation for more, including our [swaps web portal](https://swaps.zeuslsp.com).

Alternatively, you can move on-chain funds to lightning by opening up a channel, and move lightning funds on-chain by closing a channel. This makes sense when you want the liquidity to persist as a channel rather than just moving a one-off amount.

## How are backups handled?

On-chain funds: You are presented with a 12 word seed phrase that you can back up at any time under `Menu` > `Back up wallet`.

LN funds: Your channel state is continuously backed up to a Versioned Storage Service (VSS) server. Every state change is written remotely as it happens and is encrypted on your device first, using keys derived from your seed phrase. There is nothing to back up manually and no snapshot files to export — but it also means your seed phrase alone will only recover your on-chain funds. You can point ZEUS at your own VSS server under `Menu` > `Settings` > `Embedded Node` > `VSS Server`.

Because VSS holds your live channel state, you also **cannot** run the same LDK Node wallet on two devices at once. Doing so risks force closures and loss of funds.

Learn more on our [Backup and Recovery](./backup-and-recovery.md) page.

## How does ZEUS sync on-chain data with the LDK Node wallet?

The LDK Node wallet syncs on-chain data from an Esplora server rather than using Neutrino block filters. This is what makes it sync in seconds rather than minutes, but it means the Esplora server sees the addresses your wallet asks about.

If you'd rather not share that with a third party, you can run your own Esplora instance and point ZEUS at it under `Menu` > `Settings` > `Embedded Node` > `Esplora Server`. If you want the privacy properties of block filters without running your own server, use an Embedded LND wallet instead. See our [Privacy](../privacy.md) page and the [Embedded LND vs LDK Node comparison](../comparison.md).

## How do I open up a channel to the LDK Node wallet? The hostname isn't shown.

Your node lives on your phone and is usually offline, so it doesn't make sense to expose a URI or node address on the lightning network for others to connect to. Instead, you must initiate the peer connection yourself from ZEUS.

Go to the Channels view by hitting the icon in the bottom right corner of the main view, then press the plus icon (+) in the top right corner. From the `Connect Peer` tab, set the Peer field to `Custom`, enter the remote node's pubkey and host, and press `Connect Peer`. Once the peer connection is established, you can open the channel from the remote node.

Note that LDK Node wallets support unannounced (private) channels only when opening channels with nodes other than an LSP.

## I've previously installed ZEUS, and now I can't install the Android package from your website / GitHub. What's going on?

Many Android systems do not allow you to install app upgrades from sources that aren't where you initially downloaded and installed it from. Unfortunately, you'll have to uninstall and reinstall the new version. Be aware, this will clear out your settings so make sure you have backups of your seeds and/or connection strings.

## Help! My wallet balance has disappeared!

### What's happened?

#### If it's on-chain funds that have gone missing

Your wallet may be out of sync with the Esplora server it uses for on-chain data, or that server may be unreachable or rate limiting you.

#### If it's lightning funds that have gone missing

It is possible that your lightning channel has been closed. You will receive the funds on-chain once the channel has been closed.

### What should I do?

#### If it's on-chain funds that have gone missing

First, force a resync by going to `Menu` > `Settings` > `Embedded Node` > `Troubleshooting` and pressing `Sync wallets`. This re-checks both your on-chain and lightning wallets against Esplora.

If that doesn't correct the balance, try a different Esplora server under `Menu` > `Settings` > `Embedded Node` > `Esplora Server` and sync again. You can follow along with what your node is doing under `Menu` > `Settings` > `Embedded Node` > `LDK Node Logs`.

As a last resort, you can always pull your on-chain wallet into the [Sparrow](https://sparrowwallet.com/) desktop wallet, [using these instructions](./backup-and-recovery.md#recovering-on-chain-funds-into-other-wallets).

#### If it's lightning funds that have gone missing

Go to the Channels view by hitting the icon in the bottom right corner of the main view. Use the tabs at the bottom to switch between Open, Pending, and Closed channels. Mutually closed channels should return to your on-chain balance once they settle on-chain. Force closed channels can take up to two weeks to return to your on-chain wallet. These channels will appear in the Pending channels list until settled.

## My channels are showing as offline. How can I get them to show as active again?

Channels show as offline when your node hasn't re-established a connection to the channel peer. This is normal for a wallet that only runs while the app is open, and usually resolves on its own shortly after ZEUS starts. Try the following steps one at a time, checking whether the issue is resolved before moving on to the next.

1.  Pull down on the channels list to refresh it, and leave the app open in the foreground for a minute or two so the node has a chance to reconnect.

2.  Go to `Menu` > `Settings` > `Embedded Node` > `Troubleshooting` and press `Sync wallets`.

3.  Restart the app.

4.  On Android, you can keep the node running when the app is closed by enabling `Persistent LDK Node` under `Menu` > `Settings` > `Embedded Node`. Channels are far more likely to be online and payable when you return to the app.

If channels remain offline, check `Menu` > `Settings` > `Embedded Node` > `LDK Node Logs` for connection errors and reach out to us with what you find.

## I'm having issues syncing. Sync is either stuck or won't start. What can I do?

Sync issues with the LDK Node wallet are almost always down to the Esplora server. Go to `Menu` > `Settings` > `Embedded Node` > `Esplora Server` and try a different server, then force a resync under `Menu` > `Settings` > `Embedded Node` > `Troubleshooting` > `Sync wallets`.

If your node is running but pathfinding data looks wrong or incomplete, that is handled separately by Rapid Gossip Sync. Check the server configured under `Menu` > `Settings` > `Embedded Node` > `Rapid Gossip Sync`, and use `Reset and resync network graph` under Troubleshooting.

## I restored my seed phrase and my funds are still not showing up. Where are they?

On-chain funds should appear once the wallet has synced against Esplora after the restore completes. If they don't, follow the sync steps above.

Lightning funds are restored from VSS rather than through the force close process, so your channels should come back open and usable instead of having to be swept on-chain. If your channels don't appear, the most likely cause is that the restore didn't reach your channel state: confirm you restored with the correct seed phrase length and against the same VSS server the wallet was using.

In rare cases where a counterparty has force closed a channel and the funds haven't swept back to you automatically, you can run `Sweep remote closed` manually. See [Channel tools: Sweep remote closed](./backup-and-recovery.md#channel-tools-sweep-remote-closed).

For more details, visit our page on [Backup and Recovery](./backup-and-recovery.md).

## I'm having issues broadcasting on-chain transactions. They are either disappearing from my wallet or not showing up on a block explorer.

This is indicative of a sync issue, as the LDK Node wallet broadcasts transactions through its Esplora server.

Firstly, if you see the outgoing on-chain transaction under the `Activity` view you can press the `Raw transaction Hex` label and manually broadcast the TX by hitting `Broadcast to Mempool.space`. This will send the transaction directly to a popular block explorer.

To remedy the underlying issue, try a different Esplora server under `Menu` > `Settings` > `Embedded Node` > `Esplora Server`, then force a resync with `Sync wallets` under `Menu` > `Settings` > `Embedded Node` > `Troubleshooting`. You can follow along with the process under `Menu` > `Settings` > `Embedded Node` > `LDK Node Logs`.
