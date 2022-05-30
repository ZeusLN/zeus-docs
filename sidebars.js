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
      label: 'Using Zeus',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'for-users/using-zeus/overview','for-users/using-zeus/home', 'for-users/using-zeus/accounts', 'for-users/using-zeus/profiles',
        'for-users/using-zeus/channels',
      ],
    },
  ],
  contribute: [
    'contribute/how-you-can-contribute', 'contribute/code', 'contribute/design', 'contribute/write', 'contribute/translate',
    'contribute/community-call', 'contribute/donate', 'contribute/other',

  ],

};

module.exports = sidebars;
