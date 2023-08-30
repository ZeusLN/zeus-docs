---

---

# What's an LSP?

A LSP, or lightning service provider, helps connect users to the Lightning network by opening up payment channels to their nodes. Read more about them [here](https://medium.com/breez-technology/envisioning-lsps-in-the-lightning-economy-832b45871992).

Zeus has a new LSP integrated into it called [OLYMPUS by ZEUS](https://amboss.space/node/031b301307574bbe9b9ac7b79cbe1700e31e544513eae0b5d7497483083f99e581), that is available to all users who use the new embedded node that is available in v0.8.

# How does it work?

The LSP uses wrapped invoices and 0-conf channels to instantly connect users to the Lightning network. All you have to do is have the sender pay the invoice Zeus shows you, but here's what happens under the hood:

- The receiver generates an invoices on their lightning node and then sends it to the LSP
- The LSP creates a wrapped invoice and returns it to the receiver
- The receiver gives the wrapped invoices to sender for them to pay
- The sender pays the invoice, which goes through the LSP
- The LSP detects the payment and opens up a 0-conf, just in time, channel to the receiver
- The LSP then forwards the payment to the receiver using that new channel and the payment is completed