"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[9573],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||a;return n?o.createElement(f,i(i({ref:t},h),{},{components:n})):o.createElement(f,i({ref:t},h))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31089:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],s={title:"The Celo Protocol",description:"Introduction to the Celo Protocol's consensus, governance, incentives, and key features."},l="The Celo Protocol",c={unversionedId:"learn/celo-protocol",id:"learn/celo-protocol",title:"The Celo Protocol",description:"Introduction to the Celo Protocol's consensus, governance, incentives, and key features.",source:"@site/docs/learn/celo-protocol.md",sourceDirName:"learn",slug:"/learn/celo-protocol",permalink:"/learn/celo-protocol",editUrl:"",tags:[],version:"current",frontMatter:{title:"The Celo Protocol",description:"Introduction to the Celo Protocol's consensus, governance, incentives, and key features."}},h=[{value:"What is the Celo Protocol?",id:"what-is-the-celo-protocol",children:[],level:2},{value:"Consensus and Proof-of-Stake",id:"consensus-and-proof-of-stake",children:[],level:2},{value:"On-Chain Governance",id:"on-chain-governance",children:[],level:2},{value:"Ultralight Synchronization",id:"ultralight-synchronization",children:[],level:2},{value:"Incentives for Operating Full Nodes",id:"incentives-for-operating-full-nodes",children:[],level:2},{value:"Stable Cryptocurrencies",id:"stable-cryptocurrencies",children:[],level:2},{value:"Lightweight Identity",id:"lightweight-identity",children:[],level:2},{value:"Richer Transactions",id:"richer-transactions",children:[],level:2}],d={toc:h};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-celo-protocol"},"The Celo Protocol"),(0,a.kt)("p",null,"Introduction to the Celo Protocol's consensus, governance, incentives, and key features."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"what-is-the-celo-protocol"},"What is the Celo Protocol?"),(0,a.kt)("p",null,"The Celo blockchain and Celo Core Contracts together comprise the Celo Protocol. This term describes both what services the decentralized Celo network provides to applications and the way in which nodes in the network cooperate to achieve this. This section introduces some of these services."),(0,a.kt)("h2",{id:"consensus-and-proof-of-stake"},"Consensus and Proof-of-Stake"),(0,a.kt)("p",null,"Celo is a Proof-of-Stake blockchain. In comparison to Proof-of-Work systems like Bitcoin and Ethereum, this eliminates the negative environmental impact and means that users can make transactions that are cheaper, faster, and whose outcome cannot be changed once complete."),(0,a.kt)("p",null,"The Celo blockchain implements a Byzantine Fault Tolerant (BFT) consensus algorithm in which a well-defined set of validator nodes broadcast signed messages between themselves in a sequence of steps to reach agreement even when up to a third of the total nodes are offline, faulty, or malicious. When a quorum of validators has reached an agreement, that decision is final."),(0,a.kt)("p",null,"Celo uses a Proof-of-Stake mechanism for selecting the validator set for a fixed period termed an epoch. Anyone can earn rewards by locking CELO and by participating in validator elections and governance proposals. Initially, the number of validators will be capped to one hundred nodes elected by CELO holders. Validators earn additional fixed rewards in Celo Dollars (cUSD) to cover their costs plus margin."),(0,a.kt)("h2",{id:"on-chain-governance"},"On-Chain Governance"),(0,a.kt)("p",null,"Celo uses an on-chain governance mechanism to manage and upgrade aspects of the protocol that reside in the Celo Core Contracts and for a number of parameters used by the Celo blockchain. This includes operations like upgrading smart contracts, adding new stable currencies, modifying the reserve target asset allocation, and changing how validator elections are decided."),(0,a.kt)("p",null,"The Governance contract is set as \u201cowner\u201d for all of the Celo Core Contracts. This allows the protocol to carry out agreed governance proposals by executing code in the context of the Governance contract. Proposals are selected for consideration and voted on by CELO holders using a weighted vote based on the same Locked CELO commitment used to vote to elect validators."),(0,a.kt)("h2",{id:"ultralight-synchronization"},"Ultralight Synchronization"),(0,a.kt)("p",null,"Celo provides extremely fast, secure synchronization to enable light clients to begin to track the current state of the Celo blockchain ledger almost immediately. This means that even wallet users with high latency, low bandwidth, or high-cost data tariffs can use Celo."),(0,a.kt)("p",null,"In Ethereum, verifying whether data received from an untrusted full node really does represent the current state of a blockchain requires fetching every block header ever produced to confirm they form a cryptographically secure chain. A consequence of Celo using a BFT consensus algorithm is that it can do that verification by building a chain only of changes in the validator set, not each individual block."),(0,a.kt)("p",null,"Roadmap: Synchronization performance will be further improved with BLS signature aggregation and succinct zero-knowledge proofs, via zk-SNARKs."),(0,a.kt)("h2",{id:"incentives-for-operating-full-nodes"},"Incentives for Operating Full Nodes"),(0,a.kt)("p",null,"In Ethereum, there are few incentives to run a full node that is not mining. Few nodes serve light clients, and this results in a poor experience for mobile wallets."),(0,a.kt)("p",null,"Celo introduces a scheme that incentivizes users to operate regular nodes. Light clients pay transaction fees to full nodes. Clients include in every transaction the address of a node that, when the transaction is processed, receives the fee. While a full node provides other services for which they receive no specific fee, it is expected that failing to service these requests will cause clients to seek other full nodes that do, who will then receive fees when they next make a transaction."),(0,a.kt)("p",null,"Since light clients need not trust full nodes, as they can verify their work, this also provides the 'permissionless on-ramp' for users to receive CELO or Celo Dollars (cUSD) without already holding it that is missing in other Proof-of-Stake networks."),(0,a.kt)("h2",{id:"stable-cryptocurrencies"},"Stable Cryptocurrencies"),(0,a.kt)("p",null,"Celo enables a family of stablecoins that track the value of any asset, including fiat currencies, commodities, and even natural resources. Stablecoins supported include the Celo Dollar (cUSD) and the Celo Euro (cEUR), which track the value of the U.S. Dollar and Euro respectively. CELO and a basket of other assets including BTC and ETH serve as the collateral for these stablecoins. These stablecoins are redeemable for CELO, ensuring that transactions can occur quickly, cheaply, and reliably on-chain."),(0,a.kt)("p",null,"Celo's stability mechanism allows users to create a new cUSD and cEUR by sending CELO to the reserve or burn cUSD and cEUR by redeeming it for their equivalent value in CELO."),(0,a.kt)("p",null,"This mechanism relies on a series of Oracles, or information feeds from exchanges external to the network, to report the CELO to US Dollar or Euro market rates. To minimize the risk of a run on CELO collateral when these reported values are inaccurate or out-of-date, Celo uses an on-chain constant-product-market-maker model, inspired by the",(0,a.kt)("a",{parentName:"p",href:"https://uniswap.io/"}," Uniswap")," system. This mechanism adjusts the redemption price of CELO until either arbitrage occurs (so that the on-chain price dynamically adjusts until the offered rate meets the external rate) or Oracles reset the on-chain price."),(0,a.kt)("p",null,"The Celo Protocol ensures that there is sufficient CELO collateral to redeem the amount of CELO in circulation through several sources. These include a stability fee levied on Celo Dollar (cUSD) balances, a transfer from epoch rewards, plus the proceeds from the spread when interacting with the on-chain market-maker mechanism."),(0,a.kt)("p",null,'In addition, a backup reserve of cryptocurrencies is held off-chain. This off-chain reserve is managed to preserve value and minimize volatility by maintaining a diversified portfolio of cryptocurrencies through algorithmic rebalancing trading and periodically "topping-up" the CELO collateral available to ensure it exceeds the amount required to redeem Celo Dollars (cUSD) in circulation. The approved cryptocurrencies, distribution ratios, and rebalancing period are all subject to on-chain governance.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Roadmap: "),"Celo envisages a number of stable currencies tracking different fiat currencies as well as natural resources such as forests. In addition, once bridges between other chains and the Celo blockchain are fully developed, and liquid trading on decentralized exchanges occurs, the rebalancing can be handled transparently on-chain."),(0,a.kt)("h2",{id:"lightweight-identity"},"Lightweight Identity"),(0,a.kt)("p",null,"Celo offers a lightweight identity layer that allows users of applications including Celo Wallet to identify and securely transact with other users via their contacts' phone numbers. Celo Wallet enables payments directly to users listed in their device's contacts list."),(0,a.kt)("p",null,"The Attestations contract allows a user to request attestations to their phone number for a small fee. A secure decentralized source of randomness is used to pick a number of validators that will produce and send via SMS signed secret messages that act as attestations of ownership of the phone number. The user then submits these back to the Attestations contract which verifies them and installs a mapping for the phone number to the user's account."),(0,a.kt)("h2",{id:"richer-transactions"},"Richer Transactions"),(0,a.kt)("p",null,"Celo provides a number of enhancements to regular transactions as familiar to Ethereum developers."),(0,a.kt)("p",null,"The Celo native asset has duality as both the native currency and is also an ERC-20 token, simplifying the work of application developers."),(0,a.kt)("p",null,"Celo assets exist on an independent blockchain, and cannot be accessed through wallets that connect to the Ethereum network. Only use wallets designed to work with the Celo network."),(0,a.kt)("p",null,"In Celo, transaction fees can be paid in stable cryptocurrencies. A user sending Celo Dollars will be able to pay their transaction fee out of their Celo Dollar (cUSD) balance, so they do not need to hold a separate balance of CELO in order to make transactions. The protocol maintains a list of currencies that can be used to pay for transaction fees. These smart contracts implement an extension of the ERC-20 interface, with additional functions that allow the protocol to debit and credit transaction fees."),(0,a.kt)("p",null,"The Escrow contract allows users to send payments to other users who can be identified by a phone number but don\u2019t yet have an account. These payments are stored in this contract itself and can be either withdrawn by the intended recipient after creating an account and attesting their identity or reclaimed by the sender."),(0,a.kt)("p",null,"Transfers between two accounts with associated identities support end-to-end encrypted comments. A comment encrypted to the identity's public key is passed when making the transfer and included in an event that can be located on the blockchain ledger."))}u.isMDXComponent=!0}}]);