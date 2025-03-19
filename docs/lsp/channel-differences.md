---

---

# Channel differences and limits

Depending on how you get your channel with Olympus, you'll face different policies in terms or channel lifetime and routing fees.

### Channels open with on-chain funds

These are channels that users open to Olympus using on-chain funds that they've deposited in their wallet.

__Channel size__: 150,000 - 1,500,000 sats

__Channel lifetime__: Variable. We reserve the right to close your channel at any point. Channels with large balances pushed to our side, are more likely to be closed.

__Routing fees__:
Fee rate: 5000 ppm
Base fee: 1 sat

*NOTE*: routing fees are only applicable for the first hop out of the Olympus channel, through our node. Subsequent hops have their own routing fees.

### LSP: Just-in-time channels

These are channels that are opened to users instantly, when they create an invoice and don't have enough inbound capacity to accept the payment.

__Channel size__: 100,000 - 5,000,000 sats

__Channel lifetime__: 3 months minimum. We may choose to leave your channel open for a longer duration.

__Routing fees__: Reduced. 

### LSP: Purchase in advance channels

These are channels that user can purchase by pressing the `Purchase inbound channel` button in the ZEUS app or through our [LSP web portal](https://channels.zeuslsp.com/).

__Channel size__: 100,000 - 10,000,000 sats

__Channel lifetime__: Minimum is selected by the user at time of purchase, up to 6 months. We may choose to leave your channel open for a longer duration.

__Routing fees__: Reduced.


# Total capacity

At present, users can only have a max total capacity of 10,000,000 sats across all their channels with the Olympus by ZEUS LSP node.


# I'd like to extend the lifetime of my channel. How do I do that?

As of ZEUS v0.10.0, you can extend the lifetime of a channel by going to the single channel view and pressing the `Extend channel lease` button. Learn [more about the service here](/lsp/services/lsps7).

# Can I convert a standard channel into a LSP channel ?

Yes is possible. If you opened a channel with Olympus LSP node directly with your onchain funds and you want to "convert" it into a leased LSP channel you just have to go the details of the active channel you want to convert and click on the red button saying `Purchase Channel Lease` as in the following example.

insert zeus-purchase-lease.jpg

You will be asked to pay a LN invoice representing the lease cost and done, your channel from now on will have all the features and advantages of a LSP channel.