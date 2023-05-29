"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[2285],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82454:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],s={},c="TypeScript Style Guide",l={unversionedId:"developer-resources/style-guide/typescript",id:"developer-resources/style-guide/typescript",title:"TypeScript Style Guide",description:"Function parameters",source:"@site/docs/developer-resources/style-guide/typescript.md",sourceDirName:"developer-resources/style-guide",slug:"/developer-resources/style-guide/typescript",permalink:"/developer-resources/style-guide/typescript",editUrl:"",tags:[],version:"current",frontMatter:{}},u=[{value:"Function parameters",id:"function-parameters",children:[],level:3},{value:"Function definitions: Arrow functions vs Vanilla functions",id:"function-definitions-arrow-functions-vs-vanilla-functions",children:[],level:3},{value:"Class methods: anonymous functions vs native methods",id:"class-methods-anonymous-functions-vs-native-methods",children:[],level:3},{value:"Exporting variables only for testing",id:"exporting-variables-only-for-testing",children:[],level:3}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"typescript-style-guide"},"TypeScript Style Guide"),(0,i.kt)("h3",{id:"function-parameters"},"Function parameters"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Vanilla parameters")," are preferred over Object Destructuring."),(0,i.kt)("p",null,"Example of Vanilla parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export const tokenFetchFactory = (\n  actionName,\n  contractGetter,\n  actionCreator,\n  tag,\n)\n")),(0,i.kt)("p",null,"Example of Object Destructuring:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export const tokenFetchFactory = ({\n  actionName,\n  contractGetter,\n  actionCreator,\n  tag,\n}: TokenFetchFactory)\n")),(0,i.kt)("p",null,"This is for simplicity, with fewer lines and some evidence shows it's ",(0,i.kt)("a",{parentName:"p",href:"https://codeburst.io/es6s-function-destructuring-assignment-is-not-free-lunch-19caacc18137"},"faster"),"."),(0,i.kt)("h3",{id:"function-definitions-arrow-functions-vs-vanilla-functions"},"Function definitions: Arrow functions vs Vanilla functions"),(0,i.kt)("p",null,"In the root scope, ",(0,i.kt)("em",{parentName:"p"},"Vanilla functions")," are preferred over Arrow functions."),(0,i.kt)("p",null,"This is because it's consistent with generator functions, simpler to understand, easier to debug, supports recursion and functions are hoisted, meaning no concern about definition order."),(0,i.kt)("h3",{id:"class-methods-anonymous-functions-vs-native-methods"},"Class methods: anonymous functions vs native methods"),(0,i.kt)("p",null,"Anonymous functions are the preferred way. As shown in the example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"class myClass {\n    myMethod = () => {}\n}\n")),(0,i.kt)("h3",{id:"exporting-variables-only-for-testing"},"Exporting variables only for testing"),(0,i.kt)("p",null,"When a variable is exported only for the propose of getting accessed by tests, a low dash should be added before the name."),(0,i.kt)("p",null,"For example instead of doing this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export myFunction{...}\n")),(0,i.kt)("p",null,"This is the preferred way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const myFunction{...}\nexport _myFunction = myFunction\n")),(0,i.kt)("p",null,"In case it's necessary, a decorator could wrap the exported function to allow it only to be accessed during testing."))}d.isMDXComponent=!0}}]);