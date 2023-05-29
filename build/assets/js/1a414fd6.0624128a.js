"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[7648],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},50:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),l=["components"],i={title:"Celo ReleaseGold",description:"Introduction to ReleaseGold including examples, use cases, and FAQ.",slug:"/celo-owner-guide/release-gold"},s="Understanding ReleaseGold",d={unversionedId:"celo-holder-guide/release-gold",id:"celo-holder-guide/release-gold",title:"Celo ReleaseGold",description:"Introduction to ReleaseGold including examples, use cases, and FAQ.",source:"@site/docs/celo-holder-guide/release-gold.md",sourceDirName:"celo-holder-guide",slug:"/celo-owner-guide/release-gold",permalink:"/celo-owner-guide/release-gold",editUrl:"",tags:[],version:"current",frontMatter:{title:"Celo ReleaseGold",description:"Introduction to ReleaseGold including examples, use cases, and FAQ.",slug:"/celo-owner-guide/release-gold"}},c=[{value:"What is ReleaseGold?",id:"what-is-releasegold",children:[{value:"Example",id:"example",children:[],level:3}],level:2},{value:"Addresses Involved",id:"addresses-involved",children:[],level:2},{value:"Use Cases for <code>ReleaseGold</code>",id:"use-cases-for-releasegold",children:[],level:2},{value:"Release Schedule",id:"release-schedule",children:[],level:2},{value:"Released and Unreleased CELO",id:"released-and-unreleased-celo",children:[],level:2},{value:"FAQ",id:"faq",children:[],level:2}],p={toc:c};function u(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"understanding-releasegold"},"Understanding ReleaseGold"),(0,r.kt)("p",null,"Introduction to ReleaseGold including examples, use cases, and FAQ. "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"what-is-releasegold"},"What is ReleaseGold?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/ReleaseGold.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"ReleaseGold"))," is a smart contract that enables CELO to be released programmatically to a beneficiary over a period of time. In a deployed ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," smart contract, only the CELO balance that has been released according to the release schedule can be withdrawn by the contract\u2019s beneficiary. The unreleased CELO cannot be withdrawn, but can be used for specific functions in Celo\u2019s Proof of Stake protocol, namely voting and validating."),(0,r.kt)("p",null,"The intent of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," contract is to allow beneficiaries to participate in Celo\u2019s Proof of Stake protocol with CELO that has not yet been fully released to them. Beneficiaries are able to lock CELO for voting and validating with the full ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," balance, including both released and unreleased CELO."),(0,r.kt)("p",null,"Increasing the volume of CELO that can be used in Celo\u2019s Proof of Stake consensus promotes network security and even greater decentralization. See below for details on specific features of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," contract, as well as how they are implemented. The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/ReleaseGold.sol"},"source code")," includes documentation, and technical readers are encouraged to find further details there."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please do not send any ERC20 token other han CELO or cUSD to a Release Gold contract, as it will not be able to be transfered out of the contract per ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/ReleaseGold.sol#L164"},"source code"),"."))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"To illustrate with an example, let\u2019s consider a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," contract deployed with a total balance of 100 CELO. For example purposes, we\u2019ll assume this contract enables both voting and validating."),(0,r.kt)("p",null,"Let's also assume the beneficiary is an individual who is receiving CELO based on a vesting schedule (or a \u2018release schedule\u2019). According to this release schedule, the beneficiary will receive 10% of the total CELO balance each month."),(0,r.kt)("p",null,"In three months time after deployment, there will be 30 released CELO in the contract, because 10 CELO (10% of 100 CELO) was released each month, for 3 months. Now, the beneficiary can transfer this 30 CELO freely."),(0,r.kt)("p",null,"The beneficiary does not yet have full rights to the remaining 70 unreleased CELO. However, this 70 CELO while unavailable for withdrawal, can still be used by the beneficiary for voting and validating. This unreleased balance will also continue to release at the rate of 10 CELO per month, until the total balance is empty."),(0,r.kt)("h2",{id:"addresses-involved"},"Addresses Involved"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Beneficiary")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"beneficiary")," address is the recipient of the CELO in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," contract. As the CELO is released over time, it is incrementally made withdrawable solely to the beneficiary. The beneficiary is also able to use both unreleased and released CELO to participate in Celo\u2019s Proof of Stake consensus protocol, via locking gold and voting or validating."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Release Owner")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"releaseOwner")," is the address involved in administering the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," contract. The release owner may be able to perform actions including ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/ReleaseGold.sol#L268"},"setting the liquidity provision")," for the contract, setting the maximum withdrawal amount, or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/protocol/contracts/governance/ReleaseGold.sol#L362"},"revoking")," the contract, depending on the ReleaseGold configuration."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Refund Address")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"refundAddress")," is the address where funds that have not been released will be sent if a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," contract is revoked. Contracts that are not revocable do not have a ",(0,r.kt)("inlineCode",{parentName:"p"},"refundAddress"),"."),(0,r.kt)("h2",{id:"use-cases-for-releasegold"},"Use Cases for ",(0,r.kt)("inlineCode",{parentName:"h2"},"ReleaseGold")),(0,r.kt)("p",null,"Two anticipated use cases for ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," contracts are for \u201cholders\u201d and \u201cearners\u201d. Note that these are not specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," explicitly, rather they represent sample configurations that the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," contract supports."),(0,r.kt)("p",null,"In the \u201cholder\u201d case, a recipient may have purchased or been awarded an amount of CELO, but is subject to a distribution schedule limiting the amount of CELO that can be liquidated at any given time. These recipients may be able to validate and vote with the full ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," balance, and also are not subject to the contract\u2019s revocation by another party (eg. an employer)."),(0,r.kt)("p",null,"In the \u201cearner\u201d case, a grant recipient may have entered a legal contract wherein an exchange of services earns them an amount of CELO over a releasing, or vesting, schedule. These grants are characterized by extra restrictions because the total grant amount is still being ",(0,r.kt)("em",{parentName:"p"},"earned"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," balance cannot be used for running a validator, but it can be used to vote for validators and governance proposals on the Celo network. Additionally, these contracts may be revocable and may be subject to the ",(0,r.kt)("inlineCode",{parentName:"p"},"liquidityProvision")," flag, which prevents CELO distribution when markets are incapable of absorbing additional CELO without significant slippage."),(0,r.kt)("h2",{id:"release-schedule"},"Release Schedule"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," smart contracts, a fixed amount of CELO becomes accessible to the ",(0,r.kt)("inlineCode",{parentName:"p"},"beneficiary")," over time."),(0,r.kt)("p",null,"The following arguments specify a ReleaseGold smart contract schedule:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"releasePeriod")," - the frequency, in seconds, at which CELO is released",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Some common values: monthly (2628000), every 3 months (7884000)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amountReleasedPerPeriod")," - the amount of CELO to be released each ",(0,r.kt)("inlineCode",{parentName:"li"},"releasePeriod")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"numReleasePeriods")," - the number of ",(0,r.kt)("inlineCode",{parentName:"li"},"releasePeriods")," in which CELO will be released"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"releaseCliff")," - the time at which the release cliff expires.")),(0,r.kt)("p",null,"The total balance for the ReleaseGold account can be determined by multiplying the ",(0,r.kt)("inlineCode",{parentName:"p"},"numReleasePeriods")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"amountReleasedPerPeriod"),"."),(0,r.kt)("p",null,"Similar to vesting-type schedules with cliffs used for other assets, ReleaseGold allows for a ",(0,r.kt)("inlineCode",{parentName:"p"},"releaseCliff")," (expressed in seconds) before which the released CELO cannot be withdrawn by its beneficiary. A common value for this is ",(0,r.kt)("inlineCode",{parentName:"p"},"31536000"),", which is 1 year."),(0,r.kt)("h2",{id:"released-and-unreleased-celo"},"Released and Unreleased CELO"),(0,r.kt)("p",null,"In deployed ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," accounts, you can conceptually think of CELO in two states -- released, and unreleased. There are other states including locked, but for the purposes of the contract, these are the two primary states to consider."),(0,r.kt)("p",null,"Released CELO can be withdrawn to the ",(0,r.kt)("inlineCode",{parentName:"p"},"beneficiary")," where it can be used freely. Unreleased CELO comes with some restrictions. Foremost, it cannot be withdrawn by the beneficiary. If ",(0,r.kt)("inlineCode",{parentName:"p"},"canVote")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"canValidate")," are set to false, the beneficiary cannot vote or validate, respectively."),(0,r.kt)("p",null,"If the contract permits voting and validating using the unreleased balance, the specific keys to perform these actions must first be authorized. For example, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"beneficiary")," desires to vote using their ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," contract, they must authorize a voting key to vote on the contract\u2019s behalf."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,"Can I vote for validators, or run a validator using my ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," CELO balance?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Keep in mind that in a ",(0,r.kt)("inlineCode",{parentName:"li"},"ReleaseGold")," contract, there is both released CELO, and unreleased CELO. You can always vote or validate with the released balance if you are the beneficiary. However, for unreleased CELO, you can only vote or validate if ",(0,r.kt)("inlineCode",{parentName:"li"},"canVote")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"canValidate")," properties are respectively set to true on the contract .")),(0,r.kt)("p",null,"Can the ",(0,r.kt)("inlineCode",{parentName:"p"},"releaseOwner")," access my CELO?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No, the ",(0,r.kt)("inlineCode",{parentName:"li"},"releaseOwner")," cannot make transactions with the CELO balance in a ",(0,r.kt)("inlineCode",{parentName:"li"},"ReleaseGold")," contract. However, they can perform some administrative functions if the permissions are given at time of deployment. For example, a ",(0,r.kt)("inlineCode",{parentName:"li"},"releaseOwner")," cannot revoke a contract unless the property ",(0,r.kt)("inlineCode",{parentName:"li"},"revocable")," is set to true when the contract is deployed."),(0,r.kt)("li",{parentName:"ul"},"It is highly recommended to review the contract at its deployed address, to learn specific details of a ",(0,r.kt)("inlineCode",{parentName:"li"},"ReleaseGold")," contract.")),(0,r.kt)("p",null,"Can I move the CELO released by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," contract to another address?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Of course! Once CELO is released and the cliff has passed, the beneficiary is free to do what they want with it.")),(0,r.kt)("p",null,"Why do I need to authorize separate keys for voting and validating? Can\u2019t I do it using the private key for my beneficiary address?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You may use any keys for your voting and validating signers, so long as those keys are not for a registered account or for another signing purpose. This means you ",(0,r.kt)("em",{parentName:"li"},"could")," use your ",(0,r.kt)("inlineCode",{parentName:"li"},"beneficiary")," address as one of your signing roles, but you would need another account for an additional role.")),(0,r.kt)("p",null,"Can I change the beneficiary?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Yes, but changing the beneficiary requires signatures from both the ",(0,r.kt)("inlineCode",{parentName:"li"},"releaseOwner")," and the current ",(0,r.kt)("inlineCode",{parentName:"li"},"beneficiary")," of the ",(0,r.kt)("inlineCode",{parentName:"li"},"ReleaseGold")," contract. This is implemented as a two out of two multisig contract.")),(0,r.kt)("p",null,"What if I lose the private key associated with the beneficiary address?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unfortunately, if you lose the private key for the beneficiary address, then you won't be able to access your funds. Please be careful in ownership of this key, as it\u2019s loss is irreversible.")),(0,r.kt)("p",null,"What happens if there is a bug in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," contract?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ReleaseGold")," contract has been reviewed by security firms, and has passed smart contract audits. That said, if any unforeseen bugs are found, it is possible to modify the contract and redeploy it. This process requires a 2/2 multisig agreement from both ",(0,r.kt)("inlineCode",{parentName:"li"},"releaseOwner")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"beneficiary"),".")),(0,r.kt)("p",null,"What is the distribution ratio?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Some grants are subject to \u201cdistribution schedules,\u201d which control the release of funds outside of a traditional vesting schedule for legal reasons. This schedule is controlled by the ",(0,r.kt)("inlineCode",{parentName:"li"},"distributionRatio")," and is adjustable by the ",(0,r.kt)("inlineCode",{parentName:"li"},"releaseOwner"),".")))}u.isMDXComponent=!0}}]);