"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[543],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,g=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2560:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),s=["components"],r={title:"Celo DAppKit Usage",description:"How to use DAppKit and make use of its features while building DApps on Celo.",slug:"/developer-guide/dappkit/usage"},c=void 0,l={unversionedId:"developer-resources/dappkit/usage",id:"developer-resources/dappkit/usage",title:"Celo DAppKit Usage",description:"How to use DAppKit and make use of its features while building DApps on Celo.",source:"@site/docs/developer-resources/dappkit/usage.md",sourceDirName:"developer-resources/dappkit",slug:"/developer-guide/dappkit/usage",permalink:"/developer-guide/dappkit/usage",editUrl:"",tags:[],version:"current",frontMatter:{title:"Celo DAppKit Usage",description:"How to use DAppKit and make use of its features while building DApps on Celo.",slug:"/developer-guide/dappkit/usage"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Overview",id:"overview",children:[],level:2},{value:"Requesting Account Address",id:"requesting-account-address",children:[],level:2},{value:"Checking attestations for the phone number",id:"checking-attestations-for-the-phone-number",children:[],level:2},{value:"Signing Transactions",id:"signing-transactions",children:[],level:2},{value:"Example: Exchanging cUSD and Locking CELO",id:"example-exchanging-cusd-and-locking-celo",children:[],level:2},{value:"DAppKit vs. DAppKit-web",id:"dappkit-vs-dappkit-web",children:[{value:"Known Issues",id:"known-issues",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"How to use DAppKit and make use of its functions while building DApps on Celo."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"DAppKit uses ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mobile_deep_linking"},"deeplinks")," to communicate between your DApp and the ",(0,i.kt)("a",{parentName:"p",href:"https://celo.org/developers/wallet"},"Celo Developer Wallet")," (for testing) and ",(0,i.kt)("a",{parentName:"p",href:"https://valoraapp.com/"},"Valora")," (for production)."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"DappKit uses the same deeplink for both the testing and production wallets. This means that when testing on iOS devices, the deeplinks will open the testing wallet vs the product wallet if both are installed on the same device. On Android devices, when multiple wallets are installed users are able to select which wallet they would like to use to open the deeplink. We are currently working to make separate deeplinks. Given the low transaction fees, many developers have chosen to only develop on mainnet to get around this."))),(0,i.kt)("p",null,"All 'requests' that your DApp makes to the Wallet needs to contain the following meta payload:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requestId")," A string you can pass to DAppKit, that you can use to listen to the response for that request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dappName")," A string that will be displayed to the user, indicating the DApp requesting access/signature."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"callback")," The deeplink that the Celo Wallet will use to redirect the user back to the DApp with the appropriate payload. If using Expo, it's as simple as ",(0,i.kt)("inlineCode",{parentName:"li"},"Linking.makeUrl('/my/path')"),".")),(0,i.kt)("h2",{id:"requesting-account-address"},"Requesting Account Address"),(0,i.kt)("p",null,"One of the first actions you will want to do as a DApp Developer is to get the address of your user's account, to display relevant information to them. It can be done as simply as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import { requestAccountAddress, waitForAccountAuth } from "@celo/dappkit";\nimport { Linking } from "expo";\n\nlogin = async () => {\n  const requestId = "login";\n  const dappName = "My DappName";\n  const callback = Linking.makeUrl("/my/path");\n\n  requestAccountAddress({\n    requestId,\n    dappName,\n    callback,\n  });\n\n  const dappkitResponse = await waitForAccountAuth(requestId);\n\n// The pepper is not available in all Valora versions\n  this.setState({ \n    address: dappkitResponse.address, \n    phoneNumber: dappkitResponse.phoneNumber, \n    pepper: dappkitResponse.pepper \n  });\n};\n')),(0,i.kt)("p",null,"Once you have the account address, you can make calls against your own smart contract, or use ",(0,i.kt)("a",{parentName:"p",href:"/developer-guide/contractkit"},"ContractKit")," to interact with Celo Core Contracts to do actions like fetch a user's balance."),(0,i.kt)("p",null,"First import and instantiate an instance of ContractKit. For ContractKit version 1.0.0 onwards, you also need to import and instantiate a Web3 instance manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Add ContractKit to your file and instantiate the kit.\n// note: for versions prior to 1.x.x, please check the legacy docs.\nimport { newKitFromWeb3 } from "@celo/contractkit";\nimport Web3 from "web3";\n\nconst web3 = new Web3("https://alfajores-forno.celo-testnet.org");\n// mainnet -- comment out the above, uncomment below for mainnet\n// const web3 = new Web3(\'https://forno.celo.org\');\n\nconst kit = newKitFromWeb3(web3);\n')),(0,i.kt)("p",null,"Then add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," method to fetch a user's balance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Note that `address` and `phoneNumber` are already stored in state from the first login snippet\nthis.setState({ isLoadingBalance: true });\n// Set the default account to the account returned from the wallet\nkit.defaultAccount = this.state.address;\n// Get the StableToken contract\nconst stableToken = await kit.contracts.getStableToken();\n// Get the user account balance (cUSD)\nconst cUSDBalanceBig = await stableToken.balanceOf(kit.defaultAccount);\n\n// Convert from a big number to a string\nlet cUSDBalance = cUSDBalanceBig.toString();\nthis.setState({ cUSDBalance, isLoadingBalance: false });\n")),(0,i.kt)("h2",{id:"checking-attestations-for-the-phone-number"},"Checking attestations for the phone number"),(0,i.kt)("p",null,"If the user is using a Valora version that passes the ",(0,i.kt)("inlineCode",{parentName:"p"},"pepper")," that Valora has for a ",(0,i.kt)("inlineCode",{parentName:"p"},"phone_number"),", you can use both pieces of information to determine attestations for the identifier (learn more about the ",(0,i.kt)("a",{parentName:"p",href:"../../celo-codebase/protocol/identity"},"lightweight identity protocol here"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { PhoneNumberUtils } from '@celo/utils'\nconst attestations = await kit.contracts.getAttestations();\nconst identifier = PhoneNumberUtils.getPhoneHash(dappkitResponse.phoneNumber, dappkitResponse.pepper);\n// Find all accounts that have received attestations for this phone number\nconst accounts = attestations.lookupAccountsForIdentifier(identifier);\n// Get the attestations stats for the accounts\nfor (const account of accounts) {\n  const stat = await attestations.getAttestationStat(identifier, account);\n  console.log(`Total: ${stat.total}, Completed: ${stat.completed}`);\n}\n")),(0,i.kt)("h2",{id:"signing-transactions"},"Signing Transactions"),(0,i.kt)("p",null,"Let's go from accessing account information to submitting transactions. To alter state on the blockchain, you need to make a transaction object with your smart contract or any of the Celo Core Contracts in ContractKit. All that is left to do is to pass the transaction object to DAppKit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import { toTxResult } from "@celo/connect";\nimport { requestTxSig, waitForSignedTxs } from "@celo/dappkit";\n\n// Create the transaction object\nconst stableToken = await kit.contracts.getStableToken();\nconst decimals = await stableToken.decimals();\n// This can be a specific account address, a contract address, etc.\nconst transferTo = "<TRANSFER_TO_ACCOUNT>";\nconst transferValue = new BigNumber("10e18");\nconst txObject = stableToken.transfer(transferTo, transferValue.toString()).txo;\n\nconst requestId = "transfer";\nconst dappName = "My DappName";\nconst callback = Linking.makeUrl("/my/path");\n\n// Request the TX signature from DAppKit\nrequestTxSig(\n  kit,\n  [\n    {\n      tx: txObject,\n      from: this.state.address,\n      to: stableToken.contract.options.address,\n      feeCurrency: FeeCurrency.cUSD,\n    },\n  ],\n  { requestId, dappName, callback }\n);\n\nconst dappkitResponse = await waitForSignedTxs(requestId);\nconst rawTx = dappkitResponse.rawTxs[0];\n\n// Send the signed transaction via the kit\nconst tx = await kit.connection.sendSignedTransaction(rawTx);\nconst receipt = await tx.waitReceipt();\n\nconst cUSDBalanceBig = await stableToken.balanceOf(kit.defaultAccount);\nthis.setState({\n  cUSDBalance: cUSDBalanceBig.toString(),\n  isLoadingBalance: false,\n});\n')),(0,i.kt)("h2",{id:"example-exchanging-cusd-and-locking-celo"},"Example: Exchanging cUSD and Locking CELO"),(0,i.kt)("p",null,"Here's an example of how to go about exchanging some cUSD to CELO, and\nthen Locking that CELO to be able to vote for a validator group."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'import { requestTxSig, waitForSignedTxs } from "@celo/dappkit";\n\nimport { BigNumber } from "bignumber.js";\n\nconst dappName = "My DappName";\nconst callback = Linking.makeUrl("/my/path");\n\n// Let\'s assume that the address has funds enough in cUSD to pay the\n// transaction fees of all the transactions and enough to buy 1 CELO\n// In this example, we also assume that we have already requested\n// the user\'s account address, and it is stored in `this.state.address`.\n\n// We will be using the following contracts:\nconst stableToken = await kit.contracts.getStableToken();\nconst exchange = await kit.contracts.getExchange();\nconst lockedGold = await kit.contracts.getLockedGold();\nconst election = await kit.contracts.getElection();\nconst accounts = await kit.contracts.getAccounts();\n\n// Let\'s ensure that the account is registered. If not, we need to call\n// the `createAccount` method from the Accounts contract)\n\nconst txIsAccount = await accounts.isAccount(this.state.address);\nconst txRegisterAccountObj = accounts.createAccount().txo;\n\nif (!txIsAccount) {\n  requestTxSig(\n    // @ts-ignore\n    kit,\n    [\n      {\n        tx: txRegisterAccountObj,\n        from: this.state.address,\n        to: accounts.address,\n        feeCurrency: FeeCurrency.cUSD,\n      },\n    ],\n    { requestId, dappName, callback }\n  );\n  const respRegisterAccount = await waitForSignedTxs(requestId);\n  const txRegisterAccount = await kit.connection.sendSignedTransaction(\n    respRegisterAccount.rawTxs[0]\n  );\n  const receiptRegisterAccount = await txRegisterAccount.waitReceipt();\n  console.log(`Tx hash: ${receiptRegisterAccount.transactionHash}`);\n  // Handle account registration\n}\n\n// 1e18 = 1 Celo\nconst oneCelo = new BigNumber("1e18");\nconst tenCUSD = new BigNumber("10e18");\n// Now we will generate the transactions that we require to be signed\n\n// First of all, we need to increase the allowance of the exchange address\n// to let the contract expend the amount of stable tokens to buy one CELO.\n// We are allowing the exchange contract to spend 10 cUSD\nconst txObjectIncAllow = stableToken.increaseAllowance(\n  exchange.address,\n  tenCUSD\n).txo;\n\n// Then we will call the Exchange contract, and attempt to buy 1 CELO with a\n// max price of 10 cUSD (it could use less than that).\nconst txObjectExchange = exchange.buy(oneCelo, tenCUSD, true).txo;\n\n// Then we will call the lockedGold contract to lock our CELO\n// (Remember that the address should be a registered Account)\n// Later, the amount to be locked will be the parameter `value`.\nconst txObjectLock = lockedGold.lock().txo;\n\n// Then we use the 1 CELO to vote for a specific validator group address.\n// Here you have to change the validator group address\n// (At the moment of writing the tuto, the 0x5edfCe0bad47e24E30625c275457F5b4Bb619241\n// was a valid address, but you could check the groups using the celocli)\nconst validatorGroupAddress = "<VALIDATOR_GROUP_ADDRESS>";\nconst txObjectVote = (await election.vote(validatorGroupAddress, oneCelo)).txo;\n\nconst requestId = "signMeEverything";\n\n// Request the TX signature from DAppKit\nrequestTxSig(\n  kit,\n  [\n    {\n      tx: txObjectIncAllow,\n      from: this.state.address,\n      to: stableToken.address,\n      feeCurrency: FeeCurrency.cUSD,\n    },\n    {\n      tx: txObjectExchange,\n      from: this.state.address,\n      to: exchange.address,\n      feeCurrency: FeeCurrency.cUSD,\n      estimatedGas: 200000,\n    },\n    {\n      tx: txObjectLock,\n      from: this.state.address,\n      to: lockedGold.address,\n      feeCurrency: FeeCurrency.cUSD,\n      value: oneCelo,\n    },\n    {\n      tx: txObjectVote,\n      from: this.state.address,\n      to: election.address,\n      feeCurrency: FeeCurrency.cUSD,\n      estimatedGas: 200000,\n    },\n  ],\n  { requestId, dappName, callback }\n);\n\nconst dappkitResponse = await waitForSignedTxs(requestId);\n\nconst receipts = [];\n// execute the allowance\nconsole.log("execute the allowance");\nconst tx0 = await kit.connection.sendSignedTransaction(\n  dappkitResponse.rawTxs[0]\n);\nreceipts.push(await tx0.waitReceipt());\n\n// execute the exchange\nconsole.log("execute the exchange");\nconst tx1 = await kit.connection.sendSignedTransaction(\n  dappkitResponse.rawTxs[1]\n);\nreceipts.push(await tx1.waitReceipt());\n\n// execute the lock\nconsole.log("execute the lock");\nconst tx2 = await kit.connection.sendSignedTransaction(\n  dappkitResponse.rawTxs[2]\n);\nreceipts.push(await tx2.waitReceipt());\n\n// execute the vote\nconsole.log("execute the vote");\nconst tx3 = await kit.connection.sendSignedTransaction(\n  dappkitResponse.rawTxs[3]\n);\nreceipts.push(await tx3.waitReceipt());\nconsole.log("Receipts: ", receipts);\n\nconst voteInfo = await election.getVoter(this.state.address);\nconsole.log("Vote info: ", voteInfo);\n// REMEMBER that after voting the next epoch you HAVE TO ACTIVATE those votes\n// using the `activate` method in the election contract.\n\nthis.setState({ voteInfo, isVoting: false });\n')),(0,i.kt)("h2",{id:"dappkit-vs-dappkit-web"},"DAppKit vs. DAppKit-web"),(0,i.kt)("p",null,"Originally, DAppKit was designed for mobile apps in mind and did not work out-of-the-box for web DApps running in the browser of a mobile device. DAppKit-web includes workarounds for some of the typical issues that arose for folks using DAppKit to integrate their web DApps with Valora."),(0,i.kt)("p",null,"DAppKit uses React Native's ",(0,i.kt)("inlineCode",{parentName:"p"},"Linking")," library to listen for URL changes (i.e. on return to the DApp from Valora) so it can receive and parse the requested information; this causes redirection to new tabs on web browsers, however, which means that the information requested via DAppkit does not make it back to the original session. To get around this, DAppkit-web uses the web browser's ",(0,i.kt)("inlineCode",{parentName:"p"},"localStorage")," to store this returned URL, which can then be accessed by the old tab."),(0,i.kt)("p",null,"DAppKit-web includes the main functionality from DAppKit, so all that is required is to import from ",(0,i.kt)("inlineCode",{parentName:"p"},"@celo/dappkit/lib/web")," instead of from ",(0,i.kt)("inlineCode",{parentName:"p"},"@celo/dappkit"),". The usage of DAppkit-web is the same as above, but calling the functions ",(0,i.kt)("inlineCode",{parentName:"p"},"waitForAccountAuth")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"waitForSignedTxs")," should be surrounded with a ",(0,i.kt)("inlineCode",{parentName:"p"},"try...catch"),", since these functions can throw a timeout error."),(0,i.kt)("p",null,"This should look something like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  const dappkitResponse = await waitForAccountAuth(requestId)\n  // Handle successful login\n} catch (error) {\n  // Catch and handle possible timeout errors\n}\n\n...\n\nlet tx;\ntry {\n  const dappkitResponse = await waitForSignedTxs(requestId)\n  tx = dappkitResponse.rawTxs[0]\n} catch (error) {\n  // Catch and handle possible timeout errors\n  return\n}\n// Send transaction via ContractKit or web3 directly\n")),(0,i.kt)("p",null,"An example dummy web DApp can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celo-org/dappkit-web-starter"},"here"),". This is a very simple one-page app that demonstrates the flow above: requesting the user's account address in the Celo Wallet, creating a transaction object, allowing the user to sign this transaction in the Celo Wallet, and then submitting the transaction to the chain via ContractKit. It is a simplified, web-specific version based off of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/critesjosh/celo-dappkit"},"Celo Truffle Box")," tutorial, which should be completed prior to using the dummy web DApp."),(0,i.kt)("h3",{id:"known-issues"},"Known Issues"),(0,i.kt)("p",null,"DAppKit's web functionality should be regarded as a beta solution and the following are known issues:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Safari on iOS: if the web DApp is open in a tab that is not the most recently opened tab (bottom tab when viewing all open tabs), the user will return to the following tab after completing authentication or signing the transaction in Valora. The information is properly populated in the original web DApp's tab."),(0,i.kt)("li",{parentName:"ul"},"Chrome on iOS: on returning to the web DApp from Valora, a second tab is opened which must be manually closed. The information is properly populated in the original web DApp's tab.")))}u.isMDXComponent=!0}}]);