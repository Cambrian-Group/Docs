"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[7752],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10001:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],l={title:"Sending CELO & Stable Assets",slug:"/developer-guide/start/hellocelo"},c="Sending CELO & Stable Assets",s={unversionedId:"developer-resources/walkthroughs/hellocelo",id:"developer-resources/walkthroughs/hellocelo",title:"Sending CELO & Stable Assets",description:"How to connect to the Celo test network and tranfer tokens using ContractKit.",source:"@site/docs/developer-resources/walkthroughs/hellocelo.md",sourceDirName:"developer-resources/walkthroughs",slug:"/developer-guide/start/hellocelo",permalink:"/es/developer-guide/start/hellocelo",editUrl:"",tags:[],version:"current",frontMatter:{title:"Sending CELO & Stable Assets",slug:"/developer-guide/start/hellocelo"}},p=[{value:"Hello Celo: sending value with Celo",id:"hello-celo-sending-value-with-celo",children:[],level:2},{value:"Learning Objectives",id:"learning-objectives",children:[],level:2},{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Importing ContractKit",id:"importing-contractkit",children:[],level:2},{value:"Reading Alfajores",id:"reading-alfajores",children:[],level:2},{value:"Accounts",id:"accounts",children:[],level:2},{value:"Using the faucet",id:"using-the-faucet",children:[],level:2},{value:"Sending Value",id:"sending-value",children:[],level:2},{value:"Connecting to a Ledger Device from a Web Application",id:"connecting-to-a-ledger-device-from-a-web-application",children:[],level:2},{value:"Wrapping Up",id:"wrapping-up",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sending-celo--stable-assets"},"Sending CELO & Stable Assets"),(0,r.kt)("p",null,"How to connect to the Celo test network and tranfer tokens using ContractKit."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"hello-celo-sending-value-with-celo"},"Hello Celo: sending value with Celo"),(0,r.kt)("p",null,"In this guide we are going to write a Node.js script to introduce some of the basic concepts that are important to understand how Celo works. This will get us started with connecting to the Celo network and learning how to develop more advanced applications."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We assume you already have Node.js and NPM installed on your computer."))),(0,r.kt)("h2",{id:"learning-objectives"},"Learning Objectives"),(0,r.kt)("p",null,"At the end of this guide, you will be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect to the Celo test network, called Alfajores"),(0,r.kt)("li",{parentName:"ul"},"Get test CELO, Celo Dollars (cUSD) and Celo Euros (cEUR) from the faucet"),(0,r.kt)("li",{parentName:"ul"},"Read account and contract information from the test network"),(0,r.kt)("li",{parentName:"ul"},"Transferring CELO, cUSD and cEUR on the test network")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"To start, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/critesjosh/helloCelo"},"clone this GitHub repo"),". This is a Node.js application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/critesjosh/helloCelo.git\n")),(0,r.kt)("p",null,"We will be using the Celo ContractKit SDK to interact with the Celo test network (Alfajores). Let's install it. It is already defined in the package.json, so we can get it with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd helloCelo\nnpm install\n")),(0,r.kt)("h2",{id:"importing-contractkit"},"Importing ContractKit"),(0,r.kt)("p",null,"We will be writing our Node.js app in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helloCelo.js")," file."),(0,r.kt)("p",null,"Import the contract kit into our script with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="helloCelo.js"',title:'"helloCelo.js"'},"// 1. Import web3 and contractkit \nconst Web3 = require(\"web3\")\nconst ContractKit = require('@celo/contractkit')\n")),(0,r.kt)("p",null,"Now we can use the ContractKit to connect to the test network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="helloCelo.js"',title:'"helloCelo.js"'},"// 2. Init a new kit, connected to the alfajores testnet\nconst web3 = new Web3('https://alfajores-forno.celo-testnet.org')\nconst kit = ContractKit.newKitFromWeb3(web3)\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"At any point in the file you can ",(0,r.kt)("inlineCode",{parentName:"p"},"console.log()")," variables to print their output when you run the script."))),(0,r.kt)("h2",{id:"reading-alfajores"},"Reading Alfajores"),(0,r.kt)("p",null,"ContractKit contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," property that we can use to access certain information about deployed Celo contracts."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Celo blockchain has two native assets, CELO ","(","CELO",")"," and the Celo Dollar ","(","cUSD",")",". Both of these assets implement the ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-20"},"ERC20 token standard")," from Ethereum. The CELO asset is managed by the CELO smart contract and Celo Dollars is managed by the cUSD contract. We can access the CELO contract via the SDK with ",(0,r.kt)("inlineCode",{parentName:"p"},"kit.contracts.getGoldToken()")," and the cUSD contract with ",(0,r.kt)("inlineCode",{parentName:"p"},"kit.contracts.getStableToken()"),". These functions return promises, so we have to wait for them to resolve before we can interact with the token contracts. If you are unfamiliar with Promises in Javascript, ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"check out this documentation.")," Promises are a common tool in blockchain development. In this guide, we use the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await"},"async/await syntax for promises"),"."))),(0,r.kt)("p",null,"Let's read some token balances from the blockchain. Add the following line in the ",(0,r.kt)("inlineCode",{parentName:"p"},"readAccount()")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="helloCelo.js"',title:'"helloCelo.js"'},"// 3. Get the token contract wrappers\nlet celotoken = await kit.contracts.getGoldToken()\nlet cUSDtoken = await kit.contracts.getStableToken()\nlet cEURtoken = await kit.contracts.getStableToken('cEUR')\n")),(0,r.kt)("p",null,"We can get the CELO balance of an account using the token wrappers like ",(0,r.kt)("inlineCode",{parentName:"p"},"goldtoken.balanceOf(address)"),". Let's check the balance of this address ",(0,r.kt)("inlineCode",{parentName:"p"},"'0xD86518b29BB52a5DAC5991eACf09481CE4B0710d'"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="helloCelo.js"',title:'"helloCelo.js"'},"// 4. Address to look up\nlet anAddress = '0xD86518b29BB52a5DAC5991eACf09481CE4B0710d'\n\n// 5. Get token balances\nlet celoBalance = await celotoken.balanceOf(anAddress)\nlet cUSDBalance = await cUSDtoken.balanceOf(anAddress)\nlet cEURBalance = await cEURtoken.balanceOf(anAddress)\n\n// Print balances\nconsole.log(`${anAddress} CELO balance: ${celoBalance.toString()}`)\nconsole.log(`${anAddress} cUSD balance: ${cUSDBalance.toString()}`)\nconsole.log(`${anAddress} cEUR balance: ${cEURBalance.toString()}`)\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"balanceOf(address)")," function also returns a Promise, so we wait for the promise to resolve then we print the result."),(0,r.kt)("p",null,"To view the balances, run the script from the termainal with "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"node helloCelo.js\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"balanceOf()")," function returns objects with type ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MikeMcl/bignumber.js/"},"BigNumber")," because balances are represented in Celo as a 256 bit unsigned integer, and JavaScript's number type cannot safely handle numbers of that size. Note also that the balance values are reported in units of CELO Wei, where one CELO = 10","*","*","18 CELO Wei."))),(0,r.kt)("p",null,"Reading all account balances is a powerful feature of blockchains. Next, let's see how we can send value to each other on the testnet."),(0,r.kt)("p",null,"In order to do transfers (aka ",(0,r.kt)("a",{parentName:"p",href:"https://docs.celo.org/getting-started/glossary#transaction"},"transactions"),"), we need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an ",(0,r.kt)("a",{parentName:"li",href:"https://docs.celo.org/getting-started/glossary#account"},"account")," ","(","by creating a private key",")"),(0,r.kt)("li",{parentName:"ol"},"Fund it with test CELO and cUSDs"),(0,r.kt)("li",{parentName:"ol"},"Sign and send transactions to the network")),(0,r.kt)("h2",{id:"accounts"},"Accounts"),(0,r.kt)("p",null,"We are accessing the Celo network via a remote ",(0,r.kt)("a",{parentName:"p",href:"https://docs.celo.org/getting-started/glossary#node"},"node")," via HTTP requests at ",(0,r.kt)("inlineCode",{parentName:"p"},"'https://alfajores-forno.celo-testnet.org'"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Don't worry about what this means right now, just understand that it is easier to get started using Celo by accessing remote nodes, rather than running them locally on your machine. You can ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/critesjosh/celo-monorepo/tree/8542c1bc3ad32bc48eed33073f4d34a36fd91fae/packages/docs/celo-sdk/walkthroughs/overview.md#topology-of-a-celo-network"},"read more about the details of the Celo network here.")))),(0,r.kt)("p",null,"Because we are accessing the network remotely, we need to generate an account to sign transactions and fund that account with test CELO."),(0,r.kt)("p",null,"There is a short script in ",(0,r.kt)("inlineCode",{parentName:"p"},"getAccount.js")," to either get a Celo account from a mnemonic in the ",(0,r.kt)("inlineCode",{parentName:"p"},".secret")," file, or create a random account if the file is empty. In the script, we use",(0,r.kt)("inlineCode",{parentName:"p"},"web3.js")," to create a new private key/account pair. ",(0,r.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/"},"Web3.js")," is a popular javascript library for handling Ethereum related functionality. Celo is a cousin of Ethereum, so this library works well for generating Celo accounts."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is not the standard way of managing Celo accounts. In a production environment, the ",(0,r.kt)("a",{parentName:"p",href:"../../celo-codebase/wallet/"},"Celo Wallet")," will manage accounts for you. Accessing accounts from the Celo Wallet will be discussed in future guides."))),(0,r.kt)("p",null,"We can now use this ",(0,r.kt)("inlineCode",{parentName:"p"},"account")," to get account information ","(","ie the private key and account address",")"," and to send transactions from ",(0,r.kt)("inlineCode",{parentName:"p"},"account.address"),". Add the following code to read the account balance. Continue adding to ",(0,r.kt)("inlineCode",{parentName:"p"},"helloCelo.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="helloCelo.js"',title:'"helloCelo.js"'},"//\n// Create an Account\n//\n\n// 6. Import the getAccount function\nconst getAccount = require('./getAccount').getAccount\n\nasync function getBalances(){\n    // 7. Get your account\n    let account = await getAccount()\n    \n    // 8. Get the token contract wrappers\n    let celotoken = await kit.contracts.getGoldToken()\n    let cUSDtoken = await kit.contracts.getStableToken()\n    let cEURtoken = await kit.contracts.getStableToken('cEUR')\n    \n    // 9. Get your token balances\n    let celoBalance = await celotoken.balanceOf(account.address)\n    let cUSDBalance = await cUSDtoken.balanceOf(account.address)\n    let cEURBalance = await cEURtoken.balanceOf(account.address)\n    \n    // Print your account info\n    console.log(`Your account address: ${account.address}`)\n    console.log(`Your account CELO balance: ${celoBalance.toString()}`)\n    console.log(`Your account cUSD balance: ${cUSDBalance.toString()}`)\n    console.log(`Your account cEUR balance: ${cEURBalance.toString()}`)\n}\n")),(0,r.kt)("p",null,"Run this script again with ",(0,r.kt)("inlineCode",{parentName:"p"},"node helloCelo.js"),". This will print ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", as we have not funded the associated account yet."),(0,r.kt)("h2",{id:"using-the-faucet"},"Using the faucet"),(0,r.kt)("p",null,"We can get free test CELO and cUSDs on the test network for development via ",(0,r.kt)("a",{parentName:"p",href:"https://celo.org/build/faucet"},"the Celo Alfajores faucet"),"."),(0,r.kt)("p",null,"Copy your randomly generated account address from the console output mentioned above, and paste it into the faucet."),(0,r.kt)("p",null,"Once your account has been funded, run ",(0,r.kt)("inlineCode",{parentName:"p"},"$ node helloCelo.js")," again to see your updated balance."),(0,r.kt)("h2",{id:"sending-value"},"Sending Value"),(0,r.kt)("p",null,"We have an account with CELO and cUSD in it, now how do we send tokens to another account? Remember the token wrappers we used to read account balances earlier? We can use the same wrappers to send tokens, you just need to add the private key associated with your account to ContractKit ","(","see line 10",")","."),(0,r.kt)("p",null,"The token wrappers have a method called ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer(address, amount)")," that allows you to send value to the specified address ","(","line 14",")","."),(0,r.kt)("p",null,"You need to ",(0,r.kt)("inlineCode",{parentName:"p"},"send()")," the transaction to the network after you construct it. The ",(0,r.kt)("inlineCode",{parentName:"p"},"send()")," methods accepts an option that allows you to specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"feeCurrency"),", which allows the sender to pay transaction fees in CELO or cUSD. The default ",(0,r.kt)("inlineCode",{parentName:"p"},"feeCurrency")," is CELO. In the following example, let's pay transaction fees in CELO when we transfer CELO and pay with cUSD when we transfer cUSD.  "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"send()")," method returns a transaction object. We will wait for the transaction receipt ","(","which will be returned when the transaction has been included in the blockchain",")"," and print it when we get it. This receipt contains information about the transaction."),(0,r.kt)("p",null,"After we read the receipt, we check the balance of our account again, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"balanceOf()")," function. The logs print our updated balance!"),(0,r.kt)("p",null,"You may notice that the account balance is a bit smaller than the amount of tokens that we sent. This is because you have to pay for every update to the network."),(0,r.kt)("p",null,"Add the following code to the ",(0,r.kt)("inlineCode",{parentName:"p"},"send()")," function in ",(0,r.kt)("inlineCode",{parentName:"p"},"helloCelo.js")," to send a transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="helloCelo.js"',title:'"helloCelo.js"'},"async function send(){\n    // 10. Get your account\n    let account = await getAccount()\n    \n    // 11. Add your account to ContractKit to sign transactions\n    kit.connection.addAccount(account.privateKey)\n    \n    // 12. Specify recipient Address\n    let anAddress = '0xD86518b29BB52a5DAC5991eACf09481CE4B0710d'\n\n    // 13. Specify an amount to send\n    let amount = 100000\n\n    // 14. Get the token contract wrappers    \n    let celotoken = await kit.contracts.getGoldToken()\n    let cUSDtoken = await kit.contracts.getStableToken()\n    let cEURtoken = await kit.contracts.getStableToken('cEUR')\n    \n    // 15. Transfer CELO and cUSD from your account to anAddress\n    // Optional: specify the feeCurrency, default feeCurrency is CELO\n    let celotx = await celotoken.transfer(anAddress, amount).send({from: account.address})\n    let cUSDtx = await cUSDtoken.transfer(anAddress, amount).send({from: account.address, feeCurrency: cUSDtoken.address})\n    let cEURtx = await cEURtoken.transfer(anAddress, amount).send({from: account.address})\n\n    // 16. Wait for the transactions to be processed\n    let celoReceipt = await celotx.waitReceipt()\n    let cUSDReceipt = await cUSDtx.waitReceipt()\n    let cEURReceipt = await cEURtx.waitReceipt()\n    \n    // 17. Print receipts\n    console.log('CELO Transaction receipt: %o', celoReceipt)\n    console.log('cUSD Transaction receipt: %o', cUSDReceipt)\n    console.log('cEUR Transaction receipt: %o', cEURReceipt)\n    \n    // 18. Get your new balances\n    let celoBalance = await celotoken.balanceOf(account.address)\n    let cUSDBalance = await cUSDtoken.balanceOf(account.address)\n    let cEURBalance = await cEURtoken.balanceOf(account.address)\n    \n    // 19. Print new balance\n    console.log(`Your new account CELO balance: ${celoBalance.toString()}`)\n    console.log(`Your new account cUSD balance: ${cUSDBalance.toString()}`)\n    console.log(`Your new account cUSD balance: ${cEURBalance.toString()}`)\n}\n")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"$ node helloCelo.js")," again to send the transactions and see the printed output in the console."),(0,r.kt)("h2",{id:"connecting-to-a-ledger-device-from-a-web-application"},"Connecting to a Ledger Device from a Web Application"),(0,r.kt)("p",null,"The above instructions apply to building NodeJS applications. If you want to build an integration with a web application, you can still use the ContractKit by following slightly modified instructions."),(0,r.kt)("p",null,"The following code examples are typescript so should be stored in a ",(0,r.kt)("inlineCode",{parentName:"p"},".tsc")," file, you will also need to install typescript and then compile your typescript to javascript with ",(0,r.kt)("inlineCode",{parentName:"p"},"npx tsc")," before you can run the code with node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install --save-dev typescript\nnpm install web3 @celo/contractkit @celo/wallet-ledger @ledgerhq/hw-app-eth @ledgerhq/hw-transport-u2f @ledgerhq/hw-transport-webusb\n")),(0,r.kt)("p",null,"Then, you can create a new instance of the ContractKit with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { ContractKit, newKitFromWeb3 } from "@celo/contractkit";\nimport { newLedgerWalletWithSetup } from "@celo/wallet-ledger";\nimport Eth from "@ledgerhq/hw-app-eth";\nimport TransportU2F from "@ledgerhq/hw-transport-u2f";\nimport TransportUSB from "@ledgerhq/hw-transport-webusb";\nimport Web3 from "web3";\n\n// Handle getting the Celo Ledger transport.\nconst getCeloLedgerTransport = () => {\n  if (window.USB) {\n    return TransportUSB.create();\n  } else if (window.u2f) {\n    return TransportU2F.create();\n  }\n\n  throw new Error("Ledger Transport not support, please use Chrome, Firefox, Brave, Opera or Edge.");\n};\n\n// Handle creating a new Celo ContractKit\nconst getContractKit = async () => {\n  // Create a Web3 provider by passing in the testnet/mainnet URL\n  const web3 = new Web3("https://alfajores-forno.celo-testnet.org");\n\n  // Get the appropriate Ledger Transport\n  const transport = await getCeloLedgerTransport();\n\n  // Create a new instance of the ETH Ledger Wallet library\n  const eth = new Eth(transport);\n\n  // Use the Celo Ledger Wallet setup util\n  const wallet = await newLedgerWalletWithSetup(eth.transport);\n\n  // Instantiate the ContractKit\n  const kit: ContractKit = newKitFromWeb3(web3, wallet);\n\n  return kit;\n};\n')),(0,r.kt)("p",null,"Once you have successfully created the ContractKit, you can use the various Celo contracts to sign transactions with a connected Ledger device. For example, here's how to transfer gold tokens (just like above in the NodeJS example):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Use the gold token contract to transfer tokens\nconst transfer = async (from, to, amount) => {\n  const celoTokenContract = await kit.contracts.getGoldToken();\n  const tx = await celoTokenContract.transfer(to, amount).send({ from });\n  const receipt = await tx.waitReceipt();\n  console.log("Transaction Receipt: ", receipt);\n};\n')),(0,r.kt)("p",null,"This is the basic setup to integrate the Celo Ledger App with a web application. You can also view the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-ledger-web-app"},"Celo Ledger App example codebase")," for some other examples of connecting to a Ledger Device from a web application."),(0,r.kt)("h2",{id:"wrapping-up"},"Wrapping Up"),(0,r.kt)("p",null,"Congratulations! You have accomplished a lot in this short introduction to developing on Celo."),(0,r.kt)("p",null,"We covered:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Installing and setting up ContractKit"),(0,r.kt)("li",{parentName:"ul"},"Connecting to the Celo Alfajores network"),(0,r.kt)("li",{parentName:"ul"},"Getting the CELO contract wrapper"),(0,r.kt)("li",{parentName:"ul"},"Reading account balances using the CELO wrapper"),(0,r.kt)("li",{parentName:"ul"},"Generating a new account in Celo"),(0,r.kt)("li",{parentName:"ul"},"Funding an account using the Celo Alfajores Faucet"),(0,r.kt)("li",{parentName:"ul"},"Sending CELO")))}u.isMDXComponent=!0}}]);