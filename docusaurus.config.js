/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require("path");
const math = require("remark-math");
const katex = require("rehype-katex");
const { docs, developers } = require("./sidebars");
const DefaultLocale = "en";

module.exports = {
  title: "LMAX Docs",
  tagline: "LMAX Group",
  url: "https://docs.lmax.pro",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/color-favicon.png",
  organizationName: "celo-org", // Usually your GitHub org/user name.
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
      title: "ZSC Docs",
      logo: {
        alt: "Celo Logo",
        src: "img/color-logo.png",
      },
      items: [
        // {
        //     "to": "welcome",
        //     "label": "Basics",
        //     "position": "left"
        // },
        {
          to: "developer-guide/overview",
          label: "Build",
          position: "left",
        },
        {
          to: "validator-guide/overview",
          label: "Validate",
          position: "left",
        },
        {
          to: "/community/contributing",
          label: "Community",
          position: "left",
        },
        {
          to: "/blog",
          label: "Learn",
          position: "left",
        },
        {
          to: "https://medium.com/celoorg",
          label: "Blog",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              to: "https://celo.crowdin.com/",
              label: "Help us translate",
            },
          ],
        },
        {
          href: "https://github.com/celo-org",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
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
          title: "About LMAX",
          items: [
            {
              label: "LMAX Group",
              to: "https://www.lmax.com/",
            },
            {
              label: "LMAX Exchange ",
              to: "https://www.lmax.com/exchange",
            },
            {
              label: "LMAX Digital",
              href: "https://www.lmaxdigital.com/",
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
              href: "https://www.youtube.com/@LMAXGroup",
            },
            {
              label: "Discord",
              href: "https://discord.gg/EhCjWb9A",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/LmaxAsset",
            },
            {
              label: "Reddit",
              href: "https://t.me/joinchat/F8Tdpoi_71E2NTFl",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/dmcsingular",
            },
          ],
        },
        {
          title: "Ecosystem",
          items: [
            {
              label: "LMAX Global",
              href: "https://lmax.pro/",
            },
            {
              label: "Ethereum",
              href: "https://www.ethereum.org/",
            },
            {
              label: "Binance Chain",
              href: "https://www.binance.com/",
            },
            {
              label: "Polygon",
              href: "https://polygon.technology/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LMAX Group, Inc. Built with Docusaurus.`,
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
          blogTitle: "Celo Blog",
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
