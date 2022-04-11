export default {
  "title": "ZSC Docs",
  "tagline": "Documentation for the ZSC Chain",
  "url": "https://docs.celo.org",
  "baseUrl": "/es/",
  "trailingSlash": false,
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/color-favicon.png",
  "organizationName": "celo-org",
  "projectName": "docs",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en",
      "es"
    ],
    "localeConfigs": {}
  },
  "themes": [
    "@docusaurus/theme-live-codeblock"
  ],
  "scripts": [
    {
      "src": "https://cdnjs.cloudflare.com/ajax/libs/web3/1.6.0/web3.min.js",
      "async": true
    }
  ],
  "plugins": [
    "/Users/youth/Documents/code/zsc-group/docs/node_modules/docusaurus-plugin-fathom/src/index.js",
    "/Users/youth/Documents/code/zsc-group/docs/src/plugins/aliases.ts",
    [
      "@docusaurus/plugin-client-redirects",
      {
        "redirects": [
          {
            "to": "/celo-owner-guide/ledger",
            "from": [
              "/operations-manual/key-management/using-a-ledger-wallet",
              "/operations-manual/key-management/ledger",
              "/operations-manual/summary/ledger",
              "/operations-manual/using-a-ledger-wallet",
              "/validator-guide/key-management/using-a-ledger-wallet",
              "/validator-guide/key-management/ledger",
              "/validator-guide/summary/ledger",
              "/validator-guide/using-a-ledger-wallet",
              "/celo-gold-holder-guide/ledger"
            ]
          },
          {
            "to": "/getting-started/baklava-testnet/running-a-full-node-in-baklava",
            "from": [
              "/getting-started/running-a-full-node",
              "/getting-started/running-a-validator",
              "/getting-started/running-a-full-node-in-baklava"
            ]
          },
          {
            "to": "/getting-started/using-the-wallet",
            "from": [
              "/getting-started/using-the-mobile-wallet"
            ]
          },
          {
            "to": "/celo-owner-guide/release-gold",
            "from": [
              "/celo-codebase/protocol/release-gold",
              "/celo-holder-guide/release-gold",
              "/celo-gold-holder-guide/release-gold"
            ]
          },
          {
            "to": "/developer-guide/start",
            "from": [
              "/developer-guide/start/celo-truffle-box",
              "/developer-resources/walkthroughs/hello-mobile-dapp"
            ]
          },
          {
            "to": "/developer-guide/overview",
            "from": [
              "/developer-guide/overview/introduction",
              "/developer-resources/overview"
            ]
          },
          {
            "to": "/developer-guide/development-chain",
            "from": [
              "/developer-guide/start/development-chain"
            ]
          },
          {
            "to": "/important-information/mainnet-network-disclaimer",
            "from": [
              "/important-information/rc-network-disclaimer"
            ]
          },
          {
            "to": "/getting-started/mainnet",
            "from": [
              "/getting-started/rc1"
            ]
          },
          {
            "to": "/getting-started/mainnet/running-a-full-node-in-mainnet",
            "from": [
              "/getting-started/rc1/running-a-full-node-in-rc1",
              "/getting-started/running-a-full-node-in-mainnet"
            ]
          },
          {
            "to": "/getting-started/mainnet/running-a-validator-in-mainnet",
            "from": [
              "/getting-started/rc1/running-a-validator-in-rc1",
              "/getting-started/running-a-validator-in-mainnet"
            ]
          },
          {
            "to": "/celo-owner-guide/quick-start",
            "from": [
              "/celo-gold-holder-guide/quick-start",
              "/celo-holder-guide/quick-start"
            ]
          },
          {
            "to": "/celo-owner-guide/voting-governance",
            "from": [
              "/celo-gold-holder-guide/voting-governance",
              "/celo-holder-guide/voting-governance"
            ]
          },
          {
            "to": "/celo-owner-guide/voting-validators",
            "from": [
              "/celo-gold-holder-guide/voting-validators",
              "/celo-holder-guide/voting-validators"
            ]
          },
          {
            "to": "/celo-owner-guide/cusd",
            "from": [
              "/celo-holder-guide/cusd"
            ]
          },
          {
            "to": "/celo-owner-guide/eth-recovery",
            "from": [
              "/celo-holder-guide/eth-recovery"
            ]
          },
          {
            "to": "/celo-owner-guide/celo-recovery",
            "from": [
              "/celo-holder-guide/celo-recovery"
            ]
          },
          {
            "to": "/developer-guide/overview",
            "from": [
              "/v/master/developer-guide/overview"
            ]
          },
          {
            "to": "/developer-guide/start",
            "from": [
              "/v/master/developer-guide/start"
            ]
          },
          {
            "to": "/command-line-interface/account",
            "from": [
              "/command-line-interface/commands/account"
            ]
          },
          {
            "to": "/command-line-interface/autocomplete",
            "from": [
              "/command-line-interface/commands/autocomplete"
            ]
          },
          {
            "to": "/command-line-interface/commands",
            "from": [
              "/command-line-interface/commands/commands"
            ]
          },
          {
            "to": "/command-line-interface/config",
            "from": [
              "/command-line-interface/commands/config"
            ]
          },
          {
            "to": "/command-line-interface/dkg",
            "from": [
              "/command-line-interface/commands/dkg"
            ]
          },
          {
            "to": "/command-line-interface/election",
            "from": [
              "/command-line-interface/commands/election"
            ]
          },
          {
            "to": "/command-line-interface/exchange",
            "from": [
              "/command-line-interface/commands/exchange"
            ]
          },
          {
            "to": "/command-line-interface/governance",
            "from": [
              "/command-line-interface/commands/governance"
            ]
          },
          {
            "to": "/command-line-interface/help",
            "from": [
              "/command-line-interface/commands/help"
            ]
          },
          {
            "to": "/command-line-interface/identity",
            "from": [
              "/command-line-interface/commands/identity"
            ]
          },
          {
            "to": "/command-line-interface/lockedgold",
            "from": [
              "/command-line-interface/commands/lockedgold"
            ]
          },
          {
            "to": "/command-line-interface/multisig",
            "from": [
              "/command-line-interface/commands/multisig"
            ]
          },
          {
            "to": "/command-line-interface/network",
            "from": [
              "/command-line-interface/commands/network"
            ]
          },
          {
            "to": "/command-line-interface/node",
            "from": [
              "/command-line-interface/commands/node"
            ]
          },
          {
            "to": "/command-line-interface/oracle",
            "from": [
              "/command-line-interface/commands/oracle"
            ]
          },
          {
            "to": "/command-line-interface/plugins",
            "from": [
              "/command-line-interface/commands/plugins"
            ]
          },
          {
            "to": "/command-line-interface/introduction",
            "from": [
              "/command-line-interface/commands/registry",
              "/command-line-interface/registry"
            ]
          },
          {
            "to": "/command-line-interface/releasegold",
            "from": [
              "/command-line-interface/commands/releasegold"
            ]
          },
          {
            "to": "/command-line-interface/reserve",
            "from": [
              "/command-line-interface/commands/reserve"
            ]
          },
          {
            "to": "/command-line-interface/rewards",
            "from": [
              "/command-line-interface/commands/rewards"
            ]
          },
          {
            "to": "/command-line-interface/transfer",
            "from": [
              "/command-line-interface/commands/transfer"
            ]
          },
          {
            "to": "/command-line-interface/validator",
            "from": [
              "/command-line-interface/commands/validator"
            ]
          },
          {
            "to": "/command-line-interface/validatorgroup",
            "from": [
              "/command-line-interface/commands/validatorgroup"
            ]
          }
        ]
      }
    ]
  ],
  "themeConfig": {
    "hideableSidebar": true,
    "prism": {
      "additionalLanguages": [
        "solidity"
      ],
      "theme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      }
    },
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "navbar": {
      "title": "ZSC Docs",
      "logo": {
        "alt": "Celo Logo",
        "src": "img/color-logo.png"
      },
      "items": [
        {
          "to": "developer-guide/overview",
          "label": "Build",
          "position": "left"
        },
        {
          "to": "validator-guide/overview",
          "label": "Validate",
          "position": "left"
        },
        {
          "to": "/community/contributing",
          "label": "Community",
          "position": "left"
        },
        {
          "to": "/blog",
          "label": "Learn",
          "position": "left"
        },
        {
          "to": "https://medium.com/celoorg",
          "label": "Blog",
          "position": "right"
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsAfter": [
            {
              "to": "https://celo.crowdin.com/",
              "label": "Help us translate"
            }
          ],
          "dropdownItemsBefore": []
        },
        {
          "href": "https://github.com/celo-org",
          "position": "right",
          "className": "header-github-link",
          "aria-label": "GitHub repository"
        }
      ],
      "hideOnScroll": false
    },
    "gtag": {
      "trackingID": "G-0CXEKQ81V2",
      "anonymizeIP": true
    },
    "algolia": {
      "appId": "55M4I38S60",
      "apiKey": "baed78b52be14ac907688f1dd70b41d5",
      "indexName": "celo",
      "contextualSearch": true,
      "debug": false,
      "searchParameters": {}
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Home",
              "to": "/"
            },
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "ZSC GitHub",
              "href": "https://github.com/zsc-ZTChain"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "href": "/community/contributing",
              "label": "Contributors"
            },
            {
              "label": "Telegram",
              "href": "https://t.me/joinchat/F8Tdpoi_71E2NTFl"
            },
            {
              "label": "Discord",
              "href": "https://t.me/joinchat/F8Tdpoi_71E2NTFl"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/ZSC_Chain"
            },
            {
              "label": "Reddit",
              "href": "https://t.me/joinchat/F8Tdpoi_71E2NTFl"
            }
          ]
        },
        {
          "title": "Ecosystem",
          "items": [
            {
              "label": "ZSC Dao",
              "href": "https://zsc.one/"
            },
            {
              "label": "Medium Blog",
              "href": "https://zsc.one/"
            },
            {
              "label": "ZSC Explore",
              "href": "https://en.zscscan.com/"
            },
            {
              "label": "ZSC Hub",
              "href": "https://zsc.one/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 ZSC Dao, Inc. Built with Docusaurus."
    },
    "fathomAnalytics": {
      "siteId": "AZMFWALB"
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    },
    "liveCodeBlock": {
      "playgroundPosition": "bottom"
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/youth/Documents/code/zsc-group/docs/sidebars.js",
          "routeBasePath": "/",
          "remarkPlugins": [
            null,
            [
              null,
              {
                "sync": true
              }
            ]
          ],
          "rehypePlugins": [
            null
          ]
        },
        "theme": {
          "customCss": "/Users/youth/Documents/code/zsc-group/docs/src/css/custom.css"
        },
        "blog": {
          "blogTitle": "Celo Blog",
          "blogSidebarTitle": "All posts",
          "blogSidebarCount": "ALL",
          "showReadingTime": true,
          "blogListComponent": "/Users/youth/Documents/code/zsc-group/docs/src/components/CustomBlogListPage.module.tsx"
        }
      }
    ]
  ],
  "stylesheets": [
    {
      "href": "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      "integrity": "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      "crossorigin": "anonymous"
    }
  ],
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "titleDelimiter": "|",
  "noIndex": false
};