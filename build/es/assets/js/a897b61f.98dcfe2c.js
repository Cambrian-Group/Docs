"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[4946],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83564:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var i=n(83117),a=n(80102),o=(n(67294),n(3905)),r=["components"],l={title:"Celo Attestation Service Release Process",description:"Details of the release process for updating the attestation service on the Celo platform."},s="Attestation Service Release Process",c={unversionedId:"community/release-process/attestation-service",id:"community/release-process/attestation-service",title:"Celo Attestation Service Release Process",description:"Details of the release process for updating the attestation service on the Celo platform.",source:"@site/docs/community/release-process/attestation-service.md",sourceDirName:"community/release-process",slug:"/community/release-process/attestation-service",permalink:"/es/community/release-process/attestation-service",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{title:"Celo Attestation Service Release Process",description:"Details of the release process for updating the attestation service on the Celo platform."},sidebar:"contributors",previous:{title:"Celo Release Process for CeloCLI and ContractKit",permalink:"/es/community/release-process/base-cli-contractkit-dappkit-utils"},next:{title:"Celo Alfajores Testnet Disclaimer",permalink:"/es/important-information/alfajores-testnet-disclaimer"}},d=[{value:"Versioning",id:"versioning",children:[],level:2},{value:"Documentation",id:"documentation",children:[],level:2},{value:"Identifying releases",id:"identifying-releases",children:[{value:"Git branches",id:"git-branches",children:[],level:3},{value:"Git tags",id:"git-tags",children:[],level:3},{value:"Docker tags",id:"docker-tags",children:[],level:3},{value:"Signatures",id:"signatures",children:[],level:3}],level:2},{value:"Build process",id:"build-process",children:[{value:"Docker images",id:"docker-images",children:[],level:3}],level:2},{value:"Testing",id:"testing",children:[],level:2},{value:"Promotion process",id:"promotion-process",children:[{value:"Source control",id:"source-control",children:[],level:3},{value:"Distribution",id:"distribution",children:[],level:3},{value:"Emergency Patches",id:"emergency-patches",children:[],level:3}],level:2},{value:"Vulnerability Disclosure",id:"vulnerability-disclosure",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"attestation-service-release-process"},"Attestation Service Release Process"),(0,o.kt)("p",null,"Details of the release process for updating the attestation service on the Celo platform."),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This release process is currently in use."))),(0,o.kt)("h2",{id:"versioning"},"Versioning"),(0,o.kt)("p",null,"Releases of Attestation Service are made as needed. Releases are numbered according to semantic versioning, as described at ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org"},"semver.org"),"."),(0,o.kt)("p",null,"Development builds should be identified with ",(0,o.kt)("inlineCode",{parentName:"p"},"-dev"),", and only one commit should exist with a released version ",(0,o.kt)("inlineCode",{parentName:"p"},"x.y.z")," for any ",(0,o.kt)("inlineCode",{parentName:"p"},"(x, y, z)"),"."),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"Documentation is maintained in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celo-org/docs"},"celo-org/docs")," repo and is hosted on ",(0,o.kt)("a",{parentName:"p",href:"/validator-guide/attestation-service"},"docs.celo.org"),"."),(0,o.kt)("h2",{id:"identifying-releases"},"Identifying releases"),(0,o.kt)("h3",{id:"git-branches"},"Git branches"),(0,o.kt)("p",null,"Development is done on the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch, which corresponds to the next major or minor version. Changes to be included in a patch release of an existing minor version are cherry-picked to that existing release branch."),(0,o.kt)("h3",{id:"git-tags"},"Git tags"),(0,o.kt)("p",null,"Each release should be ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/releases"},"created on Github")," and tagged with the version number, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"attestation-service-vX.Y.Z"),". Each release should include a summary of the release contents, including links to pull requests and issues with detailed description of any notable changes."),(0,o.kt)("p",null,"Tags should be signed and can be verified with the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git verify-tag attestation-service-vX.Y.Z\n")),(0,o.kt)("p",null,"On Github, each release tag should have attached signatures that can be used to verify the Docker images."),(0,o.kt)("h3",{id:"docker-tags"},"Docker tags"),(0,o.kt)("p",null,"Each Docker image is tagged with ",(0,o.kt)("inlineCode",{parentName:"p"},"attestation-service-<commithash>"),". Just as a Git tag immutably points to a commit hash, the Docker tag should immutably point to an image hash."),(0,o.kt)("p",null,"In addition, each Docker image corresponding to a released version should be tagged with ",(0,o.kt)("inlineCode",{parentName:"p"},"attestation-service-vX.Y.Z"),"."),(0,o.kt)("p",null,"The latest image qualified for deployment to various networks are also tagged as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Alfajores: ",(0,o.kt)("inlineCode",{parentName:"li"},"attestation-service-alfajores")),(0,o.kt)("li",{parentName:"ul"},"Baklava: ",(0,o.kt)("inlineCode",{parentName:"li"},"attestation-service-baklava")),(0,o.kt)("li",{parentName:"ul"},"Mainnet: ",(0,o.kt)("inlineCode",{parentName:"li"},"attestation-service-mainnet"))),(0,o.kt)("h3",{id:"signatures"},"Signatures"),(0,o.kt)("p",null,"Artifacts produced by this build process (e.g. tags, Docker images) will be signed by a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/blob/master/developer_key_publishing.md"},"core developer key"),"."),(0,o.kt)("p",null,"Public keys for core developers are hosted on celo.org and can be imported to ",(0,o.kt)("inlineCode",{parentName:"p"},"gpg")," with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --auto-key-locate wkd --locate-keys $EMAIL\n")),(0,o.kt)("p",null,"Currently hosted core developer keys used for Attestation Service releases include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"mailto:tim@clabs.co"},"tim@clabs.co"))),(0,o.kt)("h2",{id:"build-process"},"Build process"),(0,o.kt)("h3",{id:"docker-images"},"Docker images"),(0,o.kt)("p",null,"Docker images are built automatically with ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/cloud-build"},"Google Cloud Build")," upon pushes to ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," and all release branches. Automated builds will be tagged in ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/container-registry"},"Google Container Registry")," with the corresponding commit hash."),(0,o.kt)("p",null,"A signature should be produced over the image automatically built at the corresponding commit hash and included with the Github release."),(0,o.kt)("p",null,"Release image signatures can be verified with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker save $(docker image inspect us.gcr.io/celo-testnet/celo-monorepo:attestation-service-vX.Y.Z -f '{{ .Id }}') | gpg --verify attestation-service-vX.Y.Z.docker.asc -\n")),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"As well as monorepo CI tests, all releases are expected to go through manual testing as needed to verify security properties, accuracy of documentation, and compatibility with deployed and anticipated versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"celocli")," and wallets including Valora. Releases currently involve coordinating with Valora to run the verification e2e tests in CI."),(0,o.kt)("h2",{id:"promotion-process"},"Promotion process"),(0,o.kt)("h3",{id:"source-control"},"Source control"),(0,o.kt)("p",null,"Patch releases should be constructed by cherry-picking all included commits from ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"release/attestation-service/x.y")," branch, if necessary created from the ",(0,o.kt)("inlineCode",{parentName:"p"},"attestation-service-vX.Y.Z")," tag of the most recent major or minor release. The first commit of this process should change the version number encoded in the source from ",(0,o.kt)("inlineCode",{parentName:"p"},"x.y.z")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"x.y.z+1-dev")," and the final commit should change the version number to ",(0,o.kt)("inlineCode",{parentName:"p"},"x.y.z+1"),"."),(0,o.kt)("p",null,"Major and minor releases should be constructed by pushing a commit to the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," branch to change the encoded version number from ",(0,o.kt)("inlineCode",{parentName:"p"},"x.y.z-dev")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"x.y.z"),". A ",(0,o.kt)("inlineCode",{parentName:"p"},"attestation-service-vX.Y.Z")," tag should be created at this commit which uniquely references one commit; release notes should be published alongside this. The next commit should change the version number from ",(0,o.kt)("inlineCode",{parentName:"p"},"x.y.z")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"x.y+1.0-dev"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"x+1.0.0-dev")," if the next planned release is a major release."),(0,o.kt)("h3",{id:"distribution"},"Distribution"),(0,o.kt)("p",null,"Distribution of an image follows this schedule:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"Date"),(0,o.kt)("td",null,"Action")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"T-1w"),(0,o.kt)("td",null,(0,o.kt)("ol",null,(0,o.kt)("li",null,"Deploy release candidate build to Alfajores testnet"),(0,o.kt)("li",null,"Test manually and via e2e verification tests")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"T"),(0,o.kt)("td",null,(0,o.kt)("ol",null,(0,o.kt)("li",null,"Confirm Valora production and testing builds against Alfajores experience no issues and that e2e verification tests complete successfully"),(0,o.kt)("li",null,"Publish the release notes and tag the relevant commit on GitHub"),(0,o.kt)("li",null,"Tag released Docker image with ",(0,o.kt)("code",null,"attestation-service-alfajores"),", ",(0,o.kt)("code",null,"attestation-service-baklava"),", ",(0,o.kt)("code",null,"attestation-service-mainnet"),", and ",(0,o.kt)("code",null,"attestation-service-vX.Y.Z")," tags (removing tags from other releases)"),(0,o.kt)("li",null,"Inform the community of the new release via Discord and the Celo Forum")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"T+1w onwards"),(0,o.kt)("td",null,(0,o.kt)("ol",null,(0,o.kt)("li",null,"Confirm Mainnet services have upgraded without issues"),(0,o.kt)("li",null,"Continue monitoring dashboards for user issues"))))),(0,o.kt)("h3",{id:"emergency-patches"},"Emergency Patches"),(0,o.kt)("p",null,"Bugs which affect the security, stability, or core functionality of the Celo identity protocol or prevent new users onboarding to wallets including Valora may need to be released outside the standard release cycle. In this case, an emergency patch release should be created on top of all supported minor releases which contains the minimal change and corresponding test for the fix."),(0,o.kt)("p",null,"If the issue is not exploitable, release notes should describe the issue in detail and the image should be distributed publicly."),(0,o.kt)("p",null,"If the issue is exploitable and mitigations are not readily available, a patch should be prepared privately and signed binaries should be distributed from private commits. Establishing trust is key to pushing out the fix. An audit from a reputable third party may be contracted to verify the release to help earn that trust."),(0,o.kt)("h2",{id:"vulnerability-disclosure"},"Vulnerability Disclosure"),(0,o.kt)("p",null,"Vulnerabilities in Attestation Service releases should be disclosed according to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-monorepo/blob/master/SECURITY.md"},"security policy"),"."))}p.isMDXComponent=!0}}]);