"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[3681],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,c(c({ref:t},d),{},{components:n})):a.createElement(m,c({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),c=["components"],i={title:"Using the Kit",slug:"/developer-guide/contractkit/usage"},l=void 0,s={unversionedId:"developer-resources/contractkit/usage",id:"developer-resources/contractkit/usage",title:"Using the Kit",description:"The following are some examples of the capabilities of the ContractKit, assuming it is already connected to a node. If you aren't connected, here is a refresher.",source:"@site/docs/developer-resources/contractkit/usage.md",sourceDirName:"developer-resources/contractkit",slug:"/developer-guide/contractkit/usage",permalink:"/es/developer-guide/contractkit/usage",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{title:"Using the Kit",slug:"/developer-guide/contractkit/usage"},sidebar:"developers",previous:{title:"Celo ContractKit Setup",permalink:"/es/developer-guide/contractkit/setup"},next:{title:"Using Web3 from ContractKit with Celo",permalink:"/es/developer-guide/contractkit/notes-web3-with-contractkit"}},d=[{value:"Setting Default Tx Options",id:"setting-default-tx-options",children:[],level:2},{value:"Set <code>feeCurrency</code> for a transaction",id:"set-feecurrency-for-a-transaction",children:[],level:2},{value:"Getting the Total Balance",id:"getting-the-total-balance",children:[],level:2},{value:"Deploy a contract",id:"deploy-a-contract",children:[],level:2},{value:"Sending Custom Transactions",id:"sending-custom-transactions",children:[],level:2},{value:"Interacting with Custom contracts",id:"interacting-with-custom-contracts",children:[],level:2},{value:"Selling CELO only if the rate is favorable",id:"selling-celo-only-if-the-rate-is-favorable",children:[],level:2},{value:"Buying all the CELO I can, with the cUSD in my account",id:"buying-all-the-celo-i-can-with-the-cusd-in-my-account",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following are some examples of the capabilities of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractKit"),", assuming it is already connected to a node. If you aren't connected, ",(0,r.kt)("a",{parentName:"p",href:"/es/developer-guide/start/hellocontracts#deploy-to-alfajores"},"here is a refresher.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"setting-default-tx-options"},"Setting Default Tx Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kit")," allows you to set default transaction options:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { CeloContract } from '@celo/contractkit'\n\nlet accounts = await kit.web3.eth.getAccounts()\nkit.defaultAccount = accounts[0]\n// paid gas in cUSD\nawait kit.setFeeCurrency(CeloContract.StableToken)\n")),(0,r.kt)("h2",{id:"set-feecurrency-for-a-transaction"},"Set ",(0,r.kt)("inlineCode",{parentName:"h2"},"feeCurrency")," for a transaction"),(0,r.kt)("p",null,"You can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"feeCurrency")," for each transaction individually by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"feeCurrency")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},".send()")," method. The ",(0,r.kt)("inlineCode",{parentName:"p"},"feeCurrency")," field accepts contract addresses of whitelisted fee currencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let cUSDcontract = await kit.contracts.getStableToken()\nlet cUSDtx = await cUSDcontract\n                    .transfer(someAddress, amount)\n                    .send({ feeCurrency: cUSDcontract.address })\n")),(0,r.kt)("h2",{id:"getting-the-total-balance"},"Getting the Total Balance"),(0,r.kt)("p",null,"This method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"kit")," will return the CELO, locked CELO, cUSD and total balance of the address"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let totalBalance = await kit.getTotalBalance(myAddress)\n")),(0,r.kt)("h2",{id:"deploy-a-contract"},"Deploy a contract"),(0,r.kt)("p",null,"Deploying a contract with the default account already set. Simply send a transaction with no ",(0,r.kt)("inlineCode",{parentName:"p"},"to:")," field. See more about sending custom transactions below. "),(0,r.kt)("p",null,"You can verify the deployment on the ",(0,r.kt)("a",{parentName:"p",href:"https://alfajores-blockscout.celo-testnet.org/"},"Alfajores block explorer here"),". Wait for the receipt and log it to get the transaction details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let bytecode = '0x608060405234...' // compiled Solidity deployment bytecode\n\nlet tx = await kit.sendTransaction({\n    data: bytecode\n})\n\nlet receipt = tx.waitReceipt()\nconsole.log(receipt)\n")),(0,r.kt)("h2",{id:"sending-custom-transactions"},"Sending Custom Transactions"),(0,r.kt)("p",null,"The Celo transaction object is not the same as Ethereum's. There are three new optional fields present:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feeCurrency")," (address of the ERC20 contract to use to pay for gas and the gateway fee)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gatewayFeeRecipient")," (coinbase address of the full serving the light client's trasactions)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gatewayFee")," (value paid to the gateway fee recipient, denominated in the fee currency)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"feeCurrency")," enables transaction fees to be paid in currencies other than CELO. The currently supported fee currencies are CELO, cUSD and cEUR. You can specify the currency by passing the contract address of the currency you would like the transaction fees to be paid in."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"gatewayFeeRecipient")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"gatewayFee")," are options to support full node incentives, which are not currently implemented by the protocol."),(0,r.kt)("p",null,"Celo accepts original Ethereum type transactions as well, so you can use Ethereum signing tools (like Metamask) as well as Celo specific wallets and tools. You can read more about these transaction formats in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-proposals/blob/master/CIPs/cip-0035.md"},"CIP 35"),"."),(0,r.kt)("p",null,"For a raw transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const tx = kit.sendTransaction({\n  from: myAddress,\n  to: someAddress,\n  value: oneGold,\n})\nconst hash = await tx.getHash()\nconst receipt = await tx.waitReceipt()\n")),(0,r.kt)("p",null,"When interacting with a web3 contract object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const goldtoken = await kit._web3Contracts.getGoldToken()\nconst oneGold = kit.web3.utils.toWei('1', 'ether')\n\nconst txo = await goldtoken.methods.transfer(someAddress, oneGold)\nconst tx = await kit.sendTransactionObject(txo, { from: myAddress })\nconst hash = await tx.getHash()\nconst receipt = await tx.waitReceipt()\n")),(0,r.kt)("h2",{id:"interacting-with-custom-contracts"},"Interacting with Custom contracts"),(0,r.kt)("p",null,"You can use ContractKit to interact with any deployed smart contract, provided you have the contract address and the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/latest/abi-spec.html"},"ABI"),". To do so, you will initialize a new ",(0,r.kt)("inlineCode",{parentName:"p"},"web3")," Contract instance. Then you can call functions on the contract instance to read state or send transactions to update the contract. You can see some code snippets below. For a more comprehensive example, see the ",(0,r.kt)("a",{parentName:"p",href:"/es/developer-guide/start/hello-contract-remote-node#interacting-with-custom-contracts"},"Interacting with Custom Contracts")," section of the Deploy a Contract code example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let cUSDcontract = await kit.contracts.getStableToken()\nlet contract = new kit.connection.web3.eth.Contract(ABI, address) // Init a web3.js contract instance\nlet name = await instance.methods.getName().call()                // Read contract state\n\n// Specifying the 'from' account and 'feeCurrency' is optional\n// Transactions with an unspecified feeCurrency field will default to paying fees in CELO\nconst tx = await instance.methods.setName(newName).send({ from: account.address, feeCurrency: cUSDcontract.address })\n")),(0,r.kt)("h2",{id:"selling-celo-only-if-the-rate-is-favorable"},"Selling CELO only if the rate is favorable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// This is at lower price I will accept in cUSD for every CELO\nconst favorableAmount = 100\nconst amountToExchange = kit.web3.utils.toWei('10', 'ether')\nconst oneGold = kit.web3.utils.toWei('1', 'ether')\nconst exchange = await kit.contracts.getExchange()\n\nconst amountOfcUsd = await exchange.quoteGoldSell(oneGold)\n\nif (amountOfcUsd > favorableAmount) {\n  const goldToken = await kit.contracts.getGoldToken()\n  const approveTx = await goldToken.approve(exchange.address, amountToExchange).send()\n  const approveReceipt = await approveTx.waitReceipt()\n\n  const usdAmount = await exchange.quoteGoldSell(amountToExchange)\n  const sellTx = await exchange.sellGold(amountToExchange, usdAmount).send()\n  const sellReceipt = await sellTx.waitReceipt()\n}\n")),(0,r.kt)("h2",{id:"buying-all-the-celo-i-can-with-the-cusd-in-my-account"},"Buying all the CELO I can, with the cUSD in my account"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const stableToken = await this.contracts.getStableToken()\nconst exchange = await this.contracts.getExchange()\n\nconst cUsdBalance = await stableToken.balanceOf(myAddress)\n\nconst approveTx = await stableToken.approve(exchange.address, cUsdBalance).send()\nconst approveReceipt = await approveTx.waitReceipt()\n\nconst goldAmount = await exchange.quoteUsdSell(cUsdBalance)\nconst sellTx = await exchange.sellDollar(cUsdBalance, goldAmount).send()\nconst sellReceipt = await sellTx.waitReceipt()\n")))}u.isMDXComponent=!0}}]);