"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[7353],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),h=l,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59157:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(83117),l=n(80102),i=(n(67294),n(3905)),o=["components"],r={title:"Celo Blockchain Client Release Process",description:"Details of the release process for updating the blockchain client on the Celo platform."},s="Blockchain Client Release Process",c={unversionedId:"community/release-process/blockchain-client",id:"community/release-process/blockchain-client",title:"Celo Blockchain Client Release Process",description:"Details of the release process for updating the blockchain client on the Celo platform.",source:"@site/docs/community/release-process/blockchain-client.md",sourceDirName:"community/release-process",slug:"/community/release-process/blockchain-client",permalink:"/community/release-process/blockchain-client",editUrl:"https://github.com/celo-org/docs/edit/main/docs/community/release-process/blockchain-client.md",tags:[],version:"current",frontMatter:{title:"Celo Blockchain Client Release Process",description:"Details of the release process for updating the blockchain client on the Celo platform."},sidebar:"contributors",previous:{title:"Celo Smart Contracts Release Process",permalink:"/community/release-process/smart-contracts"},next:{title:"Celo Release Process for CeloCLI and ContractKit",permalink:"/community/release-process/base-cli-contractkit-dappkit-utils"}},u=[{value:"Versioning",id:"versioning",children:[{value:"Signatures",id:"signatures",children:[],level:3}],level:2},{value:"Documentation",id:"documentation",children:[],level:2},{value:"Identifying releases:",id:"identifying-releases",children:[{value:"Git branches",id:"git-branches",children:[],level:3},{value:"Git tags",id:"git-tags",children:[],level:3},{value:"Docker tags",id:"docker-tags",children:[],level:3}],level:2},{value:"Build process",id:"build-process",children:[{value:"Binaries",id:"binaries",children:[],level:3},{value:"Docker images",id:"docker-images",children:[],level:3}],level:2},{value:"Testing",id:"testing",children:[],level:2},{value:"Promotion process",id:"promotion-process",children:[{value:"Source control",id:"source-control",children:[],level:3},{value:"Distribution",id:"distribution",children:[],level:3},{value:"Emergency Patches",id:"emergency-patches",children:[],level:3}],level:2},{value:"Vulnerability Disclosure",id:"vulnerability-disclosure",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Dependents",id:"dependents",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"blockchain-client-release-process"},"Blockchain Client Release Process"),(0,i.kt)("p",null,"Details of the release process for updating the blockchain client on the Celo platform."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"versioning"},"Versioning"),(0,i.kt)("p",null,"Releases of celo-blockchain are numbered according to semantic versioning, as described at ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org"},"semver.org"),"."),(0,i.kt)("p",null,"New releases of celo-blockchain can be expected as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Major releases: approximately yearly"),(0,i.kt)("li",{parentName:"ul"},"Minor releases: approximately 4 times a year"),(0,i.kt)("li",{parentName:"ul"},"Patch releases: as needed")),(0,i.kt)("p",null,"All builds are identified as ",(0,i.kt)("inlineCode",{parentName:"p"},"unstable")," (a development build) or ",(0,i.kt)("inlineCode",{parentName:"p"},"stable")," (a commit released as a particular version number). There should only ever exist one commit with a version ",(0,i.kt)("inlineCode",{parentName:"p"},"x.y.z-stable")," for any ",(0,i.kt)("inlineCode",{parentName:"p"},"(x, y, z)"),"."),(0,i.kt)("h3",{id:"signatures"},"Signatures"),(0,i.kt)("p",null,"Artifacts produced by this build process (e.g. tags, binaries, Docker images) will be signed. Signatures are produced using any one of the core developer keys listed below."),(0,i.kt)("p",null,"Public keys for corek developers are hosted on celo.org and can be imported to ",(0,i.kt)("inlineCode",{parentName:"p"},"gpg")," with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --auto-key-locate wkd --locate-keys $EMAIL\n")),(0,i.kt)("p",null,"Currently hosted core developer keys include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mailto:joshua@clabs.co"},"joshua@clabs.co")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mailto:mariano@clabs.co"},"mariano@clabs.co")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mailto:or@clabs.co"},"or@clabs.co")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"mailto:victor@clabs.co"},"victor@clabs.co"))),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"Documentation for client features, such as APIs and commands, are maintained in the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," directory within the ",(0,i.kt)("inlineCode",{parentName:"p"},"celo-blockchain")," repository. Documentation on protocol features, such as the proof-of-stake protocol, is hosted on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.celo.org/celo-codebase/protocol"},"docs.celo.org"),"."),(0,i.kt)("h2",{id:"identifying-releases"},"Identifying releases:"),(0,i.kt)("h3",{id:"git-branches"},"Git branches"),(0,i.kt)("p",null,"Each minor version of celo-blockchain has its own \u201crelease branch\u201d, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"release/1.0"),"."),(0,i.kt)("p",null,"Development is done on the ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," branch, which corresponds to the next major or minor version. Changes to be included in a patch release of an existing minor version are cherry-picked to that existing release branch."),(0,i.kt)("h3",{id:"git-tags"},"Git tags"),(0,i.kt)("p",null,"All releases should be tagged with the version number, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"vX.Y.Z"),". Each release should include a summary of the release contents, including links to pull requests and issues with detailed description of any notable changes."),(0,i.kt)("p",null,"Tags should be signed and can be verified with the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git verify-tag vX.Y.Z\n")),(0,i.kt)("p",null,"On Github, each release tag should have attached the Geth binaries for supported platforms, along with signatures that can be used to verify the binary and Docker images."),(0,i.kt)("h3",{id:"docker-tags"},"Docker tags"),(0,i.kt)("p",null,"Each released Docker image should should be tagged with it\u2019s version number such that for release ",(0,i.kt)("inlineCode",{parentName:"p"},"x.y.z"),", the image should have tags ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"x.y"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"x.y.z"),", with the first two tags potentially being moved from a previous image. Just as a Git tag ",(0,i.kt)("inlineCode",{parentName:"p"},"x.y.z")," immutably points to a commit hash, the Docker tag, ",(0,i.kt)("inlineCode",{parentName:"p"},"x.y.z")," should immutably point to an image hash."),(0,i.kt)("h2",{id:"build-process"},"Build process"),(0,i.kt)("h3",{id:"binaries"},"Binaries"),(0,i.kt)("p",null,"Binaries for common platforms are built automatically with ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/cloud-build"},"Google Cloud Build")," upon pushes to ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," and all release branches."),(0,i.kt)("p",null,"A signature should be produced over the binary automatically built at the corresponding commit hash and included in the Github release."),(0,i.kt)("p",null,"Release binary signatures can be verified with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --verify celo-blockchain-vX.Y.Z-stable.tar.gz.asc celo-blockchain-vX.Y.Z-stable.tar.gz\n")),(0,i.kt)("h3",{id:"docker-images"},"Docker images"),(0,i.kt)("p",null,"Docker images are built automatically with ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/cloud-build"},"Google Cloud Build")," upon pushes to ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," and all release branches. Automated builds will be tagged in ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/container-registry"},"Google Container Registry")," with the corresponding commit hash."),(0,i.kt)("p",null,"A signature should be produced over the image automatically built at the corresponding commit hash and included with the Github release."),(0,i.kt)("p",null,"Release image signatures can be verified with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker save $(docker image inspect us.gcr.io/celo-org/geth:X.Y.Z -f '{{ .Id }}') | gpg --verify celo-blockchain-vX.Y.Z.docker.asc -\n")),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"All builds of ",(0,i.kt)("inlineCode",{parentName:"p"},"celo-blockchain")," are automatically tested for performance and backwards compatibility in CI. Any regressions in these tests should be considered a blocker for a release."),(0,i.kt)("p",null,"Minor and major releases are expected to go through additional rounds of manual testing as needed to verify behavior under stress conditions, such as a network with faulty nodes, and poor network connectivity."),(0,i.kt)("h2",{id:"promotion-process"},"Promotion process"),(0,i.kt)("h3",{id:"source-control"},"Source control"),(0,i.kt)("p",null,"Patch releases should be constructed by cherry-picking all included commits from ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"release/x.y")," branch. The first commit of this process should change the version number encoded in the source from ",(0,i.kt)("inlineCode",{parentName:"p"},"x.y.z-stable")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"x.y.z+1-unstable")," and the final commit should change the version number to ",(0,i.kt)("inlineCode",{parentName:"p"},"x.y.z+1-stable"),"."),(0,i.kt)("p",null,"Major and minor releases should be constructed by pushing a commit to the ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," branch to change the encoded version number from ",(0,i.kt)("inlineCode",{parentName:"p"},"x.y.z-unstable")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"x.y.z-stable"),". A ",(0,i.kt)("inlineCode",{parentName:"p"},"release/x.y")," branch should be created from this commit.  The next commit must change the version number from ",(0,i.kt)("inlineCode",{parentName:"p"},"x.y.z-stable")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"x.y+1.0-unstable"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"x+1.0.0-unstable")," if the next planned release is a major release."),(0,i.kt)("p",null,"Only one commit should ever have a \u201cstable\u201d tag at any given version number. When that commit is created, a tag should be added along with release notes. Once the tag is published it should not be reused for any further release or changes."),(0,i.kt)("h3",{id:"distribution"},"Distribution"),(0,i.kt)("p",null,"Distribution of an image should occur along the following schedule:"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Date"),(0,i.kt)("td",null,"Action")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"T"),(0,i.kt)("td",null,(0,i.kt)("ol",null,(0,i.kt)("li",null,"Publish the Git tag and signed release artifacts."),(0,i.kt)("li",null,"Communicate T+1w Baklava upgrade date."),(0,i.kt)("li",null,"Tag released Docker image with ",(0,i.kt)("code",null,"baklava"),".")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"T+1w"),(0,i.kt)("td",null,(0,i.kt)("ol",null,(0,i.kt)("li",null,"Confirm Baklava users have upgraded without issues"),(0,i.kt)("li",null,"If release introduces a hard fork"),(0,i.kt)("ol",null,(0,i.kt)("li",null,"Ensure at least a quorum of the validator set has upgraded"),(0,i.kt)("li",null,"Submit governance proposal to increment minimum client version")),(0,i.kt)("li",null,"Communicate T+2w Alfajores upgrade date"),(0,i.kt)("li",null,"Tag released Docker image with ",(0,i.kt)("code",null,"alfajores"))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"T+2w"),(0,i.kt)("td",null,(0,i.kt)("ol",null,(0,i.kt)("li",null,"Confirm Alfajores users have upgraded without issues"),(0,i.kt)("li",null,"If release introduces a hard fork"),(0,i.kt)("ol",null,(0,i.kt)("li",null,"Ensure at least a quorum of the validator set has upgraded"),(0,i.kt)("li",null,"Submit governance proposal to increment minimum client version ")),(0,i.kt)("li",null,"Communicate T+3w Mainnet upgrade date"),(0,i.kt)("li",null,"Tag released Docker image with ",(0,i.kt)("code",null,"mainnet")," and ",(0,i.kt)("code",null,"latest"))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"T+3w"),(0,i.kt)("td",null,(0,i.kt)("ol",null,(0,i.kt)("li",null,"Confirm Mainnet users have upgraded without issues"),(0,i.kt)("li",null,"If release introduces a hard fork"),(0,i.kt)("ol",null,(0,i.kt)("li",null,"Ensure at least a quorum of the validator set has upgraded"),(0,i.kt)("li",null,"Submit governance proposal to increment minimum client version")))))),(0,i.kt)("h3",{id:"emergency-patches"},"Emergency Patches"),(0,i.kt)("p",null,"Bugs which affect the security, stability, or core functionality of the network may need to be released outside the standard release cycle. In this case, an emergency patch release should be created on top of all supported minor releases which contains the minimal change and corresponding test for the fix."),(0,i.kt)("p",null,"If the issue is not exploitable, release notes should describe the issue in detail and the image should be distributed publicly. If network stability is at risk, a Governance proposal may be submitted to increment the minimum client version."),(0,i.kt)("p",null,"If the issue is exploitable and mitigations are not readily available, a patch should be prepared privately and signed binaries should be distributed from private commits. Establishing trust is key to pushing out the fix. An audit from a reputable third party may be contracted to verify the release to help earn that trust. A hotfix should be proposed to raise the minimum client version number to the patched release and then patch details made public."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Pushing an upgrade with this process will be disruptive to any nodes that do not upgrade quickly. It should ",(0,i.kt)("em",{parentName:"p"},"only")," be used when the circumstances require it.")),(0,i.kt)("h2",{id:"vulnerability-disclosure"},"Vulnerability Disclosure"),(0,i.kt)("p",null,"Vulnerabilities in ",(0,i.kt)("inlineCode",{parentName:"p"},"celo-blockchain")," releases should be disclosed according to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celo-org/celo-blockchain/blob/master/SECURITY.md"},"security policy"),"."),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"None"),(0,i.kt)("h2",{id:"dependents"},"Dependents"),(0,i.kt)("p",null,"None"))}p.isMDXComponent=!0}}]);