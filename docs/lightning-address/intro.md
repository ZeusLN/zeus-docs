---

---

# ZEUS PAY self-custodial lightning addresses

In ZEUS v0.8.0 we are offering up a self-custodial lightning address that we're calling ZEUS PAY. This is the first ever offering of a self-custodial lightning address in a mobile app.

ZEUS PAY leverages user-generated preimage hashes, hodl invoices, and the Zaplocker Nostr attestation scheme to allow users who may not be online 24/7 to receive payments to a static lightning address. Users just need to log in to their ZEUS wallets within 24 hours to claim the payments, otherwise they will be returned to the sender.

We hope that more wallets adopt this scheme to improve the UX for their users. But even without any updates, ZEUS PAY can easily receive payments from all lightning-enabled Bitcoin wallets today.

We think this is a fantastic solution for service workers, nomads, dissidents, and others to accept tips and donations without sacrificing custody. We eagerly look forward to all the new people that are onboarded to Bitcoin with this new functionality.

ZEUS PAY is available, not only just to embedded node users, but also remote LND users.

Learn about [how Zaplocker payments work](https://github.com/supertestnet/zaplocker#how-it-works).