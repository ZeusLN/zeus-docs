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

The aezeed key format **should** be compatible with the following wallets: Blixt, Blue Wallet, and Breez. Note that the seed alone will be insuffienct to recover all your balances if you have open or pending closing channels

## Backing up your seed phrase

ZEUS will prompt you to back up your funds on the Balance view once you have received your first payment, but you can back up your 24 word seed phrase at any point by going to Settings -> Back up wallet.

Tap each pane, one at a time to reveal each word in the seed phrase. You must back up each word, in order, to be able to recover your funds. Make sure you copy all 24; you may need to scroll down on the Back up wallet view to see them all if you have a phone with a lower resolution.

## Backing up your lightning state (disaster recovery data)

The seed phrase alone will be insuffienct to recover all your balances if you have open or pending closing channels.

ZEUS will automatically back up your disaster recovery data to our OLYMPUS servers by default. They are encrypted using your 24 word seed phrase, so we are unable to read them.

You can also manually back up the disaster recovery data by going to Settings -> Embedded Node -> Export recovery data to clipboard. If you choose to back your data up manual, we recommend doing after every new channel open.

## Multiple devices

You <b>CANNOT</b> currently use the embedded node wallet on multiple devices. 

## Preparing to restore a wallet

Restoring a wallet in ZEUS will trigger a force close of all your existing channels, providing that you're using our channel backup service (on by default) or if you input a static channel backup string during the restore process.

Force closes are more expensive than mutual closes. Force closes will also take longer for you to reclaim your funds: up to two weeks. If possible, it is recommended to first close out all your existing channels on your old device before restoring your seed phrase on a new device.

## Restoring a wallet

Once you're ready to recover, go to the Settings menu in ZEUS. It is accessible from the top left corner on the main view (typically an icon of Zeus) if you have a wallet configured already, or by pressing 'Advanced set-up' on the splash screen of a new install.

From there you can add a new node by pressing the top field (it will either say 'No Nodes', or the name of your active connection), and then hitting the plus (+) icon in the top right corner.

From there, enter your 24 word seed phrase in the field labeled 'Recovery Cipher Seed (aezeed)'. You can optionally provide a static backup string in the field labeled 'Disaster recovery data (SCB, Base64)'.

Then press 'Restore mainnet wallet' if you're dealing with real funds or 'Restore testnet wallet' if you're using Bitcoin's test network.

## Having issues recovering a wallet?

Please leave ZEUS running the first time you restore the seed. It has to go through the recovery process to restore your balance. It is not uncommon for this to take 15 min+.

Alternatively, if you want a more manual approach, you may be able to spam the create on-chain address function to get all your addresses indexed in LND's DB and restore your balances. You will likely have to generate both Taproot and SegWit addresses for this approach to work. Since new addreses are generated every time you create an invoice, you may have to generate several hundred addresses of each type.

Using the 'Rescan' functionality under the Embedded Node settings may also prove to be helpful, after your addresess have been generated and indexed.

## Have bigger issues?

It is worth reading Lightning Labs' documentation on <a href="https://docs.lightning.engineering/lightning-network-tools/lnd/disaster-recovery">recovering funds from LND</a> in case of a catastrophic failure.

In complicated scenarios, <a href="https://github.com/lightninglabs/chantools">chantools</a> can prove to be a valuable tool.

Remember, funds are recoverable in **most** cases. It's best to proceed calmly, and not try things blindly as some actions can make the situation worse.