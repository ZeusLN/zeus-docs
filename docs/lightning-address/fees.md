---

---

# ZEUS Pay Fees

Our self-custodial lightning address incurs the following fees:

| Amount sent to you                         | Fee           |
| -----------------------------------------  | ------------- |
| <= 20 sats                                 | 10%           |
| <= 100 sats                                | 5%            |
| > 100 sats                                 | 2.5%          |

# Why so much?

You're paying not only for us to host the infrastructure and process payments, but to hold the payments up to 24 hours; there's a real cost to keeping those sats in transit and using an HTLC slot on our channel.

Learn about [how Zaplocker payments work](https://github.com/supertestnet/zaplocker#how-it-works).

# More details about Zeus fees

When people send sats to your ZeusPay lightning address, that 2.5% fee applies.

If you make an invoice and let them pay the invoice, the 2.5% fee does NOT apply, the payer pay the fees. Same with payments you do, no 2.5% fee.

It is receiving via your ZeusPay lightning address only.

Zeus doesn't receive only through a LN address and only through a single channel.

You can make LN invoices and receive through multiple channels with many different routing fees. Learn more about channel fees [here](https://docs.lightning.engineering/lightning-network-tools/lnd/channel-fees).
