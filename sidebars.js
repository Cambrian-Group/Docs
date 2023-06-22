const sidebars = {
  docs: [
    { type: "doc", label: "Welcome to LMAX", id: "welcome" },
    {
      type: "category",
      label: "基础",
      items: [
        { type: "doc", label: "Lmax Group行业背景", id: "learn/celo-highlights" },
        {
          type: "doc",
          label: "Lmax Group技术优势",
          id: "learn/celo-economic-model",
        },
        { type: "doc", label: "系统架构", id: "learn/celo-ecosystem" },
        { type: "doc", label: "指数ETP", id: "learn/key-concepts" },
        { type: "doc", label: "指数ETP资产组合", id: "learn/celo-whitepapers" },
        { type: "doc", label: "资产策略", id: "community/join-the-community" },
        { type: "doc", label: "公告", id: "getting-started/glossary" },
      ],
    },
    {
      type: "category",
      label: "如何运作",
      items: [
        {
          type: "doc",
          label: "参与机构",
          id: "getting-started/wallets/index",
        },
        { 
          type: "doc",
          label: "运作流程",
           id: "celo-holder-guide/owners" ,
        },
      ],
    },
    {
      type: "category",
      label: "信任与安全",
      items: [
        { type: "doc", label: "安全模型", id: "celo-codebase/protocol/index" },
        { type: "doc", label: "信任与安全", id: "celo-codebase/protocol/consensus/index"},
      ],
    },
    {
      type: "doc",
      label: "支持通道",
      id: "getting-started/choosing-a-network",
    },
    {
      type: "doc",
      label: "如何参与",
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
    { type: "doc", label: "live video", id: "community/contributing" },
    {
      type: "doc",
      label: "media reports",
      id: "community/developer-events",
    },
  ],
};
module.exports = sidebars;
