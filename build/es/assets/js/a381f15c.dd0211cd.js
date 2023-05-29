"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[4800],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(83117),a=n(67294),o=n(72389),l=n(79443);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(16681),c=n(86010),u="tabItem_vU9c";function d(e){var t,n,o,l=e.lazy,d=e.block,p=e.defaultValue,m=e.values,v=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==w&&!g.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),k=y.tabGroupChoices,N=y.setTabGroupChoices,C=(0,a.useState)(w),O=C[0],E=C[1],x=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=k[v];null!=P&&P!==O&&g.some((function(e){return e.value===P}))&&E(P)}var j=function(e){var t=e.currentTarget,n=x.indexOf(t),r=g[n].value;r!==O&&(T(t),E(r),null!=v&&N(v,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},f)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:j,onClick:j},o,{className:(0,c.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},14805:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a="pageRef_Ejpu",o="left_uwxi",l="arrow_+Oog",i="pageName_Jzs5",s="url_tyFG";function c(e){var t=e.url,n=e.pageName;return r.createElement("a",{className:a,href:t},r.createElement("div",{className:o},r.createElement("div",{className:l},"\u2192"),r.createElement("div",{className:i},n)),r.createElement("div",{className:s},t))}},79135:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=n(14805),i=(n(26396),n(58215),["components"]),s={title:"Use Celo",description:"Download a wallet, manage Celo assets, and start using the Celo network."},c="Use Celo",u={unversionedId:"celo-holder-guide/overview",id:"celo-holder-guide/overview",title:"Use Celo",description:"Download a wallet, manage Celo assets, and start using the Celo network.",source:"@site/docs/celo-holder-guide/overview.md",sourceDirName:"celo-holder-guide",slug:"/celo-holder-guide/overview",permalink:"/es/celo-holder-guide/overview",editUrl:"",tags:[],version:"current",frontMatter:{title:"Use Celo",description:"Download a wallet, manage Celo assets, and start using the Celo network."}},d=[{value:"Get CELO",id:"get-celo",children:[],level:2},{value:"Use the Platform",id:"use-the-platform",children:[],level:2},{value:"Advanced Features",id:"advanced-features",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-celo"},"Use Celo"),(0,o.kt)("p",null,"Download a wallet, manage Celo assets, and start using the Celo network."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://celo.org/"},"Celo")," users have access to a wide variety of tools, assets, and capabilities provided by the Celo Network. Install a Celo wallet, get Celo assets, and use the Celo protocol to send, spend, bridge, or connect assets with any Celo application."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Not ready to use Celo? ",(0,o.kt)("a",{parentName:"p",href:"/es/"},"Learn more about Celo"),"."))),(0,o.kt)("h2",{id:"get-celo"},"Get CELO"),(0,o.kt)(l.Z,{url:"/getting-started/wallets",pageName:"Download a Wallet",mdxType:"PageRef"}),(0,o.kt)(l.Z,{url:"/celo-holder-guide/owners",pageName:"Get CELO",mdxType:"PageRef"}),(0,o.kt)("h2",{id:"use-the-platform"},"Use the Platform"),(0,o.kt)(l.Z,{url:"/celo-codebase/protocol",pageName:"Celo Protocol",mdxType:"PageRef"}),(0,o.kt)(l.Z,{url:"/getting-started/choosing-a-network",pageName:"Networks",mdxType:"PageRef"}),(0,o.kt)("h2",{id:"advanced-features"},"Advanced Features"),(0,o.kt)(l.Z,{url:"/celo-codebase/protocol/bridging/bridging-to-celo",pageName:"Bridging",mdxType:"PageRef"}),(0,o.kt)(l.Z,{url:"/celo-codebase/protocol/oracles/oracles-on-celo",pageName:"Oracles",mdxType:"PageRef"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For questions, comments, and discussions please use the ",(0,o.kt)("a",{parentName:"p",href:"https://forum.celo.org/"},"Celo Forum")," or ",(0,o.kt)("a",{parentName:"p",href:"https://chat.celo.org/"},"Discord"),"."))))}m.isMDXComponent=!0}}]);