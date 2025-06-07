---
---

# Cashu ecash

## Intro

In ZEUS v0.11, we've introduced experimental support for Cashu ecash. Cashu is a free and open-source Chaumian ecash protocol built for Bitcoin, with good privacy properties. Cashu is **custodial**, meaning there is risk of the underlying custodian (the mint) stealing your funds. We encourage all users to read our page on [the importance of self-custody in Bitcoin](/self-custody).

Cashu is part of our new graduated wallet system. New users are able to get set-up quickly, without having to learn out channel capacities or having to purchase a channel lease. They can have their first magical moments with Lightning, and even get a Lightning address. Then as economic self-custody becomes viable, their ZEUS app will prompt them to upgrade with a Lightning channel of their own and provide them with educational material.

Learn more about Cashu [here](https://cashu.space/).

## Activation

At present, Cashu wallets are tied to Embedded LND wallets. You can enable your Cashu wallet under `Settings` > `Ecash`. You can not use Cashu with any other wallet type, but you can still sweep funds from Cashu tokens.

## I get an error saying "outputs have already been signed before" or "Already Spent". What should I do?

This error indicates an inconsistency in the wallets database. Follow the troubleshooting steps below.

## Troubleshooting

1) Bump the wallet counter several times under `Menu` > `Tools` > `Cashu`. This will move the counter along, which is used for deterministically restoring the wallet.

2) If issues persist, remove and re-add your mint. You can access the mints list by tapping or swiping the Ecash balance row in the main balance view in the app (you can get here by hitting the temple icon at the bottom of the main view of the app, it's the first icon on the left). 

Press the info circle `(i)` to see the mint details, then press the `Remove mint` button at the bottom the screen. Before doing so, you may want to copy the Mint URL `string on the screen by doing a long press on the value.

Then on the Mints list view, hit the `+` icon in the top right corner and press `Add mint` after populating the `Mint URL` field. On the following screen, be sure to toggle `Check for existing balances` before pressing the `Add mint` button at the bottom of the screen. From here your funds will be deterministically restored (as long as the mint is still fully operational). This process might take a few minutes. Progress should be reflected at the top of this view.

3) If you continue to have issues, please [contact ZEUS support](email:support@zeusln.com) or file an issue on [our GitHub page](https://github.com/ZeusLN/zeus/issues).