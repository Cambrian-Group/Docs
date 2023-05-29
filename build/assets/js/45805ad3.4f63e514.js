"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[3258],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24857:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],c={title:"Celo Governance Cheat Sheet",description:"List of governable parameters and governance restrictions on Celo.",slug:"/celo-owner-guide/governance-cheat-sheet"},l="Governance Cheat Sheet",s={unversionedId:"celo-holder-guide/governance-cheat-sheet",id:"celo-holder-guide/governance-cheat-sheet",title:"Celo Governance Cheat Sheet",description:"List of governable parameters and governance restrictions on Celo.",source:"@site/docs/celo-holder-guide/governance-cheat-sheet.md",sourceDirName:"celo-holder-guide",slug:"/celo-owner-guide/governance-cheat-sheet",permalink:"/celo-owner-guide/governance-cheat-sheet",editUrl:"",tags:[],version:"current",frontMatter:{title:"Celo Governance Cheat Sheet",description:"List of governable parameters and governance restrictions on Celo.",slug:"/celo-owner-guide/governance-cheat-sheet"}},u=[{value:"Governable Parameters",id:"governable-parameters",children:[],level:2},{value:"Things That Can&#39;t Be Modified By Governance",id:"things-that-cant-be-modified-by-governance",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"governance-cheat-sheet"},"Governance Cheat Sheet"),(0,a.kt)("p",null,"List of governable parameters and governance restrictions on Celo."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"governable-parameters"},"Governable Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The stability protocol, including the exchange"),(0,a.kt)("li",{parentName:"ul"},"What the protocol does with data feeds from Oracles"),(0,a.kt)("li",{parentName:"ul"},"Adding or removing stablecoins"),(0,a.kt)("li",{parentName:"ul"},"Whitelisting stablecoins (or other ERC20s) for use in paying gas fees "),(0,a.kt)("li",{parentName:"ul"},"The identity protocol, including how phone number attestations works"),(0,a.kt)("li",{parentName:"ul"},"Linking of signers and off-chain metadata (e.g claims) to accounts "),(0,a.kt)("li",{parentName:"ul"},"Most of Proof of Stake protocol, including elections, locked gold, slashing parameters"),(0,a.kt)("li",{parentName:"ul"},"On-chain governance itself "),(0,a.kt)("li",{parentName:"ul"},"MinimumClientVersion"),(0,a.kt)("li",{parentName:"ul"},"BlockGasLimit"),(0,a.kt)("li",{parentName:"ul"},"IntrinsicGasForAlternativeFeeCurrency")),(0,a.kt)("h2",{id:"things-that-cant-be-modified-by-governance"},"Things That Can't Be Modified By Governance"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The protocol by which nodes communicate "),(0,a.kt)("li",{parentName:"ul"},"The format of block headers, block bodies, the fields in transactions, etc"),(0,a.kt)("li",{parentName:"ul"},"How nodes sync"),(0,a.kt)("li",{parentName:"ul"},"How nodes store their data locally"),(0,a.kt)("li",{parentName:"ul"},"Most parameters that affect the blockchain")))}d.isMDXComponent=!0}}]);