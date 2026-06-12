---
title: Using NWC as a wallet backend
---

# Using NWC as a wallet backend

If you already have a Lightning wallet somewhere else that exposes an NWC connection string, you can plug it directly into ZEUS. ZEUS will use it as its Lightning backend — you send and receive through that wallet, and ZEUS handles the UI.

Common setups where this makes sense:

- **Alby Hub** running on a home server or cloud
- **LNbits** with the NWC extension enabled
- Any other NWC-compatible wallet you control

---

## What you need

A `nostr+walletconnect://` connection string from your wallet. It looks like this:

```
nostr+walletconnect://<wallet-pubkey>?relay=wss://...&secret=...
```

Your wallet software will generate this for you, usually as a QR code or a copyable link.

---

## Setting it up in ZEUS

Not familiar with adding wallets in ZEUS? See the [wallet setup guide](/for-users/using-zeus/wallets) first.

1. Go to `Menu` > `Settings` and tap **Add wallet** (or edit an existing wallet).
2. Set **Implementation** to **Nostr Wallet Connect**.
3. Paste your `nostr+walletconnect://` connection string, or scan the QR code from your wallet app.
4. Tap **Save**, then select the wallet to connect.

ZEUS saves your connection string right away. It connects to the remote wallet when you open it — not on the settings screen. If something goes wrong, you'll see an error on the main wallet screen. Your URL is still saved, so check that the remote wallet is running and the relay is reachable, then try again.

---

## After connecting

ZEUS behaves like it would with any other wallet backend. You can send and receive Lightning payments, check your balance, and view your transaction history — all going through the remote NWC wallet.

A few things to know:

- **You're trusting the remote wallet.** ZEUS sends payment requests to it over Nostr. If the remote wallet is compromised or goes down, you lose access to those funds. This is not self-custody in the same way an embedded node is.
- **Latency is higher** than a local wallet. Every payment goes through a Nostr relay, which adds a round trip.
- **The NWC service is not available** when ZEUS is configured as an NWC client. You can't run the NWC service on top of an NWC client connection.

---

## Switching away from NWC

To switch to a different wallet backend, go to `Settings`, tap the wallet, and change the Implementation. Your ZEUS Pay setup and other settings are preserved.

---

## Connecting to Alby Hub

Alby Hub has a built-in ZEUS integration.

1. Open Alby Hub in a browser.
2. Go to the App Store section and find ZEUS.
3. Press **Connect** and follow the instructions.

Alby Hub generates the connection string and can even scan it directly into ZEUS if you're on the same device.

For other NWC-compatible wallets, check their documentation for how to generate an NWC connection string.

---

## Frequently asked questions

**When does ZEUS connect to the remote wallet?**

After you tap **Save**, select the wallet from your list. ZEUS connects on the main wallet screen — not while you're still in the settings form.

**I saved the connection string but ZEUS shows an error. What now?**

Your URL is still saved. Check that the remote wallet is online, its NWC service is running, and the relay in the string is reachable from your phone. Then open the wallet in ZEUS and try again.

**Can I run the NWC service while using ZEUS as an NWC client?**

No. The NWC service under Tools is not available when your wallet implementation is Nostr Wallet Connect.

**Is this the same as self-custody with an embedded node?**

Not quite. ZEUS sends payment requests to the remote wallet over Nostr. You trust that wallet to hold and move your funds. Latency is also higher than a local node because every request goes through a relay.

**How do I switch back to a normal node wallet?**

Go to `Menu` > `Settings`, tap the wallet, and change **Implementation** to your preferred backend. Your other ZEUS settings are kept.
