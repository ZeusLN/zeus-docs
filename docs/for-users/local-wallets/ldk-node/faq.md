---
---

# FAQ

Frequently asked questions

## Why can I send less than my Lightning balance?

Your Lightning balance on the Home screen and your **sending capacity (outbound)** represent different things. The balance includes funds on your side of your channels, while sending capacity accounts for channel reserves and whether your channels are active.

A **channel reserve** is an amount you must keep on your side of a channel rather than spend through Lightning. It is still part of your balance, not a fee that has been charged or funds that have disappeared. Funds in offline channels also cannot be sent until those channels are active again.

For example, your Home screen might show **12,291 sats**, but your sending capacity might be **11,243 sats**. A **12,000-sat** payment exceeds that capacity even though it is less than your balance. Check the **Outbound** amount in Channels and the **Local Reserve** in each channel's details. See [Channel Balance](../../using-zeus/channels.md#channel-balance) for an explanation of these amounts.

If your version of ZEUS shows **Available to send** on the Lightning row in **Select payment method**, that amount is your sending capacity, not your full Lightning balance. The Home screen balance is unchanged. This display requires channel data; connections such as LndHub and Nostr Wallet Connect use the balance reported by the wallet provider instead.

Sending capacity is **before routing fees**, so leave room for the payment amount plus its fees. A payment below your sending capacity can still fail if there is no suitable route, not enough liquidity along the route, or other channel constraints. Increasing your maximum routing fee does not unlock your channel reserve.
