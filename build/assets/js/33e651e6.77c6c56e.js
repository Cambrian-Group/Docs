"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[7688],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97899:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],c={},s="Future Privacy Research",l={unversionedId:"celo-codebase/protocol/identity/privacy-research",id:"celo-codebase/protocol/identity/privacy-research",title:"Future Privacy Research",description:"Celo is committed to meet the privacy needs of its users. This section describes future plans for delivering on this commitment, while also sharing the current limitations of the Celo networks.",source:"@site/docs/celo-codebase/protocol/identity/privacy-research.md",sourceDirName:"celo-codebase/protocol/identity",slug:"/celo-codebase/protocol/identity/privacy-research",permalink:"/celo-codebase/protocol/identity/privacy-research",editUrl:"",tags:[],version:"current",frontMatter:{}},u=[{value:"Privacy mode",id:"privacy-mode",children:[],level:3},{value:"Transaction and Balance Privacy",id:"transaction-and-balance-privacy",children:[],level:3}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"future-privacy-research"},"Future Privacy Research"),(0,a.kt)("p",null,"Celo is committed to meet the privacy needs of its users. This section describes future plans for delivering on this commitment, while also sharing the current limitations of the Celo networks."),(0,a.kt)("h3",{id:"privacy-mode"},"Privacy mode"),(0,a.kt)("p",null,"One downside to this identity protocol is that knowledge of a phone number can let anyone quickly determine the balance of the associated wallet, which of course may be unacceptable for many use cases. For these circumstances, the contract allows users to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Attestations")," contract in privacy mode. In this mode, the user does not map their phone number to their wallet address, but to an account that is not meant to be the recipient of transfers. Through a registered encryption key on the user\u2019s account on the contract, schemes can be derived to allow users to selectively reveal their true wallet addresses to authorized participants."),(0,a.kt)("h3",{id:"transaction-and-balance-privacy"},"Transaction and Balance Privacy"),(0,a.kt)("p",null,"As with most public blockchains ","(","e.g. Bitcoin, Ethereum",")",", transactions and smart contracts calls on Celo are public for everyone to see. This means that if a user wants to map the hash of their phone number to their wallet address, people with knowledge of that user's phone number will be able to see their transactions and balances."),(0,a.kt)("p",null,"To address this issue, the cLabs team, ",(0,a.kt)("a",{parentName:"p",href:"https://matterlabs.dev"},"Matterlabs")," and other esteemed zk-SNARK cryptographers and Celo community members are working to create a framework that makes it easy to create gas-efficient tokens that offer Zcash-like privacy, using a shared anonymity pool. Such an implementation could allow wallets to use the default identity mode easily without the risk that someone with your phone number could see your balance and transaction history."))}d.isMDXComponent=!0}}]);