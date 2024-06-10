---

---

# ZEUS Pay Fees

Our self-custodial lightning address incurs the following fees:

| Amount sent to you                         | Fee           |
| -----------------------------------------  | ------------- |
| <= 20 sats                                 | 50%           |
| <= 2500 sats                               | 10%           |
| > 2500 sats                                | 250 sats      |

# Why so much?

You're paying not only for us to host the infrastructure and process payments, but to hold the payments up to 24 hours; there's a real cost to keeping those sats in transit and using an HTLC slot on our channel.

Learn about [how Zaplocker payments work](https://github.com/supertestnet/zaplocker#how-it-works).