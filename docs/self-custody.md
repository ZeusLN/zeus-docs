# The Importance of Self-Custody in Bitcoin

Bitcoin was created to enable **peer-to-peer money**—value transfer without intermediaries. But this vision only holds if *you* actually hold your own Bitcoin. That means practicing **self-custody**.

## Custody vs. Self-Custody: What's the Difference?

| Aspect | Custody | Self-custody |
|--------|---------|--------------|
| **Who holds the private keys?** | A third party (exchange, service provider) | You |
| **Who controls the coins?** | The custodian (you rely on them to act honestly) | You (only you can move the coins) |
| **Risk of loss or seizure** | High – subject to hacks, fraud, or government intervention | Lower – only vulnerable if you mismanage your own keys |
| **Censorship resistance** | Weak – withdrawals can be blocked or delayed | Strong – no one can stop you from transacting |
| **User responsibility** | Low (except in [some cases](#ious--keys-the-illusion-of-self-custody-in-custodial-systems)) | High – you must manage backups, avoid phishing, etc. |

Self-custody is the **only** way to fully benefit from Bitcoin's properties: **sovereignty, censorship-resistance, and permissionless use**.

---

## IOUs + Keys: The Illusion of Self-Custody in Custodial Systems

Some systems claim to give you the best of both worlds: faster transactions, lower fees, and “you still hold your keys.” Examples include:

- **Sidechains** (e.g., Liquid)
- **Federated systems**
- **Chaumian ecash mints**
- **Wrapped BTC on other chains**

At first glance, these seem self-custodial—you control your private keys to access and transfer assets. But there's a catch.

> Holding keys to an *IOU* is not the same as holding Bitcoin.

### Comparison Table

| System | You hold keys? | Are you trusting someone? | Can they block or lose your funds? |
|--------|----------------|----------------------------|-----------------------------------|
| Sidechains (e.g., Liquid) | Yes (to sidechain assets) | Yes – a federation of signers | Yes – if the federation breaks or colludes |
| Ecash (e.g., Fedimint, Cashu) | Yes (blind signatures) | Yes – the mint operator(s) | Yes – funds can be frozen or lost |
| Centralized exchanges | No | Yes – entirely | Yes |

In all of these, **Bitcoin is no longer under your control**. You're trusting another system or group to eventually redeem your assets for real BTC. This creates systemic risk, removes censorship-resistance, and erodes Bitcoin’s core values.

---

## The Real Cost of Going On-Chain

Self-custody and on-chain use **aren’t free**, but they’re worth it.

| Cost | Description |
|------|-------------|
| **Transaction fees** | Vary with demand, but crucial for network security |
| **Time** | Transactions take longer, but with higher assurance |
| **Learning curve** | You'll need to understand how wallets and backups work |
| **Responsibility** | No one can bail you out if you lose your keys |

But in return, you gain:

- **Sovereignty** – no one can take your money or freeze your account
- **Privacy** – no KYC, no permission needed
- **Resilience** – you're immune to third-party risk and institutional failure

---

## Custodial ecash in ZEUS

As of ZEUS v0.11, users of the local Embedded LND wallet (AKA the node in the phone) have the option of using ecash using the Cashu protocol.

Cashu keys are derived from the Embedded LND wallet keys, so if the user backs those up, they can restore the funds after adding the mints they used, back into the app - providing the mint is still operating and hasn't exited with user funds.

We've choosen to add Cashu to ZEUS for the following reasons:

1. New users can start off with amounts that are uneconomical to take on-chain, or too low to purchase a Lightning channel with. They can get a Cashu-powered Lightning address from ZEUS Pay and start participating in the Bitcoin economy immediately.
2. While starting amounts to self-custody may seem low to people in developed countries, they can be significant to people in developing countries. We want the Bitcoin economy to take hold worldwide.
3. The users targeted here are likely to use custodial wallets to begin with anyway, but ZEUS has the opportunity and incentives to educate and guide users to self-custody. Most custodial wallets don't have the right incentives to encourage users to graduate to self-custody.
4. Users who are already using Bitcoin self-custodial can benefit with the newly added ability to sweep Cashu tokens directly to their self-custodial Lightning wallets.

As ecash users build up their balances to the point where it is economically feasible to self-custody, we will prompt users to upgrade - and do so more aggressively as the balance grows.

---

## The Bottom Line

> **If you don’t hold your keys, you don’t hold your Bitcoin.**

Systems like sidechains and ecash can be useful tools, but they **aren’t a substitute for self-custody**. For long-term economic security, freedom, and integrity, **learn to use Bitcoin the way it was meant to be used: self-custodially, with your own keys.**
