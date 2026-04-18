---

---

# Onboarding to Lightning

Learn about all the ways you can onboard to Lightning

## Intro

ZEUS' embedded node has many different ways to get onboarded onto Lightning with payment channels. This doc details all of the different ways and tradeoffs.

## LSPs - pay for a channel with Lightning

An LSP, or Lightning Service Provider, helps connect users to the Lightning network by opening up payment channels to their nodes. You can [learn more about LSPs here](https://docs.zeusln.app/lsp/intro).

ZEUS has its own LSP, Olympus by ZEUS, that you are connected to by default, but also allows you to use other LSPs.

### Olympus by ZEUS

By default, ZEUS will use its in-house LSP, Olympus by ZEUS. Invoices you generate will be [wrapped](https://docs.zeusln.app/lsp/wrapped-invoices) and you'll be presented with the fees associated with the service if they're paid.

If you don't have inbound liquidity, Olympus by ZEUS, will open up an instant channel to you, deduct the fee, and send you the remaining amount of the payment.

All you have to do is pay the invoice generated for you in ZEUS with another Lightning wallet, and your channel will open instantly.

[Fees](https://docs.zeusln.app/lsp/fees) for the service start at 10,000 per channel but tend to rise when the blockchain finds itself in a high fee environment.

Another benefit of paying for a channel is cheaper routing fees.

## Manual channel open - open a channel with on-chain funds

Since ZEUS also has a built-in on-chain wallet, you can also open channels using on-chain funds. Read about [how channels work in ZEUS](https://docs.zeusln.app/for-users/using-zeus/channels).

### Opening a channel to Olympus by ZEUS

You can open a channel in ZEUS by going to the `Channels` view by clicking the channel icon in the bottom of the main view, and then hitting the `+` icon in the top right corner.

There is a button on the `Open Channel` view you can press to populate the required fields to open a channel to [Olympus by ZEUS](https://amboss.space/node/031b301307574bbe9b9ac7b79cbe1700e31e544513eae0b5d7497483083f99e581).

Unlike paid LSP channels, your channel will require on-chain confirmation; it will not open instantly. You will also need to make sure that the channel is unannounced. We reserve announced channels for our liquidity partners to ensure that our paid LSP users have a great payments experience.

Unlike paid LSP channels, you will not benefit from reduced routing fees.

### Opening a channel to other nodes

Since ZEUS' embedded node is a Lightning node in your pocket with full functionality, you can use it to open channels to virtually any other peer on the Lightning network (providing they accept your channel request). You may want to look for peers on [PlebNet](https://plebnet.wiki/wiki/Main_Page), [Amboss](https://amboss.space/), [LnRouter](https://lnrouter.app/), [Lightning Terminal](https://terminal.lightning.engineering/), or [1ML](https://1ml.com/).