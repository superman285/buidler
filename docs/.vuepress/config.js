module.exports = {
  title: "Buidler",
  description: "The extensible smart contract dev tool",
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/documentation/" },
      { text: "API Docs", link: "/api/" },
      { text: "Nomic Labs", link: "https://nomiclabs.io" }
    ],
    lastUpdated: true,
    sidebar: {
      "/documentation/": [
        {
          title: "Documentation",
          collapsable: false,
          children: []
        },
        ["", "Overview"],
        ["config", "Buidler configuration"],
        {
          title: "Tutorials",
          collapsable: false,
          children: ["tutorials/truffle-migration"]
        },
        {
          title: "Advanced topics",
          collapsable: false,
          children: ["advanced/architecture"]
        }
      ]
    },
    repo: "nomiclabs/buidler",
    docsDir: "docs",
    docsBranch: "master",
    editLinkText: "Help us improve this page!",
    editLinks: true
  }
};
