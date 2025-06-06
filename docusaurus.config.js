// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZEUS Documentation',
  tagline: 'ZEUS wallet official documentation',
  url: 'https://docs.zeusln.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'ZeusLN', // Usually your GitHub org/user name.
  // projectName: 'zeus-docs', // Usually your repo name.
  // deploymentBranch: '',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ZeusLN/zeus-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'ZEUS Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'about-zeus',
            position: 'left',
            label: 'For Users',
          },
          {
            type: 'doc',
            docId: 'lsp/intro',
            position: 'left',
            label: 'Lightning Service Provider',
          },
          {
            type: 'doc',
            docId: 'swaps/intro',
            position: 'left',
            label: 'Swaps',
          },
          {
            type: 'doc',
            docId: 'lightning-address/intro',
            position: 'left',
            label: 'Lightning Address',
          },
          {
            type: 'doc',
            docId: 'pos/overview',
            position: 'left',
            label: 'Point of Sale',
          },
          
          {
            type: 'doc',
            docId: 'contribute/how-you-can-contribute',
            position: 'left',
            label: 'Contribute',
          },
          {
            href: 'https://github.com/ZeusLN/zeus',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: 'Telegram',
            href: 'https://t.me/zeusLN',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'For users',
                to: '/',
              },
              {
                label: 'Contribute',
                to: 'contribute/how-you-can-contribute',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Nostr',
                href: 'https://iris.to/zeus@zeusln.app',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/zeusLN',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ZeusLN',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Official website',
                href: 'https://zeusln.app',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ZeusLN/zeus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Atlas 21 Inc. Content released under AGPL v3 license. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
