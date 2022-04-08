"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[6098],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,m=u["".concat(c,".").concat(k)]||u[k]||d[k]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61168:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=["components"],l={title:"Migrating to ContractKit v1.0",description:"How to migrate to the newest version of ContractKit and make use of its latest features.",slug:"/developer-guide/contractkit/migrating-to-contractkit-v1"},c="Migrating to ContractKit v1.0",s={unversionedId:"developer-resources/contractkit/migrating-to-contractkit-v1",id:"developer-resources/contractkit/migrating-to-contractkit-v1",title:"Migrating to ContractKit v1.0",description:"How to migrate to the newest version of ContractKit and make use of its latest features.",source:"@site/docs/developer-resources/contractkit/migrating-to-contractkit-v1.md",sourceDirName:"developer-resources/contractkit",slug:"/developer-guide/contractkit/migrating-to-contractkit-v1",permalink:"/developer-guide/contractkit/migrating-to-contractkit-v1",editUrl:"https://github.com/celo-org/docs/edit/main/docs/developer-resources/contractkit/migrating-to-contractkit-v1.md",tags:[],version:"current",frontMatter:{title:"Migrating to ContractKit v1.0",description:"How to migrate to the newest version of ContractKit and make use of its latest features.",slug:"/developer-guide/contractkit/migrating-to-contractkit-v1"},sidebar:"developers",previous:{title:"Querying on-chain identifiers with ODIS",permalink:"/developer-guide/contractkit/odis"},next:{title:"use-contractkit",permalink:"/developer-resources/use-contractkit"}},p=[{value:"What is ContractKit version v1.0?",id:"what-is-contractkit-version-v10",children:[],level:2},{value:"ContractKit packages",id:"contractkit-packages",children:[{value:"Main packages",id:"main-packages",children:[],level:3},{value:"Complementary Packages",id:"complementary-packages",children:[],level:3},{value:"Wallets and Wallet Utility packages",id:"wallets-and-wallet-utility-packages",children:[],level:3}],level:2},{value:"Importing packages",id:"importing-packages",children:[],level:2},{value:"Connecting to the network",id:"connecting-to-the-network",children:[{value:"Older versions of ContractKit:",id:"older-versions-of-contractkit",children:[],level:3},{value:"Version 1.x.y",id:"version-1xy",children:[],level:3}],level:2},{value:"Accessing Web3 functions",id:"accessing-web3-functions",children:[],level:2},{value:"Backward Compatibility",id:"backward-compatibility",children:[],level:2},{value:"<code>Connection</code> package",id:"connection-package",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrating-to-contractkit-v10"},"Migrating to ContractKit v1.0"),(0,r.kt)("p",null,"How to migrate to the newest version of ContractKit and make use of its latest features."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-is-contractkit-version-v10"},"What is ContractKit version v1.0?"),(0,r.kt)("p",null,"cLabs recently released ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/celoorg/contractkit-1-0-0-9c0412462d45"},"ContractKit version 1.0.0"),". In it, the original ContractKit package has been split into several separate packages that all make up the Celo SDK. This document explains the key differences and shows you how you can start using the updated SDK."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are using a previous version of ContractKit (anything below 1.0.0), you can continue using that version and you will only need to make the following changes when you upgrade."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The main benefit of using the new version include:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reduced bundle size"),(0,r.kt)("li",{parentName:"ul"},"Better Typescript support"),(0,r.kt)("li",{parentName:"ul"},"Improved maintenance by making it easier to use other libraries")),(0,r.kt)("h2",{id:"contractkit-packages"},"ContractKit packages"),(0,r.kt)("p",null,"ContractKit is now a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/sdk"},"suite of packages"),"."),(0,r.kt)("h3",{id:"main-packages"},"Main packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Connect")," handles how we communicate to the our chain nodes. It wraps the ",(0,r.kt)("inlineCode",{parentName:"li"},"web3")," library and has its own ",(0,r.kt)("inlineCode",{parentName:"li"},"rpcCaller")," class, to make custom calls to the node. It's the layer in charge of knowing how and which parameters are added by Celo, connect to the node, build the message, send it and handle those responses."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ContractKit")," is a reduced subset of the previous versions of ContractKit. This is the layer in charge of loading and using our ",(0,r.kt)("a",{parentName:"li",href:"/developer-guide/contractkit/contracts-wrappers-registry"},"core contracts"),". Internally, uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"connect")," package described above. It has our contracts generated from the ABIs, their wrappers, and also the logic to make claims.")),(0,r.kt)("h3",{id:"complementary-packages"},"Complementary Packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Explorer")," depends on ",(0,r.kt)("inlineCode",{parentName:"li"},"contractkit")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"connect"),". It provides some utility functions that make it easy to listen for new block and log information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Governance")," depends on ",(0,r.kt)("inlineCode",{parentName:"li"},"contractkit")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"explorer"),". It provides functions to read and interact with Celo Governance Proposals (CGPs)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Identity")," simplifies interacting with ",(0,r.kt)("a",{parentName:"li",href:"/developer-guide/contractkit/odis"},"ODIS"),", Celo\u2019s lightweight identity layer based on phone numbers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Network-utils")," provides utilities for getting genesis block and static node information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Transactions-uri")," makes it easy to generate Celo transaction URIs and QR codes.")),(0,r.kt)("h3",{id:"wallets-and-wallet-utility-packages"},"Wallets and Wallet Utility packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Wallet-hsm-azure")," is a Azure Key Vault implementation of a RemoteWallet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Wallet-hsm-aws")," allows you to easily interact with a cloud HSM wallet built on AWS KMS."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Wallet-ledger")," provides utilities for interacting with a Ledger hardware wallet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Wallet-local"),"provides utilities for locally managing wallet by importing a private key string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Wallet-rpc")," provides utilities for performing wallet functions via RPC."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Wallet-base")," provides base utilities for creating Celo wallets."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Wallet-hsm")," provides signature utilities for using HSMs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Wallet-remote")," provides utilities for interacting with remote wallets. This is useful for interacting with wallets on secure remote servers.")),(0,r.kt)("h2",{id:"importing-packages"},"Importing packages"),(0,r.kt)("p",null,"Importing the packages is slightly different now that many packages are separate from the main ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractKit")," package. You will have to explicitly import these packages instead of just importing all of them with ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractKit"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Previously this would work to import the block-explorer\nimport { newBlockExplorer } from '@celo/contractkit/lib/explorer/block-explorer'\n\n// With ContractKit v1.x.y, import the block-explorer explicitly\nimport { newBlockExplorer } from '@celo/explorer/lib/block-explorer'\n")),(0,r.kt)("h2",{id:"connecting-to-the-network"},"Connecting to the network"),(0,r.kt)("h3",{id:"older-versions-of-contractkit"},"Older versions of ContractKit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// version ^0.4.0 \nconst ContractKit = require('@celo/contractkit')\n\n// Older versions of ContractKit create a new Web3 instance internally \nconst kit = ContractKit.newKit('https://forno.celo.org')\n")),(0,r.kt)("h3",{id:"version-1xy"},"Version 1.x.y"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Since ContractKit no longer instantiates web3, you'll need to explicitly require it \nconst Web3 = require('web3') \nconst web3 = new Web3('https://forno.celo.org') \n\n// Require ContractKit and newKitFromWeb3 \nconst { ContractKit, newKitFromWeb3 } = require('@celo/contractkit') \nlet contractKit = newKitFromWeb3(web3)\n")),(0,r.kt)("h2",{id:"accessing-web3-functions"},"Accessing Web3 functions"),(0,r.kt)("p",null,"You can access ",(0,r.kt)("inlineCode",{parentName:"p"},"web3")," functions through the ",(0,r.kt)("inlineCode",{parentName:"p"},"connection")," module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// version ^0.4.0 \nlet amount = kit.web3.utils.fromWei("1000000", "ether")\n \n// version 1.x.y\nlet amount = kit.connection.web3.utils.fromWei("1000000", "ether")\n')),(0,r.kt)("h2",{id:"backward-compatibility"},"Backward Compatibility"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/blob/a7579fc9bdc0c1b4ce1d9fec702938accf82be2a/packages/sdk/contractkit/src/kit.ts#L278"},"These ContractKit functions")," will still work when accessed directly from ",(0,r.kt)("inlineCode",{parentName:"p"},"kit"),", but it is advised to consume it via ",(0,r.kt)("inlineCode",{parentName:"p"},"connection")," to avoid future deprecation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// This still works\nkit.addAccount\n\n// recommended:\nkit.connection.addAccount\n")),(0,r.kt)("h2",{id:"connection-package"},(0,r.kt)("inlineCode",{parentName:"h2"},"Connection")," package"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"connection")," package update includes implementations of some common web3 functions. Here are a few examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kit.web3.eth.isSyncing")," --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"kit.connection.isSyncing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kit.web3.eth.getBlock")," --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"kit.connection.getBlock")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kit.web3.eth.getBlockNumber")," --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"kit.connection.getBlockNumber")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kit.web3.eth.sign")," --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"kit.connection.sign")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kit.isListening")," --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"kit.connection.isListening")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kit.addAccount")," --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"kit.connection.addAccount"))))}u.isMDXComponent=!0}}]);