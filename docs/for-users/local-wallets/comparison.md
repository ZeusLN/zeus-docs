---
---

# Embedded LND vs LDK Node

A comparison of the two local wallet implementations available in ZEUS.

## Features

| Feature | Embedded LND | LDK Node |
|---|---|---|
| Block sync | Neutrino <br/>(more private, slower, less reliable) | Esplora <br/>(less private, faster, more reliable) |
| LN Graph sync | Express Graph Sync | Rapid Gossip Sync |
| Run LN node on device (full self-custody) | ✅ | ✅ |
| LN node / channels backup | | |
| - export to file | ✅ | ❌ |
| - to remote server | Manually | Automatically |
| Can migrate to a full remote node? | ✅ | ❌ |
| Lightning address | | |
| - Zaplocker | ✅ | ❌ |
| - Cashu | ✅ | ✅ |
| BOLT12 offers (receive / withdraw) | ❌ | ✅ |
| Blinded paths | via BOLT11 | via BOLT12 |
| MPP - Multi path payment | ✅ | ✅ |
| Taproot onchain address | ✅ | ❌ |
| Simple Taproot Channels | ✅ | ❌ |
| Opening LN channels mgmt | | |
| - with LSP | ✅ | ✅ |
| - with any other LN node | Announced and unannounced channels | Unannounced channels only |
| Route hints for LN invoices | Granular user controls | Automatically added |
| First hop selection for payments | ✅ | ❌ |
| External accounts (import XPUBs and sign PSBTs) | ✅ | ❌ |

## Performance

| Metric | Embedded LND | LDK Node |
|---|---|---|
| Time to full sync from start | ~3-15 min | ~3-10 sec |
| User data occupied space on device | ~1-5 GB | ~9-10 MB |
| Battery usage 24h (persistent mode) | ~9-15% | ~3-5% |
