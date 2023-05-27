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
  // validators
  // ######################################
  validators: [
    { type: "doc", label: "Overview", id: "validator-guide/overview" },
    {
      type: "doc",
      label: "Attestation Service",
      id: "validator-guide/attestation-service",
    },
    {
      type: "category",
      label: "Key Management",
      items: [
        {
          type: "doc",
          label: "Summary",
          id: "validator-guide/key-management/summary",
        },
        {
          type: "doc",
          label: "Key Management",
          id: "validator-guide/key-management/detailed",
        },
        {
          type: "doc",
          label: "Key Rotation",
          id: "validator-guide/key-management/key-rotation",
        },
      ],
    },
    {
      type: "doc",
      label: "Run Secure Nodes and Services",
      id: "validator-guide/securing-nodes-and-services",
    },
    { type: "doc", label: "Monitoring", id: "validator-guide/monitoring" },
    {
      type: "doc",
      label: "DevOps Best Practices",
      id: "validator-guide/devops-best-practices",
    },
    {
      type: "doc",
      label: "Node Upgrades",
      id: "validator-guide/node-upgrades",
    },
    { type: "doc", label: "Running Proxies", id: "validator-guide/proxy" },
    {
      type: "doc",
      label: "Validator Explorer",
      id: "validator-guide/validator-explorer",
    },
    {
      type: "doc",
      label: "Voting Policy",
      id: "validator-guide/celo-foundation-voting-policy",
    },
    { type: "doc", label: "Celo Signal", id: "validator-guide/celo-signal" },
    {
      type: "doc",
      label: "Validator FAQ",
      id: "getting-started/validator-troubleshooting-faq",
    },
  ],

  // ######################################
  // Developers
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
    {
      type: "category",
      label: "Wallet",
      items: [
        {
          type: "doc",
          label: "MetaMask",
          id: "developer-resources/testnet-wallet",
        },
        {
          type: "category",
          label: "Celo Wallet",
          items: [
            {
              type: "doc",
              label: "Celo Wallet",
              id: "celo-codebase/wallet/index",
            },
            {
              type: "doc",
              label: "Running the wallet locally",
              id: "celo-codebase/wallet/intro",
            },
            {
              type: "doc",
              label: "Using the Wallet",
              id: "getting-started/using-the-wallet",
            },
          ],
        },
        {
          type: "link",
          label: "Faucet",
          href: "https://celo.org/developers/faucet",
        },
      ],
    },
    {
      type: "category",
      label: "Tools",
      items: [
        { type: "doc", label: "Overview", id: "learn/developer-tools" },
        {
          type: "category",
          label: "SDKs",
          items: [
            {
              type: "category",
              label: "ContractKit",
              items: [
                {
                  type: "doc",
                  label: "Overview",
                  id: "developer-resources/contractkit/index",
                },
                {
                  type: "doc",
                  label: "Setup",
                  id: "developer-resources/contractkit/setup",
                },
                {
                  type: "doc",
                  label: "Usage",
                  id: "developer-resources/contractkit/usage",
                },
                {
                  type: "doc",
                  label: "Use Web3 from ContracKit",
                  id: "developer-resources/contractkit/notes-web3-with-contractkit",
                },
                {
                  type: "doc",
                  label: "Wrappers & Registry Contracts",
                  id: "developer-resources/contractkit/contracts-wrappers-registry",
                },
                {
                  type: "doc",
                  label: "Query On-Chain Identifiers with ODIS",
                  id: "developer-resources/contractkit/odis",
                },
                {
                  type: "doc",
                  label: "Migrate to ContractKit v1",
                  id: "developer-resources/contractkit/migrating-to-contractkit-v1",
                },
              ],
            },
            {
              type: "doc",
              label: "use-contractkit",
              id: "developer-resources/use-contractkit",
            },
            {
              type: "doc",
              label: "Ethers.JS Wrapper",
              id: "developer-resources/ethers-js-wrapper",
            },
            { type: "doc", label: "WalletConnect", id: "learn/walletconnect" },
            {
              type: "category",
              label: "DAppKit",
              items: [
                {
                  type: "doc",
                  label: "Overview",
                  id: "developer-resources/dappkit/index",
                },
                {
                  type: "doc",
                  label: "Setup",
                  id: "developer-resources/dappkit/setup",
                },
                {
                  type: "doc",
                  label: "Usage",
                  id: "developer-resources/dappkit/usage",
                },
              ],
            },
            {
              type: "link",
              label: "Command Line",
              href: "https://docs.celo.org/command-line-interface/introduction",
            },
          ],
        },
        {
          type: "category",
          label: "Infrastructure",
          items: [
            {
              type: "link",
              label: "BlockScout",
              href: "https://explorer.celo.org/",
            },
            {
              type: "link",
              label: "ODIS",
              href: "https://docs.celo.org/command-line-interface/introduction",
            },
            {
              type: "link",
              label: "The Graph",
              href: "https://thegraph.com/en/",
            },
            {
              type: "link",
              label: "DappLooker",
              href: "https://dapplooker.com/integration/celo",
            },
            {
              type: "link",
              label: "stats.celo.org",
              href: "https://stats.celo.org/",
            },
          ],
        },
        {
          type: "category",
          label: "Hosted Nodes",
          items: [
            {
              type: "doc",
              label: "Forno",
              id: "developer-resources/forno/index",
            },
          ],
        },
        {
          type: "doc",
          label: "Development Chain",
          id: "developer-resources/walkthroughs/development-chain",
        },
        {
          type: "doc",
          label: "Ethereum Tools",
          id: "learn/evm-compatible-tooling",
        },
      ],
    },
    {
      type: "category",
      label: "Deploy",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "developer-resources/deploy-dapp",
        },
        { type: "doc", label: "Remix", id: "developer-resources/deploy-remix" },
        {
          type: "doc",
          label: "Truffle",
          id: "developer-resources/deploy-truffle",
        },
        {
          type: "doc",
          label: "Hardhat",
          id: "developer-resources/deploy-hardhat",
        },
        {
          type: "doc",
          label: "Replit",
          id: "developer-resources/deploy-replit",
        },
      ],
    },
    {
      type: "category",
      label: "Integrate",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "developer-resources/integrations/integrations",
        },
        {
          type: "doc",
          label: "General",
          id: "developer-resources/integrations/general",
        },
        {
          type: "doc",
          label: "Checklist",
          id: "developer-resources/integrations/checklist",
        },
        {
          type: "doc",
          label: "Custody",
          id: "developer-resources/integrations/custody",
        },
        {
          type: "doc",
          label: "Listings",
          id: "developer-resources/integrations/listings",
        },
        {
          type: "doc",
          label: "Cloud HSM",
          id: "developer-resources/integrations/cloud-hsm",
        },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        // { type: 'doc', label: 'Introduction', id: 'developer-resources/start',},
        // { type: 'doc', label: 'Sending CELO & Stable Assets', id: 'developer-resources/walkthroughs/hellocelo',},
        // { type: 'doc', label: 'Deploy to a Local Node', id: 'developer-resources/walkthroughs/hellocontracts',},
        // { type: 'doc', label: 'Deploy to a Remote Node', id: 'developer-resources/walkthroughs/hello-contract-remote-node',},
        // 'developer-resources/walkthroughs/no-code-erc20',
        // 'developer-resources/walkthroughs/no-code-erc721',
        // 'developer-resources/walkthroughs/web-dapp',
        // { type: 'doc', label: 'Use onchain randomness', id: 'developer-resources/walkthroughs/randomness',},
        // { type: 'doc', label: 'Valora + Wallet Connect', id: 'developer-resources/walkthroughs/valora-wc-v1',},
        // { type: 'doc', label: 'Using Keystores', id: 'developer-resources/walkthroughs/using-js-keystores',},
        {
          type: "link",
          label: "Celo Tutorials",
          href: "https://docs.celo.org/blog",
        },
        {
          type: "link",
          label: "Figment | Celo 101",
          href: "https://learn.figment.io/protocols/celo/",
        },
        {
          type: "link",
          label: "Dacade | Celo 101",
          href: "https://dacade.org/communities/celo-development-101",
        },
      ],
    },
    {
      type: "category",
      label: "From another platform?",
      items: [
        {
          type: "doc",
          label: "Ethereum Developers",
          id: "developer-resources/celo-for-eth-devs",
        },
      ],
    },
    // TODO: This link will need to be changed when we move all the SDK type docs
    {
      type: "link",
      label: "SDK Code Reference",
      href: "https://celo-sdk-docs.readthedocs.io/",
    },
  ],

  // ######################################
  // Contributors
  // ######################################
  contributors: [
    { type: "doc", label: "Overview", id: "community/contributing" },
    {
      type: "doc",
      label: "Developer Events",
      id: "community/developer-events",
    },
    {
      type: "category",
      label: "Ambassadors",
      items: [
        { type: "doc", label: "Guidelines", id: "community/guidelines" },
        { type: "doc", label: "Code", id: "community/code-contributors" },
        {
          type: "doc",
          label: "Translation",
          id: "community/translation-contributors",
        },
        {
          type: "doc",
          label: "Documentation ",
          id: "community/documentation-contributors",
        },
        {
          type: "doc",
          label: "Community Improvements",
          id: "community/CIP-contributors",
        },
      ],
    },
    { type: "doc", label: "Code of Conduct", id: "community/code-of-conduct" },
    { type: "doc", label: "Grant Playbook", id: "community/grant-playbook" },
    {
      type: "category",
      label: " Release Process",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "community/release-process/README",
        },
        {
          type: "doc",
          label: "Smart Contracts",
          id: "community/release-process/smart-contracts",
        },
        {
          type: "doc",
          label: "Blockchain Client",
          id: "community/release-process/blockchain-client",
        },
        {
          type: "doc",
          label: "CeloCLI and ContractKit",
          id: "community/release-process/base-cli-contractkit-dappkit-utils",
        },
        {
          type: "doc",
          label: "Attestation Service",
          id: "community/release-process/attestation-service",
        },
      ],
    },
    {
      type: "category",
      label: "Important Information",
      items: [
        {
          type: "doc",
          label: "Alfajores Testnet Disclaimer",
          id: "important-information/alfajores-testnet-disclaimer",
        },
        {
          type: "doc",
          label: "Baklava Testnet Disclaimer",
          id: "important-information/baklava-testnet-disclaimer",
        },
        {
          type: "doc",
          label: "Mainnet Disclaimer",
          id: "important-information/mainnet-network-disclaimer",
        },
      ],
    },
    {
      type: "category",
      label: "Resources",
      items: [
        // { type: 'doc', label: 'Celo Onboarding', id: 'learn/celo-onboarding', },
        // { type: 'doc', label: 'Developer Onboarding', id: 'learn/developer-onboarding', },
        {
          type: "category",
          label: "Quick Guides",
          items: [
            { type: "doc", label: "Celo", id: "learn/celo-summary" },
            {
              type: "doc",
              label: "Celo Protocol",
              id: "learn/celo-protocol-summary",
            },
            { type: "doc", label: "Valora", id: "learn/valora-summary" },
            { type: "doc", label: "CELO", id: "learn/CELO-coin-summary" },
            {
              type: "doc",
              label: "Celo Stablecoins",
              id: "learn/platform-native-stablecoins-summary",
            },
          ],
        },
        // { type: 'doc', label: 'Figment Learn', id: 'learn/figment-learn', },
        { type: "doc", label: "Celo Resources", id: "learn/celo-resources" },
      ],
    },
  ],
};
module.exports = sidebars;
