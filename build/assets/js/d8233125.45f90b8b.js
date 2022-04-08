"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[1863],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),k=a,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53256:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={title:"Celo Core Contracts (Wrapper/Registry)",description:"How to interact with CELO assets using the wrapper and registry Celo Core Contracts.",slug:"/developer-guide/contractkit/contracts-wrappers-registry"},c="Core Contracts (Wrapper/Registry)",s={unversionedId:"developer-resources/contractkit/contracts-wrappers-registry",id:"developer-resources/contractkit/contracts-wrappers-registry",title:"Celo Core Contracts (Wrapper/Registry)",description:"How to interact with CELO assets using the wrapper and registry Celo Core Contracts.",source:"@site/docs/developer-resources/contractkit/contracts-wrappers-registry.md",sourceDirName:"developer-resources/contractkit",slug:"/developer-guide/contractkit/contracts-wrappers-registry",permalink:"/developer-guide/contractkit/contracts-wrappers-registry",editUrl:"https://github.com/celo-org/docs/edit/main/docs/developer-resources/contractkit/contracts-wrappers-registry.md",tags:[],version:"current",frontMatter:{title:"Celo Core Contracts (Wrapper/Registry)",description:"How to interact with CELO assets using the wrapper and registry Celo Core Contracts.",slug:"/developer-guide/contractkit/contracts-wrappers-registry"},sidebar:"developers",previous:{title:"Using Web3 from ContractKit with Celo",permalink:"/developer-guide/contractkit/notes-web3-with-contractkit"},next:{title:"Querying on-chain identifiers with ODIS",permalink:"/developer-guide/contractkit/odis"}},p=[{value:"Interacting with CELO &amp; cUSD",id:"interacting-with-celo--cusd",children:[],level:2},{value:"Interacting with Other Celo Contracts",id:"interacting-with-other-celo-contracts",children:[],level:2},{value:"A Note About Contract Addresses",id:"a-note-about-contract-addresses",children:[],level:2},{value:"Accessing web3 contract wrappers",id:"accessing-web3-contract-wrappers",children:[],level:2},{value:"Debugging",id:"debugging",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"core-contracts-wrapperregistry"},"Core Contracts (Wrapper/Registry)"),(0,o.kt)("p",null,"How to interact with CELO assets using the wrapper and registry Celo Core Contracts."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"interacting-with-celo--cusd"},"Interacting with CELO & cUSD"),(0,o.kt)("p",null,"celo-blockchain has two initial coins: CELO and cUSD (stableToken).\nBoth implement the ERC20 standard, and to interact with them is as simple as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const goldtoken = await kit.contracts.getGoldToken()\n\nconst balance = await goldtoken.balanceOf(someAddress)\n")),(0,o.kt)("p",null,"To send funds:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const oneGold = kit.web3.utils.toWei('1', 'ether')\nconst tx = await goldtoken.transfer(someAddress, oneGold).send({\n  from: myAddress,\n})\n\nconst hash = await tx.getHash()\nconst receipt = await tx.waitReceipt()\n")),(0,o.kt)("p",null,"To interact with cUSD, is the same but with a different contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const stabletoken = await kit.contracts.getStableToken()\n")),(0,o.kt)("h2",{id:"interacting-with-other-celo-contracts"},"Interacting with Other Celo Contracts"),(0,o.kt)("p",null,"Apart from GoldToken and StableToken, there are many core contracts."),(0,o.kt)("p",null,"For the moment, we have contract wrappers for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Accounts"),(0,o.kt)("li",{parentName:"ul"},"Attestations"),(0,o.kt)("li",{parentName:"ul"},"BlockchainParameters"),(0,o.kt)("li",{parentName:"ul"},"DobleSigningSlasher"),(0,o.kt)("li",{parentName:"ul"},"DowntimeSlasher"),(0,o.kt)("li",{parentName:"ul"},"Election"),(0,o.kt)("li",{parentName:"ul"},"Escrow"),(0,o.kt)("li",{parentName:"ul"},"Exchange (Uniswap kind exchange between Gold and Stable tokens)"),(0,o.kt)("li",{parentName:"ul"},"GasPriceMinimum"),(0,o.kt)("li",{parentName:"ul"},"GoldToken"),(0,o.kt)("li",{parentName:"ul"},"Governance"),(0,o.kt)("li",{parentName:"ul"},"LockedGold"),(0,o.kt)("li",{parentName:"ul"},"Reserve"),(0,o.kt)("li",{parentName:"ul"},"SortedOracles"),(0,o.kt)("li",{parentName:"ul"},"Validators"),(0,o.kt)("li",{parentName:"ul"},"StableToken")),(0,o.kt)("h2",{id:"a-note-about-contract-addresses"},"A Note About Contract Addresses"),(0,o.kt)("p",null,"Celo Core Contracts addresses, can be obtained by looking at the ",(0,o.kt)("inlineCode",{parentName:"p"},"Registry")," contract.\nThat's actually how ",(0,o.kt)("inlineCode",{parentName:"p"},"kit")," obtain them."),(0,o.kt)("p",null,"We expose the registry api, which can be accessed by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const goldTokenAddress = await kit.registry.addressFor(CeloContract.GoldToken)\n")),(0,o.kt)("h2",{id:"accessing-web3-contract-wrappers"},"Accessing web3 contract wrappers"),(0,o.kt)("p",null,"Some user might want to access web3 native contract wrappers.\n",(0,o.kt)("em",{parentName:"p"},"We encourage to use the Celo contracts instead to avoid mistakes.")),(0,o.kt)("p",null,"To do so, you can:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const web3Exchange = await kit._web3Contracts.getExchange()\n")),(0,o.kt)("p",null,"We expose native wrappers for all Web3 contracts."),(0,o.kt)("p",null,"The complete list is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Accounts"),(0,o.kt)("li",{parentName:"ul"},"Attestations"),(0,o.kt)("li",{parentName:"ul"},"BlockchainParameters"),(0,o.kt)("li",{parentName:"ul"},"DoubleSigningSlasher"),(0,o.kt)("li",{parentName:"ul"},"DowntimeSlasher"),(0,o.kt)("li",{parentName:"ul"},"Election"),(0,o.kt)("li",{parentName:"ul"},"EpochRewards"),(0,o.kt)("li",{parentName:"ul"},"Escrow"),(0,o.kt)("li",{parentName:"ul"},"Exchange"),(0,o.kt)("li",{parentName:"ul"},"FeeCurrencyWhiteList"),(0,o.kt)("li",{parentName:"ul"},"GasPriceMinimum"),(0,o.kt)("li",{parentName:"ul"},"GoldToken"),(0,o.kt)("li",{parentName:"ul"},"Governance"),(0,o.kt)("li",{parentName:"ul"},"LockedGold"),(0,o.kt)("li",{parentName:"ul"},"Random"),(0,o.kt)("li",{parentName:"ul"},"Registry"),(0,o.kt)("li",{parentName:"ul"},"Reserve"),(0,o.kt)("li",{parentName:"ul"},"SortedOracles"),(0,o.kt)("li",{parentName:"ul"},"StableToken"),(0,o.kt)("li",{parentName:"ul"},"Validators")),(0,o.kt)("h2",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"If you need to debug ",(0,o.kt)("inlineCode",{parentName:"p"},"kit"),", we use the well known ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/visionmedia/debug"},"debug")," node library."),(0,o.kt)("p",null,"So set the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG")," as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'DEBUG="kit:*,\n')))}d.isMDXComponent=!0}}]);