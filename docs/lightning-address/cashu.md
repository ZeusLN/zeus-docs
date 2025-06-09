---

---

# Cashu lightning addresses

Cashu lightning addresses are available to any user that has a [Cashu wallet](/cashu) enabled. These lightning addresses are great for new users as they have no associated fees and can be used on Nostr to accept zaps as small as one satoshi.

# Comparison to Zaplocker lightning addresses

Cashu is [**custodial**](/self-custody), but has a clear UX benefit for payers over Zaplocker addresses, in that the payments are settled instantly, instead of when the receiver settles them in their ZEUS wallet.

Cashu lightning addresses must also be redeemed in the user's ZEUS wallet, but unlike the Zaplocker addresses, there is not time window in which they must be redeemed.

By default, Cashu lightning address payments are auto-redeemed when the user opens their ZEUS wallet.

# Best practice

The Cashu lightning address is best used in conjunction with a self-custodial ZEUS wallet. You can set an automatic sweep threshold under `Menu` > `Settings` > `Ecash` > `Automatically sweep to self-custody`.

This allows you to enjoy the great UX of the Cashu wallet, while minimizing your third party rehypothecation risk.

# Fees and requirements

There are no fees associated with the Cashu lightning address.

A channel with the ZEUS LSP is not required to use the Cashu lightning address.

The Cashu lightning address currently only works with Embedded LND wallets in ZEUS.

