"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[5388],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return p}});var o=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),c=function(e){var a=o.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=c(e.components);return o.createElement(d.Provider,{value:a},e.children)},f={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(t),p=r,u=m["".concat(d,".").concat(p)]||m[p]||f[p]||n;return t?o.createElement(u,l(l({ref:a},s),{},{components:t})):o.createElement(u,l({ref:a},s))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,l=new Array(n);l[0]=m;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<n;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88002:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var o=t(83117),r=t(80102),n=(t(67294),t(3905)),l=["components"],i={},d="celocli validator",c={unversionedId:"command-line-interface/validator",id:"command-line-interface/validator",title:"celocli validator",description:"View and manage Validators",source:"@site/docs/command-line-interface/validator.md",sourceDirName:"command-line-interface",slug:"/command-line-interface/validator",permalink:"/command-line-interface/validator",editUrl:"https://github.com/celo-org/docs/edit/main/docs/command-line-interface/validator.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"celocli transfer",permalink:"/command-line-interface/transfer"},next:{title:"celocli validatorgroup",permalink:"/command-line-interface/validatorgroup"}},s=[{value:"<code>celocli validator:affiliate GROUPADDRESS</code>",id:"celocli-validatoraffiliate-groupaddress",children:[],level:2},{value:"<code>celocli validator:deaffiliate</code>",id:"celocli-validatordeaffiliate",children:[],level:2},{value:"<code>celocli validator:deregister</code>",id:"celocli-validatorderegister",children:[],level:2},{value:"<code>celocli validator:downtime-slash</code>",id:"celocli-validatordowntime-slash",children:[],level:2},{value:"<code>celocli validator:force-deaffiliate</code>",id:"celocli-validatorforce-deaffiliate",children:[],level:2},{value:"<code>celocli validator:list</code>",id:"celocli-validatorlist",children:[],level:2},{value:"<code>celocli validator:register</code>",id:"celocli-validatorregister",children:[],level:2},{value:"<code>celocli validator:requirements</code>",id:"celocli-validatorrequirements",children:[],level:2},{value:"<code>celocli validator:set-bitmaps</code>",id:"celocli-validatorset-bitmaps",children:[],level:2},{value:"<code>celocli validator:show VALIDATORADDRESS</code>",id:"celocli-validatorshow-validatoraddress",children:[],level:2},{value:"<code>celocli validator:signed-blocks</code>",id:"celocli-validatorsigned-blocks",children:[],level:2},{value:"<code>celocli validator:status</code>",id:"celocli-validatorstatus",children:[],level:2},{value:"<code>celocli validator:update-bls-public-key</code>",id:"celocli-validatorupdate-bls-public-key",children:[],level:2}],f={toc:s};function m(e){var a=e.components,t=(0,r.Z)(e,l);return(0,n.kt)("wrapper",(0,o.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"celocli-validator"},(0,n.kt)("inlineCode",{parentName:"h1"},"celocli validator")),(0,n.kt)("p",null,"View and manage Validators"),(0,n.kt)("h2",{id:"celocli-validatoraffiliate-groupaddress"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validator:affiliate GROUPADDRESS")),(0,n.kt)("p",null,"Affiliate a Validator with a Validator Group. This allows the Validator Group to add that Validator as a member. If the Validator is already a member of a Validator Group, affiliating with a different Group will remove the Validator from the first group's members."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Affiliate a Validator with a Validator Group. This allows the Validator Group to add that Validator as a member. If the Validator is already a member of a Validator Group, affiliating with a different Group will remove the Validator from the first group's members.\n\nUSAGE\n  $ celocli validator:affiliate GROUPADDRESS\n\nARGUMENTS\n  GROUPADDRESS  ValidatorGroup's address\n\nOPTIONS\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Signer or Validator's\n                                                     address\n\n  --globalHelp                                       View all available global flags\n\n  --yes                                              Answer yes to prompt\n\nEXAMPLE\n  affiliate --from 0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95\n  0x97f7333c51897469e8d98e7af8653aab468050a3\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validator/affiliate.ts"},"src/commands/validator/affiliate.ts"))),(0,n.kt)("h2",{id:"celocli-validatordeaffiliate"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validator:deaffiliate")),(0,n.kt)("p",null,"Deaffiliate a Validator from a Validator Group, and remove it from the Group if it is also a member."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Deaffiliate a Validator from a Validator Group, and remove it from the Group if it is also a member.\n\nUSAGE\n  $ celocli validator:deaffiliate\n\nOPTIONS\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Signer or Validator's\n                                                     address\n\n  --globalHelp                                       View all available global flags\n\nEXAMPLE\n  deaffiliate --from 0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validator/deaffiliate.ts"},"src/commands/validator/deaffiliate.ts"))),(0,n.kt)("h2",{id:"celocli-validatorderegister"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validator:deregister")),(0,n.kt)("p",null,"Deregister a Validator. Approximately 60 days after the validator is no longer part of any group, it will be possible to deregister the validator and start unlocking the CELO. If you wish to deregister your validator, you must first remove it from it's group, such as by deaffiliating it, then wait the required 60 days before running this command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Deregister a Validator. Approximately 60 days after the validator is no longer part of any group, it will be possible to deregister the validator and start unlocking the CELO. If you wish to deregister your validator, you must first remove it from it's group, such as by deaffiliating it, then wait the required 60 days before running this command.\n\nUSAGE\n  $ celocli validator:deregister\n\nOPTIONS\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Signer or Validator's\n                                                     address\n\n  --globalHelp                                       View all available global flags\n\nEXAMPLE\n  deregister --from 0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validator/deregister.ts"},"src/commands/validator/deregister.ts"))),(0,n.kt)("h2",{id:"celocli-validatordowntime-slash"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validator:downtime-slash")),(0,n.kt)("p",null,"Downtime slash a validator"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Downtime slash a validator\n\nUSAGE\n  $ celocli validator:downtime-slash\n\nOPTIONS\n  --beforeBlock=beforeBlock\n      Slash for slashable downtime window before provided block\n\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d\n      (required) From address to perform the slash (reward recipient)\n\n  --globalHelp\n      View all available global flags\n\n  --intervals=\'[0:1], [1:2]\'\n      Array of intervals, ordered by min start to max end\n\n  --validator=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d\n      Validator (signer or account) address\n\n  --validators=\'["0xb7ef0985bdb4f19460A29d9829aA1514B181C4CD",\n  "0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95"]\'\n      Validator (signer or account) address list\n\nEXAMPLES\n  downtime-slash     --from 0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95     --validator\n  0xb7ef0985bdb4f19460A29d9829aA1514B181C4CD     --intervals "[100:150), [150:200)"\n\n  downtime-slash     --from 0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95     --validator\n  0xb7ef0985bdb4f19460A29d9829aA1514B181C4CD     --slashableDowntimeBeforeBlock 200\n')),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validator/downtime-slash.ts"},"src/commands/validator/downtime-slash.ts"))),(0,n.kt)("h2",{id:"celocli-validatorforce-deaffiliate"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validator:force-deaffiliate")),(0,n.kt)("p",null,"Force deaffiliate a Validator from a Validator Group, and remove it from the Group if it is also a member. Used by stake-off admins in order to remove validators from the next epoch's validator set if they are down and consistently unresponsive, in order to preserve the health of the network. This feature will be removed once slashing for downtime is implemented."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Force deaffiliate a Validator from a Validator Group, and remove it from the Group if it is also a member.  Used by stake-off admins in order to remove validators from the next epoch's validator set if they are down and consistently unresponsive, in order to preserve the health of the network. This feature will be removed once slashing for downtime is implemented.\n\nUSAGE\n  $ celocli validator:force-deaffiliate\n\nOPTIONS\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d       (required) Initiator\n\n  --globalHelp                                            View all available global\n                                                          flags\n\n  --validator=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Validator's address\n\nEXAMPLE\n  force-deaffiliate --from 0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95 --validator\n  0xb7ef0985bdb4f19460A29d9829aA1514B181C4CD\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validator/force-deaffiliate.ts"},"src/commands/validator/force-deaffiliate.ts"))),(0,n.kt)("h2",{id:"celocli-validatorlist"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validator:list")),(0,n.kt)("p",null,"List registered Validators, their name (if provided), affiliation, uptime score, and public keys used for validating."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"List registered Validators, their name (if provided), affiliation, uptime score, and public keys used for validating.\n\nUSAGE\n  $ celocli validator:list\n\nOPTIONS\n  -x, --extended          show extra columns\n  --columns=columns       only show provided columns (comma-separated)\n  --csv                   output is csv format [alias: --output=csv]\n  --filter=filter         filter property by partial string matching, ex: name=foo\n  --globalHelp            View all available global flags\n  --no-header             hide table header from output\n  --no-truncate           do not truncate output to fit screen\n  --output=csv|json|yaml  output in a more machine friendly format\n  --sort=sort             property to sort by (prepend '-' for descending)\n\nEXAMPLE\n  list\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validator/list.ts"},"src/commands/validator/list.ts"))),(0,n.kt)("h2",{id:"celocli-validatorregister"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validator:register")),(0,n.kt)("p",null,"Register a new Validator"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Register a new Validator\n\nUSAGE\n  $ celocli validator:register\n\nOPTIONS\n  --blsKey=0x                                        (required) BLS Public Key\n  --blsSignature=0x                                  (required) BLS Proof-of-Possession\n  --ecdsaKey=0x                                      (required) ECDSA Public Key\n\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Address for the\n                                                     Validator\n\n  --globalHelp                                       View all available global flags\n\n  --yes                                              Answer yes to prompt\n\nEXAMPLE\n  register --from 0x47e172F6CfB6c7D01C1574fa3E2Be7CC73269D95 --ecdsaKey\n  0x049b7291ab8813a095d6b7913a7930ede5ea17466abd5e1a26c6c44f6df9a400a6f474080098b2c752c6\n  c4871978ca977b90dcd3aed92bc9d564137c8dfa14ee72 --blsKey\n  0x4fa3f67fc913878b068d1fa1cdddc54913d3bf988dbe5a36a20fa888f20d4894c408a6773f3d7bde1115\n  4f2a3076b700d345a42fd25a0e5e83f4db5586ac7979ac2053cd95d8f2efd3e959571ceccaa743e02cf4be\n  3f5d7aaddb0b06fc9aff00 --blsSignature\n  0xcdb77255037eb68897cd487fdd85388cbda448f617f874449d4b11588b0b7ad8ddc20d9bb450b513bb35\n  664ea3923900\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validator/register.ts"},"src/commands/validator/register.ts"))),(0,n.kt)("h2",{id:"celocli-validatorrequirements"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validator:requirements")),(0,n.kt)("p",null,"List the Locked Gold requirements for registering a Validator. This consists of a value, which is the amount of CELO that needs to be locked in order to register, and a duration, which is the amount of time that CELO must stay locked following the deregistration of the Validator."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"List the Locked Gold requirements for registering a Validator. This consists of a value, which is the amount of CELO that needs to be locked in order to register, and a duration, which is the amount of time that CELO must stay locked following the deregistration of the Validator.\n\nUSAGE\n  $ celocli validator:requirements\n\nOPTIONS\n  --globalHelp  View all available global flags\n\nEXAMPLE\n  requirements\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validator/requirements.ts"},"src/commands/validator/requirements.ts"))),(0,n.kt)("h2",{id:"celocli-validatorset-bitmaps"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validator:set-bitmaps")),(0,n.kt)("p",null,"Set validator signature bitmaps for provided intervals"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Set validator signature bitmaps for provided intervals\n\nUSAGE\n  $ celocli validator:set-bitmaps\n\nOPTIONS\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d            (required) From address\n                                                               to sign set bitmap\n                                                               transactions\n\n  --globalHelp                                                 View all available global\n                                                               flags\n\n  --intervals='[0:1], [1:2]'                                   Array of intervals,\n                                                               ordered by min start to\n                                                               max end\n\n  --slashableDowntimeBeforeBlock=slashableDowntimeBeforeBlock  Set all bitmaps for\n                                                               slashable downtime window\n                                                               before provided block\n\n  --slashableDowntimeBeforeLatest                              Set all bitmaps for\n                                                               slashable downtime window\n                                                               before latest block\n\nEXAMPLES\n  set-bitmaps --from 0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95\n  --slashableDowntimeBeforeBlock 10000\n\n  set-bitmaps --from 0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95 --intervals \"[0:100],\n  (100:200]\"\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validator/set-bitmaps.ts"},"src/commands/validator/set-bitmaps.ts"))),(0,n.kt)("h2",{id:"celocli-validatorshow-validatoraddress"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validator:show VALIDATORADDRESS")),(0,n.kt)("p",null,"Show information about a registered Validator."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Show information about a registered Validator.\n\nUSAGE\n  $ celocli validator:show VALIDATORADDRESS\n\nARGUMENTS\n  VALIDATORADDRESS  Validator's address\n\nOPTIONS\n  --globalHelp  View all available global flags\n\nEXAMPLE\n  show 0x97f7333c51897469E8D98E7af8653aAb468050a3\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validator/show.ts"},"src/commands/validator/show.ts"))),(0,n.kt)("h2",{id:"celocli-validatorsigned-blocks"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validator:signed-blocks")),(0,n.kt)("p",null,"Display a graph of blocks and whether the given signer's signature is included in each. A green '.' indicates the signature is present in that block, a red '\u2718' indicates the signature is not present. A yellow '~' indicates the signer is not elected for that block."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Display a graph of blocks and whether the given signer's signature is included in each. A green '.' indicates the signature is present in that block, a red '\u2718' indicates the signature is not present. A yellow '~' indicates the signer is not elected for that block.\n\nUSAGE\n  $ celocli validator:signed-blocks\n\nOPTIONS\n  --at-block=at-block\n      latest block to examine for signer activity\n\n  --globalHelp\n      View all available global flags\n\n  --lookback=lookback\n      [default: 120] how many blocks to look back for signer activity\n\n  --signer=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d\n      address of the signer to check for signatures\n\n  --signers='[\"0xb7ef0985bdb4f19460A29d9829aA1514B181C4CD\",\n  \"0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95\"]'\n      list of signer addresses to check for signatures\n\n  --slashableDowntimeLookback\n      lookback of slashableDowntime\n\n  --wasDownWhileElected\n      indicate whether a validator was down while elected for range\n\n  --width=width\n      [default: 40] line width for printing marks\n\nEXAMPLES\n  signed-blocks --signer 0x5409ED021D9299bf6814279A6A1411A7e866A631\n\n  signed-blocks --signer 0x5409ED021D9299bf6814279A6A1411A7e866A631 --follow\n\n  signed-blocks --at-block 100000 --signer 0x5409ED021D9299bf6814279A6A1411A7e866A631\n\n  signed-blocks --lookback 500 --signer 0x5409ED021D9299bf6814279A6A1411A7e866A631\n\n  signed-blocks --lookback 50 --width 10 --signer\n  0x5409ED021D9299bf6814279A6A1411A7e866A631\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validator/signed-blocks.ts"},"src/commands/validator/signed-blocks.ts"))),(0,n.kt)("h2",{id:"celocli-validatorstatus"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validator:status")),(0,n.kt)("p",null,"Shows the consensus status of a validator. This command will show whether a validator is currently elected, would be elected if an election were to be run right now, and the percentage of blocks signed and number of blocks successfully proposed within a given window."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Shows the consensus status of a validator. This command will show whether a validator is currently elected, would be elected if an election were to be run right now, and the percentage of blocks signed and number of blocks successfully proposed within a given window.\n\nUSAGE\n  $ celocli validator:status\n\nOPTIONS\n  -x, --extended                                          show extra columns\n\n  --all                                                   get the status of all\n                                                          registered validators\n\n  --columns=columns                                       only show provided columns\n                                                          (comma-separated)\n\n  --csv                                                   output is csv format [alias:\n                                                          --output=csv]\n\n  --end=end                                               [default: -1] what block to\n                                                          end at when looking at signer\n                                                          activity. defaults to the\n                                                          latest block\n\n  --filter=filter                                         filter property by partial\n                                                          string matching, ex: name=foo\n\n  --globalHelp                                            View all available global\n                                                          flags\n\n  --no-header                                             hide table header from output\n\n  --no-truncate                                           do not truncate output to fit\n                                                          screen\n\n  --output=csv|json|yaml                                  output in a more machine\n                                                          friendly format\n\n  --signer=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d     address of the signer to check\n                                                          if elected and validating\n\n  --sort=sort                                             property to sort by (prepend\n                                                          '-' for descending)\n\n  --start=start                                           [default: -1] what block to\n                                                          start at when looking at\n                                                          signer activity. defaults to\n                                                          the last 100 blocks\n\n  --validator=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  address of the validator to\n                                                          check if elected and\n                                                          validating\n\nEXAMPLES\n  status --validator 0x5409ED021D9299bf6814279A6A1411A7e866A631\n\n  status --validator 0x5409ED021D9299bf6814279A6A1411A7e866A631 --start 1480000\n\n  status --all --start 1480000 --end 1490000\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validator/status.ts"},"src/commands/validator/status.ts"))),(0,n.kt)("h2",{id:"celocli-validatorupdate-bls-public-key"},(0,n.kt)("inlineCode",{parentName:"h2"},"celocli validator:update-bls-public-key")),(0,n.kt)("p",null,"Update the BLS public key for a Validator to be used in consensus."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Update the BLS public key for a Validator to be used in consensus.\n\nRegular (ECDSA and BLS) key rotation is recommended for Validator operational security.\n\nWARNING: By default, the BLS key used by the validator node is derived from the ECDSA private key. As a result, rotating the BLS key without rotating the ECDSA key will result in validator downtime without special configuration. Use this method only if you know what you are doing.\n\nUSAGE\n  $ celocli validator:update-bls-public-key\n\nOPTIONS\n  --blsKey=0x                                        (required) BLS Public Key\n  --blsPop=0x                                        (required) BLS Proof-of-Possession\n  --from=0xc1912fEE45d61C87Cc5EA59DaE31190FFFFf232d  (required) Validator's address\n  --globalHelp                                       View all available global flags\n\nDESCRIPTION\n\n  Regular (ECDSA and BLS) key rotation is recommended for Validator operational\n  security.\n\n  WARNING: By default, the BLS key used by the validator node is derived from the ECDSA\n  private key. As a result, rotating the BLS key without rotating the ECDSA key will\n  result in validator downtime without special configuration. Use this method only if\n  you know what you are doing.\n\nEXAMPLE\n  update-bls-key --from 0x47e172F6CfB6c7D01C1574fa3E2Be7CC73269D95 --blsKey\n  0x4fa3f67fc913878b068d1fa1cdddc54913d3bf988dbe5a36a20fa888f20d4894c408a6773f3d7bde1115\n  4f2a3076b700d345a42fd25a0e5e83f4db5586ac7979ac2053cd95d8f2efd3e959571ceccaa743e02cf4be\n  3f5d7aaddb0b06fc9aff00 --blsPop\n  0xcdb77255037eb68897cd487fdd85388cbda448f617f874449d4b11588b0b7ad8ddc20d9bb450b513bb35\n  664ea3923900\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See code: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/tree/master/packages/cli/src/commands/validator/update-bls-public-key.ts"},"src/commands/validator/update-bls-public-key.ts"))))}m.isMDXComponent=!0}}]);