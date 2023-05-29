
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog','d4c'),
    exact: true
  },
  {
    path: '/blog/2021/11/08/contributing',
    component: ComponentCreator('/blog/2021/11/08/contributing','e17'),
    exact: true
  },
  {
    path: '/blog/2021/11/15/code-playground',
    component: ComponentCreator('/blog/2021/11/15/code-playground','620'),
    exact: true
  },
  {
    path: '/blog/2021/11/16/connect-to-metamask',
    component: ComponentCreator('/blog/2021/11/16/connect-to-metamask','613'),
    exact: true
  },
  {
    path: '/blog/2021/11/18/observable-intro',
    component: ComponentCreator('/blog/2021/11/18/observable-intro','a2c'),
    exact: true
  },
  {
    path: '/blog/2021/11/18/using-the-graph',
    component: ComponentCreator('/blog/2021/11/18/using-the-graph','ef9'),
    exact: true
  },
  {
    path: '/blog/2021/11/30/hardhat-deploy-verify',
    component: ComponentCreator('/blog/2021/11/30/hardhat-deploy-verify','dc6'),
    exact: true
  },
  {
    path: '/blog/2021/12/06/addtokentocelowallet',
    component: ComponentCreator('/blog/2021/12/06/addtokentocelowallet','167'),
    exact: true
  },
  {
    path: '/blog/2021/12/31/using-js-keystores',
    component: ComponentCreator('/blog/2021/12/31/using-js-keystores','407'),
    exact: true
  },
  {
    path: '/blog/2022/01/01/hellocelo',
    component: ComponentCreator('/blog/2022/01/01/hellocelo','9e0'),
    exact: true
  },
  {
    path: '/blog/2022/01/02/hellocontracts',
    component: ComponentCreator('/blog/2022/01/02/hellocontracts','b43'),
    exact: true
  },
  {
    path: '/blog/2022/01/03/hello-contract-remote-node',
    component: ComponentCreator('/blog/2022/01/03/hello-contract-remote-node','766'),
    exact: true
  },
  {
    path: '/blog/2022/01/04/no-code-erc20',
    component: ComponentCreator('/blog/2022/01/04/no-code-erc20','6d8'),
    exact: true
  },
  {
    path: '/blog/2022/01/05/no-code-erc721',
    component: ComponentCreator('/blog/2022/01/05/no-code-erc721','048'),
    exact: true
  },
  {
    path: '/blog/2022/01/06/web-dapp',
    component: ComponentCreator('/blog/2022/01/06/web-dapp','9e5'),
    exact: true
  },
  {
    path: '/blog/2022/01/07/on-chain-randomness',
    component: ComponentCreator('/blog/2022/01/07/on-chain-randomness','af9'),
    exact: true
  },
  {
    path: '/blog/2022/01/08/valora-wc-v1',
    component: ComponentCreator('/blog/2022/01/08/valora-wc-v1','7b2'),
    exact: true
  },
  {
    path: '/blog/2022/02/21/introduction-to-celo-progressive-dappstarter',
    component: ComponentCreator('/blog/2022/02/21/introduction-to-celo-progressive-dappstarter','9f3'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/page/2',
    component: ComponentCreator('/blog/page/2','8a7'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/remove-index',
    component: ComponentCreator('/remove-index','df1'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','06a'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','632'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','35d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol',
        component: ComponentCreator('/celo-codebase/protocol','6c8'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/bridging/bridging-native-assets',
        component: ComponentCreator('/celo-codebase/protocol/bridging/bridging-native-assets','411'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/bridging/bridging-to-celo',
        component: ComponentCreator('/celo-codebase/protocol/bridging/bridging-to-celo','52b'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/bridging/bridging-tokens-with-etherscan',
        component: ComponentCreator('/celo-codebase/protocol/bridging/bridging-tokens-with-etherscan','f7b'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/bridging/migrating-to-optics-v2',
        component: ComponentCreator('/celo-codebase/protocol/bridging/migrating-to-optics-v2','3d9'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/bridging/optics-bridge-faq',
        component: ComponentCreator('/celo-codebase/protocol/bridging/optics-bridge-faq','8ba'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/bridging/optics-gui',
        component: ComponentCreator('/celo-codebase/protocol/bridging/optics-gui','da6'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/bridging/optics-gui-kr',
        component: ComponentCreator('/celo-codebase/protocol/bridging/optics-gui-kr','181'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/bridging/optics-gui-zh_cn',
        component: ComponentCreator('/celo-codebase/protocol/bridging/optics-gui-zh_cn','0a9'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/consensus',
        component: ComponentCreator('/celo-codebase/protocol/consensus','458'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/consensus/locating-nodes',
        component: ComponentCreator('/celo-codebase/protocol/consensus/locating-nodes','1b7'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/consensus/ultralight-sync',
        component: ComponentCreator('/celo-codebase/protocol/consensus/ultralight-sync','002'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/consensus/validator-set-differences',
        component: ComponentCreator('/celo-codebase/protocol/consensus/validator-set-differences','e3f'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/governance',
        component: ComponentCreator('/celo-codebase/protocol/governance','c2e'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/identity',
        component: ComponentCreator('/celo-codebase/protocol/identity','321'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/identity/metadata',
        component: ComponentCreator('/celo-codebase/protocol/identity/metadata','b25'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/identity/phone-number-privacy',
        component: ComponentCreator('/celo-codebase/protocol/identity/phone-number-privacy','c4d'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/identity/privacy-research',
        component: ComponentCreator('/celo-codebase/protocol/identity/privacy-research','e78'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/identity/randomness',
        component: ComponentCreator('/celo-codebase/protocol/identity/randomness','63b'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/identity/valora-accounts',
        component: ComponentCreator('/celo-codebase/protocol/identity/valora-accounts','280'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/optics',
        component: ComponentCreator('/celo-codebase/protocol/optics','4bd'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/oracles/band-protocol-how-to',
        component: ComponentCreator('/celo-codebase/protocol/oracles/band-protocol-how-to','ea9'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/oracles/oracles-on-celo',
        component: ComponentCreator('/celo-codebase/protocol/oracles/oracles-on-celo','7ef'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/oracles/redstone-protocol-how-to',
        component: ComponentCreator('/celo-codebase/protocol/oracles/redstone-protocol-how-to','376'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/plumo',
        component: ComponentCreator('/celo-codebase/protocol/plumo','874'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/proof-of-stake',
        component: ComponentCreator('/celo-codebase/protocol/proof-of-stake','d33'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/proof-of-stake/becoming-a-validator',
        component: ComponentCreator('/celo-codebase/protocol/proof-of-stake/becoming-a-validator','463'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/proof-of-stake/carbon-offsetting-fund',
        component: ComponentCreator('/celo-codebase/protocol/proof-of-stake/carbon-offsetting-fund','ee3'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/proof-of-stake/community-fund',
        component: ComponentCreator('/celo-codebase/protocol/proof-of-stake/community-fund','c79'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/proof-of-stake/epoch-rewards',
        component: ComponentCreator('/celo-codebase/protocol/proof-of-stake/epoch-rewards','12c'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/proof-of-stake/locked-gold',
        component: ComponentCreator('/celo-codebase/protocol/proof-of-stake/locked-gold','f01'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/proof-of-stake/locked-gold-rewards',
        component: ComponentCreator('/celo-codebase/protocol/proof-of-stake/locked-gold-rewards','aab'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/proof-of-stake/penalties',
        component: ComponentCreator('/celo-codebase/protocol/proof-of-stake/penalties','9c5'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/proof-of-stake/validator-elections',
        component: ComponentCreator('/celo-codebase/protocol/proof-of-stake/validator-elections','6db'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/proof-of-stake/validator-groups',
        component: ComponentCreator('/celo-codebase/protocol/proof-of-stake/validator-groups','909'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/proof-of-stake/validator-rewards',
        component: ComponentCreator('/celo-codebase/protocol/proof-of-stake/validator-rewards','730'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/stability',
        component: ComponentCreator('/celo-codebase/protocol/stability','b41'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/stability/adding_stable_assets',
        component: ComponentCreator('/celo-codebase/protocol/stability/adding_stable_assets','6e5'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/stability/doto',
        component: ComponentCreator('/celo-codebase/protocol/stability/doto','c08'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/stability/granda-mento',
        component: ComponentCreator('/celo-codebase/protocol/stability/granda-mento','d32'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/stability/oracles',
        component: ComponentCreator('/celo-codebase/protocol/stability/oracles','2a0'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/stability/stability-fees',
        component: ComponentCreator('/celo-codebase/protocol/stability/stability-fees','343'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/stability/tobin-tax',
        component: ComponentCreator('/celo-codebase/protocol/stability/tobin-tax','89d'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/transactions',
        component: ComponentCreator('/celo-codebase/protocol/transactions','970'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/transactions/erc20-transaction-fees',
        component: ComponentCreator('/celo-codebase/protocol/transactions/erc20-transaction-fees','108'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/transactions/escrow',
        component: ComponentCreator('/celo-codebase/protocol/transactions/escrow','cf8'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/transactions/full-node-incentives',
        component: ComponentCreator('/celo-codebase/protocol/transactions/full-node-incentives','dae'),
        exact: true
      },
      {
        path: '/celo-codebase/protocol/transactions/gas-pricing',
        component: ComponentCreator('/celo-codebase/protocol/transactions/gas-pricing','e70'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/transactions/native-currency',
        component: ComponentCreator('/celo-codebase/protocol/transactions/native-currency','911'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-codebase/protocol/transactions/tx-comment-encryption',
        component: ComponentCreator('/celo-codebase/protocol/transactions/tx-comment-encryption','b3d'),
        exact: true
      },
      {
        path: '/celo-codebase/style-guide/typescript',
        component: ComponentCreator('/celo-codebase/style-guide/typescript','a52'),
        exact: true
      },
      {
        path: '/celo-codebase/wallet',
        component: ComponentCreator('/celo-codebase/wallet','a8b'),
        exact: true
      },
      {
        path: '/celo-codebase/wallet/how-the-wallet-works',
        component: ComponentCreator('/celo-codebase/wallet/how-the-wallet-works','80c'),
        exact: true
      },
      {
        path: '/celo-codebase/wallet/how-the-wallet-works/invitations',
        component: ComponentCreator('/celo-codebase/wallet/how-the-wallet-works/invitations','6cc'),
        exact: true
      },
      {
        path: '/celo-codebase/wallet/how-the-wallet-works/sending-and-requesting-payments',
        component: ComponentCreator('/celo-codebase/wallet/how-the-wallet-works/sending-and-requesting-payments','4f9'),
        exact: true
      },
      {
        path: '/celo-codebase/wallet/how-the-wallet-works/ultralight-node-sync',
        component: ComponentCreator('/celo-codebase/wallet/how-the-wallet-works/ultralight-node-sync','d44'),
        exact: true
      },
      {
        path: '/celo-codebase/wallet/how-the-wallet-works/verification',
        component: ComponentCreator('/celo-codebase/wallet/how-the-wallet-works/verification','42c'),
        exact: true
      },
      {
        path: '/celo-codebase/wallet/intro',
        component: ComponentCreator('/celo-codebase/wallet/intro','8c9'),
        exact: true
      },
      {
        path: '/celo-holder-guide/connecting-ledger-celo-terminal-wallet',
        component: ComponentCreator('/celo-holder-guide/connecting-ledger-celo-terminal-wallet','17e'),
        exact: true
      },
      {
        path: '/celo-holder-guide/connecting-ledger-celo-web-wallet',
        component: ComponentCreator('/celo-holder-guide/connecting-ledger-celo-web-wallet','839'),
        exact: true
      },
      {
        path: '/celo-holder-guide/connecting-ledger-celocli',
        component: ComponentCreator('/celo-holder-guide/connecting-ledger-celocli','cee'),
        exact: true
      },
      {
        path: '/celo-holder-guide/overview',
        component: ComponentCreator('/celo-holder-guide/overview','128'),
        exact: true
      },
      {
        path: '/celo-holder-guide/owners',
        component: ComponentCreator('/celo-holder-guide/owners','fb8'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/celo-holder-guide/voting-governance',
        component: ComponentCreator('/celo-holder-guide/voting-governance','124'),
        exact: true
      },
      {
        path: '/celo-holder-guide/voting-validators',
        component: ComponentCreator('/celo-holder-guide/voting-validators','56b'),
        exact: true
      },
      {
        path: '/celo-owner-guide/celo-exchange-bot',
        component: ComponentCreator('/celo-owner-guide/celo-exchange-bot','e31'),
        exact: true
      },
      {
        path: '/celo-owner-guide/celo-recovery',
        component: ComponentCreator('/celo-owner-guide/celo-recovery','9ad'),
        exact: true
      },
      {
        path: '/celo-owner-guide/cusd',
        component: ComponentCreator('/celo-owner-guide/cusd','764'),
        exact: true
      },
      {
        path: '/celo-owner-guide/eth-recovery',
        component: ComponentCreator('/celo-owner-guide/eth-recovery','bac'),
        exact: true
      },
      {
        path: '/celo-owner-guide/governance-cheat-sheet',
        component: ComponentCreator('/celo-owner-guide/governance-cheat-sheet','f22'),
        exact: true
      },
      {
        path: '/celo-owner-guide/ledger',
        component: ComponentCreator('/celo-owner-guide/ledger','d47'),
        exact: true
      },
      {
        path: '/celo-owner-guide/quick-start',
        component: ComponentCreator('/celo-owner-guide/quick-start','26a'),
        exact: true
      },
      {
        path: '/celo-owner-guide/release-gold',
        component: ComponentCreator('/celo-owner-guide/release-gold','9b1'),
        exact: true
      },
      {
        path: '/community/CIP-contributors',
        component: ComponentCreator('/community/CIP-contributors','6de'),
        exact: true
      },
      {
        path: '/community/code-contributors',
        component: ComponentCreator('/community/code-contributors','d3a'),
        exact: true
      },
      {
        path: '/community/code-of-conduct',
        component: ComponentCreator('/community/code-of-conduct','fe0'),
        exact: true
      },
      {
        path: '/community/contributing',
        component: ComponentCreator('/community/contributing','16c'),
        exact: true,
        'sidebar': "contributors"
      },
      {
        path: '/community/developer-events',
        component: ComponentCreator('/community/developer-events','a7d'),
        exact: true,
        'sidebar': "contributors"
      },
      {
        path: '/community/documentation-contributors',
        component: ComponentCreator('/community/documentation-contributors','53b'),
        exact: true
      },
      {
        path: '/community/grant-playbook',
        component: ComponentCreator('/community/grant-playbook','0bd'),
        exact: true
      },
      {
        path: '/community/guidelines',
        component: ComponentCreator('/community/guidelines','c51'),
        exact: true
      },
      {
        path: '/community/join-the-community',
        component: ComponentCreator('/community/join-the-community','4a1'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/community/release-process',
        component: ComponentCreator('/community/release-process','de0'),
        exact: true
      },
      {
        path: '/community/release-process/attestation-service',
        component: ComponentCreator('/community/release-process/attestation-service','93a'),
        exact: true
      },
      {
        path: '/community/release-process/base-cli-contractkit-dappkit-utils',
        component: ComponentCreator('/community/release-process/base-cli-contractkit-dappkit-utils','2a0'),
        exact: true
      },
      {
        path: '/community/release-process/blockchain-client',
        component: ComponentCreator('/community/release-process/blockchain-client','2be'),
        exact: true
      },
      {
        path: '/community/release-process/smart-contracts',
        component: ComponentCreator('/community/release-process/smart-contracts','10b'),
        exact: true
      },
      {
        path: '/community/translation-contributors',
        component: ComponentCreator('/community/translation-contributors','96b'),
        exact: true
      },
      {
        path: '/developer-guide/celo-dapp-gallery',
        component: ComponentCreator('/developer-guide/celo-dapp-gallery','17d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/developer-guide/celo-for-eth-devs',
        component: ComponentCreator('/developer-guide/celo-for-eth-devs','467'),
        exact: true
      },
      {
        path: '/developer-guide/contractkit',
        component: ComponentCreator('/developer-guide/contractkit','eb9'),
        exact: true
      },
      {
        path: '/developer-guide/contractkit/contracts-wrappers-registry',
        component: ComponentCreator('/developer-guide/contractkit/contracts-wrappers-registry','be8'),
        exact: true
      },
      {
        path: '/developer-guide/contractkit/migrating-to-contractkit-v1',
        component: ComponentCreator('/developer-guide/contractkit/migrating-to-contractkit-v1','4e0'),
        exact: true
      },
      {
        path: '/developer-guide/contractkit/notes-web3-with-contractkit',
        component: ComponentCreator('/developer-guide/contractkit/notes-web3-with-contractkit','027'),
        exact: true
      },
      {
        path: '/developer-guide/contractkit/odis',
        component: ComponentCreator('/developer-guide/contractkit/odis','1a7'),
        exact: true
      },
      {
        path: '/developer-guide/contractkit/setup',
        component: ComponentCreator('/developer-guide/contractkit/setup','e21'),
        exact: true
      },
      {
        path: '/developer-guide/contractkit/usage',
        component: ComponentCreator('/developer-guide/contractkit/usage','489'),
        exact: true
      },
      {
        path: '/developer-guide/dappkit',
        component: ComponentCreator('/developer-guide/dappkit','00f'),
        exact: true
      },
      {
        path: '/developer-guide/dappkit/setup',
        component: ComponentCreator('/developer-guide/dappkit/setup','a6e'),
        exact: true
      },
      {
        path: '/developer-guide/dappkit/usage',
        component: ComponentCreator('/developer-guide/dappkit/usage','ff7'),
        exact: true
      },
      {
        path: '/developer-guide/development-chain',
        component: ComponentCreator('/developer-guide/development-chain','f02'),
        exact: true
      },
      {
        path: '/developer-guide/forno',
        component: ComponentCreator('/developer-guide/forno','258'),
        exact: true
      },
      {
        path: '/developer-guide/integrations',
        component: ComponentCreator('/developer-guide/integrations','595'),
        exact: true
      },
      {
        path: '/developer-guide/integrations/checklist',
        component: ComponentCreator('/developer-guide/integrations/checklist','8af'),
        exact: true
      },
      {
        path: '/developer-guide/integrations/cloud-hsm',
        component: ComponentCreator('/developer-guide/integrations/cloud-hsm','542'),
        exact: true
      },
      {
        path: '/developer-guide/integrations/custody',
        component: ComponentCreator('/developer-guide/integrations/custody','72b'),
        exact: true
      },
      {
        path: '/developer-guide/integrations/general',
        component: ComponentCreator('/developer-guide/integrations/general','82d'),
        exact: true
      },
      {
        path: '/developer-guide/integrations/listings',
        component: ComponentCreator('/developer-guide/integrations/listings','6c7'),
        exact: true
      },
      {
        path: '/developer-guide/overview',
        component: ComponentCreator('/developer-guide/overview','c74'),
        exact: true,
        'sidebar': "developers"
      },
      {
        path: '/developer-guide/start',
        component: ComponentCreator('/developer-guide/start','3aa'),
        exact: true
      },
      {
        path: '/developer-guide/start/develop-on-windows',
        component: ComponentCreator('/developer-guide/start/develop-on-windows','07d'),
        exact: true,
        'sidebar': "developers"
      },
      {
        path: '/developer-guide/start/hello-contract-remote-node',
        component: ComponentCreator('/developer-guide/start/hello-contract-remote-node','439'),
        exact: true
      },
      {
        path: '/developer-guide/start/hellocelo',
        component: ComponentCreator('/developer-guide/start/hellocelo','2ac'),
        exact: true
      },
      {
        path: '/developer-guide/start/hellocontracts',
        component: ComponentCreator('/developer-guide/start/hellocontracts','3eb'),
        exact: true
      },
      {
        path: '/developer-guide/start/randomness',
        component: ComponentCreator('/developer-guide/start/randomness','42e'),
        exact: true
      },
      {
        path: '/developer-guide/start/using-js-keystores',
        component: ComponentCreator('/developer-guide/start/using-js-keystores','8f2'),
        exact: true
      },
      {
        path: '/developer-guide/start/web-dapp',
        component: ComponentCreator('/developer-guide/start/web-dapp','e02'),
        exact: true
      },
      {
        path: '/developer-resources/contractkit/data-encryption-key',
        component: ComponentCreator('/developer-resources/contractkit/data-encryption-key','448'),
        exact: true
      },
      {
        path: '/developer-resources/deploy-dapp',
        component: ComponentCreator('/developer-resources/deploy-dapp','2ae'),
        exact: true
      },
      {
        path: '/developer-resources/deploy-hardhat',
        component: ComponentCreator('/developer-resources/deploy-hardhat','fab'),
        exact: true
      },
      {
        path: '/developer-resources/deploy-remix',
        component: ComponentCreator('/developer-resources/deploy-remix','487'),
        exact: true
      },
      {
        path: '/developer-resources/deploy-replit',
        component: ComponentCreator('/developer-resources/deploy-replit','ee9'),
        exact: true
      },
      {
        path: '/developer-resources/deploy-truffle',
        component: ComponentCreator('/developer-resources/deploy-truffle','872'),
        exact: true
      },
      {
        path: '/developer-resources/ethers-js-wrapper',
        component: ComponentCreator('/developer-resources/ethers-js-wrapper','e78'),
        exact: true
      },
      {
        path: '/developer-resources/networks/alfajores-testnet',
        component: ComponentCreator('/developer-resources/networks/alfajores-testnet','ff5'),
        exact: true
      },
      {
        path: '/developer-resources/networks/baklava-testnet',
        component: ComponentCreator('/developer-resources/networks/baklava-testnet','1ce'),
        exact: true
      },
      {
        path: '/developer-resources/networks/celo-mainnet',
        component: ComponentCreator('/developer-resources/networks/celo-mainnet','821'),
        exact: true
      },
      {
        path: '/developer-resources/reference',
        component: ComponentCreator('/developer-resources/reference','28a'),
        exact: true
      },
      {
        path: '/developer-resources/style-guide/typescript',
        component: ComponentCreator('/developer-resources/style-guide/typescript','0c2'),
        exact: true
      },
      {
        path: '/developer-resources/testnet-wallet',
        component: ComponentCreator('/developer-resources/testnet-wallet','a44'),
        exact: true
      },
      {
        path: '/developer-resources/use-contractkit',
        component: ComponentCreator('/developer-resources/use-contractkit','0a8'),
        exact: true
      },
      {
        path: '/developer-resources/using-mac',
        component: ComponentCreator('/developer-resources/using-mac','1e2'),
        exact: true,
        'sidebar': "developers"
      },
      {
        path: '/developer-resources/walkthroughs',
        component: ComponentCreator('/developer-resources/walkthroughs','b56'),
        exact: true
      },
      {
        path: '/developer-resources/walkthroughs/hellodapp',
        component: ComponentCreator('/developer-resources/walkthroughs/hellodapp','c1a'),
        exact: true
      },
      {
        path: '/developer-resources/walkthroughs/hellodeploy',
        component: ComponentCreator('/developer-resources/walkthroughs/hellodeploy','397'),
        exact: true
      },
      {
        path: '/developer-resources/walkthroughs/no-code-erc20',
        component: ComponentCreator('/developer-resources/walkthroughs/no-code-erc20','4d9'),
        exact: true
      },
      {
        path: '/developer-resources/walkthroughs/no-code-erc721',
        component: ComponentCreator('/developer-resources/walkthroughs/no-code-erc721','939'),
        exact: true
      },
      {
        path: '/developer-resources/walkthroughs/valora-wc-v1',
        component: ComponentCreator('/developer-resources/walkthroughs/valora-wc-v1','4da'),
        exact: true
      },
      {
        path: '/faqs',
        component: ComponentCreator('/faqs','4fa'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/getting-started/alfajores-testnet',
        component: ComponentCreator('/getting-started/alfajores-testnet','17e'),
        exact: true
      },
      {
        path: '/getting-started/alfajores-testnet/faucet',
        component: ComponentCreator('/getting-started/alfajores-testnet/faucet','1e2'),
        exact: true
      },
      {
        path: '/getting-started/alfajores-testnet/running-a-full-node-in-alfajores',
        component: ComponentCreator('/getting-started/alfajores-testnet/running-a-full-node-in-alfajores','c78'),
        exact: true
      },
      {
        path: '/getting-started/alfajores-testnet/using-the-mobile-wallet',
        component: ComponentCreator('/getting-started/alfajores-testnet/using-the-mobile-wallet','8e5'),
        exact: true
      },
      {
        path: '/getting-started/baklava-testnet',
        component: ComponentCreator('/getting-started/baklava-testnet','c34'),
        exact: true
      },
      {
        path: '/getting-started/baklava-testnet/running-a-full-node-in-baklava',
        component: ComponentCreator('/getting-started/baklava-testnet/running-a-full-node-in-baklava','969'),
        exact: true
      },
      {
        path: '/getting-started/baklava-testnet/running-a-validator-in-baklava',
        component: ComponentCreator('/getting-started/baklava-testnet/running-a-validator-in-baklava','3f2'),
        exact: true
      },
      {
        path: '/getting-started/choosing-a-network',
        component: ComponentCreator('/getting-started/choosing-a-network','f80'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/getting-started/glossary',
        component: ComponentCreator('/getting-started/glossary','390'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/getting-started/hosted-nodes',
        component: ComponentCreator('/getting-started/hosted-nodes','786'),
        exact: true
      },
      {
        path: '/getting-started/mainnet',
        component: ComponentCreator('/getting-started/mainnet','bed'),
        exact: true
      },
      {
        path: '/getting-started/mainnet/running-a-full-node-in-mainnet',
        component: ComponentCreator('/getting-started/mainnet/running-a-full-node-in-mainnet','935'),
        exact: true
      },
      {
        path: '/getting-started/mainnet/running-a-validator-in-mainnet',
        component: ComponentCreator('/getting-started/mainnet/running-a-validator-in-mainnet','ef6'),
        exact: true
      },
      {
        path: '/getting-started/using-the-wallet',
        component: ComponentCreator('/getting-started/using-the-wallet','d74'),
        exact: true
      },
      {
        path: '/getting-started/validator-troubleshooting-faq',
        component: ComponentCreator('/getting-started/validator-troubleshooting-faq','614'),
        exact: true
      },
      {
        path: '/getting-started/wallets',
        component: ComponentCreator('/getting-started/wallets','4d6'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/getting-started/wallets/using-metamask-with-celo',
        component: ComponentCreator('/getting-started/wallets/using-metamask-with-celo','fdc'),
        exact: true
      },
      {
        path: '/getting-started/wallets/using-metamask-with-celo/manual-setup',
        component: ComponentCreator('/getting-started/wallets/using-metamask-with-celo/manual-setup','0e4'),
        exact: true
      },
      {
        path: '/getting-started/wallets/using-metamask-with-celo/metamask-valora-import',
        component: ComponentCreator('/getting-started/wallets/using-metamask-with-celo/metamask-valora-import','020'),
        exact: true
      },
      {
        path: '/getting-started/wallets/using-metamask-with-celo/programmatic-setup',
        component: ComponentCreator('/getting-started/wallets/using-metamask-with-celo/programmatic-setup','1d4'),
        exact: true
      },
      {
        path: '/getting-started/wallets/using-metamask-with-celo/using-a-ledger-with-metamask',
        component: ComponentCreator('/getting-started/wallets/using-metamask-with-celo/using-a-ledger-with-metamask','571'),
        exact: true
      },
      {
        path: '/important-information/alfajores-testnet-disclaimer',
        component: ComponentCreator('/important-information/alfajores-testnet-disclaimer','9f4'),
        exact: true
      },
      {
        path: '/important-information/baklava-testnet-disclaimer',
        component: ComponentCreator('/important-information/baklava-testnet-disclaimer','46b'),
        exact: true
      },
      {
        path: '/important-information/mainnet-network-disclaimer',
        component: ComponentCreator('/important-information/mainnet-network-disclaimer','438'),
        exact: true
      },
      {
        path: '/key-concepts',
        component: ComponentCreator('/key-concepts','81d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/learn/CELO-coin-summary',
        component: ComponentCreator('/learn/CELO-coin-summary','03c'),
        exact: true
      },
      {
        path: '/learn/celo-economic-model',
        component: ComponentCreator('/learn/celo-economic-model','d6a'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/learn/celo-ecosystem',
        component: ComponentCreator('/learn/celo-ecosystem','b3d'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/learn/celo-highlights',
        component: ComponentCreator('/learn/celo-highlights','742'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/learn/celo-milestones',
        component: ComponentCreator('/learn/celo-milestones','216'),
        exact: true
      },
      {
        path: '/learn/celo-onboarding',
        component: ComponentCreator('/learn/celo-onboarding','a8f'),
        exact: true
      },
      {
        path: '/learn/celo-overview',
        component: ComponentCreator('/learn/celo-overview','b4e'),
        exact: true
      },
      {
        path: '/learn/celo-protocol',
        component: ComponentCreator('/learn/celo-protocol','529'),
        exact: true
      },
      {
        path: '/learn/celo-protocol-summary',
        component: ComponentCreator('/learn/celo-protocol-summary','4f8'),
        exact: true
      },
      {
        path: '/learn/celo-resources',
        component: ComponentCreator('/learn/celo-resources','c73'),
        exact: true
      },
      {
        path: '/learn/celo-stack',
        component: ComponentCreator('/learn/celo-stack','8c0'),
        exact: true
      },
      {
        path: '/learn/celo-summary',
        component: ComponentCreator('/learn/celo-summary','166'),
        exact: true
      },
      {
        path: '/learn/celo-whitepapers',
        component: ComponentCreator('/learn/celo-whitepapers','832'),
        exact: true,
        'sidebar': "docs"
      },
      {
        path: '/learn/developer-onboarding',
        component: ComponentCreator('/learn/developer-onboarding','c51'),
        exact: true
      },
      {
        path: '/learn/developer-tools',
        component: ComponentCreator('/learn/developer-tools','f83'),
        exact: true
      },
      {
        path: '/learn/evm-compatible-tooling',
        component: ComponentCreator('/learn/evm-compatible-tooling','05e'),
        exact: true
      },
      {
        path: '/learn/figment-learn',
        component: ComponentCreator('/learn/figment-learn','789'),
        exact: true
      },
      {
        path: '/learn/platform-native-stablecoins-summary',
        component: ComponentCreator('/learn/platform-native-stablecoins-summary','679'),
        exact: true
      },
      {
        path: '/learn/topology-of-a-celo-network',
        component: ComponentCreator('/learn/topology-of-a-celo-network','12e'),
        exact: true
      },
      {
        path: '/learn/valora-summary',
        component: ComponentCreator('/learn/valora-summary','c5c'),
        exact: true
      },
      {
        path: '/learn/walletconnect',
        component: ComponentCreator('/learn/walletconnect','b49'),
        exact: true
      },
      {
        path: '/overview',
        component: ComponentCreator('/overview','224'),
        exact: true
      },
      {
        path: '/validator-guide/attestation-service',
        component: ComponentCreator('/validator-guide/attestation-service','b6b'),
        exact: true,
        'sidebar': "validators"
      },
      {
        path: '/validator-guide/celo-foundation-voting-policy',
        component: ComponentCreator('/validator-guide/celo-foundation-voting-policy','1d3'),
        exact: true
      },
      {
        path: '/validator-guide/celo-signal',
        component: ComponentCreator('/validator-guide/celo-signal','0aa'),
        exact: true
      },
      {
        path: '/validator-guide/devops-best-practices',
        component: ComponentCreator('/validator-guide/devops-best-practices','2d9'),
        exact: true
      },
      {
        path: '/validator-guide/monitoring',
        component: ComponentCreator('/validator-guide/monitoring','2f6'),
        exact: true
      },
      {
        path: '/validator-guide/node-upgrades',
        component: ComponentCreator('/validator-guide/node-upgrades','c58'),
        exact: true
      },
      {
        path: '/validator-guide/overview',
        component: ComponentCreator('/validator-guide/overview','972'),
        exact: true,
        'sidebar': "validators"
      },
      {
        path: '/validator-guide/proxy',
        component: ComponentCreator('/validator-guide/proxy','c1c'),
        exact: true
      },
      {
        path: '/validator-guide/securing-nodes-and-services',
        component: ComponentCreator('/validator-guide/securing-nodes-and-services','823'),
        exact: true
      },
      {
        path: '/validator-guide/summary',
        component: ComponentCreator('/validator-guide/summary','2c1'),
        exact: true
      },
      {
        path: '/validator-guide/summary/detailed',
        component: ComponentCreator('/validator-guide/summary/detailed','b0e'),
        exact: true
      },
      {
        path: '/validator-guide/summary/key-rotation',
        component: ComponentCreator('/validator-guide/summary/key-rotation','dc2'),
        exact: true
      },
      {
        path: '/validator-guide/validator-explorer',
        component: ComponentCreator('/validator-guide/validator-explorer','c6f'),
        exact: true
      },
      {
        path: '/why-celo',
        component: ComponentCreator('/why-celo','b26'),
        exact: true
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
