// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  usingZeus: [
    'about-zeus',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'for-users/getting-started/lightning-node-setup',
        'for-users/getting-started/lightning-node-connect',
      ],
    },
    {
      type: 'category',
      label: 'Connecting ZEUS',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'for-users/connecting-zeus/connect-umbrel',
        'for-users/connecting-zeus/connect-citadel',
        'for-users/connecting-zeus/connect-raspiblitz',
        'for-users/connecting-zeus/connect-mynode',
        'for-users/connecting-zeus/connect-embassy',
        'for-users/connecting-zeus/connect-nodl',
        'for-users/connecting-zeus/connect-btcpay',
        'for-users/connecting-zeus/connect-lndhub',
      ],
    },
    {
      type: 'category',
      label: 'Using ZEUS',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'for-users/using-zeus/overview','for-users/using-zeus/home', 'for-users/using-zeus/accounts', 'for-users/using-zeus/profiles',
        'for-users/using-zeus/channels',
      ],
    },
    {
      type: 'category',
      label: 'Embedded Node',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'for-users/embedded-node/backup-and-recovery',
        'for-users/embedded-node/lightning-onboarding',
        'for-users/embedded-node/privacy',
        'for-users/embedded-node/open-channel-to-embedded-node',
        'for-users/embedded-node/trusted-funding',
        'for-users/embedded-node/faq'
      ],
    }
  ],
  lsp: [
    'lsp/intro',
    'lsp/wrapped-invoices',
    'lsp/fees',
    'lsp/api',
  ],
  pos: [
    'pos/overview',
    'pos/setup',
    'pos/checkout',
  ],
  contribute: [
    'contribute/how-you-can-contribute', 'contribute/code', 'contribute/design', 'contribute/write', 'contribute/translate',
    'contribute/donate', 'contribute/other',

  ],

};

module.exports = sidebars;
