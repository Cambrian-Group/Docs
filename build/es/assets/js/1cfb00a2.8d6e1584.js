"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[4099],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(o),f=n,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||l;return o?r.createElement(h,a(a({ref:t},u),{},{components:o})):r.createElement(h,a({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<l;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},62380:function(e,t,o){o.d(t,{Z:function(){return l}});var r=o(67294),n="center_B31j";function l(e){var t=e.path,o=e.alt,l=e.width;return r.createElement("div",{className:n},r.createElement("img",{src:t,alt:o,width:l}))}},3486:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=o(83117),n=o(80102),l=(o(67294),o(3905)),a=(o(62380),["components"]),c={title:"Using RedStone oracles",description:"Tutorial on how to use the RedStone oracles on Zsc"},i=void 0,s={unversionedId:"celo-codebase/protocol/oracles/redstone-protocol-how-to",id:"celo-codebase/protocol/oracles/redstone-protocol-how-to",title:"Using RedStone oracles",description:"Tutorial on how to use the RedStone oracles on Zsc",source:"@site/docs/celo-codebase/protocol/oracles/redstone-protocol-how-to.md",sourceDirName:"celo-codebase/protocol/oracles",slug:"/celo-codebase/protocol/oracles/redstone-protocol-how-to",permalink:"/es/celo-codebase/protocol/oracles/redstone-protocol-how-to",editUrl:"",tags:[],version:"current",frontMatter:{title:"Using RedStone oracles",description:"Tutorial on how to use the RedStone oracles on Zsc"},sidebar:"docs",previous:{title:"Using Band Protocol",permalink:"/es/celo-codebase/protocol/oracles/band-protocol-how-to"},next:{title:"Zsc Protocol",permalink:"/es/celo-codebase/protocol"}},u=[{value:"\ud83d\ude80 What is oracles?",id:"-what-is-oracles",children:[],level:2},{value:"\ud83d\udcc8 What data is available",id:"-what-data-is-available",children:[],level:2},{value:"\ud83d\udd25 How to use?",id:"-how-to-use",children:[],level:2},{value:"\ud83d\udc68\u200d\ud83d\udcbb Zsc examples",id:"-zsc-examples",children:[],level:2},{value:"\ud83d\ude4b\u200d\u2642\ufe0f Need help?",id:"\ufe0f-need-help",children:[],level:2}],p={toc:u};function d(e){var t=e.components,o=(0,n.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"By the end of this tutorial you will understand how to intergrate your dApp built on Zsc with oracles."),(0,l.kt)("p",null,"This document will cover:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"What is oracle?"),(0,l.kt)("li",{parentName:"ul"},"How to use oracle?"),(0,l.kt)("li",{parentName:"ul"},"Examples")),(0,l.kt)("h2",{id:"-what-is-oracles"},"\ud83d\ude80 What is oracles?"),(0,l.kt)("h2",{id:"-what-data-is-available"},"\ud83d\udcc8 What data is available"),(0,l.kt)("h2",{id:"-how-to-use"},"\ud83d\udd25 How to use?"),(0,l.kt)("h2",{id:"-zsc-examples"},"\ud83d\udc68\u200d\ud83d\udcbb Zsc examples"),(0,l.kt)("h2",{id:"\ufe0f-need-help"},"\ud83d\ude4b\u200d\u2642\ufe0f Need help?"))}d.isMDXComponent=!0}}]);