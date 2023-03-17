---
title: Before using Zeus
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem'

# Before using Zeus

To start using Zeus you will need to be running your own Bitcoin lightning node. And for those that just started with Bitcoin, will be better to read these resources about Bitcoin Lightning Network, before start their own Lightning node. It is very important to understand these new concepts, technical terms that you will encounter by using Zeus LN app.

Zeus LN app is supporting the following Lightning implementations: LND, CLN, Eclair and also lndhub accounts. Below you will find more documentation about these LN implementations and much more information needed to manage your Lightning Node.

### What is a Bitcoin Lightning Network (LN) node?
A Bitcoin Node is a computer that connects to Bitcoin network and uses peer-to-peer protocol that allows nodes communicating with each other within the network as well as spreading information on transactions and blocks. Information is distributed among such nodes and they are what blockchain network consists of. [See more details here](https://en.bitcoinwiki.org/wiki/Node).

Lightning Network is the additional payment protocol (Layer 2), a layer embedded on top of a blockchain to enable users to send or receive payments instantly and at almost zero cost. It involves the use of peer-to-peer payment channels that mean users can defer broadcasting their transactions to the blockchain, making it scale. It is intended to help Bitcoin to scale. [See more details here](https://en.bitcoinwiki.org/wiki/Lightning_Network).

In short: 
- Bitcoin network Layer 1 (onchain) is the base settlement network
- Lightning Network Layer 2 (LN) is the payment network

Here is a list of resources that will explain in detail what is, how it works, what you should do as a node LN operator, how to manage your LN node.

<Tabs>

<TabItem value="LN implementations">

### LN implementations supported by Zeus
  
1. LND - Lightning Network Daemon: [GitHub](https://github.com/lightningnetwork/lnd/) | [Documentation](https://docs.lightning.engineering/)
2. CLN - Core Lightning: [GitHub](https://github.com/ElementsProject/lightning) | [Documentation](https://lightning.readthedocs.io/index.html)
3. Eclair: [GitHub](https://github.com/ACINQ/eclair)
4. LNDHub: [GitHub](https://github.com/BlueWallet/LndHub) | [Documentation](https://bluewallet.io/lndhub/)

</TabItem>
<TabItem value="LN explained">

### LN explained

- [Explain LN - The Airport analogy](https://twitter.com/CoinCornerDanny/status/1584628950588076032) - by Danny Scott
- [An Overview of Lightning Network Implementations](https://medium.com/@fulgur.ventures/an-overview-of-lightning-network-implementations-d670255a6cfa) - by Fulgur Ventures
- [Lightning Network Resources, LN complete library](https://lightning.how/) - by Jamesson Lopp
- [Beginners Lightning Guide](https://bitcoiner.guide/lightning/) – by Bitcoin Q&A
- [Lightning Network Dev Curriculum](https://github.com/chaincodelabs/lightning-curriculum/) – by Chaincode Labs, very good resources

</TabItem>
<TabItem value="LN Guides">

### LN Guides

- [Lightning Node Management](https://www.lightningnode.info/) – by openoms, excellent guide (also in Spanish)
- [Lightning Liquidity Management Guide](https://blog.lopp.net/lightning-network-liquidity-management-guide/) (article) – by Jameson Lopp
- [RaspiBlitz Documentation](https://github.com/rootzoll/raspiblitz) - by Rootzoll and openoms
- [Raspibolt Lightning Node Manual](https://raspibolt.org/guide/lightning/) (docs) - by Raspibolt Team
- [myNodeBTC Documentation](https://mynodebtc.github.io/intro/introduction.html) - by myNode Team
- [Umbrel Documentation Guides](https://community.getumbrel.com/c/guides/) - By DarthCoin (most of them)
- [Embassy Start9 Documentation](https://start9.com/latest/user-manual/) - by Start9 Team
- [NODL Documentation](https://docs.nodl.it/) - by NODL Team
- [BTCPay Server Documentation](https://docs.btcpayserver.org/) - by BTCPay Team
- [LNbits Documentation](https://github.com/cryptoteun/awesome-lnbits) - by LNbits Team
- [LNtxBot User Manual](https://darthcoin.substack.com/p/lntxbot-users-guide) - by DarthCoin

</TabItem>
<TabItem value="LN Videos">

### LN Videos

- [What is a Bitcoin node](https://youtu.be/sVeolsQ3cvU) (Youtube) - by Blockgeeks
- [Everything you need to know about LN](https://youtu.be/bW7hvvjum9o) (Youtube) – by Till Musshoff
- [How Lightning channels work?](https://youtu.be/pOZaLbUUZUs) (Youtube) – by Decentralized Thought
- [LN: The most efficient payment system in the world](https://youtu.be/z9n8WRfMw8M) (Youtube) - by Bitcoin Magazine
- [Lightning Network explained](https://www.youtube.com/user/renepickhardt/videos) – YT channel by René Pickhardt
- [Lightning Nodes Playlist](https://www.youtube.com/watch?v=KItleddMYFU&list=PLxdf8G0kzsUX0sLhQxqCe4S-QziE5tbQG) - YT channel by BTC Sessions
- [Node Management with Zeus LN](https://www.youtube.com/watch?v=hmmehTnV3ys&list=PLxdf8G0kzsUWcgEJLH9AHTN3KQzoN2HTs&index=9) - by BTC Sessions
- [Lightning Network Nodes Tutorials](https://www.youtube.com/watch?v=Lojku8Tstyg&list=PLHcLDToI_2upRgjG-jgNHcHKCmFBy1Xl5) - by Jonathan Levi
- [Core Lightning Node](https://www.youtube.com/watch?v=fvB1SmY-y98&list=PLmoQ11MXEmaionX9w3-jDcixPbprBrAif) - YT playlist by 402 Payment Required
- [LND Lightning Node](https://www.youtube.com/watch?v=q0siLF9zmWo&list=PLmoQ11MXEmajsUw95Fq6fHzXnVmoMPIeV) - YT playlist by 402 Payment Required
- [Video tutorials about Lightning Nodes](https://www.youtube.com/c/MinistryofNodes/videos) – by Ministry of Nodes
- [Getting started with LN channels](https://www.youtube.com/watch?v=KhU_sTiaN8w) – by Start9
- [Payment Channels on Lightning Network](https://youtu.be/Hzv9WuqIzA0) (Youtube) – by MIT OpenCourseWare

</TabItem>
</Tabs>
