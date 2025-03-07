---

---

# Purchase channels in advance API

Get channels ahead of time, using the LSPS1 spec

## Spec

The purchase channels in advance service currently follows the [LSPS1](https://github.com/lightning/blips/blob/master/blip-0051.md) specification (bLIP-51). Unlike the [just-in-time channel service](/lsp/api/flow), this service has the user await for confirmation before the channel opens.

## Interfaces

The purchase channels in advance service has two interfaces:

1) A Lightning network peer-to-peer interface, using custom messages, as specified in the [LSPS0](https://github.com/BitcoinAndLightningLayerSpecs/lsp/blob/main/LSPS1/README.md) specification.

2) A REST interface, with some slight modifications to the Lightning network peer-to-peer interface, specified below.

## Lightning network custom message service calls

The calls for the Lightning network peer-to-peer interface can be found in the [LSPS1](https://github.com/BitcoinAndLightningLayerSpecs/lsp/blob/main/LSPS1/README.md) specification.

## REST interface base URLs

Mainnet: https://lsps1.lnolymp.us

Testnet: https://testnet-lsps1.lnolymp.us

Mutinynet: https://mutinynet-lsps1.lnolymp.us

## REST interface calls

#### `GET /api/v1/get_info`

*Response*

- `options` (object, same exact parameters returned from LN message endpoint, see [here](https://github.com/BitcoinAndLightningLayerSpecs/lsp/blob/main/LSPS1/README.md#1-lsps1get_info))
- `uris` (array, list of node URIs the user can connect to, to ensure the LSP can open a channel to them

*Response example*

```
{
    "max_channel_balance_sat": "10000000",
    "max_channel_expiry_blocks": 13000,
    "max_initial_client_balance_sat": "0",
    "max_initial_lsp_balance_sat": "10000000",
    "min_channel_balance_sat": "100000",
    "min_funding_confirms_within_blocks": 6,
    "min_initial_client_balance_sat": "0",
    "min_initial_lsp_balance_sat": "100000",
    "min_onchain_payment_confirmations": null,
    "min_onchain_payment_size_sat": null,
    "min_required_channel_confirmations": 6,
    "supports_zero_channel_reserve": false
    "uris": [
        "031b301307574bbe9b9ac7b79cbe1700e31e544513eae0b5d7497483083f99e581@45.79.192.236:9735",
        "031b301307574bbe9b9ac7b79cbe1700e31e544513eae0b5d7497483083f99e581@r46dwvxcdri754hf6n3rwexmc53h5x4natg5g6hidnxfzejm5xrqn2id.onion:9735"
    ]
}
```

#### `POST /api/v1/create_order`

*Request*

params (body):
- all of the same params as the [LN peer-to peer endpoint](https://github.com/BitcoinAndLightningLayerSpecs/lsp/blob/main/LSPS1/README.md#2-lsps1create_order)
*plus*
- `public_key`, string, of the node your want the LSP to open a channel to

*Request example*

```
{
    "lsp_balance_sat": "10000000",
    "client_balance_sat": "0",
    "required_channel_confirmations": 8,
    "funding_confirms_within_blocks": 6,
    "channel_expiry_blocks": 13000,
    "token": "",
    "refund_onchain_address": "",
    "announce_channel": false,
    "public_key": "025b7a68b4cd85668e65db6a343a4c607a462cdd010daa793f82be561a3316c5b1"
}
```

*Response*

- all of the same fields as the [LN peer-to-peer endpoint](https://github.com/BitcoinAndLightningLayerSpecs/lsp/blob/main/LSPS1/README.md#2-lsps1create_order)

*Response example*

```
{
    "announce_channel": false,
    "channel": null,
    "channel_expiry_blocks": 13000,
    "client_balance_sat": "0",
    "funding_confirms_within_blocks": 6,
    "created_at": "2024-06-10T03:43:11.542Z",
    "lsp_balance_sat": "10000000",
    "order_id": "030fbe24220d35b9789a152bf3ada51b",
    "order_state": "CREATED",
    "payment": {
        "bolt11": {
            "order_total_sat": "81961",
            "fee_total_sat": "81961",
            "invoice": 
                "lntbs819610n1pnxvajwpp580gpd5r9v49sju3h3cz9kp773d3af6dheudrawzp4xdt3j5lkewqdyzgd5xzmnwv4kzqvpwxycrqvpsxqcrqgr5dusryvpjxsknqwfdxqu9gvfs8gerxw33xqhrsvfktgszsvpnxpnxyefjxseryvryxv6kywfh8qukzvf4xf3xvvmpv3sn2vtz9ycqzzsxqrrsssp53j80yq9srjgatu6rdghulwlup7yt2yq024erjrkdc6jcm9xckwmq9qyyssqlxdrprrqkggrpt6m0cnyl0kdpszpjt5ywdu4wzh4rak8j5x2v3xqrh5yr2pqsykmun5l7yqn6gp5vvckn77sxqm52sdlj2s534gps2gpt547pu",
            "state": "EXPECT_PAYMENT",
            "expires_at": "2024-06-10T04:43:11.542Z"
        }
    },
    "token": ""
}
```

#### `GET /api/v1/get_order`

*Request*

params (url):
- `order_id`: string

*Request example*

GET `/api/v1/get_order?order_id=030fbe24220d35b9789a152bf3ada51b`


*Response*

- all of the same fields as the [LN peer-to-peer endpoint](https://github.com/BitcoinAndLightningLayerSpecs/lsp/blob/main/LSPS1/README.md#21-lsps1get_order)

*Response example*

```
{
    "announce_channel": false,
    "channel": null,
    "channel_expiry_blocks": 13000,
    "client_balance_sat": "0",
    "funding_confirms_within_blocks": 6,
    "created_at": "2024-06-10T03:43:12.059Z",
    "lsp_balance_sat": "10000000",
    "order_id": "030fbe24220d35b9789a152bf3ada51b",
    "order_state": "CREATED",
    "payment": {
        "bolt11": {
            "order_total_sat": "81961",
            "fee_total_sat": "81961",
            "invoice": 
                "lntbs819610n1pnxvajwpp580gpd5r9v49sju3h3cz9kp773d3af6dheudrawzp4xdt3j5lkewqdyzgd5xzmnwv4kzqvpwxycrqvpsxqcrqgr5dusryvpjxsknqwfdxqu9gvfs8gerxw33xqhrsvfktgszsvpnxpnxyefjxseryvryxv6kywfh8qukzvf4xf3xvvmpv3sn2vtz9ycqzzsxqrrsssp53j80yq9srjgatu6rdghulwlup7yt2yq024erjrkdc6jcm9xckwmq9qyyssqlxdrprrqkggrpt6m0cnyl0kdpszpjt5ywdu4wzh4rak8j5x2v3xqrh5yr2pqsykmun5l7yqn6gp5vvckn77sxqm52sdlj2s534gps2gpt547pu",
            "state": "EXPECT_PAYMENT",
            "expires_at": "2024-06-10T04:43:11.542Z"
        }
    },
    "token": ""
}
```