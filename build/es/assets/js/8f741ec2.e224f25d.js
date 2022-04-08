"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[7769],{3905:function(a,e,t){t.d(e,{Zo:function(){return l},kt:function(){return h}});var s=t(67294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},m=Object.keys(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(s=0;s<m.length;s++)t=m[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var o=s.createContext({}),i=function(a){var e=s.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},l=function(a){var e=i(a.components);return s.createElement(o.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},N=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,m=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),N=i(t),h=n,k=N["".concat(o,".").concat(h)]||N[h]||c[h]||m;return t?s.createElement(k,r(r({ref:e},l),{},{components:t})):s.createElement(k,r({ref:e},l))}));function h(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var m=t.length,r=new Array(m);r[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p.mdxType="string"==typeof a?a:n,r[1]=p;for(var i=2;i<m;i++)r[i]=t[i];return s.createElement.apply(null,r)}return s.createElement.apply(null,t)}N.displayName="MDXCreateElement"},23575:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return N}});var s=t(83117),n=t(80102),m=(t(67294),t(3905)),r=["components"],p={title:"Celo Randomness",description:"How unpredictable pseudo-randomness is achieved on the Celo blockchain."},o="Randomness",i={unversionedId:"celo-codebase/protocol/identity/randomness",id:"celo-codebase/protocol/identity/randomness",title:"Celo Randomness",description:"How unpredictable pseudo-randomness is achieved on the Celo blockchain.",source:"@site/docs/celo-codebase/protocol/identity/randomness.md",sourceDirName:"celo-codebase/protocol/identity",slug:"/celo-codebase/protocol/identity/randomness",permalink:"/es/celo-codebase/protocol/identity/randomness",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{title:"Celo Randomness",description:"How unpredictable pseudo-randomness is achieved on the Celo blockchain."},sidebar:"docs",previous:{title:"Celo Metadata and Claims",permalink:"/es/celo-codebase/protocol/identity/metadata"},next:{title:"Optics",permalink:"/es/celo-codebase/protocol/optics"}},l=[{value:"Requesting New Attestations",id:"requesting-new-attestations",children:[],level:2},{value:"Producing Pseudo-randomness",id:"producing-pseudo-randomness",children:[],level:2},{value:"Randomness Equation",id:"randomness-equation",children:[],level:2}],c={toc:l};function N(a){var e=a.components,t=(0,n.Z)(a,r);return(0,m.kt)("wrapper",(0,s.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"randomness"},"Randomness"),(0,m.kt)("p",null,"How unpredictable pseudo-randomness is achieved on the Celo blockchain."),(0,m.kt)("hr",null),(0,m.kt)("h2",{id:"requesting-new-attestations"},"Requesting New Attestations"),(0,m.kt)("p",null,"As mentioned previously, when requesting new attestations, random validators are selected to perform phone number verification. This selection needs to be unpredictable to prevent Eve from creating an attestation for a phone number she doesn\u2019t control. Suppose, for example, that instead validators were selected in a round robin fashion. Eve could request an attestation when it was the turn of a validator she controls to perform verification. Instead of sending an SMS to the phone number ","(","since she doesn\u2019t own it",")"," she could just produce the correct verification code since she has access to the validator\u2019s private key."),(0,m.kt)("h2",{id:"producing-pseudo-randomness"},"Producing Pseudo-randomness"),(0,m.kt)("p",null,"Producing unpredictable pseudo-randomness without a trusted third party is not trivial. Several solutions for this problem exist or are being currently researched. They include Verifiable Random Functions ","(","for example, based on BLS threshold signatures",")",", Verifiable Delay Functions, and commit-reveal schemes. Currently, Celo implements a simple commit-reveal scheme which is secure enough for the purposes of validator selection. A more sophisticated solution might be implemented as the network evolves, especially if randomness becomes necessary for other purposes that require stronger assumptions about the randomness\u2019s security ","(","for example if it was decided that a randomized leader election algorithm should replace the current round robin",")","."),(0,m.kt)("p",null,"In a proposed block, the proposer attaches two values related to the randomness scheme - randomness corresponding to their previous commitment, and a new commitment to freshly generated random bytes that will be revealed in the future. The revealed randomness is added to an entropy pool accessible on-chain from the Random smart contract."),(0,m.kt)("h2",{id:"randomness-equation"},"Randomness Equation"),(0,m.kt)("p",null,"More formally, the ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"\u2217"),(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"h"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n*{th}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.46528em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"))))))," block proposed by a given validator contains values ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"r"),(0,m.kt)("mi",{parentName:"msub"},"n")),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"s"),(0,m.kt)("mi",{parentName:"msub"},"n")),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(r_n, s_n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.02778em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," such that ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mtext",{parentName:"mrow"},"keccack256"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"r"),(0,m.kt)("mi",{parentName:"msub"},"n")),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow"},"\u2217"),(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mn",{parentName:"mrow"},"1"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{keccack256}(r_n) = s*{n-1}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"keccack256")),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.151392em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.02778em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.46528em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.72777em",verticalAlign:"-0.08333em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1")))))),". The one exception to this is the validator\u2019s first block, the case where ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n = 1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),", since they have not previously committed to randomness yet. Here, the protocol instead requires that ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"r"),(0,m.kt)("mn",{parentName:"msub"},"1")),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"r_1 = 1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.58056em",verticalAlign:"-0.15em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.30110799999999993em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"-0.02778em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"))))),"."))}N.isMDXComponent=!0}}]);