const { resolve } = require('path')
const implicitFigures = require('markdown-it-implicit-figures')
const slugify = require('./slugify')
const preprocessMarkdown = resolve(__dirname, 'preprocessMarkdown')

const title = ''
const baseUrl = ''
const pageSuffix = '/'
const info = {
  name: title,
  twitter: 'zeusln'
}
const extractDescription = text => {
  if (!text) return
  const paragraph = text.match(/^[A-Za-z].*(?:\n[A-Za-z].*)*/m)
  return paragraph ? paragraph.toString().replace(/[\*\_\(\)\[\]]/g, '') : null
}

const sidebarUserGuide = [
      ['/Guide', 'Introduction'],
  {
    title: 'Getting Started',
    collapsable: false,
    children: [
      ['/use-cases', 'Use cases'],
      {
        title: 'Node operators',
        path: '/node-operators',
        collapsable: true,
        initialOpenGroupIndex: -1,
        children: [
          {
            title: 'Umbrel',
            path: '/connect-umbrel'
          },
          {
            title: 'MyNode',
            path: '/connect-mynode'
          },
          {
            title: 'Nodl',
            path: '/connect-nodl'
          },
          {
            title: 'RaspiBlitz',
            path: '/connect-raspiblitz'
          },
        ]
      },
      {
        title: 'Merchants',
        path: '/merchants',
        collapsable: true,
        initialOpenGroupIndex: -1,
        children: [
          {
            title: 'BTCPay Server',
            path: '/connect-btcpayserver'
          }
        ]
      },
      {
        title: 'Individuals',
        path: '/individuals',
        collapsable: true,
        initialOpenGroupIndex: -1,
        children: [
          {
            title: 'LNDHub',
            path: '/connect-lndhub'
          },
          {
            title: 'Nayuta Core',
            path: '/connect-nayuta-core'
          }
        ]
      },
    ]
  },
  {
    title: 'Using Zeus',
    collapsable: false,
    children: [
      {
        title: 'Configuring Zeus',
        path: '/configuring',
        collapsable: true,
        initialOpenGroupIndex: -1,
        children: [
          {
            title: 'Node',
            path: '/node'
          },
          {
            title: 'Accounts',
            path: '/accounts'
          },
          {
            title: 'Contacts',
            path: '/contacts'
          },
          {
            title: 'Privacy',
            path: '/privacy'
          },
          {
            title: 'Security',
            path: '/security'
          },
          {
            title: 'Messages',
            path: '/messages'
          },
          {
            title: 'Localisation',
            path: '/localisation'
          }
        ]
      },
      {
        title: 'Payments',
        path: '/payments',
        collapsable: true,
        initialOpenGroupIndex: -1,
        children: [
          {
            title: 'Requesting bitcoin',
            path: '/requesting-bitcoin'
          },
          {
            title: 'Sending bitcoin',
            path: '/sending-bitcoin'
          }
        ]
      },
      {
        title: 'Channels',
        path: '/channels',
        collapsable: true,
        initialOpenGroupIndex: -1,
        children: [
          {
            title: 'Balances',
            path: '/balances'
          },
        ]
      },
    ]
  },
  {
    title: 'Support and Community',
    collapsable: false,
    initialOpenGroupIndex: -1,
    children: [
      ['/Troubleshooting', 'Troubleshooting an issue'],
      ['/Support', 'Support'],
      ['/Community', 'Community']
    ]
  }
]

const sidebarDevelopment = [
  {
    title: 'Development',
    collapsable: false,
    children: [
      '/Development/'
    ]
  }
]

const sidebarContribute = [
  {
    title: 'Contribute',
    path: '/Contribute/',
    collapsable: false,
    children: [
      {
        title: 'Code',
        path: '/Contribute/Dev',
        collapsable: false,
        children: [
          '/Contribute/DevCode',
          '/Contribute/DevTest'
        ]
      },
      {
        title: 'Write',
        path: '/Contribute/Write',
        collapsable: false,
        children: [
          ['/Contribute/WriteSoftware', 'Software Stack'],
          ['/Contribute/WriteDocs', 'Documentation']
        ]
      },
      ['/Contribute/Design', 'Design'],
      ['/Contribute/Translate', 'Translate'],
      ['/Contribute/Misc', 'Miscellaneous']
    ]
  },

]

const sidebarFAQ = [
  {
    title: 'FAQ and common issues',
    path: '/FAQ/',
    collapsable: false,
    children: [
      'General'
    ]
  }
]

module.exports = {
  title,
  description: 'Zeus Official Documentation',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0'}],
    ['link', { rel: 'stylesheet', href: '/styles/zeus-variables.css' }]
  ],
  chainWebpack (config) {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use(preprocessMarkdown)
        .loader(preprocessMarkdown)
        .end()
  },
  plugins: [
    ['seo', {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description || extractDescription($page._strippedContent),
      author: (_, $site) => info,
      tags: $page => ($page.frontmatter.tags || ['Zeus']),
      twitterCard: _ => 'summary',
      type: $page => 'article',
      url: (_, $site, path) => `${baseUrl}${path.replace('.html', pageSuffix)}`,
      image: ($page, $site) => `${baseUrl}/card.png`
    }],
    ['clean-urls', {
      normalSuffix: pageSuffix,
      indexSuffix: pageSuffix,
      notFoundPath: '/404.html',
    }],
    ['code-copy', {
      color: '#8F979E',
      backgroundTransition: false,
      staticIcon: true
    }],
    ['sitemap', {
      hostname: baseUrl,
      exclude: ['/404.html']
    }],
    ['@vuepress/medium-zoom']
  ],
  markdown: {
    extendMarkdown (md) {
      md.use(implicitFigures)
    },
    pageSuffix,
    slugify
  },
  themeConfig: {
    domain: baseUrl,
    logo: '/img/zeus-logo.svg',
    displayAllHeaders: false,
    repo: '',
    docsDir: 'docs',
    editLinks: true,
    notSatisfiedLinks: true, // our own addition, see theme/components/PageEdit.vue
    sidebarDepth: 0,
    nav: [
      {
        text: 'User Guide',
        link: '/Guide'
      },
      {
        text: 'Developers',
        link: '/Development/'
      },
      {
        text: 'Contribute',
        link: '/Contribute/'
      },
      {
        text: 'FAQ',
        link: '/FAQ/'
      }
    ],
    social: [
      {
        text: 'Website',
        link: 'https://zeusln.app/',
        rel: 'noopener noreferrer website'
      },
      {
        text: 'Chat',
        link: 'https://t.me/zeusLN',
        rel: 'noopener noreferrer chat'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/ZeusLN',
        rel: 'noopener noreferrer github'
      },
      {
        text: 'Twitter',
        link: 'https://twitter.com/ZeusLN',
        rel: 'noopener noreferrer twitter'
      }
    ],
    sidebar: {
      '/Development': sidebarDevelopment,
      '/Contribute': sidebarContribute,
      '/FAQ/': sidebarFAQ,
      '/': sidebarUserGuide
    }
  }
}
