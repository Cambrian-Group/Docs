"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[6772],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return v}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),v=o,f=m["".concat(i,".").concat(v)]||m[v]||p[v]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),o=n(7294),a=n(2389),l=n(9443);var u=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6681),c=n(6010),s="tabItem_vU9c";function p(e){var t,n,a,l=e.lazy,p=e.block,m=e.defaultValue,v=e.values,f=e.groupId,d=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=v?v:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=u(),k=E.tabGroupChoices,w=E.setTabGroupChoices,O=(0,o.useState)(g),N=O[0],C=O[1],T=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=k[f];null!=x&&x!==N&&b.some((function(e){return e.value===x}))&&C(x)}var D=function(e){var t=e.currentTarget,n=T.indexOf(t),r=b[n].value;r!==N&&(j(t),C(r),null!=f&&w(f,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;n=T[o]||T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},d)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:D,onClick:D},a,{className:(0,c.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function m(e){var t=(0,a.Z)();return o.createElement(p,(0,r.Z)({key:String(t)},e))}},4805:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),o="pageRef_Ejpu",a="left_uwxi",l="arrow_+Oog",u="pageName_Jzs5",i="url_tyFG";function c(e){var t=e.url,n=e.pageName;return r.createElement("a",{className:o,href:t},r.createElement("div",{className:a},r.createElement("div",{className:l},"\u2192"),r.createElement("div",{className:u},n)),r.createElement("div",{className:i},t))}},9359:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),l=(n(4805),n(6396),n(8215),["components"]),u={title:"Developer Events",description:"Find Celo events focused on the developer community."},i="Events",c={unversionedId:"community/developer-events",id:"community/developer-events",title:"Developer Events",description:"Find Celo events focused on the developer community.",source:"@site/docs/community/developer-events.md",sourceDirName:"community",slug:"/community/developer-events",permalink:"/community/developer-events",editUrl:"",tags:[],version:"current",frontMatter:{title:"Developer Events",description:"Find Celo events focused on the developer community."},sidebar:"contributors",previous:{title:"Celo Community",permalink:"/community/contributing"}},s=[{value:"Hackathons",id:"hackathons",children:[],level:2}],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("p",null,"Overview of developer events in the Celo community."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"hackathons"},"Hackathons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.ethdenver.com"},"Celo at ETHDenver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mobiledefi.devpost.com/"},"Mobile DeFi for the People ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gitcoin.co/hackathon/mobile-celo"},"Mobile Hackathon on GitCoin"))))}m.isMDXComponent=!0}}]);