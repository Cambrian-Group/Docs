"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[8939],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=o.createContext({}),c=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||n;return a?o.createElement(h,i(i({ref:t},s),{},{components:a})):o.createElement(h,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},41959:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var o=a(83117),r=a(80102),n=(a(67294),a(3905)),i=["components"],l={title:"Validator Explorer",description:"How to use the Validator Explorer to view Validator performance."},d="Validator Explorer",c={unversionedId:"validator-guide/validator-explorer",id:"validator-guide/validator-explorer",title:"Validator Explorer",description:"How to use the Validator Explorer to view Validator performance.",source:"@site/docs/validator-guide/validator-explorer.md",sourceDirName:"validator-guide",slug:"/validator-guide/validator-explorer",permalink:"/validator-guide/validator-explorer",editUrl:"https://github.com/celo-org/docs/edit/main/docs/validator-guide/validator-explorer.md",tags:[],version:"current",frontMatter:{title:"Validator Explorer",description:"How to use the Validator Explorer to view Validator performance."},sidebar:"validators",previous:{title:"Running Proxies on Celo",permalink:"/validator-guide/proxy"},next:{title:"Celo Foundation Voting Policy",permalink:"/validator-guide/celo-foundation-voting-policy"}},s=[{value:"Introduction to the Explorer",id:"introduction-to-the-explorer",children:[{value:"Environment variables",id:"environment-variables",children:[],level:3}],level:2}],u={toc:s};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"validator-explorer"},"Validator Explorer"),(0,n.kt)("p",null,"How to use the Validator Explorer to view Validator performance."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"introduction-to-the-explorer"},"Introduction to the Explorer"),(0,n.kt)("p",null,"You can interact with the Validator Explorer that allows you to have a complete view of how the different validators are performing. This is one resource voters may use to find validator groups to vote for. The Validator Explorer tool is available in the following address:\n",(0,n.kt)("a",{parentName:"p",href:"https://celo.org/validators/explore/"},"https://celo.org/validators/explore/")),(0,n.kt)("p",null,"All of the existing validators and groups in the Celo network are included in this view. The default view shows all registered validator groups - if you click on any of the group names it will expand to show the validators affiliated with that group. You can also sort results by each column's value by clicking on the header field."),(0,n.kt)("p",null,"If you are looking to see how your validator is performing, you should first find the group your validator is affiliated with. Then you can click on the group name to see your validator and the rest of the validators affiliated with this group."),(0,n.kt)("p",null,"If you are running a validator group, one way to demonstrate your credibility to voters is claiming your validator badges by following the instructions ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celo-org/website/blob/master/validator-badges/README.md"},"here"),"."),(0,n.kt)("p",null,"A critical element of this explorer is the Validator Group name, which can help voters recognize organizations or active community members. This name is fetched from the ",(0,n.kt)("inlineCode",{parentName:"p"},"account")," information registered on-chain for your validator and validator group. In order to combat name impersonation, a group can register a domain claim within their metadata, which you can read more about ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/docs/celo-codebase/protocol/identity/metadata.md"},"here"),". This verification is done by adding a ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/TXT_record"},"TXT record")," to their domain which includes a signature of their domain claim signed by their associated account. This claim is then verified by the validator explorer. Individual users may also verify a claim using ",(0,n.kt)("inlineCode",{parentName:"p"},"celocli account:get-metdata"),"."),(0,n.kt)("p",null,"For example, if a group was run by the owners of ",(0,n.kt)("inlineCode",{parentName:"p"},"example.com"),", they may want to register their Validator Group with the name ",(0,n.kt)("inlineCode",{parentName:"p"},"Example"),". The name does not need to be the same as the name of your domain, but for simplicity we do so here. To give credence to this name, they may want to add a DNS claim. They can do this by adding a DNS claim to their metadata, claiming the URL ",(0,n.kt)("inlineCode",{parentName:"p"},"example.com"),", while simultaneously adding a ",(0,n.kt)("inlineCode",{parentName:"p"},"TXT Record")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"example.com")," that includes this claim signed by their group address. Let\u2019s go through this example in detail, using a ",(0,n.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," contract as our validator group."),(0,n.kt)("p",null,"Assuming you have already deployed your Validator Group via a ",(0,n.kt)("inlineCode",{parentName:"p"},"ReleaseGold")," contract, you will need these environment variables set to claim your domain."),(0,n.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Variable"),(0,n.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CELO_VALIDATOR_GROUP_RG_ADDRESS"),(0,n.kt)("td",{parentName:"tr",align:null},"The ",(0,n.kt)("inlineCode",{parentName:"td"},"ReleaseGold")," contract address for the Validator Group")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CELO_VALIDATOR_RG_ADDRESS"),(0,n.kt)("td",{parentName:"tr",align:null},"The ",(0,n.kt)("inlineCode",{parentName:"td"},"ReleaseGold")," contract address for the Validator")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CELO_VALIDATOR_SIGNER_ADDRESS"),(0,n.kt)("td",{parentName:"tr",align:null},"The address of the validator signer authorized by the validator account")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CELO_VALIDATOR_GROUP_SIGNER_ADDRESS"),(0,n.kt)("td",{parentName:"tr",align:null},"The address of the validator (group) signer authorized by the validator account")))),(0,n.kt)("p",null,"First let's create the metadata file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# On your local machine\ncelocli account:create-metadata ./group_metadata.json --from $CELO_VALIDATOR_GROUP_RG_ADDRESS\n")),(0,n.kt)("p",null,"Now we can set the group's name:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# On your local machine\ncelocli releasegold:set-account --contract $CELO_VALIDATOR_GROUP_RG_ADDRESS --property name --value Example.com\n")),(0,n.kt)("p",null,"Now we can generate a claim for the domain associated with this name ",(0,n.kt)("inlineCode",{parentName:"p"},"example.com"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# On your local machine\ncelocli account:claim-domain ./group_metadata.json --domain example.com --from $CELO_VALIDATOR_GROUP_SIGNER_ADDRESS\n")),(0,n.kt)("p",null,"This will output your claim signed under the provided signer address. This output should then be recorded via a ",(0,n.kt)("inlineCode",{parentName:"p"},"TXT Record")," on your desired domain, so in this case we should add a ",(0,n.kt)("inlineCode",{parentName:"p"},"TXT Record")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"example.com")," with this signed output."),(0,n.kt)("p",null,"You can now view and simultaneously verify the claims on your metadata:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# On your local machine\ncelocli account:show-metadata ./group_metadata.json\n")),(0,n.kt)("p",null,"Take a look at the output and verify these claims look right to you. This tool also automatically verifies the signatures on claims you've added."),(0,n.kt)("p",null,"Once that record is added, we can then register this metadata under on our ",(0,n.kt)("inlineCode",{parentName:"p"},"Validator Group")," account for external validation."),(0,n.kt)("p",null,"Before we do this, you may also want to associate some validators with this domain. The benefit of doing this is to extend your DNS claim to your validators as well, meaning your validators can also verifiably be associated with your domain. You could also do this by adding individual DNS claims for each validator, but this would require separate ",(0,n.kt)("inlineCode",{parentName:"p"},"TXT Record"),"s for each, which is inconvenient. Instead, you can simply associate the group and validators together under a single claim."),(0,n.kt)("p",null,"In order to do so, you will need to claim each validator address on your group's metadata. You will also need to claim your group account on each of your validator's metadata to complete the association. We will run through an example of a single validator now:"),(0,n.kt)("p",null,"First lets claim the ",(0,n.kt)("inlineCode",{parentName:"p"},"validator")," address from the ",(0,n.kt)("inlineCode",{parentName:"p"},"group")," account:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# On your local machine\ncelocli account:claim-account ./group_metadata.json --address $CELO_VALIDATOR_RG_ADDRESS --from $CELO_VALIDATOR_GROUP_SIGNER_ADDRESS\n")),(0,n.kt)("p",null,"Now let's submit the corresponding claim from the ",(0,n.kt)("inlineCode",{parentName:"p"},"validator")," account on the ",(0,n.kt)("inlineCode",{parentName:"p"},"group")," account (note: if you followed the directions to set up the attestation service, you may have already registered metadata for your validator. If that is the case, skip the steps to create the ",(0,n.kt)("inlineCode",{parentName:"p"},"validator"),"'s metadata and just add the account claim.)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# On your local machine\ncelocli account:create-metadata ./validator_metadata.json --from $CELO_VALIDATOR_RG_ADDRESS\ncelocli account:claim-account ./validator_metadata.json --address $CELO_VALIDATOR_GROUP_RG_ADDRESS --from $CELO_VALIDATOR_SIGNER_ADDRESS\n")),(0,n.kt)("p",null,"And then host both metadata files somewhere reachable via HTTP. You can use a service like gist.github.com. Create two gists, each with the contents of the respective files and then click on the Raw buttton to receive the permalinks to the machine-readable file. If you had already registered a metadata URL for your ",(0,n.kt)("inlineCode",{parentName:"p"},"validator")," you just need to update that registerd gist, so you can skip the ",(0,n.kt)("inlineCode",{parentName:"p"},"validator")," metadata registration below. "),(0,n.kt)("p",null,"Now we can register these URLs on each account:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# On your local machine\ncelocli releasegold:set-account --contract $CELO_VALIDATOR_GROUP_RG_ADDRESS --property metaURL --value <VALIDATOR_GROUP_METADATA_URL>\ncelocli releasegold:set-account --contract $CELO_VALIDATOR_RG_ADDRESS --property metaURL --value <VALIDATOR_METADATA_URL>\n")),(0,n.kt)("p",null,"If everything goes well users should be able to see your claims by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# On your local machine\ncelocli account:get-metadata $CELO_VALIDATOR_GROUP_RG_ADDRESS\n")),(0,n.kt)("p",null,"If everything went well, you should now have your group and validator associated with each other and with your associated domain!"))}p.isMDXComponent=!0}}]);