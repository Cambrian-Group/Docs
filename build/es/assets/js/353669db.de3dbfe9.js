"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[2153],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return g}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=n,d=u["".concat(l,".").concat(g)]||u[g]||c[g]||o;return r?a.createElement(d,i(i({ref:t},h),{},{components:r})):a.createElement(d,i({ref:t},h))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},47122:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return h},toc:function(){return c},default:function(){return g}});var a=r(83117),n=r(80102),o=(r(67294),r(3905)),i=["components"],s={title:"Using the Graph w/ Celo",description:"Learn about what the Graph is and how to use it in your Celo DApp",slug:"using-the-graph",authors:["josh"],tags:["The Graph","DApps"],image:"https://dl.airtable.com/.attachmentThumbnails/dd1b24f2e572bdf951dcc727ddf043ac/76b5253c",hide_table_of_contents:!1},l=void 0,p={permalink:"/es/blog/using-the-graph",source:"@site/blog/2021-11-18-using-the-graph/index.md",title:"Using the Graph w/ Celo",description:"Learn about what the Graph is and how to use it in your Celo DApp",date:"2021-11-18T00:00:00.000Z",formattedDate:"18 de noviembre de 2021",tags:[{label:"The Graph",permalink:"/es/blog/tags/the-graph"},{label:"DApps",permalink:"/es/blog/tags/d-apps"}],readingTime:4.496666666666667,truncated:!0,authors:[{name:"Josh Crites",title:"Developer Relations, cLabs",url:"https://github.com/critesjosh",imageURL:"https://github.com/critesjosh.png",key:"josh"}],prevItem:{title:"Demos with ObservableHQ",permalink:"/es/blog/observable-intro"},nextItem:{title:"Code Playground -- Metamask",permalink:"/es/blog/code-metamask"}},h={authorsImageUrls:[void 0]},c=[{value:"What is the Graph?",id:"what-is-the-graph",children:[],level:2}],u={toc:c};function g(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/"},"The Graph protocol")," makes it easy to get historical blockchain data. This can be useful when you want to check a users history of using a specific token or interacting with a specific contract. It may also be useful when collecting data about the activity around a specific contract, or set of contracts. The Graph also makes this data easy to transform, organize and share across applications."),(0,o.kt)("p",null,"In this post I explore"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/es/blog/using-the-graph#what-is-the-graph"},"What the Graph is")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/es/blog/using-the-graph#using-the-graph"},"How to get started using the Graph with Celo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/es/blog/using-the-graph#initialize-your-subgraph"},"What a subgraph is and how to create one")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/es/blog/using-the-graph#deploy-subgraph"},"How to deploy a subgraph to the Graph's hosted service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/es/blog/using-the-graph#query-the-subgraph"},"How to query a subgraph"))),(0,o.kt)("h2",{id:"what-is-the-graph"},"What is the Graph?"),(0,o.kt)("p",null,"From the Graph website:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The Graph is a decentralized protocol for indexing and querying data from blockchains, starting with Ethereum. It makes it possible to query data that is difficult to query directly.")),(0,o.kt)("p",null,"The problem that the Graph solves is that indexing blockchain data is actually very difficult. Additionally, the Graph makes it easy to get historical blockchain data without having to run your own archive node or paying to access an archive node through a node service provider, like ",(0,o.kt)("a",{parentName:"p",href:"https://www.quicknode.com/chains/celo"},"Quicknode"),"."))}g.isMDXComponent=!0}}]);