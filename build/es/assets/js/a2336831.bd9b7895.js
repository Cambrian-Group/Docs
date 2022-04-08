"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[1231],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return u}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=d(r),u=l,g=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return r?n.createElement(g,c(c({ref:t},s),{},{components:r})):n.createElement(g,c({ref:t},s))}));function u(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,c=new Array(o);c[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,c[1]=a;for(var d=2;d<o;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43142:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var n=r(83117),l=r(80102),o=(r(67294),r(3905)),c=["components"],a={},i="celocli dkg",d={unversionedId:"command-line-interface/dkg",id:"command-line-interface/dkg",title:"celocli dkg",description:"Publish your locally computed DKG results to the blockchain",source:"@site/docs/command-line-interface/dkg.md",sourceDirName:"command-line-interface",slug:"/command-line-interface/dkg",permalink:"/es/command-line-interface/dkg",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"celocli config",permalink:"/es/command-line-interface/config"},next:{title:"celocli election",permalink:"/es/command-line-interface/election"}},s=[{value:"<code>celocli dkg:allowlist</code>",id:"celocli-dkgallowlist",children:[],level:2},{value:"<code>celocli dkg:deploy</code>",id:"celocli-dkgdeploy",children:[],level:2},{value:"<code>celocli dkg:get</code>",id:"celocli-dkgget",children:[],level:2},{value:"<code>celocli dkg:publish</code>",id:"celocli-dkgpublish",children:[],level:2},{value:"<code>celocli dkg:register</code>",id:"celocli-dkgregister",children:[],level:2},{value:"<code>celocli dkg:start</code>",id:"celocli-dkgstart",children:[],level:2}],p={toc:s};function m(e){var t=e.components,r=(0,l.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"celocli-dkg"},(0,o.kt)("inlineCode",{parentName:"h1"},"celocli dkg")),(0,o.kt)("p",null,"Publish your locally computed DKG results to the blockchain"),(0,o.kt)("h2",{id:"celocli-dkgallowlist"},(0,o.kt)("inlineCode",{parentName:"h2"},"celocli dkg:allowlist")),(0,o.kt)("p",null,"Allowlist an address in the DKG"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Allowlist an address in the DKG\n\nUSAGE\n  $ celocli dkg:allowlist\n\nOPTIONS\n  --address=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) DKG Contract Address\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d     (required) Address of the sender\n  --globalHelp                                          View all available global flags\n\n  --participantAddress=participantAddress               (required) Address of the\n                                                        participant to allowlist\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/dkg/allowlist.ts"},"src/commands/dkg/allowlist.ts"))),(0,o.kt)("h2",{id:"celocli-dkgdeploy"},(0,o.kt)("inlineCode",{parentName:"h2"},"celocli dkg:deploy")),(0,o.kt)("p",null,"Deploys the DKG smart contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Deploys the DKG smart contract\n\nUSAGE\n  $ celocli dkg:deploy\n\nOPTIONS\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Address of the sender\n  --globalHelp                                       View all available global flags\n\n  --phaseDuration=phaseDuration                      (required) Duration of each DKG\n                                                     phase in blocks\n\n  --threshold=threshold                              (required) The threshold to use for\n                                                     the DKG\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/dkg/deploy.ts"},"src/commands/dkg/deploy.ts"))),(0,o.kt)("h2",{id:"celocli-dkgget"},(0,o.kt)("inlineCode",{parentName:"h2"},"celocli dkg:get")),(0,o.kt)("p",null,"Gets data from the contract to run the next phase"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Gets data from the contract to run the next phase\n\nUSAGE\n  $ celocli dkg:get\n\nOPTIONS\n  --address=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d                 (required) DKG\n                                                                       Contract Address\n\n  --globalHelp                                                         View all\n                                                                       available global\n                                                                       flags\n\n  --method=(shares|responses|justifications|participants|phase|group)  (required) Getter\n                                                                       method to call\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/dkg/get.ts"},"src/commands/dkg/get.ts"))),(0,o.kt)("h2",{id:"celocli-dkgpublish"},(0,o.kt)("inlineCode",{parentName:"h2"},"celocli dkg:publish")),(0,o.kt)("p",null,"Publishes data for each phase of the DKG"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Publishes data for each phase of the DKG\n\nUSAGE\n  $ celocli dkg:publish\n\nOPTIONS\n  --address=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) DKG Contract Address\n\n  --data=data                                           (required) Path to the data\n                                                        being published\n\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d     (required) Address of the sender\n\n  --globalHelp                                          View all available global flags\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/dkg/publish.ts"},"src/commands/dkg/publish.ts"))),(0,o.kt)("h2",{id:"celocli-dkgregister"},(0,o.kt)("inlineCode",{parentName:"h2"},"celocli dkg:register")),(0,o.kt)("p",null,"Register a public key in the DKG"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Register a public key in the DKG\n\nUSAGE\n  $ celocli dkg:register\n\nOPTIONS\n  --address=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) DKG Contract Address\n  --blsKey=blsKey                                       (required)\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d     (required) Address of the sender\n  --globalHelp                                          View all available global flags\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/dkg/register.ts"},"src/commands/dkg/register.ts"))),(0,o.kt)("h2",{id:"celocli-dkgstart"},(0,o.kt)("inlineCode",{parentName:"h2"},"celocli dkg:start")),(0,o.kt)("p",null,"Starts the DKG"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Starts the DKG\n\nUSAGE\n  $ celocli dkg:start\n\nOPTIONS\n  --address=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) DKG Contract Address\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d     (required) Address of the sender\n  --globalHelp                                          View all available global flags\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/dkg/start.ts"},"src/commands/dkg/start.ts"))))}m.isMDXComponent=!0}}]);