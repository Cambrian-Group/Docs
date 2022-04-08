"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[7826],{3905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},d=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return n?t.createElement(m,c(c({ref:r},d),{},{components:n})):t.createElement(m,c({ref:r},d))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48682:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var t=n(83117),o=n(80102),a=(n(67294),n(3905)),c=["components"],i={},l="celocli rewards",s={unversionedId:"command-line-interface/rewards",id:"command-line-interface/rewards",title:"celocli rewards",description:"Show rewards information about a voter, registered Validator, or Validator Group",source:"@site/docs/command-line-interface/rewards.md",sourceDirName:"command-line-interface",slug:"/command-line-interface/rewards",permalink:"/command-line-interface/rewards",editUrl:"https://github.com/celo-org/docs/edit/main/docs/command-line-interface/rewards.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"celocli reserve",permalink:"/command-line-interface/reserve"},next:{title:"celocli transfer",permalink:"/command-line-interface/transfer"}},d=[{value:"<code>celocli rewards:show</code>",id:"celocli-rewardsshow",children:[],level:2}],u={toc:d};function p(e){var r=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"celocli-rewards"},(0,a.kt)("inlineCode",{parentName:"h1"},"celocli rewards")),(0,a.kt)("p",null,"Show rewards information about a voter, registered Validator, or Validator Group"),(0,a.kt)("h2",{id:"celocli-rewardsshow"},(0,a.kt)("inlineCode",{parentName:"h2"},"celocli rewards:show")),(0,a.kt)("p",null,"Show rewards information about a voter, registered Validator, or Validator Group"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Show rewards information about a voter, registered Validator, or Validator Group\n\nUSAGE\n  $ celocli rewards:show\n\nOPTIONS\n  -x, --extended                                          show extra columns\n\n  --columns=columns                                       only show provided columns\n                                                          (comma-separated)\n\n  --csv                                                   output is csv format [alias:\n                                                          --output=csv]\n\n  --epochs=epochs                                         [default: 1] Show results for\n                                                          the last N epochs\n\n  --estimate                                              Estimate voter rewards from\n                                                          current votes\n\n  --filter=filter                                         filter property by partial\n                                                          string matching, ex: name=foo\n\n  --globalHelp                                            View all available global\n                                                          flags\n\n  --group=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d      Validator Group to show\n                                                          rewards for\n\n  --no-header                                             hide table header from output\n\n  --no-truncate                                           do not truncate output to fit\n                                                          screen\n\n  --output=csv|json|yaml                                  output in a more machine\n                                                          friendly format\n\n  --slashing                                              Show rewards for slashing\n\n  --sort=sort                                             property to sort by (prepend\n                                                          '-' for descending)\n\n  --validator=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  Validator to show rewards for\n\n  --voter=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d      Voter to show rewards for\n\nEXAMPLE\n  show --address 0x5409ed021d9299bf6814279a6a1411a7e866a631\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"See code: ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/rewards/show.ts"},"src/commands/rewards/show.ts"))))}p.isMDXComponent=!0}}]);