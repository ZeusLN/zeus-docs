# Connect your BTCPay Server node to Zeus

In your BTCPay Server instance, go to Server Settings > Services > LND (Rest server) > See information. To reveal the BTCPay connect QR code, click `Show QR Code`.

In Zeus, go to Settings > Nodes, and tap the plus icon to add a new node. Tap `Scan BTCPAY Config`, scan the BTCPay connect QR code, and tap `Save Node Config`. 

Alternatively, if you're having trouble with the QR code, expand the More Details section in BTCPay Server and copy the REST Uri into the Host field in Zeus, and Macaroon into the Macaroon field in Zeus. If you're connecting to a Tor instance, ensure that the `Use Tor` toggle is switched on.