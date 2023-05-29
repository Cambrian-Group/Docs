"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[6499],{58215:function(e,t,n){var i=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return m}});var i=n(83117),r=n(67294),a=n(72389),o=n(79443);var u=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(16681),s=n(86010),c="tabItem_vU9c";function d(e){var t,n,a,o=e.lazy,d=e.block,m=e.defaultValue,p=e.values,v=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=u(),w=b.tabGroupChoices,T=b.setTabGroupChoices,N=(0,r.useState)(k),C=N[0],E=N[1],M=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var A=w[v];null!=A&&A!==C&&g.some((function(e){return e.value===A}))&&E(A)}var D=function(e){var t=e.currentTarget,n=M.indexOf(t),i=g[n].value;i!==C&&(x(t),E(i),null!=v&&T(v,i))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=M.indexOf(e.currentTarget)+1;n=M[i]||M[0];break;case"ArrowLeft":var r=M.indexOf(e.currentTarget)-1;n=M[r]||M[M.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},f)},g.map((function(e){var t=e.value,n=e.label,a=e.attributes;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return M.push(e)},onKeyDown:Z,onFocus:D,onClick:D},a,{className:(0,s.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,a.Z)();return r.createElement(d,(0,i.Z)({key:String(t)},e))}},14805:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(67294),r="pageRef_Ejpu",a="left_uwxi",o="arrow_+Oog",u="pageName_Jzs5",l="url_tyFG";function s(e){var t=e.url,n=e.pageName;return i.createElement("a",{className:r,href:t},i.createElement("div",{className:a},i.createElement("div",{className:o},"\u2192"),i.createElement("div",{className:u},n)),i.createElement("div",{className:l},t))}},25581:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(67294),r=n(5406),a="container_Tl4i",o="sizer_QJfV";function u(e){var t=e.videoId;return i.createElement("div",{className:a},i.createElement(r.Z,{containerClassName:o,videoId:t,opts:{height:"100%",width:"100%"}}))}},22469:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),o=(n(14805),n(26396),n(58215),n(25581)),u=["components"],l={title:"\u89c6\u9891\u76f4\u64ad",description:"LMAX Group\u76f8\u5173\u89c6\u9891\u4fe1\u606f."},s="\u793e\u533a\u89c6\u9891",c={unversionedId:"community/contributing",id:"community/contributing",title:"\u89c6\u9891\u76f4\u64ad",description:"LMAX Group\u76f8\u5173\u89c6\u9891\u4fe1\u606f.",source:"@site/docs/community/contributing.md",sourceDirName:"community",slug:"/community/contributing",permalink:"/es/community/contributing",editUrl:"",tags:[],version:"current",frontMatter:{title:"\u89c6\u9891\u76f4\u64ad",description:"LMAX Group\u76f8\u5173\u89c6\u9891\u4fe1\u606f."},sidebar:"contributors",next:{title:"\u5a92\u4f53\u62a5\u9053",permalink:"/es/community/developer-events"}},d=[{value:"AIM Summit: Emerging from the Crypto Winter \u2013 The Potential for Cr",id:"aim-summit-emerging-from-the-crypto-winter--the-potential-for-cr",children:[],level:3},{value:"Future of digital assets and decentralised finance",id:"future-of-digital-assets-and-decentralised-finance",children:[],level:3},{value:"Banking crisis and the impact on crypto",id:"banking-crisis-and-the-impact-on-crypto",children:[],level:3},{value:"Financial Times Crypto and Digital Assets Summit keynote interview with David Mercer",id:"financial-times-crypto-and-digital-assets-summit-keynote-interview-with-david-mercer",children:[],level:3},{value:"More video",id:"more-video",children:[],level:3}],m={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,u);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u793e\u533a\u89c6\u9891"},"\u793e\u533a\u89c6\u9891"),(0,a.kt)("p",null,"Join a community of developers, designers, dreamers, and doers building prosperity for everyone."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"aim-summit-emerging-from-the-crypto-winter--the-potential-for-cr"},"AIM Summit: Emerging from the Crypto Winter \u2013 The Potential for Cr"),(0,a.kt)("p",null,"David Mercer, CEO of LMAX Group takes part in a fireside chat to discuss \u2018Emerging from the Crypto Winter \u2013 The Potential for Crypto to Pervade Capital Markets\u2019 at AIM Summit, London 2023."),(0,a.kt)(o.Z,{videoId:"ZT95LcjVI40",mdxType:"YouTube"}),(0,a.kt)("h3",{id:"future-of-digital-assets-and-decentralised-finance"},"Future of digital assets and decentralised finance"),(0,a.kt)("p",null,"Future of digital assets and decentralised finance - FT Crypto and Digital Assets Summit 2023"),(0,a.kt)(o.Z,{videoId:"YQC6ywp0M4o",mdxType:"YouTube"}),(0,a.kt)("h3",{id:"banking-crisis-and-the-impact-on-crypto"},"Banking crisis and the impact on crypto"),(0,a.kt)("p",null,"David Mercer, CEO of LMAX Group takes part in the keynote interview 'Market perspective - navigating financial turmoil and crypto\u2019s uncertain future\u2019 at the FT Crypto and Digital Assets Summit 2023. Moderated by Scott Chipolina, Digital Assets Correspondent at the Financial Times."),(0,a.kt)(o.Z,{videoId:"VCyfTNQTZnE",mdxType:"YouTube"}),(0,a.kt)("h3",{id:"financial-times-crypto-and-digital-assets-summit-keynote-interview-with-david-mercer"},"Financial Times Crypto and Digital Assets Summit keynote interview with David Mercer"),(0,a.kt)("p",null,"David Mercer, CEO of LMAX Group takes part in the keynote interview during the Financial Times 'Crypto and Digital Assets Summit 2022' virtual event."),(0,a.kt)(o.Z,{videoId:"hx5muluOU6I",mdxType:"YouTube"}),(0,a.kt)("h3",{id:"more-video"},"More video"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u66f4\u591a\u7684\u89c6\u9891\u8d44\u6599\uff0c\u5173\u6ce8Lmax Group\u7684",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/@LMAXGroup"},"Youtobe"),"."))))}p.isMDXComponent=!0}}]);