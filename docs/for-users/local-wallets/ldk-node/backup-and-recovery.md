---
---

# Backup and Recovery

Back up and recover both lightning and on-chain funds in ZEUS using the LDK Node wallet.

There are a few catches, so please read this entire document before trying to restore a wallet or transfer a wallet to a new device.

## BEWARE OF SCAMMERS

### **ZEUS TEAM MEMBERS WILL NEVER ASK YOU FOR YOUR 12 WORD SEED PHRASE**.

The internet is rife with scammers posing as official support. Do not provide it to anyone. Giving your seed phrase to others can result in theft of funds.

## Seed phrase format

The LDK Node wallet in ZEUS uses the standard <a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki">BIP-39</a> seed format. This is the same format used by most Bitcoin wallets. Your 12 word seed phrase can be directly imported into other BIP-39 compatible wallets like <a href="https://sparrowwallet.com/">Sparrow</a> for on-chain fund recovery.

## Backing up your seed phrase

ZEUS will prompt you to back up your funds on the Balance view once you have received your first payment, but you can back up your 12 word seed phrase at any point by going to Menu -> Back up wallet.

Tap each pane, one at a time to reveal each word in the seed phrase. You must back up each word, in order, to be able to recover your funds.

## Lightning state backup (VSS)

Unlike traditional backup systems that take periodic snapshots, the LDK Node wallet uses <a href="https://github.com/lightningdevkit/vss-server">Versioned Storage Service (VSS)</a> to continuously back up your lightning channel state in real time.

### How VSS works

Every time your channel state changes -- when you send or receive a payment, open or close a channel -- the updated state is immediately written to a remote VSS server. This means your backup is always current, eliminating the risk of restoring from a stale backup and accidentally broadcasting an outdated channel state.

Key properties of VSS:

- **Real-time sync**: Every state change is persisted immediately, not on a schedule
- **Client-side encryption**: Your data is encrypted before it leaves your device using keys derived from your seed phrase. The server cannot read your channel data
- **Primary storage**: VSS acts as the primary store for your channel state, not a secondary backup. This ensures your device and the server are always in sync

You can read more about VSS in the <a href="https://lightningdevkit.org/blog/announcing-vss/">LDK announcement blog post</a>.

## Multiple devices

You **CANNOT** use the LDK Node wallet on multiple devices at the same time.

Running the same wallet on two devices simultaneously puts your channels at risk of force closure. If both devices attempt to update the same channel state independently, the network will see conflicting states, resulting in a force close and potential loss of funds due to penalty transactions.

Always ensure your wallet is only active on one device at a time. If you are transferring your wallet to a new device, make sure to stop using the old device first.

## Restoring a wallet

To restore your wallet, go to the Settings menu in ZEUS. It is accessible from the top left corner on the main view if you have a wallet configured already, or by pressing 'Advanced set-up' on the splash screen of a new install.

From there you can add a new node by pressing the top field (it will either say 'No Wallets', or the name of your active connection), and then hitting the plus (+) icon in the top right corner.

Enter your 12 word seed phrase and follow the prompts to restore. ZEUS will use VSS to retrieve your latest channel state automatically.

## Recovering on-chain funds into other wallets

Since the LDK Node wallet uses the standard BIP-39 seed format, you can import your 12 word seed phrase directly into any BIP-39 compatible wallet to recover your on-chain funds.

<a href="https://sparrowwallet.com/">Sparrow Wallet</a> (desktop) is a good option for this. Simply create a new wallet in Sparrow, choose "New or Imported Software Wallet", select "Mnemonic Words", and enter your 12 word seed phrase.

Note that the seed phrase alone will only recover on-chain funds. Lightning channel funds require the channel state data stored in VSS.

## Channel tools: Sweep remote closed

LDK should automatically sweep funds from force closed channels into your on-chain wallet, but in some rare cases, you may want to do it manually.

### Steps

- 1) Go to `Menu` > `Settings` > `Embedded Node` > `Channel tools` > `Sweep remote closed`

- 2) In the field called `Sweep address`, input an on-chain address to receive your funds to, then hit `Start Sweep`. It should take about 5-10 minutes to run.

- 3) If successful you'll reach a page labeled TXHex with a QR code. Simply scroll to the bottom and hit `Broadcast TX` to complete the recovery

If you hit error "found 0 sweep targets with total value of 0 satoshis which is below the dust limit of 600", simply try again with `Advanced settings`: `Recovery window` increased. Try 1000, 2500, 5000 if necessary.

If you hit any issues about unexpected characters, you are hitting a rate limit from one of the block explorer settings. Under Advanced settings, set 'Seconds to wait between queries' to 1 and try again. Please be patient as the process will now take a bit longer.

## Ecash

As of ZEUS v13, your selected ecash mints are encrypted and backed up to Nostr. Upon restoring from seed, your mints and ecash balances should be restored automatically.

The backup is encrypted using <a href="https://nips.nostr.com/44">NIP-44</a> and the ecash token backup format follows <a href="https://cashubtc.github.io/nuts/27/">NUT-27</a>. This format is compatible with <a href="https://wallet.cashu.me/">Cashu.me</a>, so you can also recover your ecash there if needed.
