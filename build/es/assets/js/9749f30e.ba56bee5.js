"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[2757],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,f=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return n?r.createElement(f,l(l({ref:t},h),{},{components:n})):r.createElement(f,l({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96513:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return h},default:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],c={title:"Ultralight Node Sync",description:"How Ultralight Node sync works with the Celo wallet."},i="Ultralight Node Sync",s={unversionedId:"celo-codebase/wallet/how-the-wallet-works/ultralight-node-sync",id:"celo-codebase/wallet/how-the-wallet-works/ultralight-node-sync",title:"Ultralight Node Sync",description:"How Ultralight Node sync works with the Celo wallet.",source:"@site/docs/celo-codebase/wallet/how-the-wallet-works/ultralight-node-sync.md",sourceDirName:"celo-codebase/wallet/how-the-wallet-works",slug:"/celo-codebase/wallet/how-the-wallet-works/ultralight-node-sync",permalink:"/es/celo-codebase/wallet/how-the-wallet-works/ultralight-node-sync",editUrl:"",tags:[],version:"current",frontMatter:{title:"Ultralight Node Sync",description:"How Ultralight Node sync works with the Celo wallet."}},h=[{value:"Fetch Headers",id:"fetch-headers",children:[],level:2},{value:"Validate Headers",id:"validate-headers",children:[],level:2},{value:"Fetch Blocks",id:"fetch-blocks",children:[],level:2}],d={toc:h};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ultralight-node-sync"},"Ultralight Node Sync"),(0,o.kt)("p",null,"How Ultralight Node sync works with the Celo wallet. "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"fetch-headers"},"Fetch Headers"),(0,o.kt)("p",null,"The Celo Wallet first fetches the latest header to learn about the likely latest block height. Next, it fetches all the ",(0,o.kt)("em",{parentName:"p"},"epoch headers")," between Genesis and the latest block height. The fetch is done in batches of 192 blocks ","(","Ethereum's default batch size",")"," to minimize latency. In Celo's case, each of these headers are not contiguous and are instead one epoch apart ","(","planned for around 1 day for mainnet",")",". "),(0,o.kt)("h2",{id:"validate-headers"},"Validate Headers"),(0,o.kt)("p",null,"The wallet then validates each of the epoch headers by updating the set of validators at every epoch, and using that set to verify signatures. Once the wallet has reached the latest epoch, it can verify the signatures of all header is that epoch, including the latest one."),(0,o.kt)("h2",{id:"fetch-blocks"},"Fetch Blocks"),(0,o.kt)("p",null,"Once the latest header is verified, all the block from that point onwards are fetched. When the app restarts, only the epoch blocks between the last fetched block and the latest header are fetched."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In the future, Celo will support zk-SNARK-based proofs that can succinctly prove this sequence of steps, which will lower the sync times and data usage even more."))))}u.isMDXComponent=!0}}]);