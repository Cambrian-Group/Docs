"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[4137],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(83117),r=n(67294),o=n(72389),i=n(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(16681),c=n(86010),d="tabItem_vU9c";function u(e){var t,n,o,i=e.lazy,u=e.block,p=e.defaultValue,m=e.values,h=e.groupId,g=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=l(),y=N.tabGroupChoices,w=N.setTabGroupChoices,x=(0,r.useState)(b),E=x[0],T=x[1],C=[],B=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=y[h];null!=O&&O!==E&&k.some((function(e){return e.value===O}))&&T(O)}var D=function(e){var t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==E&&(B(t),T(a),null!=h&&w(h,a))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},g)},k.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return C.push(e)},onKeyDown:A,onFocus:D,onClick:D},o,{className:(0,c.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function p(e){var t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},50273:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(26396),l=n(58215),s=["components"],c={title:"Bridge Tokens with Etherscan",description:"Bridging ERC-20 tokens from Ethereum and Polygon to Celo."},d="Bridge Tokens with Etherscan",u={unversionedId:"celo-codebase/protocol/bridging/bridging-tokens-with-etherscan",id:"celo-codebase/protocol/bridging/bridging-tokens-with-etherscan",title:"Bridge Tokens with Etherscan",description:"Bridging ERC-20 tokens from Ethereum and Polygon to Celo.",source:"@site/docs/celo-codebase/protocol/bridging/bridging-tokens-with-etherscan.md",sourceDirName:"celo-codebase/protocol/bridging",slug:"/celo-codebase/protocol/bridging/bridging-tokens-with-etherscan",permalink:"/es/celo-codebase/protocol/bridging/bridging-tokens-with-etherscan",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{title:"Bridge Tokens with Etherscan",description:"Bridging ERC-20 tokens from Ethereum and Polygon to Celo."},sidebar:"docs",previous:{title:"Bridge Native Assets with Etherscan",permalink:"/es/celo-codebase/protocol/bridging/bridging-native-assets"},next:{title:"Migrating to Optics v2",permalink:"/es/celo-codebase/protocol/bridging/migrating-to-optics-v2"}},p=[{value:"Approve the Bridge",id:"approve-the-bridge",children:[],level:2},{value:"Call the Bridge",id:"call-the-bridge",children:[],level:2},{value:"Wait",id:"wait",children:[],level:2}],m={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bridge-tokens-with-etherscan"},"Bridge Tokens with Etherscan"),(0,o.kt)("p",null,"How to bridge ERC-20 tokens from Ethereum and Polygon to Celo."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"approve-the-bridge"},"Approve the Bridge"),(0,o.kt)("p",null,"Start by approving token usage on the bridge."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to the ",(0,o.kt)("a",{parentName:"li",href:"https://etherscan.io/"},"Etherscan")," (or ",(0,o.kt)("a",{parentName:"li",href:"https://polygonscan.com/"},"Polygonscan"),") page  for the token you want to send"),(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("strong",{parentName:"li"},"Write Contract")," pane > ",(0,o.kt)("strong",{parentName:"li"},"connect your wallet")," > and select ",(0,o.kt)("strong",{parentName:"li"},"approve"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/joenyzio/assets/blob/main/celo-docs/bridging-tokens-with-etherscan/bridging-tokens-with-etherscan-1.png?raw=true",alt:"Bridging Tokens with Etherescan 1"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("strong",{parentName:"li"},"spender")," enter the BridgeRouter address:")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Ethereum",label:"Ethereum",default:!0,mdxType:"TabItem"},"Ethereum BridgeRouter Address = ",(0,o.kt)("code",null,"0x4fc16De11deAc71E8b2Db539d82d93BE4b486892")),(0,o.kt)(l.Z,{value:"Polygon",label:"Polygon",mdxType:"TabItem"},"Polygon BridgeRouter Address = ",(0,o.kt)("code",null,"0x3a5846882C0d5F8B0FA4bB04dc90C013104d125d"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("strong",{parentName:"li"},"amount")," enter the number of tokens you'd like to send in that token's smallest unit.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you're unsure, check the decimals in the Read Contract pane"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"For most tokens the number of digits is 18"),(0,o.kt)("li",{parentName:"ul"},"The + button next will help you fill in the right number ")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Approving too much is usually ok, but not approving enough will cause your next transaction to fail."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"write")," > sign the transaction > then send it to the network.")),(0,o.kt)("h2",{id:"call-the-bridge"},"Call the Bridge"),(0,o.kt)("p",null,"You can now start sending tokens on the approved Bridge."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the appropriate page for the router")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Ethereum",label:"Ethereum",default:!0,mdxType:"TabItem"},(0,o.kt)("code",null,"Address = [0x4fc16De11deAc71E8b2Db539d82d93BE4b486892](https://etherscan.io/address/0x4fc16De11deAc71E8b2Db539d82d93BE4b486892)")),(0,o.kt)(l.Z,{value:"Polygon",label:"Polygon",mdxType:"TabItem"},(0,o.kt)("code",null,"Address = [0x3a5846882C0d5F8B0FA4bB04dc90C013104d125d](https://polygonscan.com/address/0x3a5846882C0d5F8B0FA4bB04dc90C013104d125d)")),(0,o.kt)(l.Z,{value:"Celo",label:"Celo",mdxType:"TabItem"},(0,o.kt)("code",null,"Address = [0x1548cf5cf7dBd93f4dA11f45fCce315573d21B60](https://explorer.celo.org/address/0x1548cf5cf7dBd93f4dA11f45fCce315573d21B60/transactions)")),(0,o.kt)(l.Z,{value:"Avalanche",label:"Avalanche",mdxType:"TabItem"},(0,o.kt)("code",null,"Address = [0xB6bB41B1fb8c381b002C405B8abB5D1De0C0abFE](https://polygonscan.com/address/0xB6bB41B1fb8c381b002C405B8abB5D1De0C0abFE)"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the ",(0,o.kt)("strong",{parentName:"li"},"Write as Proxy")," pane > connect your wallet > and select send")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/joenyzio/assets/blob/main/celo-docs/bridging-tokens-with-etherscan/bridging-tokens-with-etherscan-2.png?raw=true",alt:"Bridging Tokens with Etherescan 2"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("strong",{parentName:"li"},"_token"),", enter the address of the token you want to send"),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("strong",{parentName:"li"},"_amount"),", enter the amount of tokens you'd like to send in that token's smallest unit.")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This should be the same number you approved earlier."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("strong",{parentName:"li"},"_destination"),", enter the domain ID of the chain to which you'd like to send tokens.")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Celo",label:"On Celo",default:!0,mdxType:"TabItem"},(0,o.kt)("code",null,"Celo Domain ID = 1667591279")),(0,o.kt)(l.Z,{value:"Polygon",label:"On Polygon",mdxType:"TabItem"},(0,o.kt)("code",null,"Polygon Domain ID = 1886350457")),(0,o.kt)(l.Z,{value:"Ethereum",label:"On Ethereum",mdxType:"TabItem"},(0,o.kt)("code",null,"Ethereum Domain ID = 6648936")),(0,o.kt)(l.Z,{value:"Avalanche",label:"On Avalanche",mdxType:"TabItem"},(0,o.kt)("code",null,"Avalanche Domain ID = 1635148152"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Domain IDs are like phone numbers. They represent the chain you're going to call."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("strong",{parentName:"li"},"_recipient"),", enter the address of the recipient on the destination chain.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To help support future chains with longer addresses, Optics uses 32-byte addresses."),(0,o.kt)("li",{parentName:"ul"},"To convert an Ethereum, Celo, or Polygon address to bytes32 you can add 24 0s after the 0x prefix")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Before: bytes32")),(0,o.kt)("code",null,"0x6a39909e805A3eaDd2b61fFf61147796ca6aBB47"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"After: 24 Zeros after 0x Prefix")),(0,o.kt)("code",null,"0x0000000000000000000000006a39909e805A3eaDd2b61fFf61147796ca6aBB47"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"write")," > ",(0,o.kt)("strong",{parentName:"li"},"sign the transaction")," > then ",(0,o.kt)("strong",{parentName:"li"},"send")," it to the network.")),(0,o.kt)("h2",{id:"wait"},"Wait"),(0,o.kt)("p",null,"Wait for a moment for your transaction to finalize on the network."))}h.isMDXComponent=!0}}]);