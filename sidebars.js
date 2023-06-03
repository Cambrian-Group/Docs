const sidebars = {
  docs: [
    { type: "doc", label: "Welcome to LMAX", id: "welcome" },
    {
      type: "category",
      label: "基础",
      items: [
        { type: "doc", label: "LMMF货币市场基金", id: "learn/celo-highlights" },
        {
          type: "doc",
          label: "TradeFi",
          id: "learn/celo-economic-model",
        },
        { type: "doc", label: "LMMF风险指标", id: "learn/celo-ecosystem" },
        { type: "doc", label: "资金管理", id: "learn/key-concepts" },
        { type: "doc", label: "资产策略", id: "learn/celo-whitepapers" },
        { type: "doc", label: "系统架构", id: "community/join-the-community" },
        { type: "doc", label: "资产流转", id: "getting-started/glossary" },
      ],
    },
    {
      type: "category",
      label: "如何运作",
      items: [
        {
          type: "doc",
          label: "提供流动性",
          id: "getting-started/wallets/index",
        },
        { 
          type: "doc",
          label: "链上货币市场基金",
           id: "celo-holder-guide/owners" ,
        },
      ],
    },
    {
      type: "category",
      label: "信任与安全",
      items: [
        { type: "doc", label: "安全模型", id: "celo-codebase/protocol/index" },
        { type: "doc", label: "信任",id: "celo-codebase/protocol/consensus/index"},
        { type: "doc", label: "审计",id: "celo-codebase/protocol/consensus/validator-set-differences"},

      ],
    },
    {
      type: "doc",
      label: "支持网络",
      id: "getting-started/choosing-a-network",
    },
    {
      type: "doc",
      label: "如何使用",
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
    { type: "doc", label: "视频直播", id: "community/contributing" },
    {
      type: "doc",
      label: "媒体报道",
      id: "community/developer-events",
    },
  ],
};
module.exports = sidebars;
