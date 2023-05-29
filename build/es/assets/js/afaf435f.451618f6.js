"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[2880],{3905:function(e,t,o){o.d(t,{Zo:function(){return h},kt:function(){return d}});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(o),d=r,b=p["".concat(l,".").concat(d)]||p[d]||u[d]||n;return o?a.createElement(b,i(i({ref:t},h),{},{components:o})):a.createElement(b,i({ref:t},h))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},65947:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return h},toc:function(){return u},default:function(){return d}});var a=o(83117),r=o(80102),n=(o(67294),o(3905)),i=["components"],s={title:"Demos with ObservableHQ",description:"Learn more about Observable notebooks and how they can be used in a blog",slug:"observable-intro",authors:["josh"],tags:["observable"],image:"https://dl.airtable.com/.attachmentThumbnails/7d8f17f343965c3ed93eafadc818c0f5/427cd0fe",hide_table_of_contents:!1},l=void 0,c={permalink:"/es/blog/observable-intro",source:"@site/blog/2021-11-18-observable-intro/index.md",title:"Demos with ObservableHQ",description:"Learn more about Observable notebooks and how they can be used in a blog",date:"2021-11-18T00:00:00.000Z",formattedDate:"18 de noviembre de 2021",tags:[{label:"observable",permalink:"/es/blog/tags/observable"}],readingTime:1.98,truncated:!0,authors:[{name:"Josh Crites",title:"Developer Relations, cLabs",url:"https://github.com/critesjosh",imageURL:"https://github.com/critesjosh.png",key:"josh"}],prevItem:{title:"Verifying Contracts with Hardhat",permalink:"/es/blog/hardhat-deploy-verify"},nextItem:{title:"Using the Graph w/ Celo",permalink:"/es/blog/using-the-graph"}},h={authorsImageUrls:[void 0]},u=[{value:"What is Observable?",id:"what-is-observable",children:[],level:2},{value:"Why I like it",id:"why-i-like-it",children:[{value:"Easy to setup",id:"easy-to-setup",children:[],level:3},{value:"Code + Visualizations + Text",id:"code--visualizations--text",children:[],level:3},{value:"Executable Javascript",id:"executable-javascript",children:[],level:3},{value:"Remix + Share",id:"remix--share",children:[],level:3}],level:2},{value:"What I don&#39;t like",id:"what-i-dont-like",children:[{value:"Limited packages",id:"limited-packages",children:[],level:3},{value:"Simple, specific actions",id:"simple-specific-actions",children:[],level:3},{value:"Iframe limitations",id:"iframe-limitations",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-observable"},"What is Observable?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://observablehq.com/"},"Observable HQ")," is a Javascript notebook tool that makes it easy to share executable Javascript code right in the browser. This greatly reduces the friction around introducing and educating people about tools or features. Observable is designed primarily as a data visualization tool, but I have found it to be helpful for explaining and demonstrating concepts and behaviors for web3 as well."),(0,n.kt)("p",null,"For the official introduction to Observable, ",(0,n.kt)("a",{parentName:"p",href:"https://observablehq.com/@observablehq/five-minute-introduction?collection=@observablehq/introduction"},"check out the 5 minute introduction.")),(0,n.kt)("h2",{id:"why-i-like-it"},"Why I like it"),(0,n.kt)("h3",{id:"easy-to-setup"},"Easy to setup"),(0,n.kt)("p",null,"First of all, there is nothing to download! This is a huge benefit when introducing developers to new technology. I can show off features and techniques for using new tech without requiring developers to have to download anything or set up an environment. This makes it easier to spark curiosity and inspire people to continue on their learning journey."),(0,n.kt)("h3",{id:"code--visualizations--text"},"Code + Visualizations + Text"),(0,n.kt)("p",null,"Observable supports Javascript, Markdown and HTML in cells. This means I can write executable Javascript surrounded by markdown that helps explain the context in which this code can be used and may be useful. The notebooks are also easy to embed into other contexts (like this blog)."),(0,n.kt)("p",null,"Here is an example from a post on Merkle Trees. You can ",(0,n.kt)("a",{parentName:"p",href:"https://observablehq.com/@critesjosh/merkle-trees"},"view the full notebook here.")),(0,n.kt)("iframe",{width:"100%",height:"643",frameborder:"0",className:"observable-notebook",src:"https://observablehq.com/embed/@critesjosh/merkle-trees?cells=chart%2Cp1%2Cvisualize_heading"}),(0,n.kt)("h3",{id:"executable-javascript"},"Executable Javascript"),(0,n.kt)("p",null,"Observable allows anyone inspect the Javascript in the notebook and displays the results of the code execution. This is particularly useful to demo interactions with a connected web3 wallet or reviewing the structure of responses from API calls. Also, when code in one cell is updated, all other cells that use the code are referenced as well, kind of like hot reloading."),(0,n.kt)("p",null,"For example, in the ",(0,n.kt)("a",{parentName:"p",href:"/es/blog/using-the-graph"},"graph post"),", I make a query to the Graph and the notebook shows a live response. Viewers can click through the notebook response to insepct the results."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://observablehq.com/@critesjosh/query-the-graph"},(0,n.kt)("img",{alt:"the graph query",src:o(911).Z}))),(0,n.kt)("h3",{id:"remix--share"},"Remix + Share"),(0,n.kt)("p",null,"Viewers can edit the Javascript in the notebook and execute their own code to see the results. They can fork their changes and save them in their own notebook to be worked on later or to share with others."),(0,n.kt)("p",null,"I can import common node packages into a notebook and run them as I would in an application. This allows me to quickly test things and share them."),(0,n.kt)("h2",{id:"what-i-dont-like"},"What I don't like"),(0,n.kt)("p",null,"Using Observable isn't great for everything--it has its limitations."),(0,n.kt)("h3",{id:"limited-packages"},"Limited packages"),(0,n.kt)("p",null,"While many npm packages work with observable, not all of them do. You may need to build packages to work specifically for Observable or import minified versions from a CDN. ",(0,n.kt)("a",{parentName:"p",href:"https://observablehq.com/@observablehq/module-require-debugger"},"This tool")," can help you figure out how to import packages that you want to use."),(0,n.kt)("h3",{id:"simple-specific-actions"},"Simple, specific actions"),(0,n.kt)("p",null,"Observable is great for showing simple interactions with packages or creating visualizations, but is not well suited for demonstrating how to design or build an application. It is a unique environment where Javascript syntax may be different than what developers are used to, so it is useful for specific things."),(0,n.kt)("h3",{id:"iframe-limitations"},"Iframe limitations"),(0,n.kt)("p",null,"Observable notebooks are easiest to embed in other pages using an ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"},"iframe"),". This means the context of the notebook is limited by the same things as an iframe, which may or may not be a problem, depending on what you are trying to do. There are ways around this as well, you can link readers directly to your notebook or embed the notebook using a React component or vanilla Javascript. You can read more about embedding on the ",(0,n.kt)("a",{parentName:"p",href:"https://observablehq.com/@observablehq/introduction-to-embedding"},"Observable site here"),"."))}d.isMDXComponent=!0},911:function(e,t,o){t.Z=o.p+"assets/images/query-938c06822c3876884152e931ac6903e7.gif"}}]);