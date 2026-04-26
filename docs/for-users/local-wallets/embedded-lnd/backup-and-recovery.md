---

---

# Backup and recovery

Back up and recover both lightning and on-chain funds in ZEUS.

There are a few catches, so please read this entire document before trying to restore a wallet or transfer a wallet to a new device.

## BEWARE OF SCAMMERS

### **ZEUS TEAM MEMBERS WILL NEVER ASK YOU FOR YOUR 24 WORD SEED PHRASE**. 

The internet is rife with scammers posing as official support. Do not provide it to anyone. Giving your 24 word seed phrase to others can result in theft of funds.

## Seed phrase format

The embedded node in ZEUS is based on LND and uses the <a href="https://github.com/lightningnetwork/lnd/blob/master/aezeed/README.md">aezeed</a> seed format. This is different than the typical <a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki">BIP39</a> format you see in most Bitcoin wallets, although it may appear to be similar. aezeed includes some extra data including the birth date of the wallet that will help rescans during recovery happen more efficiently.

## Backing up your seed phrase

ZEUS will prompt you to back up your funds on the Balance view once you have received your first payment, but you can back up your 24 word seed phrase at any point by going to Menu -> Back up wallet.

Tap each pane, one at a time to reveal each word in the seed phrase. You must back up each word, in order, to be able to recover your funds. Make sure you copy all 24; you may need to scroll down on the Back up wallet view to see them all if you have a phone with a lower resolution.

## Backing up your lightning state (disaster recovery data)

The seed phrase alone will be insufficient to recover all your balances if you have open or pending closing channels.

ZEUS will automatically back up your disaster recovery data to our OLYMPUS servers by default. They are encrypted using your 24 word seed phrase, so we are unable to read them.

You can also manually back up the disaster recovery data by going to Settings -> Embedded Node -> Export recovery data to clipboard. If you choose to back your data up manually, we recommend doing after every new channel open.

> Disaster recovery data lets you reclaim on-chain funds by **force-closing** your channels on recovery. If you want your channels to stay open when moving to a new device, use the [channel migration flow](#migrating-channels-to-a-new-device) instead.

## Multiple devices

You cannot use the embedded node wallet on **multiple devices simultaneously**. If you want to move to a new device, see [Migrating channels to a new device](#migrating-channels-to-a-new-device).

## Migrating channels to a new device

The seed phrase plus the automatic disaster recovery data above is enough to reclaim on-chain funds, but restoring that way will **force-close** every existing channel. Force closes are more expensive and you will have to wait out the CSV timelock (up to two weeks) before you can sweep your funds.

If you want to move your embedded LND wallet to a new device while keeping your channels **live**, ZEUS provides a channel migration flow. It takes a full snapshot of your channel state, transfers it to the new device and brings the wallet back up from that snapshot so your channels stay open and usable.

**This flow is only available for wallets using the embedded node (LND).**

### Before you start

- Once the export finishes successfully the wallet is put into a **locked state** on the source device, most tools and normal wallet actions are disabled there so you cannot accidentally diverge from the snapshot you just took. Treat the exported backup as the single source of truth and **stop using the old device**.
- OLYMPUS uploads are encrypted with your 24 word seed phrase, so nobody, not even the ZEUS team, can read your backup data. The local file option is not encrypted, so store it somewhere safe.
- The OLYMPUS upload option is available for wallets running on the **SQLite** database. Wallets on the **bolt** database can export a local file only.

### Exporting the backup

There are two entry points for the export:

<div style={{display: 'flex', gap: '20px', marginBottom: '24px'}}>
  <img src="/img/Backup_Entrypoint1.png" alt="Backup entry point from Tools" width="250" />
  <img src="/img/Backup_Entrypoint2.png" alt="Backup entry point from Seed backup" width="250" />
</div>

- **Menu → Tools → Export channel backup** (visible only when the wallet has any channels: open, pending or closed).
- The **Seed backup** screen. After revealing all 24 words, if the wallet has any channels (open, pending or closed) ZEUS will prompt you to export the channel backup before finishing.

When you start the export, ZEUS will ask you to choose between two destinations. The **OLYMPUS** option is only available for SQLite database wallets; bolt database wallets can only export a local file.

<div style={{display: 'flex', gap: '20px', marginBottom: '24px'}}>
  <img src="/img/Backup_sqlitedb.png" alt="Export options for SQLite wallet" width="250" />
  <img src="/img/Backup_boltdb.png" alt="Export options for bolt wallet" width="250" />
</div>

- **OLYMPUS**: the backup is encrypted with your seed phrase and uploaded to the ZEUS backup service. If a previous backup already exists for this wallet, ZEUS will show you its timestamp and ask you to confirm the replacement before uploading.
- **Local file**: the backup is saved to your device. On Android it lands in the `Downloads` folder; on iOS the share sheet opens so you can save it to Files, AirDrop it, send it to iCloud, etc.


ZEUS shows a progress modal while the backup is being prepared. Once it finishes you will see a success alert with a **Restart** button. Tap it to restart the app; after the restart the wallet is in the locked state and the node no longer runs, so **do not try to use the old wallet any further**, any new activity would not be included in the backup you just took.

<img src="/img/lockedwallet.png" alt="Wallet in locked state after export" width="250" />

### Importing on the new device

On the new device, go through the normal [Restore wallet](#restoring-a-wallet) flow described below. When you enter your seed phrase ZEUS will ask how you want to restore channel state and give you three options:

<img src="/img/restorewallet.png" alt="Channel restore options during wallet recovery" width="250" style={{marginBottom: '24px'}} />

- **Check OLYMPUS**: fetches the latest uploaded backup for your seed phrase. If none is found, ZEUS will let you know and you can proceed with the 'Continue without backup' option.
- **Import file**: opens the file picker so you can select the backup file you exported earlier.
- **Continue without backup**: skips the channel migration and falls back to a plain seed restore. This will force-close any channels, so only pick this if you have lost the backup.

Leave the app in the foreground until the restore finishes.

## Preparing to restore a wallet

There are two different ways to recover an embedded LND wallet, and the outcome depends on which one applies to you:

- **Channel migration backup** (recommended if you planned the move ahead of time): if you exported a channel backup from the old device, the new device will pick up where the old one left off and your channels stay **live**. See [Migrating channels to a new device](#migrating-channels-to-a-new-device) above.
- **Disaster recovery (SCB) only**: if all you have is the seed phrase and the automatic disaster recovery data, restoring will trigger a **force close** of every existing channel to recover the on-chain funds. Force closes are more expensive than mutual closes and you will have to wait out the timelock (up to two weeks) before you can sweep. If possible, close your channels on the old device first, or export a channel migration backup instead.

## Restoring a wallet

Once you're ready to recover, go to the Settings menu in ZEUS. It is accessible from the top left corner on the main view (typically an icon of Zeus) if you have a wallet configured already, or by pressing 'Advanced set-up' on the splash screen of a new install.

From there you can add a new node by pressing the top field (it will either say 'No Wallets', or the name of your active connection), and then hitting the plus (+) icon in the top right corner.

From there, enter your 24 word seed phrase in the field labeled 'Recovery Cipher Seed (aezeed)'. You can optionally provide a static backup string in the field labeled 'Disaster recovery data (SCB, Base64)'. If you plan to use the OLYMPUS or Import file option in the next step, you can leave this field blank.

Then press 'Restore mainnet wallet' if you're dealing with real funds or 'Restore testnet wallet' if you're using Bitcoin's test network.

Before the wallet is created, ZEUS will ask you how to restore your channels and show the three options described in [Importing on the new device](#importing-on-the-new-device). Pick the one that matches how you saved the backup on the old device, or choose _Continue without backup_ to fall back to an SCB-only restore.

Please leave ZEUS running the first time you restore the seed. It has to go through the recovery process to restore your balance. It is not uncommon for this to take over 10 minutes, especially if you have a heavily used wallet. You may want to temporarily turn off any screen timeouts and energy saving options in your phone's settings, so that ZEUS doesn't go into the background and pause LND during the process.

## Having issues recovering a wallet?

You must leave ZEUS running the first time you restore the seed. It has to go through the recovery process to restore your balance. It is not uncommon for this to take 10 minutes, especially if you have a heavily used wallet. It is advised to reinstall ZEUS and reinitialize the wallet with your seed if you closed it or restarted it before seeing your full balance.

Alternatively, if you want a more manual approach, you may be able to spam the create on-chain address function to get all your addresses indexed in LND's DB and restore your balances. You will likely have to generate both Taproot and SegWit addresses for this approach to work. Since new addreses are generated every time you create an invoice, you may have to generate several hundred addresses of each type.

Then, after your addresess have been generated and indexed, use the 'Rescan' functionality under the Embedded Node settings.

## Have bigger issues?

It is worth reading Lightning Labs' documentation on <a href="https://docs.lightning.engineering/lightning-network-tools/lnd/disaster-recovery">recovering funds from LND</a> in case of a catastrophic failure.

In complicated scenarios, <a href="https://github.com/lightninglabs/chantools">chantools</a> can prove to be a valuable tool.

Remember, funds are recoverable in **most** cases. It's best to proceed calmly, and not try things blindly as some actions can make the situation worse.

## Can I recover my ZEUS onchain wallet into other wallet applications?

The aezeed key format **should** be compatible with the following wallets: Blixt, Blue Wallet and Breez. Note that the seed alone will be insufficient to recover all your balances if you have open or pending closing channels. But only for restoring the onchain wallet funds is enough.

Another option is to use [Sparrow Wallet](https://sparrowwallet.com/) (desktop), but are necessary some preparation steps. This method is also useful in case you want to extract the XPUB for your ZEUS LND node and you want to use it as watch only (deposit-only) in another app. Sparrow will display it in the wallet details.

### Step 1. Get the HD Keys from your ZEUS wallet

To import the ZEUS on-chain ypriv / zpriv keys into Sparrow Wallet you have 2 options:

PLEASE DO NOT SHARE THESE KEYS, THESE ARE FULL ACCESS TO YOUR NODE WALLET, KEEP THEM SAFE.

**OPTION A** - directly from the ZEUS UI, go to Backup wallet - and click on the QR on top right corner. It will take few moments to extract the ypriv/zpriv and will display it in full text format and QR code. Now you can import it into Sparrow and have full access to your onchain wallet. In Sparrow keep in mind to switch between segwit P2WPKH "bc1q" (<a href="https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki">BIP84</a>) and taproot addresses P2TR "bc1p" (<a href="https://github.com/bitcoin/bips/blob/master/bip-0086.mediawiki">BIP86</a>), depending which format you used previously in ZEUS.

**OPTION B** - Using Cryptography Toolkit by Guggero (LND dev):

- Go to <a href="https://guggero.github.io/cryptography-toolkit/#!/aezeed">Cryptography Toolkit</a> and download the HTML file onto your computer.
- Open that HTML file in "offline mode" (no internet) and select "aezeed Cipher Seed Scheme" from Tools. Then go to the 2nd tab "Decode Mnemonic".
- Paste your 24 words into the "Mnemonic" field.

![zeus-channels](../../../../static/img/zeus-decode-toolkit.png)

- Select format BIP84 native segwit and wait a bit to be decoded.
- Copy the zprv displayed into the field "HD node root base 58"

### Step 2. Restore the HD Keys in the Sparrow desktop wallet

- Open (already downloaded) Sparrow wallet app and select "New Wallet"
- In the "Keystores" select "New or Imported Software Wallet"
- In the next window that will open, select "Master Private Key BIP32" and paste that "zprv" key you get it from the cryptography tool and click "Import". It will show you that is a m/84'/0'/0 derivation path. That will import only the segwit P2WPKH type of addresses. But if you used Taproot P2TR addresses, then you should change it into "m/86'/0'/0".
- Click on "Import Keystore" and it will go back to main window of the wallet app where you can see all the wallet config. Click on "Apply" and will prompt you to set a password to encrypt your local wallet file.
- If you used both types of addresses in ZEUS, we suggest to import them as two wallets in Sparrow, using the same "xprv" key but each one with a different derivation path. In this way you can avoid confusions.
- You can also change between segwit and taproot an already imported wallet, by going to wallet Settings and switch the "Scrypt Type" (segwit P2WPKH or taproot P2TR) and then re-import the BIP32 xprv keys to make the switch.

![zeus-channels](../../../../static/img/zeus-sparrow-taproot.png)

- Sparrow app will start scanning all your keys and txs and it will be displayed after a while in the "Transactions" tab. Patience, it will take some time.
- For a faster, secure and private connection is better to connect your Sparrow wallet app to your node (via Electrum server or directly to a Bitcoin Core RPC)

And done, now you can manage your ZEUS LND onchain wallet from Sparrow.

## chantools: sweepremoteclosed

chantools is a <a href="https://github.com/lightninglabs/chantools">CLI tool</a> for recovering funds from Lightning channel when a user has unfortunately lost their channel state data.

In ZEUS v0.10, we've built in the sometimes needed sweepremoteclosed command, which we've found to be invaluable when users have sync issues or have lost their channel backups.

### Steps

- 1. Go to `Menu` > `Settings` > `Embedded Node` > `Advanced` > `chantools` > `sweepremoteclosed`

- 2. In the field called `Sweep address`, input an on-chain address to receive your funds to, then hit `Start Sweep`. It should take about 5-10 minutes to run.

- 3. If successful you'll reach a page labeled TXHex with a QR code. Simply scroll to the bottom and hit `Broadcast TX` to complete the recovery

If you hit error "found 0 sweep targets with total value of 0 satoshis which is below the dust limit of 600", simply try again with `Advanced settings`: `Recovery window` increased. Try 1000, 2500, 5000 if necessary.

If you hit any issues about unexpected characters, you are hitting a rate limit from one of the block explorer settings. Under Advanced settings, set 'Seconds to wait between queries' to 1 and try again. Please be patient as the process will now take a bit longer.

## Ecash

As of ZEUS v13, your selected ecash mints are encrypted and backed up to Nostr. Upon restoring from seed, your mints and ecash balances should be restored automatically.

The backup is encrypted using <a href="https://nips.nostr.com/44">NIP-44</a> and the ecash token backup format follows <a href="https://cashubtc.github.io/nuts/27/">NUT-27</a>. This format is compatible with <a href="https://wallet.cashu.me/">Cashu.me</a>, so you can also recover your ecash there if needed.
