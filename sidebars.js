const sidebars = {
  docs: [
    { type: "doc", label: "Welcome to CoinShare ETP", id: "welcome" },
    {
      type: "category",
      label: "基础",
      items: [
        { type: "doc", label: "CoinShares 行业背景", id: "learn/celo-highlights" },
        {
          type: "doc",
          label: "CoinShares 技术优势",
          id: "learn/celo-economic-model",
        },
        { type: "doc", label: "系统架构", id: "learn/celo-ecosystem" },
        { type: "doc", label: "指数ETP", id: "learn/key-concepts" },
        { type: "doc", label: "指数ETP资产组合", id: "learn/celo-whitepapers" },
        { type: "doc", label: "报告", id: "community/join-the-community" },
        { type: "doc", label: "公告", id: "getting-started/glossary" },
      ],
    },
    {
      type: "category",
      label: "签约",
      items: [
        {
          type: "doc",
          label: "专业投资者",
          id: "getting-started/wallets/index",
        },
        { 
          type: "doc",
          label: "非机构投资者",
           id: "celo-holder-guide/owners" ,
        },
      ],
    },
    {
      type: "category",
      label: "Trust and safety",
      items: [
        { type: "doc", label: "Trust and safety", id: "celo-codebase/protocol/index" },
        { type: "doc", label: "Security model", id: "celo-codebase/protocol/consensus/index"},
      ],
    },
    { type: "doc", label: "FAQ", id: "faqs" },
  ],

  // ######################################
  // Legal
  // ######################################
  validators: [
    { type: "doc", label: "Risk policy", id: "validator-guide/overview" },
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
    { type: "doc", label: "live video", id: "community/contributing" },
    {
      type: "doc",
      label: "media reports",
      id: "community/developer-events",
    },
  ],
};
module.exports = sidebars;
