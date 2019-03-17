module.exports = {
  base: '/buidler/',
  title: "Buidler",
  description: "The extensible Solidity developer tool",
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guides", link: "/guides/#getting-started" },
      { text: "Documentation", link: "/documentation/" },
      { text: "API Docs", link: "/api/" },
      { text: "Nomic Labs", link: "https://nomiclabs.io" }
    ],
    lastUpdated: true,
    repo: "nomiclabs/buidler",
    docsDir: "docs",
    docsBranch: "master",
    editLinkText: "Help us improve this page!",
    editLinks: true,
    sidebar: {
      '/guides/': [{
        title: "Guides",
        collapsable: false,
        children: [
          ['/guides/', 'Getting started'],
          ['/guides/truffle-migration.md', 'Truffle migration']
        ]
      }],
      '/documentation/': {
        sidebar: 'auto'
      }
    }
  }
};
