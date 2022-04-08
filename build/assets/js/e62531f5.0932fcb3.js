"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[9166],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81155:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),l=["components"],i={title:"Deploy with Truffle",description:"How to deploy a Smart Contract to Celo using Truffle"},s="Deploy on Celo with Truffle",c={unversionedId:"developer-resources/deploy-truffle",id:"developer-resources/deploy-truffle",title:"Deploy with Truffle",description:"How to deploy a Smart Contract to Celo using Truffle",source:"@site/docs/developer-resources/deploy-truffle.md",sourceDirName:"developer-resources",slug:"/developer-resources/deploy-truffle",permalink:"/developer-resources/deploy-truffle",editUrl:"https://github.com/celo-org/docs/edit/main/docs/developer-resources/deploy-truffle.md",tags:[],version:"current",frontMatter:{title:"Deploy with Truffle",description:"How to deploy a Smart Contract to Celo using Truffle"},sidebar:"developers",previous:{title:"Deploy with Remix",permalink:"/developer-resources/deploy-remix"},next:{title:"Deploy with Hardhat",permalink:"/developer-resources/deploy-hardhat"}},p=[{value:"Introduction to Truffle",id:"introduction-to-truffle",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Project Setup",id:"project-setup",children:[],level:2},{value:"Write Project Code",id:"write-project-code",children:[],level:2},{value:"Configure Deployment Settings",id:"configure-deployment-settings",children:[],level:2},{value:"Deploy Smart Contract",id:"deploy-smart-contract",children:[{value:"Compile and Migrate",id:"compile-and-migrate",children:[],level:3},{value:"Deploy Contract",id:"deploy-contract",children:[],level:3},{value:"Deploy with --reset",id:"deploy-with---reset",children:[],level:3}],level:2},{value:"View Contract Deployment",id:"view-contract-deployment",children:[],level:2},{value:"Verify Smart Contract",id:"verify-smart-contract",children:[],level:2}],d={toc:p};function m(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-on-celo-with-truffle"},"Deploy on Celo with Truffle"),(0,r.kt)("p",null,"How to deploy a smart contract to Celo testnet, mainnet, or a local network using ",(0,r.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/"},"Truffle"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"introduction-to-truffle"},"Introduction to Truffle"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/"},"Truffle")," is a world-class development environment, testing framework, and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM). By creating a Truffle project and editing a few configuration settings you can easily deploy your project on Celo."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To learn more about the features available to you as a smart contract developer with Truffle, visit the ",(0,r.kt)("a",{href:"https://www.trufflesuite.com/docs"},"Truffle documentation"),"."))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To deploy on Celo using Truffle, you should have Celo set up Celo in your local environment. If you prefer to deploy without a local environment, you can deploy using Remix or Replit."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/developer-guide/start/develop-on-windows"},"Using Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/developer-resources/using-mac"},"Using Mac"))),(0,r.kt)("p",null,"If you are new to Truffle, complete the ",(0,r.kt)("a",{parentName:"p",href:"/developer-resources/using-mac#truffle"},"Celo truffle installation instructions")," and complete their ",(0,r.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/quickstart"},"Quickstart Tutorial")," to get more familiar with this tool."),(0,r.kt)("h2",{id:"project-setup"},"Project Setup"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Setup Project Folder")),(0,r.kt)("p",null,"Open your terminal window, create a project directory, and navigate into that directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir myDapp && cd myDap\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install hdwallet-provider")),(0,r.kt)("p",null,"From your root truffle project directory, install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trufflesuite/truffle/blob/develop/packages/hdwallet-provider/README.md#:~:text=HD%20Wallet%2Denabled%20Web3%20provider,12%20or%2024%20word%20mnemonic."},"truffle/hdwallet-provider"),". This allows you to sign transactions for addresses derived from a mnemonic. You\u2019ll use this to connect to Celo in your truffle configuration file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @truffle/hdwallet-provider --save\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Initialize Truffle")),(0,r.kt)("p",null,"Initializing truffle creates the scaffolding for your truffle project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"truffle init\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Open Project")),(0,r.kt)("p",null,"Open your project in ",(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/resilience/remote-development-solutions/?&ef_id=Cj0KCQjwtrSLBhCLARIsACh6RmixaTeMbvlNJN4yrdykHGg5e4aN2Px1-Vf_oUq2edhP86n2C1-8lDIaAkxcEALw_wcB:G:s&OCID=AID2200893_SEM_Cj0KCQjwtrSLBhCLARIsACh6RmixaTeMbvlNJN4yrdykHGg5e4aN2Px1-Vf_oUq2edhP86n2C1-8lDIaAkxcEALw_wcB:G:s"},"Visual Studio code")," or your preferred IDE."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"code .\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can launch VS Code from the command line by ",(0,r.kt)("a",{href:"https://code.visualstudio.com/docs/setup/mac"},"installing it in your shell path"),"."))),(0,r.kt)("h2",{id:"write-project-code"},"Write Project Code"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create Smart Contract")),(0,r.kt)("p",null,"Create a file named ",(0,r.kt)("strong",{parentName:"p"},"HelloCelo.sol "),"in the ",(0,r.kt)("strong",{parentName:"p"},"contracts")," directory and populate it with the Solidity code below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.3;\n\ncontract HelloWorld {\n   string public greet = "Hello Celo!";\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you would like to create a different smart contract or learn more about Solidity (the language for developing smart contracts) you can view the ",(0,r.kt)("a",{href:"https://docs.soliditylang.org/en/v0.8.9/"},"Solidity docs")," and ",(0,r.kt)("a",{href:"https://solidity-by-example.org/"},"Solidity by Example"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Migrations File")),(0,r.kt)("p",null,"Create a file named ",(0,r.kt)("strong",{parentName:"p"},"2_deploy_contracts.js")," in the ",(0,r.kt)("strong",{parentName:"p"},"./migrations/")," folder and populate it with the code below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var HelloCelo = artifacts.require('HelloCelo')\n\nmodule.exports = function (deployer) {\n deployer.deploy(HelloCelo)\n}\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you created a different smart contract, update the variable name, file requirement, and deployment accordingly to match your new contract."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mnemonic .env")),(0,r.kt)("p",null,"If you don\u2019t yet have a mnemonic or are unsure how to create one, see ",(0,r.kt)("a",{parentName:"p",href:"/developer-resources/testnet-wallet"},"Set up a Development Wallet")," for more details. When you\u2019re ready, create a ",(0,r.kt)("strong",{parentName:"p"},".env")," file in your root directory and populate it with your development wallet mnemonic (example below)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'MNEMONIC="turtle cash neutral drift brisk young swallow raw payment drill mail wear penalty vibrant entire adjust near chapter mistake size angry planet slam demand"\n')),(0,r.kt)("p",null,"This mnemonic is used by ",(0,r.kt)("strong",{parentName:"p"},"HDWalletProvider")," in the ",(0,r.kt)("strong",{parentName:"p"},"truffle.config")," file to verify the account supplying funds during contract deployment. (See lines 21 & 69.)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Create .gitignore file")),(0,r.kt)("p",null,"It is important to hide your mnemonic and other important files while developing Celo applications. When using Git or GitHub, you can populate a ",(0,r.kt)("strong",{parentName:"p"},".gitignore")," file with the code below to ensure you don\u2019t accidentally publish these files."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("strong",{parentName:"p"},".gitignore")," file in your root directory and populate it with the code below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# dependencies\n/node_modules\n\n# Mac users\n.DS_Store\n\n#hidden files\n.env\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"See ",(0,r.kt)("a",{href:"https://help.github.com/articles/ignoring-files/"},"ignoring files")," for more information."))),(0,r.kt)("h2",{id:"configure-deployment-settings"},"Configure Deployment Settings"),(0,r.kt)("p",null,"The default ",(0,r.kt)("strong",{parentName:"p"},"truffle.config.js")," file contains connections required to deploy to the Ethereum networks, imports ",(0,r.kt)("strong",{parentName:"p"},"HDWalletProvider"),", and connects to the mnemonic in your ",(0,r.kt)("strong",{parentName:"p"},".env")," file. To deploy a Celo network, you need to update this configuration file to point toward the different Celo networks and add a few details specific to Celo best practices."),(0,r.kt)("p",null,"You can see an example repo ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/critesjosh/celo-contracts-workshop"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update the truffle-config.js file")),(0,r.kt)("p",null,"Open ",(0,r.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/docs/truffle/reference/configuration#:~:text=Your%20configuration%20file%20is%20called,necessary%20to%20create%20your%20configuration.&text=js%20contained%20by%20the%20barebones%20project%20that%20truffle%20init%20creates."},"truffle-config.js")," in a text editor and replace its contents with this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/DevRel/blob/main/configuration/truffle-config.js"},"Celo configuration code"),". This code is similar to Truffle settings with a few configuration updates needed to deploy to a Celo network."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connect to a Development Network")),(0,r.kt)("p",null,"Using Celo Ganache CLI creates test accounts at the localhost on port 7545. The private network setup connects to your localhost on this port and gives you access to your accounts on ganache-cli."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'local: {\n  host: "127.0.0.1",\n  port: 7545,\n  network_id: "*"\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you choose to ",(0,r.kt)("a",{href:"https://docs.celo.org/developer-guide/development-chain"},"Set up a Local Development Chain"),", your blockchain will also be running on a private development network on localhost. This same configuration can be used to connect to the local development chain."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connect to Testnet using Forno")),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"/developer-guide/forno"},"Forno")," allows you to connect to the Celo test blockchain without running a local node. The testnet configuration uses Forno to connect you to the Celo Testnet (Alfajores) using HDWalletProvider and the mnemonic stored in your ",(0,r.kt)("strong",{parentName:"p"},".env")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'testnet: {\n  provider: function() {\n    return new HDWalletProvider(process.env.MNEMONIC, "https://alfajores-forno.celo-testnet.org")\n  },\n  network_id: 44787,\n  gas: 20000000      \n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connect to Mainnet using Forno")),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"/developer-guide/forno"},"Forno")," also allows you to connect to the Celo main blockchain without running a local node. The mainnet configuration uses Forno to connect you to the Celo Mainnet using HDWalletProvider and the mnemonic stored in your ",(0,r.kt)("strong",{parentName:"p"},".env")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'mainnet: {\n  provider: function() {\n    return new HDWalletProvider(process.env.MNEMONIC, "https://forno.celo.org")\n  },\n  network_id: 42220,\n  gas: 4000000     \n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/developer-guide/forno"},"Forno")," is a cLabs hosted node service for interacting with the Celo network. This allows you to connect to the Celo Blockchain without having to run your own node."))),(0,r.kt)("h2",{id:"deploy-smart-contract"},"Deploy Smart Contract"),(0,r.kt)("h3",{id:"compile-and-migrate"},"Compile and Migrate"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compile Contract")),(0,r.kt)("p",null,"Compile the Solidity code into Ethereum bytecode prior to deploying the contract. The following truffle command will compile any new or updated Solidity (.sol) contracts found in ",(0,r.kt)("strong",{parentName:"p"},"./contracts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"truffle compile\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Learn more about compiling contracts with Truffle ",(0,r.kt)("a",{href:"https://www.trufflesuite.com/docs/truffle/getting-started/compiling-contracts"},"here"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Migrate Contract")),(0,r.kt)("p",null,"Migrations are JavaScript files that help you deploy contracts to the Ethereum network. To run your migrations, run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"truffle migrate\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Learn more about Truffle migrations ",(0,r.kt)("a",{href:"https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations"},"here"),"."))),(0,r.kt)("h3",{id:"deploy-contract"},"Deploy Contract"),(0,r.kt)("p",null,"Deploy to your chosen Celo network running one of the following commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"truffle deploy --network alfajores\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"truffle deploy --network celo\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"truffle deploy --network local\n")),(0,r.kt)("h3",{id:"deploy-with---reset"},"Deploy with --reset"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("strong",{parentName:"p"},"---reset")," flag to redeploy contracts with a new contract address if you haven't made any code changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"truffle deploy --network NETWORK --reset\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"truffle migrate --network NETWORK --reset\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Save contract addresses for future reference. If you lose it, proceed to block explorer to review your wallet transactions for contract creation and its response. Truffle saves deployment information, like transaction hashes and contract addresses, in JSON files in ",(0,r.kt)("inlineCode",{parentName:"p"},"./build/contracts/"),"."))),(0,r.kt)("h2",{id:"view-contract-deployment"},"View Contract Deployment"),(0,r.kt)("p",null,"Copy your ",(0,r.kt)("strong",{parentName:"p"},"contract address")," from the terminal and navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.celo.org/"},"block explorer")," to search for your deployed contract. Switch between networks to find your contract using the dropdown by the search bar."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"View Deployed Contract")),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.celo.org/"},"BlockScout")," and select the network of your deployed contract. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Paste your contract address from the ",(0,r.kt)("strong",{parentName:"li"},"terminal window")," and search for it in ",(0,r.kt)("strong",{parentName:"li"},"BlockExplorer"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"github",src:n(56200).Z})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Learn more about exploring the Celo network and smart contract details in BlockScout ",(0,r.kt)("a",{href:"https://docs.blockscout.com/"},"here"),"."))),(0,r.kt)("h2",{id:"verify-smart-contract"},"Verify Smart Contract"),(0,r.kt)("p",null,"Verifying a smart contract allows developers to review your code from within the Celo Block Explorer. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the Code tab at the Explorer page for your contract's address"),(0,r.kt)("li",{parentName:"ul"},"Click Verify & Publish to enter the smart contract verification page")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"github",src:n(78001).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upload your smart contract (example: HelloCelo.sol) and it\u2019s .json file (example: HelloCelo.json) found in ",(0,r.kt)("strong",{parentName:"li"},"build > contracts")," folder.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"github",src:n(63811).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click",(0,r.kt)("strong",{parentName:"li"}," Verify & Publish")),(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("strong",{parentName:"li"},"Contract Address Details Page")," in the block explore to, use the ",(0,r.kt)("strong",{parentName:"li"},"Code"),", ",(0,r.kt)("strong",{parentName:"li"},"Read Contract"),", and ",(0,r.kt)("strong",{parentName:"li"},"Write Contract")," panels to view and interact with your deployed smart contract.")))}m.isMDXComponent=!0},56200:function(e,t,n){t.Z=n.p+"assets/images/image1-56a27dfb62a5d34295ab7202dd9aab2d.png"},78001:function(e,t,n){t.Z=n.p+"assets/images/image2-5806680bc053bfd0146c0d479a48f8cf.png"},63811:function(e,t,n){t.Z=n.p+"assets/images/image3-26579c3cacae55848c098188acf5faef.png"}}]);