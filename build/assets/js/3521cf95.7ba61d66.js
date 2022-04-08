"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[1652],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return d}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return r?o.createElement(m,a(a({ref:t},h),{},{components:r})):o.createElement(m,a({ref:t},h))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62685:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var o=r(83117),n=r(80102),i=(r(67294),r(3905)),a=["components"],s={title:"Phone Number Privacy",description:"How Celo's identity protocol allows users to associate their phone number with one or more addresses on the Celo blockchain."},l="Phone Number Privacy",c={unversionedId:"celo-codebase/protocol/identity/phone-number-privacy",id:"celo-codebase/protocol/identity/phone-number-privacy",title:"Phone Number Privacy",description:"How Celo's identity protocol allows users to associate their phone number with one or more addresses on the Celo blockchain.",source:"@site/docs/celo-codebase/protocol/identity/phone-number-privacy.md",sourceDirName:"celo-codebase/protocol/identity",slug:"/celo-codebase/protocol/identity/phone-number-privacy",permalink:"/celo-codebase/protocol/identity/phone-number-privacy",editUrl:"https://github.com/celo-org/docs/edit/main/docs/celo-codebase/protocol/identity/phone-number-privacy.md",tags:[],version:"current",frontMatter:{title:"Phone Number Privacy",description:"How Celo's identity protocol allows users to associate their phone number with one or more addresses on the Celo blockchain."},sidebar:"docs",previous:{title:"Valora Accounts",permalink:"/celo-codebase/protocol/identity/valora-accounts"},next:{title:"Celo Metadata and Claims",permalink:"/celo-codebase/protocol/identity/metadata"}},h=[{value:"Identity Protocol",id:"identity-protocol",children:[],level:2},{value:"Understanding the problem",id:"understanding-the-problem",children:[],level:2},{value:"The solution",id:"the-solution",children:[{value:"Pepper request quota",id:"pepper-request-quota",children:[],level:3}],level:2},{value:"Oblivious Decentralized Identifier Service",id:"oblivious-decentralized-identifier-service",children:[{value:"Distributed Key Generation",id:"distributed-key-generation",children:[],level:3},{value:"Rotating keys",id:"rotating-keys",children:[],level:3},{value:"Blinding",id:"blinding",children:[],level:3},{value:"Combiner",id:"combiner",children:[],level:3}],level:2},{value:"Authentication",id:"authentication",children:[],level:2},{value:"Request Flow Diagram",id:"request-flow-diagram",children:[],level:2},{value:"Architecture",id:"architecture",children:[],level:2}],p={toc:h};function u(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"phone-number-privacy"},"Phone Number Privacy"),(0,i.kt)("p",null,"How Celo allows users to associate their phone number with addresses on the Celo blockchain. "),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"identity-protocol"},"Identity Protocol"),(0,i.kt)("p",null,"Celo's ",(0,i.kt)("a",{parentName:"p",href:".."},"identity protocol")," allows users to associate their phone number with one or more addresses on the Celo blockchain. This allows users to find each other on the Celo network using phone number instead of cumbersome hexadecimal addresses. The Oblivious Decentralized Identifier Service (ODIS) was created to help preserve the privacy of phone numbers and addresses."),(0,i.kt)("h2",{id:"understanding-the-problem"},"Understanding the problem"),(0,i.kt)("p",null,"When a user sends a payment to someone in their phone's address book, the mobile client must look up the identifier for that phone number on-chain to find the corresponding Celo blockchain address. This address is needed in order to create a payment transaction. If cleartext phone numbers were used as network identifiers directly, then anyone would be able to associate all phone numbers with blockchain accounts and balances. If instead, the identifier was the hash of the recipient's phone number, attackers would still be able to associate phone numbers with accounts and balances via a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rainbow_table"},"rainbow table attack"),"."),(0,i.kt)("h2",{id:"the-solution"},"The solution"),(0,i.kt)("p",null,"The basis of the solution is to derive a user's identifier from both their phone number and a secret pepper that is provided by the Oblivious Decentralized Identifier Service (ODIS). In order to associate a phone number with a Celo blockchain address, the mobile wallet first queries ODIS for the pepper. It then uses the pepper to compute the unique identifier that's used on-chain."),(0,i.kt)("h3",{id:"pepper-request-quota"},"Pepper request quota"),(0,i.kt)("p",null,"ODIS imposes a quota on requests for peppers in order to limit the feasibility of rainbow table attacks. When ODIS receives a request for a pepper, it authenticates the request and ensures the requester has not exceeded their quota. Since blockchain accounts and phone numbers are not naturally Sybil-resistant, ODIS bases request quota on the following factors:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requester transaction history"),(0,i.kt)("li",{parentName:"ul"},"Requester phone number attestation count and success rate"),(0,i.kt)("li",{parentName:"ul"},"Requester account balance")),(0,i.kt)("p",null,"The requirements for these factors are configured to make it prohibitively expensive to scrape large quantities of phone numbers while still allowing typical user flows to remain unaffected."),(0,i.kt)("h2",{id:"oblivious-decentralized-identifier-service"},"Oblivious Decentralized Identifier Service"),(0,i.kt)("h3",{id:"distributed-key-generation"},"Distributed Key Generation"),(0,i.kt)("p",null,"For the sake of user privacy, no single party should have the ability to unilaterally compute the pepper for a given phone number. To ensure this, ODIS was designed to be decentralized across a set of reputable participants. Before the ODIS was deployed, a set of operators participated in a Distributed Key Generation (DKG) ceremony to generate parts of a shared secret. Details of the the DKG setup can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-threshold-bls-rs"},"in the Celo Threshold BLS repository"),". Each ODIS node holds a share of the key which can be used to sign the response to the user. When enough of these signatures are combined, their combination can be used to derive a unique, deterministic phone number pepper. The number of key holders (",(0,i.kt)("em",{parentName:"p"},"m"),") and threshold of signatures required (",(0,i.kt)("em",{parentName:"p"},"k"),") are both configurable at the time of the DKG ceremony."),(0,i.kt)("h3",{id:"rotating-keys"},"Rotating keys"),(0,i.kt)("p",null,"In the case that a key is compromised or a new ODIS operator is added, it will be necessary to perform a key rotation. Before going over the key rotation process, let's take a look at the implications of a compromised key. If the number of keys compromised at a time is less than the threshold ",(0,i.kt)("em",{parentName:"p"},"k"),", the attacker will not be able to reach a sufficient threshold to compute the pepper for all phone numbers. Similarly, as long as ",(0,i.kt)("em",{parentName:"p"},"k")," other keys remain uncompromised, good users will still be able to perform the pepper lookup as part of the ODIS. Therefore, in the case that a single key is compromised, user data will remain private and the service operational; however, it's important that we can detect and perform a key rotation before the number of keys compromised exceeds ",(0,i.kt)("em",{parentName:"p"},"k")," or ",(0,i.kt)("em",{parentName:"p"},"m - k + 1"),' (whichever is lower). For example, if there are ten ODIS operators and the required threshold is three, then if three of them are compromised an attacker may compute the pepper for all phone numbers. If eight are compromised then an attacker may prevent the rest of the nodes (two in this case) from generating the pepper for users. Note that "compromised" entities in these examples could also be malicious or simply unavailable.'),(0,i.kt)("p",null,"To rotate keys, a new DKG ceremony must be performed with at least ",(0,i.kt)("em",{parentName:"p"},"k")," of the ",(0,i.kt)("em",{parentName:"p"},"m")," original keys. These newly generated keys will not be compatible with the old keys; however if ",(0,i.kt)("em",{parentName:"p"},"k")," of the old keys are used, an attacker may still reach the necessary threshold.Therefore, it's extremely important that all of the old keys are destroyed after a successful key rotation. Note that a DKG ceremony also provides the opportunity to change the values for ",(0,i.kt)("em",{parentName:"p"},"k")," and ",(0,i.kt)("em",{parentName:"p"},"m"),"."),(0,i.kt)("h3",{id:"blinding"},"Blinding"),(0,i.kt)("p",null,"When a client, like the Celo wallet, queries ODIS to retrieve a phone number pepper, the client first blinds the phone number locally. This blinding process preserves the privacy of the mobile number such that ODIS nodes cannot determine what number they're providing a pepper for; reducing risk of targeted censorship and further increasing privacy. After the application receives the response, it unblinds it to compute the pepper."),(0,i.kt)("h3",{id:"combiner"},"Combiner"),(0,i.kt)("p",null,"To facilitate the multi-service communication needed for the K of M signing, ODIS includes a combiner service which performs this orchestration for the convenience of wallets and other clients building on Celo. Like ODIS signer nodes, the combiner only receives the blinded phone number and therefore cannot see what number it's handling. The combiner also validates the response from each signer to ensure a corrupt signer cannot corrupt the resulting pepper."),(0,i.kt)("p",null,"Anyone who wishes to participate in the ODIS service may run a combiner. Currently, cLabs operates one such combiner that may be used by other projects building on Celo."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"In order to measure the quota for a given requester, ODIS must check their account information on the Celo blockchain. To prove ownership over their account, the POST request contains an Authorization header with the signed message body. When ODIS nodes receive the request, it authenticates the user by recovering the message signer from the header and comparing it to the value in the message body."),(0,i.kt)("h2",{id:"request-flow-diagram"},"Request Flow Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/celo-website/docs/ODIS-flow-diagram.svg",alt:"request flow diagram"})),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/celo-website/docs/ODIS-architecture-diagram.svg",alt:"architecture diagram"})),(0,i.kt)("p",null,"The hosted architecture is divided into two components, the Combiner and the Signers. Currently the combiner is a cloud function and the signers are independent NodeJs servers. Both services leverage the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-threshold-bls-rs"},"Celo Threshold BLS library")," which has been compiled to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celo-org/blind-threshold-bls-wasm"},"a Web Assembly module"),"."),(0,i.kt)("p",null,"The combiner and signers maintain some minimal state in a SQL database, mainly related to quota tracking."),(0,i.kt)("p",null,"For storage of the BLS signing key, the signers currently support three cloud-based keystores: Azure Key Vault, AWS Secret Manager, and Google Secret Manager."))}u.isMDXComponent=!0}}]);