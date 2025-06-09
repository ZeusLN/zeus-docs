---

---

# Zaplocker self-custodial lightning addresses

As of ZEUS v0.8.0 we are offering up a self-custodial lightning address that we're calling ZEUS Pay. This is the first ever offering of a self-custodial lightning address in a mobile app.

Zaplocker leverages user-generated preimage hashes, hodl invoices, and the Nostr attestation scheme to allow users who may not be online 24/7 to receive payments to a static lightning address. Users just need to log in to their ZEUS wallets within 24 hours to claim the payments, otherwise they will be returned to the sender.

Zaplocker addresses are available, not only just to embedded node users, but also remote LND users.

Learn about [how Zaplocker payments work](https://github.com/supertestnet/zaplocker#how-it-works).

# Fees and requirements

ZEUS Pay Zaplocker fees are now at zero.

You just need a channel with our LSP to redeem payments using a Zaplocker address.
