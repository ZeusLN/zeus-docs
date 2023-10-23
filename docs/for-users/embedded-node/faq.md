---

---

# FAQ

Frequently asked questions

## I'm having problems making a payment / I can't find a route

By default, ZEUS finds out information about the lightning network graph using P2P. This can take some time. To speed up the graph sync and improve your payment success probability, go to `Settings` -> `Embedded Node` -> `Express Graph Sync`. Enable it and restart ZEUS to take effect. You can go to Settings > Network Info at any point to see how much of the lightning network your node knows about.

If you still can't complete a payment after running Express Graph Sync, you may need to bump up your max payment fee. You can see this tucked away under 'Advanced settings' on the payment request view or under `Settings` -> `Payments`.

## I'm having issues restoring my wallet

Read our documentation on [Backup and Recovery](https://docs.zeusln.app/for-users/embedded-node/backup-and-recovery#restoring-a-wallet). Please be patient and leave ZEUS running for at least 10 minutes after going through the restore process.

## Can I move on-chain funds to lightning or vice versa?

You can move on-chain funds to lightning by opening up a channel and move lightning funds on-chain by closing a channel.

ZEUS currently doesn't have a swap service, but we're considering launching one in the future.

## I've previously installed ZEUS, and now I can't install the Android package from your website / GitHub. What's going on?

Many Android systems do not allow you to install app upgrades from sources that aren't where you initially downloaded it from. Unfortunately, you'll have to uninstall and reinstall the new version. Be aware, this will clear out your settings so make sure you have backups of your seeds and/or connection strings.