export default {
  "title": "LMAX Docs",
  "tagline": "LMAX Group",
  "url": "https://docs.lmax.pro",
  "baseUrl": "/",
  "trailingSlash": false,
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/color-favicon.png",
  "organizationName": "Lmax Group",
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
    "/Users/youth/Documents/code/Docs/node_modules/docusaurus-plugin-fathom/src/index.js",
    "/Users/youth/Documents/code/Docs/src/plugins/aliases.ts",
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
      "title": "LMAX  Docs",
      "logo": {
        "alt": "LMAX Logo",
        "src": "img/color-logo.png"
      },
      "items": [
        {
          "to": "validator-guide/overview",
          "label": "Legal",
          "position": "left"
        },
        {
          "to": "/community/contributing",
          "label": "Community",
          "position": "left"
        },
        {
          "to": "https://www.lmax.com/blog/",
          "label": "Blog",
          "position": "right"
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsAfter": [],
          "dropdownItemsBefore": []
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
          "title": "About LMAX",
          "items": [
            {
              "label": "LMAX Group",
              "to": "https://www.lmax.com/"
            },
            {
              "label": "LMAX Exchange ",
              "to": "https://www.lmax.com/exchange"
            },
            {
              "label": "LMAX Digital",
              "href": "https://www.lmaxdigital.com/"
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
              "label": "Youtobe",
              "href": "https://www.youtube.com/@LMAXGroup"
            },
            {
              "label": "Discord",
              "href": "https://discord.gg/EhCjWb9A"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/LmaxAsset"
            },
            {
              "label": "Reddit",
              "href": "https://t.me/joinchat/F8Tdpoi_71E2NTFl"
            },
            {
              "label": "Facebook",
              "href": "https://www.facebook.com/dmcsingular"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2023 LMAX Group, Inc. Built with Docusaurus."
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
          "sidebarPath": "/Users/youth/Documents/code/Docs/sidebars.js",
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
          "customCss": "/Users/youth/Documents/code/Docs/src/css/custom.css"
        },
        "blog": {
          "blogTitle": "Lmax Blog",
          "blogSidebarTitle": "All posts",
          "blogSidebarCount": "ALL",
          "showReadingTime": true,
          "blogListComponent": "/Users/youth/Documents/code/Docs/src/components/CustomBlogListPage.module.tsx"
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