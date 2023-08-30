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
      label: 'Connecting Zeus',
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
      label: 'Using Zeus',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'for-users/using-zeus/overview','for-users/using-zeus/home', 'for-users/using-zeus/accounts', 'for-users/using-zeus/profiles',
        'for-users/using-zeus/channels',
      ],
    }
  ],
  lsp: [
    'lsp/intro',
    'lsp/wrapped-invoices',
    'lsp/api',
  ],
  pos: [
    'pos/setup',
    'pos/checkout',
  ],
  contribute: [
    'contribute/how-you-can-contribute', 'contribute/code', 'contribute/design', 'contribute/write', 'contribute/translate',
    'contribute/donate', 'contribute/other',

  ],

};

module.exports = sidebars;
