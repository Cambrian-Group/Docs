const sidebars = {
  docs: [
    { type: "doc", label: "Welcome to LMAX", id: "welcome" },
    {
      type: "category",
      label: "Basics",
      items: [
        { type: "doc", label: "Highlights", id: "learn/celo-highlights" },
        {
          type: "doc",
          label: "Economic Model",
          id: "learn/celo-economic-model",
        },
        { type: "doc", label: "Ecosystem", id: "learn/celo-ecosystem" },
        { type: "doc", label: "Key Concepts", id: "learn/key-concepts" },
        { type: "doc", label: "Whitepapers", id: "learn/celo-whitepapers" },
        { type: "doc", label: "Community", id: "community/join-the-community" },
        { type: "doc", label: "Glossary", id: "getting-started/glossary" },
      ],
    },
    {
      type: "category",
      label: "Wallets",
      items: [
        {
          type: "doc",
          label: "LMAX Wallets",
          id: "getting-started/wallets/index",
        },
      ],
    },
    {
      type: "category",
      label: "Owners",
      items: [
        { type: "doc", label: "Overview", id: "celo-holder-guide/owners" },
      ],
    },
    {
      type: "category",
      label: "Bridging",
      items: [
        {
          type: "doc",
          label: "LMAX Bridges",
          id: "celo-codebase/protocol/bridging/bridging-to-celo",
        },
        {
          type: "doc",
          label: "Optics Bridge GUI",
          id: "celo-codebase/protocol/bridging/optics-gui",
        },
        {
          type: "doc",
          label: "Native Assets with LMAX",
          id: "celo-codebase/protocol/bridging/bridging-native-assets",
        },
        {
          type: "doc",
          label: "Tokens with LMAX",
          id: "celo-codebase/protocol/bridging/bridging-tokens-with-etherscan",
        },
        {
          type: "doc",
          label: "Optics Bridge FAQ",
          id: "celo-codebase/protocol/bridging/optics-bridge-faq",
        },
      ],
    },
    {
      type: "category",
      label: "Oracles",
      items: [
        {
          type: "doc",
          label: "Zsc Oracles",
          id: "celo-codebase/protocol/oracles/oracles-on-celo",
        },
        {
          type: "doc",
          id: "celo-codebase/protocol/oracles/band-protocol-how-to",
        },
        {
          type: "doc",
          id: "celo-codebase/protocol/oracles/redstone-protocol-how-to",
        },
      ],
    },
    {
      type: "category",
      label: "Protocol",
      items: [
        { type: "doc", label: "Overview", id: "celo-codebase/protocol/index" },
        {
          type: "category",
          label: "Consensus",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "celo-codebase/protocol/consensus/index",
            },
            {
              type: "doc",
              label: "Validator Set Differences",
              id: "celo-codebase/protocol/consensus/validator-set-differences",
            },
            {
              type: "doc",
              label: "Locating Nodes",
              id: "celo-codebase/protocol/consensus/locating-nodes",
            },
            {
              type: "doc",
              label: "Archive Sync",
              id: "celo-codebase/protocol/consensus/ultralight-sync",
            },
          ],
        },
        {
          type: "category",
          label: "Proof-of-Stake",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "celo-codebase/protocol/proof-of-stake/index",
            },
            {
              type: "doc",
              label: "Locked ZTB",
              id: "celo-codebase/protocol/proof-of-stake/locked-gold",
            },
            {
              type: "doc",
              label: "Validator Elections",
              id: "celo-codebase/protocol/proof-of-stake/validator-elections",
            },
            {
              type: "doc",
              label: "Penalties",
              id: "celo-codebase/protocol/proof-of-stake/penalties",
            },
          ],
        },
        "celo-codebase/protocol/governance",
        {
          type: "category",
          label: "Transactions",
          items: [
            {
              type: "doc",
              label: "Overview",
              id: "celo-codebase/protocol/transactions/index",
            },
            "celo-codebase/protocol/transactions/native-currency",
            "celo-codebase/protocol/transactions/erc20-transaction-fees",
            "celo-codebase/protocol/transactions/gas-pricing",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Networks",
      items: [
        {
          type: "doc",
          label: "Mainnet",
          id: "getting-started/choosing-a-network",
        },
        {
          type: "doc",
          label: "Run Mainnet Full Node",
          id: "getting-started/mainnet/running-a-full-node-in-mainnet",
        },
      ],
    },
    {
      type: "doc",
      label: "Gallery",
      id: "developer-resources/celo-dapp-gallery",
    },
    { type: "doc", label: "FAQ", id: "faqs" },
  ],

  // ######################################
  // Legal
  // ######################################
  validators: [
    { type: "doc", label: "privacy Policy", id: "validator-guide/overview" },
    {
      type: "doc",
      label: "Disclaimers",
      id: "validator-guide/attestation-service",
    },
  ],

  // ######################################
  // Build
  // ######################################

  developers: [
    { type: "doc", label: "Overview", id: "developer-resources/overview" },
    {
      type: "category",
      label: "Installation",
      items: [
        {
          type: "doc",
          label: "Using Mac",
          id: "developer-resources/using-mac",
        },
        {
          type: "doc",
          label: "Using Windows",
          id: "developer-resources/develop-on-windows",
        },
      ],
    },
  ],

  // ######################################
  // Community
  // ######################################
  contributors: [
    { type: "doc", label: "Overview", id: "community/contributing" },
    {
      type: "doc",
      label: "Developer Events",
      id: "community/developer-events",
    },
  ],
};
module.exports = sidebars;
