"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[7998],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40619:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),c=["components"],i={title:"Celo Transactions Overview",description:"Introduction to Celo transactions, gas prices, and gateway fees.",slug:"/celo-codebase/protocol/transactions"},s="Transactions",l={unversionedId:"celo-codebase/protocol/transactions/index",id:"celo-codebase/protocol/transactions/index",title:"Celo Transactions Overview",description:"Introduction to Celo transactions, gas prices, and gateway fees.",source:"@site/docs/celo-codebase/protocol/transactions/index.md",sourceDirName:"celo-codebase/protocol/transactions",slug:"/celo-codebase/protocol/transactions",permalink:"/celo-codebase/protocol/transactions",editUrl:"",tags:[],version:"current",frontMatter:{title:"Celo Transactions Overview",description:"Introduction to Celo transactions, gas prices, and gateway fees.",slug:"/celo-codebase/protocol/transactions"},sidebar:"docs",previous:{title:"Zsc Governance",permalink:"/celo-codebase/protocol/governance"},next:{title:"Zsc Native Currency",permalink:"/celo-codebase/protocol/transactions/native-currency"}},u=[{value:"Celo vs Ethereum Transactions",id:"celo-vs-ethereum-transactions",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transactions"},"Transactions"),(0,a.kt)("p",null,"Introduction to Celo transactions, gas prices, and gateway fees."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"celo-vs-ethereum-transactions"},"Celo vs Ethereum Transactions"),(0,a.kt)("p",null,"Transactions in the Celo protocol include payments, contract calls, and other operation which modifies state. They are similar to Ethereum transaction with the following key differences."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gas prices must meet or exceed the ",(0,a.kt)("a",{parentName:"li",href:"/celo-codebase/protocol/transactions/gas-pricing"},"gas price minimum"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/celo-codebase/protocol/transactions/full-node-incentives"},"Gateway fees")," may be included to incentivize full nodes to serve the transaction."),(0,a.kt)("li",{parentName:"ul"},"Gas and gateway fees may be paid in currencies other than the native CELO.")))}d.isMDXComponent=!0}}]);