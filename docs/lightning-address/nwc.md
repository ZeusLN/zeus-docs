---

---

# Nostr Wallet Connect remote lightning addresses

Nostr Wallet Connect lightning addresses allow remote node users to receive payments directly to their nodes, using the [Nostr Wallet Connect protocol](https://nwc.dev/).

# Comparison to Zaplocker and Cashu lightning addresses

In contrast to the Zaplocker and Cashu lightning addresses, the NWC lightning address does not require you to redeem payments within the ZEUS mobile wallet. Funds are settled directly on your node at time of payment.

# Software

NWC is available in [Alby Hub](https://albyhub.com/), which can be run on top of a self-hosted node or run as a service in the cloud.

Self-hosted node runners may want to also look at more lightweight options. Proceed at your own risk when using any of these third party solutions.

- [nostr-wallet-connect-lnd](https://github.com/benthecarman/nostr-wallet-connect-lnd) (LND)
- [cln_nwc](https://github.com/gudnuf/cln_nwc) (Core Lightning)
- [lnbits](https://github.com/SamSamskies/lnbits-nwc-service) (lnbits)

# Best practice

ZEUS Pay's NWC lightning addresses should be used with **invoice-only** NWC connection string to ensure that the service can only generate invoices on your behalf. <u>You do not want the service to be able to access funds</u>.

# Fees and requirements

There are no fees associated with the NWC lightning address.

A channel with the ZEUS LSP is not required to use the NWC lightning address.
