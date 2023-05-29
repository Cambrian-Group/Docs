"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[833],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(83117),a=n(67294),o=n(72389),i=n(79443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(16681),s=n(86010),c="tabItem_vU9c";function p(e){var t,n,o,i=e.lazy,p=e.block,d=e.defaultValue,m=e.values,v=e.groupId,f=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=g[0])?void 0:o.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=l(),N=w.tabGroupChoices,k=w.setTabGroupChoices,C=(0,a.useState)(b),E=C[0],O=C[1],x=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=N[v];null!=P&&P!==E&&h.some((function(e){return e.value===P}))&&O(P)}var j=function(e){var t=e.currentTarget,n=x.indexOf(t),r=h[n].value;r!==E&&(T(t),O(r),null!=v&&k(v,r))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},f)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:j,onClick:j},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},14805:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a="pageRef_Ejpu",o="left_uwxi",i="arrow_+Oog",l="pageName_Jzs5",u="url_tyFG";function s(e){var t=e.url,n=e.pageName;return r.createElement("a",{className:a,href:t},r.createElement("div",{className:o},r.createElement("div",{className:i},"\u2192"),r.createElement("div",{className:l},n)),r.createElement("div",{className:u},t))}},4948:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(14805),l=(n(26396),n(58215),["components"]),u={title:"Integrate with Celo",description:"Collection of resources to help integrate Celo with your service.",slug:"/developer-guide/integrations"},s="Integrate with Celo",c={unversionedId:"developer-resources/integrations/integrations",id:"developer-resources/integrations/integrations",title:"Integrate with Celo",description:"Collection of resources to help integrate Celo with your service.",source:"@site/docs/developer-resources/integrations/integrations.md",sourceDirName:"developer-resources/integrations",slug:"/developer-guide/integrations",permalink:"/es/developer-guide/integrations",editUrl:"",tags:[],version:"current",frontMatter:{title:"Integrate with Celo",description:"Collection of resources to help integrate Celo with your service.",slug:"/developer-guide/integrations"}},p=[{value:"Integrate with Celo",id:"integrate-with-celo-1",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrate-with-celo"},"Integrate with Celo"),(0,o.kt)("p",null,"Collection of resources to help integrate Celo with your service."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Celo provides you with the tools to easily integrate DeFi into your existing mobile application or blockchain service. Integrating with Celo allows you to accept payments, send payouts, and manage all of your DeFi needs using our global financial infrastructure."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Not ready to Integrate with Celo? ",(0,o.kt)("a",{parentName:"p",href:"/es/"},"Learn more about Celo"),"."))),(0,o.kt)("h2",{id:"integrate-with-celo-1"},"Integrate with Celo"),(0,o.kt)(i.Z,{url:"/developer-guide/integrations/general",pageName:"General information",mdxType:"PageRef"}),(0,o.kt)(i.Z,{url:"/developer-guide/integrations/checklist",pageName:"Integration Checklist",mdxType:"PageRef"}),(0,o.kt)(i.Z,{url:"/developer-guide/integrations/custody",pageName:"Custody",mdxType:"PageRef"}),(0,o.kt)(i.Z,{url:"/developer-guide/integrations/listings",pageName:"Listings",mdxType:"PageRef"}),(0,o.kt)(i.Z,{url:"/developer-guide/integrations/cloud-hsm",pageName:"Using a Cloud HSM",mdxType:"PageRef"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For questions, comments, and discussions please use the ",(0,o.kt)("a",{parentName:"p",href:"https://forum.celo.org/"},"Celo Forum")," or ",(0,o.kt)("a",{parentName:"p",href:"https://chat.celo.org/"},"Discord"),"."))))}m.isMDXComponent=!0}}]);