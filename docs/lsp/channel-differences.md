---

---

# Differences between on-chain funded and purchased channels

Depending on how you get your channel with Olympus, you'll face different policies in terms or channel lifetime and routing fees.

## Channels open with on-chain funds

These are channels that users open to Olympus using on-chain funds that they've deposited in their wallet.

__Channel lifetime__: Variable. We reserve the right to close your channel at any point. Channels with large balances pushed to our side, are more likely to be closed.

__Routing fees__:
Fee rate: 5000 ppm
Base fee: 1 sat

*NOTE*: routing fees are only applicable for the first hop out of the Olympus channel, through our node. Subsequent hops have their own routing fees.

## LSP: Just-in-time channels

These are channels that are opened to users instantly, when they create an invoice and don't have enough inbound capacity to accept the payment.

__Channel lifetime__: Three months minimum. We may choose to leave your channel open for a longer duration.

__Routing fees__: Reduced. 

## LSP: Purchase in advance channels

These are channels that user can purchase by pressing the `Purchase inbound channel` button in the ZEUS app or through our [LSP web portal](https://lsps1.olympusln.com/).

__Channel lifetime__: Minimum is selected by the user at time of purchase. We may choose to leave your channel open for a longer duration.

__Routing fees__: Reduced.


# I'd like to extend the lifetime of my channel. How do I do that?

The ability to extend channel lifetimes is coming soon. Stay tuned.