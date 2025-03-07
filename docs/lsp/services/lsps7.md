---

---

# Channel renewals / lease extensions

Extend the duration of a channel lease, using the LSPS7 spec

## Channels you can renew

Using this service, you can extend channels leases you've purchased through both the [just-in-time channel service](/lsp/services/flow) and the [purchase channels in advance service](/lsp/services/lsps1).

You can also upgrade channels you've opened to the LSP node with on-chain funds, to guarantee the lifetime of the channel and benefit from lower routing fees.

## API

### Spec

The channel renewal / lease extension service follows the [LSPS7](https://github.com/lightning/blips/blob/719c320bb8a07875ae6732da08f487bb8fe19ed6/blip-0057.md) specification (bLIP-57).

## Interface

The channel renewal / lease extension service only has one interface: a Lightning network peer-to-peer interface, using custom messages, as specified in the [LSPS0](https://github.com/lightning/blips/blob/master/blip-0050.md) specification (bLIP-50).

It does not have a REST interface like the purchase channels in advance or 0-conf channel services.

### Lightning network custom message hosts

Mainnet: `031b301307574bbe9b9ac7b79cbe1700e31e544513eae0b5d7497483083f99e581@45.79.192.236:9735`

Testnet3: `03e84a109cd70e57864274932fc87c5e6434c59ebb8e6e7d28532219ba38f7f6df@139.144.22.237:9735`

Mutinynet: `032ae843e4d7d177f151d021ac8044b0636ec72b1ce3ffcde5c04748db2517ab03@45.79.201.241:9735`

### Lightning network custom message service calls

The calls for the Lightning network peer-to-peer interface can be found in the [LSPS7](https://github.com/lightning/blips/blob/719c320bb8a07875ae6732da08f487bb8fe19ed6/blip-0057.md) specification (bLIP-57).