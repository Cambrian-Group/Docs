/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require("path");
const math = require("remark-math");
const katex = require("rehype-katex");
const { docs, developers } = require("./sidebars");
const DefaultLocale = "en";

module.exports = {
  title: "CoinShares ETP",
  tagline: "CoinShares ETP",
  url: "https://docs.CoinShares.pro",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/color-favicon.png",
  organizationName: "CoinShares ETP", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  scripts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/web3/1.6.0/web3.min.js",
      async: true,
    },
  ],
  plugins: [
    require.resolve("docusaurus-plugin-fathom"),
    path.resolve(__dirname, "src/plugins/aliases.ts"),
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/celo-owner-guide/ledger",
            from: [
              "/operations-manual/key-management/using-a-ledger-wallet",
              "/operations-manual/key-management/ledger",
              "/operations-manual/summary/ledger",
              "/operations-manual/using-a-ledger-wallet",
              "/validator-guide/key-management/using-a-ledger-wallet",
              "/validator-guide/key-management/ledger",
              "/validator-guide/summary/ledger",
              "/validator-guide/using-a-ledger-wallet",
              "/celo-gold-holder-guide/ledger",
            ],
          },
          {
            to: "/getting-started/baklava-testnet/running-a-full-node-in-baklava",
            from: [
              "/getting-started/running-a-full-node",
              "/getting-started/running-a-validator",
              "/getting-started/running-a-full-node-in-baklava",
            ],
          },
          {
            to: "/getting-started/using-the-wallet",
            from: ["/getting-started/using-the-mobile-wallet"],
          },
          {
            to: "/celo-owner-guide/release-gold",
            from: [
              "/celo-codebase/protocol/release-gold",
              "/celo-holder-guide/release-gold",
              "/celo-gold-holder-guide/release-gold",
            ],
          },
          {
            to: "/developer-guide/start",
            from: [
              "/developer-guide/start/celo-truffle-box",
              "/developer-resources/walkthroughs/hello-mobile-dapp",
            ],
          },
          {
            to: "/developer-guide/overview",
            from: [
              "/developer-guide/overview/introduction",
              "/developer-resources/overview",
            ],
          },
          {
            to: "/developer-guide/development-chain",
            from: ["/developer-guide/start/development-chain"],
          },
          {
            to: "/important-information/mainnet-network-disclaimer",
            from: ["/important-information/rc-network-disclaimer"],
          },
          {
            to: "/getting-started/mainnet",
            from: ["/getting-started/rc1"],
          },
          {
            to: "/getting-started/mainnet/running-a-full-node-in-mainnet",
            from: [
              "/getting-started/rc1/running-a-full-node-in-rc1",
              "/getting-started/running-a-full-node-in-mainnet",
            ],
          },
          {
            to: "/getting-started/mainnet/running-a-validator-in-mainnet",
            from: [
              "/getting-started/rc1/running-a-validator-in-rc1",
              "/getting-started/running-a-validator-in-mainnet",
            ],
          },
          {
            to: "/celo-owner-guide/quick-start",
            from: [
              "/celo-gold-holder-guide/quick-start",
              "/celo-holder-guide/quick-start",
            ],
          },
          {
            to: "/celo-owner-guide/cusd",
            from: ["/celo-holder-guide/cusd"],
          },
          {
            to: "/celo-owner-guide/eth-recovery",
            from: ["/celo-holder-guide/eth-recovery"],
          },
          {
            to: "/celo-owner-guide/celo-recovery",
            from: ["/celo-holder-guide/celo-recovery"],
          },
          {
            to: "/developer-guide/overview",
            from: ["/v/master/developer-guide/overview"],
          },
          {
            to: "/developer-guide/start",
            from: ["/v/master/developer-guide/start"],
          },
        ],
      },
    ],
  ],
  themeConfig: {
    hideableSidebar: true,
    prism: {
      additionalLanguages: ["solidity"],
      theme: require("prism-react-renderer/themes/dracula"),
    },
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "CoinShares ETP",
      logo: {
        alt: "LMAX Logo",
        src: "img/color-logo.png",
      },
      items: [
        // {
        //     "to": "welcome",
        //     "label": "Basics",
        //     "position": "left"
        // },
//         {
//           to: "developer-guide/overview",
//           label: "Build",
//           position: "left",
//         },
        {
          to: "validator-guide/overview",
          label: "Legal",
          position: "left",
        },
        {
          to: "/community/contributing",
          label: "Community",
          position: "left",
        },
        // {
        //   to: "/blog",
        //   label: "News",
        //   position: "left",
        // },
        {
          to: "https://etp.coinshares.com/de/documents",
          label: "Blog",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            // {
            //   to: "https://celo.crowdin.com/",
            //   label: "Help us translate",
            // },
          ],
        },
        // {
        //   href: "https://github.com/celo-org",
        //   position: "right",
        //   className: "header-github-link",
        //   "aria-label": "GitHub repository",
        // },
      ],
    },
    gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: "G-0CXEKQ81V2",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    algolia: {
      appId: "55M4I38S60",
      apiKey: "baed78b52be14ac907688f1dd70b41d5",
      indexName: "celo",
      contextualSearch: true,
      debug: false,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About CoinShares",
          items: [
            {
              label: "CoinShares",
              to: "https://coinshares.com/",
            },
            {
              label: "CoinShares ETP ",
              to: "https://etp.coinshares.com/",
            },
            {
              label: "Buy ETP",
              href: "https://etp.coinshares.com/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              href: "/community/contributing",
              label: "Contributors",
            },
            {
              label: "Youtobe",
              href: "https://www.youtube.com/channel/UCY_qvNmvy0OK7IpZrEvV7Eg",
            },
            {
              label: "Discord",
              href: "https://discord.gg/EhCjWb9A",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/CoinSharesCo",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/coinsharesco/",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/CoinSharesCo",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CoinShares, Inc. Built with Docusaurus.`,
    },
    fathomAnalytics: {
      siteId: "AZMFWALB",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "",
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            // Link to Crowdin for French docs
            if (locale !== DefaultLocale) {
              return ``;
            }
            // Link to Github for English docs
            return ``;
          },
          routeBasePath: "/",
          remarkPlugins: [
            math,
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        blog: {
          blogTitle: "CoinShares ETP Blog",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          showReadingTime: true,
          blogListComponent: require.resolve(
            "./src/components/CustomBlogListPage.module.tsx"
          ),
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            // allows per post reading time override in frontmatter
            frontMatter.hide_reading_time
              ? undefined
              : defaultReadingTime({
                  content,
                  options: { wordsPerMinute: 300 },
                }),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      integrity:
        "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      crossorigin: "anonymous",
    },
  ],
};
