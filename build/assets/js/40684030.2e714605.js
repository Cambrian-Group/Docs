"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[3307],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=s(n),u=a,m=h["".concat(c,".").concat(u)]||h[u]||p[u]||r;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79022:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return h}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],l={title:"Deploy with Hardhat",description:"How to deploy a Smart Contract to Celo using Hardhat"},c="Deploy on Celo with Hardhat",s={unversionedId:"developer-resources/deploy-hardhat",id:"developer-resources/deploy-hardhat",title:"Deploy with Hardhat",description:"How to deploy a Smart Contract to Celo using Hardhat",source:"@site/docs/developer-resources/deploy-hardhat.md",sourceDirName:"developer-resources",slug:"/developer-resources/deploy-hardhat",permalink:"/developer-resources/deploy-hardhat",editUrl:"",tags:[],version:"current",frontMatter:{title:"Deploy with Hardhat",description:"How to deploy a Smart Contract to Celo using Hardhat"}},d=[{value:"Introduction to Hardhat",id:"introduction-to-hardhat",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Create Hardhat Project",id:"create-hardhat-project",children:[],level:2},{value:"Update the hardhat.config.js file",id:"update-the-hardhatconfigjs-file",children:[{value:"Connect to Local Network",id:"connect-to-local-network",children:[],level:3},{value:"Connect to Testnet using Forno",id:"connect-to-testnet-using-forno",children:[],level:3},{value:"Connect to Mainnet using Forno",id:"connect-to-mainnet-using-forno",children:[],level:3}],level:2},{value:"Deploy to Celo",id:"deploy-to-celo",children:[],level:2},{value:"View Contract Deployment",id:"view-contract-deployment",children:[],level:2},{value:"Verify Smart Contract",id:"verify-smart-contract",children:[{value:"Using Blockscout",id:"using-blockscout",children:[],level:3},{value:"Hardhat-deploy plugin",id:"hardhat-deploy-plugin",children:[],level:3}],level:2}],p={toc:d};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-on-celo-with-hardhat"},"Deploy on Celo with Hardhat"),(0,r.kt)("p",null,"How to deploy a smart contract to Celo testnet, mainnet, or a local network using ",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"introduction-to-hardhat"},"Introduction to Hardhat"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat")," is a development environment to compile, deploy, test, and debug your Ethereum or Celo software. It helps developers manage and automate the recurring tasks that are inherent to the process of building smart contracts and dApps, as well as easily introducing more functionality around this workflow. This means compiling, running, and testing smart contracts at the very core."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To deploy on Celo using Hardhat, you should have Celo set up Celo in your local environment. If you prefer to deploy without a local environment, you can deploy using Remix or Replit."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/developer-guide/start/develop-on-windows"},"Using Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/developer-resources/using-mac"},"Using Mac"))),(0,r.kt)("h2",{id:"create-hardhat-project"},"Create Hardhat Project"),(0,r.kt)("p",null,"Choose one of the following items to prepare a dApp to deploy on Celo."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Follow the ",(0,r.kt)("a",{parentName:"li",href:"https://hardhat.org/getting-started/#installation"},"installation instructions and quickstart")," to build and deploy your smart contract. ")),(0,r.kt)("h2",{id:"update-the-hardhatconfigjs-file"},"Update the hardhat.config.js file"),(0,r.kt)("p",null,"Open ",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/config/"},"hardhat-config.js")," in a text editor and replace its contents with this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/DevRel/blob/main/configuration/hardhat.config.js"},"Celo configuration code"),". This code is similar to Hardhat settings with a few configuration updates needed to deploy to a Celo network."),(0,r.kt)("h3",{id:"connect-to-local-network"},"Connect to Local Network"),(0,r.kt)("p",null,"Using Celo Ganache CLI creates test accounts at the localhost on port 7545. The private network setup connects to your localhost on this port and gives you access to your accounts on ganache-cli."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'    localhost: {\n      url: "http://127.0.0.1:7545"\n    },\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you choose to ",(0,r.kt)("a",{parentName:"p",href:"/developer-guide/development-chain"},"Set up a Local Development Chain"),", your blockchain will also be hosted on a private network on localhost. This same configuration can be used to connect to the local development chain."))),(0,r.kt)("h3",{id:"connect-to-testnet-using-forno"},"Connect to Testnet using Forno"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"/developer-guide/forno"},"Forno")," allows you to connect to the Celo test blockchain without running a local node. The testnet configuration uses Forno to connect you to the Celo Testnet (Alfajores) using HDWalletProvider and the mnemonic stored in your ",(0,r.kt)("strong",{parentName:"p"},".env")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'   alfajores: {\n     url: "https://alfajores-forno.celo-testnet.org",\n     accounts: {\n       mnemonic: process.env.MNEMONIC,\n       path: "m/44\'/52752\'/0\'/0"\n     },\n     chainId: 44787\n   }\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Celo uses a different account derivation path than Ethereum, so you have to specify \"m/44'/52752'/0'/0\" as the path."))),(0,r.kt)("h3",{id:"connect-to-mainnet-using-forno"},"Connect to Mainnet using Forno"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"/developer-guide/forno"},"Forno")," also allows you to connect to the Celo main blockchain without running a local node. The mainnet configuration uses Forno to connect you to the Celo Mainnet using HDWalletProvider and the mnemonic stored in your ",(0,r.kt)("strong",{parentName:"p"},".env")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'   celo: {\n     url: "https://forno.celo.org",\n     accounts: {\n       mnemonic: process.env.MNEMONIC,\n       path: "m/44\'/52752\'/0\'/0"\n     },\n     chainId: 42220\n   }\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/developer-guide/forno"},"Forno")," is a cLabs hosted node service for interacting with the Celo network. This allows you to connect to the Celo Blockchain without having to run your own node."))),(0,r.kt)("h2",{id:"deploy-to-celo"},"Deploy to Celo"),(0,r.kt)("p",null,"Run the following command from your root project directory to deploy to Celo Alfajores testnet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx hardhat run scripts/sample-script.js --network alfajores\n")),(0,r.kt)("p",null,"...or run this command to deploy to Celo mainnet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx hardhat run scripts/sample-script.js --network celo\n")),(0,r.kt)("h2",{id:"view-contract-deployment"},"View Contract Deployment"),(0,r.kt)("p",null,"Copy your ",(0,r.kt)("strong",{parentName:"p"},"contract address")," from the terminal and navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.celo.org/"},"block explorer")," to search for your deployed contract. Switch between networks to find your contract using the dropdown by the search bar."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"github",src:n(67464).Z})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Learn more about building and deploying dApps using the ",(0,r.kt)("a",{href:"https://hardhat.org/"},"HardHat documentation"),"."))),(0,r.kt)("h2",{id:"verify-smart-contract"},"Verify Smart Contract"),(0,r.kt)("h3",{id:"using-blockscout"},"Using Blockscout"),(0,r.kt)("p",null,"Verifying a smart contract allows developers to review your code from within the Celo Block Explorer."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Code tab at the Explorer page for your contract's address"),(0,r.kt)("li",{parentName:"ul"},"Click Verify & Publish to enter the smart contract verification page")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"github",src:n(868).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upload your smart contract (example: HelloCelo.sol) and it\u2019s .json file (example: HelloCelo.json) found in ",(0,r.kt)("strong",{parentName:"li"},"build > contracts")," folder.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"github",src:n(47846).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Verify & Publish")),(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("strong",{parentName:"li"},"Contract Address Details Page")," in the block explore to, use the ",(0,r.kt)("strong",{parentName:"li"},"Code"),", ",(0,r.kt)("strong",{parentName:"li"},"Read Contract"),", and ",(0,r.kt)("strong",{parentName:"li"},"Write Contract")," panels to view and interact with your deployed smart contract.")),(0,r.kt)("h3",{id:"hardhat-deploy-plugin"},"Hardhat-deploy plugin"),(0,r.kt)("p",null,"You can read an in depth guide about how to deploy and verify contracts on Celo programmatically using the hardhat-deploy plugin ",(0,r.kt)("a",{parentName:"p",href:"/blog/hardhat-deploy-verify"},"here"),"."))}h.isMDXComponent=!0},67464:function(e,t,n){t.Z=n.p+"assets/images/image1-5806680bc053bfd0146c0d479a48f8cf.png"},868:function(e,t,n){t.Z=n.p+"assets/images/image2-26579c3cacae55848c098188acf5faef.png"},47846:function(e,t,n){t.Z=n.p+"assets/images/image3-56a27dfb62a5d34295ab7202dd9aab2d.png"}}]);