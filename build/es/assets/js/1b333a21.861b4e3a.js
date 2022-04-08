"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[8970],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return v}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),v=r,m=p["".concat(u,".").concat(v)]||p[v]||d[v]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(83117),r=a(67294),o=a(72389),i=a(79443);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=a(16681),s=a(86010),c="tabItem_vU9c";function d(e){var t,a,o,i=e.lazy,d=e.block,p=e.defaultValue,v=e.values,m=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),N=k.tabGroupChoices,w=k.setTabGroupChoices,C=(0,r.useState)(b),x=C[0],T=C[1],E=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=N[m];null!=P&&P!==x&&h.some((function(e){return e.value===P}))&&T(P)}var V=function(e){var t=e.currentTarget,a=E.indexOf(t),n=h[a].value;n!==x&&(O(t),T(n),null!=m&&w(m,n))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;a=E[r]||E[E.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},f)},h.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onFocus:V,onClick:V},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},14805:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(67294),r="pageRef_Ejpu",o="left_uwxi",i="arrow_+Oog",l="pageName_Jzs5",u="url_tyFG";function s(e){var t=e.url,a=e.pageName;return n.createElement("a",{className:r,href:t},n.createElement("div",{className:o},n.createElement("div",{className:i},"\u2192"),n.createElement("div",{className:l},a)),n.createElement("div",{className:u},t))}},81982:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return v}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=a(14805),l=(a(26396),a(58215),["components"]),u={title:"Celo Validators",description:"Collection of resources to support Validators on the Celo network."},s="Celo Validators",c={unversionedId:"validator-guide/overview",id:"validator-guide/overview",title:"Celo Validators",description:"Collection of resources to support Validators on the Celo network.",source:"@site/docs/validator-guide/overview.md",sourceDirName:"validator-guide",slug:"/validator-guide/overview",permalink:"/es/validator-guide/overview",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{title:"Celo Validators",description:"Collection of resources to support Validators on the Celo network."},sidebar:"validators",next:{title:"Celo Attestation Service",permalink:"/es/validator-guide/attestation-service"}},d=[{value:"Run a Validator",id:"run-a-validator",children:[],level:2},{value:"Important Information",id:"important-information",children:[],level:2},{value:"Nodes and Services",id:"nodes-and-services",children:[],level:2},{value:"Validator Tools",id:"validator-tools",children:[],level:2},{value:"Voting Policy",id:"voting-policy",children:[],level:2}],p={toc:d};function v(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"celo-validators"},"Celo Validators"),(0,o.kt)("p",null,"Secure the Celo network by participating in consensus of the Celo protocol."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Celo Validators participate in the consensus of the Celo protocol. They help secure the Celo network by verifying transactions and proposing blocks to add to the Celo blockchain. "),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Not ready to become a Celo Validator? ",(0,o.kt)("a",{parentName:"p",href:"/es/"},"Learn more about Celo"),"."))),(0,o.kt)("h2",{id:"run-a-validator"},"Run a Validator"),(0,o.kt)(i.Z,{url:"/getting-started/baklava-testnet/running-a-validator-in-baklava",pageName:"Run a Baklava Testnet Validator",mdxType:"PageRef"}),(0,o.kt)(i.Z,{url:"/getting-started/mainnet/running-a-validator-in-mainnet",pageName:"Run a Mainnet Validator",mdxType:"PageRef"}),(0,o.kt)("h2",{id:"important-information"},"Important Information"),(0,o.kt)(i.Z,{url:"/validator-guide/attestation-service",pageName:"Attestation Service",mdxType:"PageRef"}),(0,o.kt)(i.Z,{url:"/validator-guide/key-management/summary",pageName:"Key Management",mdxType:"PageRef"}),(0,o.kt)("h2",{id:"nodes-and-services"},"Nodes and Services"),(0,o.kt)(i.Z,{url:"/validator-guide/securing-nodes-and-services",pageName:"Securing Celo Nodes and Services",mdxType:"PageRef"}),(0,o.kt)(i.Z,{url:"/validator-guide/node-upgrades",pageName:"Upgrading a Node",mdxType:"PageRef"}),(0,o.kt)(i.Z,{url:"/validator-guide/monitoring",pageName:"Monitoring",mdxType:"PageRef"}),(0,o.kt)(i.Z,{url:"/validator-guide/proxy",pageName:"Running Proxies",mdxType:"PageRef"}),(0,o.kt)("h2",{id:"validator-tools"},"Validator Tools"),(0,o.kt)(i.Z,{url:"/validator-guide/validator-explorer",pageName:"Validator Explorer",mdxType:"PageRef"}),(0,o.kt)("h2",{id:"voting-policy"},"Voting Policy"),(0,o.kt)(i.Z,{url:"/validator-guide/celo-foundation-voting-policy",pageName:"Celo Foundation Voting Policy",mdxType:"PageRef"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For questions, comments, and discussions please use the ",(0,o.kt)("a",{parentName:"p",href:"https://forum.celo.org/"},"Celo Forum")," or ",(0,o.kt)("a",{parentName:"p",href:"https://chat.celo.org/"},"Discord"),"."))))}v.isMDXComponent=!0}}]);