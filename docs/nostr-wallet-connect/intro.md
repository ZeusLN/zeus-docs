---
title: Nostr Wallet Connect
---

# Nostr Wallet Connect

Nostr Wallet Connect (NWC) is an open protocol that lets apps talk to Bitcoin Lightning wallets over [Nostr](https://nostr.com/) relays. Instead of a direct server connection, wallet requests travel through Nostr encrypted, so apps never need to know your node's IP address.

In ZEUS, NWC works in two completely different directions:

| Mode | What it does |
| --- | --- |
| **NWC service** | ZEUS acts as the wallet. Other apps (Nostr clients, bots, point-of-sale systems) connect to your node through ZEUS. |
| **NWC client** | ZEUS connects *to* a remote wallet somewhere else — like Alby Hub — and uses it as its own Lightning backend. |

You can use either mode on its own. They don't conflict with each other as long as you're running the NWC service on a local wallet (Embedded LND, LDK Node, or a remote LND/CLN connection). If ZEUS itself is configured as an NWC *client*, it can't also run the NWC *service*.

---

## NWC service — ZEUS as the wallet

This is the feature you'll find under `Menu` > `Tools` > `Nostr Wallet Connect service`.

You create named **connections** and share a QR code or a `nostr+walletconnect://` link with the app you want to connect. Each connection has its own permissions and optional spending limits, so you can give a Nostr client the ability to zap on your behalf without giving it full access to your funds.

**What backends support the NWC service?**

- Embedded LND
- LDK Node
- Remote LND
- Core Lightning (CLN REST)
- Lightning Node Connect (LNC)
- LNDHub

Cashu is also supported as an optional routing layer. You can enable it in NWC settings to route all NWC payments and invoices through your Cashu wallet instead of Lightning channels.

**Next steps:** [Managing connections →](./connections) · [Keeping it running in the background →](./background)

---

## NWC client — ZEUS connecting to a remote wallet

If you have a wallet elsewhere that speaks NWC — Alby Hub is the most common example — you can add it to ZEUS as a wallet backend.

Go to `Menu` > `Settings`, tap **Add wallet**, choose **Nostr Wallet Connect**, and paste your `nostr+walletconnect://` connection string. You can also scan a QR code or tap a link to fill it in. After you save, select the wallet and ZEUS will connect to it.

Read more: [Using NWC as your wallet backend →](./client) · [Setting up wallets in ZEUS →](/for-users/using-zeus/wallets)

---

## Useful links

- [NWC protocol spec (NIP-47)](https://nips.nostr.com/47)
- [nwc.dev](https://nwc.dev/) — compatible apps directory

---

## Frequently asked questions

**What is Nostr Wallet Connect?**

A way for apps to talk to a Lightning wallet over Nostr relays — no direct connection to your node's IP address. You pair apps with a QR code or link and control what each one can do.

**What's the difference between NWC service and NWC client?**

| | **Service** | **Client** |
| --- | --- | --- |
| ZEUS role | Acts as the wallet | Connects to a wallet elsewhere |
| Who connects to whom | Other apps connect to ZEUS | ZEUS connects to Alby Hub, LNbits, etc. |
| Where to set it up | `Menu` > `Tools` > `Nostr Wallet Connect service` | `Menu` > `Settings` > **Add wallet** |

**Can I use both at the same time?**

No. If ZEUS is set up as an NWC client, the NWC service is hidden. Use a local or remote node wallet if you want to run the service.

**Which wallet backends support the NWC service?**

Embedded LND, LDK Node, remote LND, CLN REST, LNC, and LNDHub. Cashu can optionally route NWC payments when enabled in NWC settings.

**Which apps can connect to ZEUS?**

Any app that supports [NIP-47](https://nips.nostr.com/47) — Damus, Amethyst, and others listed on [nwc.dev](https://nwc.dev/).

**Is NWC safe?**

Each connection has its own secret, permissions, and optional spending cap. You decide what each app can access. See [Managing connections](./connections) for permissions and budgets.
