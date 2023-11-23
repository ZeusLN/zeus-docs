---

---

# Fees

Our LSP currently charges the following fees, in low fee environments:

| Event                                      | Fee           |
| -----------------------------------------  | ------------- |
| New Channel Open (up to 1m sats)           | 10,000 sats   |
| New Channel Open (1m - 5m sats)            | 1%            |
| Wrapped invoices without channel opens     | 2 sats        |
| Forwarding Base Fee                        | 0 sats        |
| Forwarding Fee Rate                        | 0 ppm         |

In high fee environments, channel open fees will vary based on block space demand. You can visit [Mempool.space](https://mempool.space/) to observe the current fee environment on the blockchain.

Also note that zero fee forwarding is only applied to purchased 0-conf channels.

Learn more about channel fees [here](https://docs.lightning.engineering/lightning-network-tools/lnd/channel-fees).

## ZEUS PAY

Our self-custodial lightning address incurs the following fees:

| Amount sent to you                         | Fee           |
| -----------------------------------------  | ------------- |
| <= 20 sats                                 | 50%           |
| <= 2500 sats                               | 10%           |
| > 2500 sats                                | 250 sats      |