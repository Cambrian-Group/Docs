"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[1119],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,b=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87353:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={title:"Deploy & Mint a Token",description:"How to deploy an ERC20 token contract to Celo.",authors:[{name:"Josh Crites",title:"Developer Relations, cLabs",url:"https://github.com/critesjosh",image_url:"https://github.com/critesjosh.png"}],tags:["tokens","ERC20","mint","solidity","open zeppelin","remix"],image:"https://dl.airtable.com/.attachmentThumbnails/a7e530eb72ac8f30f37c0a3447ef0e7d/72e944da",hide_table_of_contents:!1},c="Deploy an ERC20 token to Celo",p={permalink:"/blog/2022/01/04/no-code-erc20",source:"@site/blog/2022-01-04-no-code-erc20.md",title:"Deploy & Mint a Token",description:"How to deploy an ERC20 token contract to Celo.",date:"2022-01-04T00:00:00.000Z",formattedDate:"January 4, 2022",tags:[{label:"tokens",permalink:"/blog/tags/tokens"},{label:"ERC20",permalink:"/blog/tags/erc-20"},{label:"mint",permalink:"/blog/tags/mint"},{label:"solidity",permalink:"/blog/tags/solidity"},{label:"open zeppelin",permalink:"/blog/tags/open-zeppelin"},{label:"remix",permalink:"/blog/tags/remix"}],readingTime:2.5033333333333334,truncated:!0,authors:[{name:"Josh Crites",title:"Developer Relations, cLabs",url:"https://github.com/critesjosh",image_url:"https://github.com/critesjosh.png",imageURL:"https://github.com/critesjosh.png"}],prevItem:{title:"Deploy an NFT to Celo",permalink:"/blog/2022/01/05/no-code-erc721"},nextItem:{title:"Deploy and Interact with Contracts (Remotely)",permalink:"/blog/developer-guide/start/hello-contract-remote-node"}},s={authorsImageUrls:[void 0]},u=[],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to deploy a token contract that use the ERC20 token standard to Celo without writing code."))}f.isMDXComponent=!0}}]);