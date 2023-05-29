"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[9912],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53326:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return h}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),l=["components"],c={title:"Deploy a Contract on Celo (local node)",description:"How to deploy your own smart contracts onto Celo from a local node.",slug:"/developer-guide/start/hellocontracts",authors:[{name:"Josh Crites",title:"Developer Relations, cLabs",url:"https://github.com/critesjosh",image_url:"https://github.com/critesjosh.png"}],tags:["smart contract"],image:"https://dl.airtable.com/.attachmentThumbnails/a7e530eb72ac8f30f37c0a3447ef0e7d/72e944da",hide_table_of_contents:!1},i="Deploy a Contract (Local Node)",s={permalink:"/blog/developer-guide/start/hellocontracts",source:"@site/blog/2022-01-02-hellocontracts.md",title:"Deploy a Contract on Celo (local node)",description:"How to deploy your own smart contracts onto Celo from a local node.",date:"2022-01-02T00:00:00.000Z",formattedDate:"January 2, 2022",tags:[{label:"smart contract",permalink:"/blog/tags/smart-contract"}],readingTime:2.776666666666667,truncated:!0,authors:[{name:"Josh Crites",title:"Developer Relations, cLabs",url:"https://github.com/critesjosh",image_url:"https://github.com/critesjosh.png",imageURL:"https://github.com/critesjosh.png"}],prevItem:{title:"Deploy and Interact with Contracts (Remotely)",permalink:"/blog/developer-guide/start/hello-contract-remote-node"},nextItem:{title:"Sending CELO & Stable Assets",permalink:"/blog/developer-guide/start/hellocelo"}},u={authorsImageUrls:[void 0]},p=[{value:"Setup",id:"setup",children:[],level:2},{value:"Hello World!",id:"hello-world",children:[],level:2},{value:"Deploy locally",id:"deploy-locally",children:[],level:2},{value:"Deploy to Alfajores",id:"deploy-to-alfajores",children:[{value:"Pull the Celo Docker image",id:"pull-the-celo-docker-image",children:[],level:3},{value:"Set up a data directory",id:"set-up-a-data-directory",children:[],level:3},{value:"Create an account and get its address",id:"create-an-account-and-get-its-address",children:[],level:3},{value:"Start the node",id:"start-the-node",children:[],level:3},{value:"Deploy the contract",id:"deploy-the-contract",children:[],level:3}],level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How to deploy your own smart contracts onto a Celo local node."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"As Celo is fully EVM compliant, we inherit the rich developer ecosystem and tooling of the Ethereum community. We will be deploying a typical hello world smart contract onto the Alfajores testnet with typical Ethereum tools like Truffle and Ganache."))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"This guide assumes that you have a basic Node/",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/get-npm"},"NPM")," setup (Node.js v12.x). If so, you can install truffle with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install -g truffle\n")),(0,r.kt)("p",null,"In your desired project folder, intiialize a new truffle project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"truffle init\n")),(0,r.kt)("h2",{id:"hello-world"},"Hello World!"),(0,r.kt)("p",null,"Let's add a contract with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"truffle create contract HelloWorld\n")),(0,r.kt)("p",null,"Our contract will just store a name for now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity >=0.5.0 <0.7.0;\n\ncontract HelloWorld {\n  string name = 'Celo';\n\n  function getName() public view returns (string memory) {\n    return name;\n  }\n\n  function setName(string calldata newName) external {\n    name = newName;\n  }\n}\n")),(0,r.kt)("h2",{id:"deploy-locally"},"Deploy locally"),(0,r.kt)("p",null,"Let's create a migration to deploy the contract. For that, we need to create a file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"migrations")," folder named ",(0,r.kt)("inlineCode",{parentName:"p"},"2_deploy_helloworld.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var HelloWorld = artifacts.require("HelloWorld");\n\nmodule.exports = function (deployer) {\n  deployer.deploy(HelloWorld);\n};\n')),(0,r.kt)("p",null,"To be able to actually deploy it though, we need a blockchain. For local development and testing, you can use our fork of ganache:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install -g @celo/ganache-cli\n")),(0,r.kt)("p",null,"And then start ganache with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ganache-cli --port 7545\n")),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"truffle-config.js"),", you'll want to add your local test network under networks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  networks: {\n    test: {\n      host: "127.0.0.1",\n      port: 7545,\n      network_id: "*"\n    }\n  }\n')),(0,r.kt)("p",null,"Then you can deploy your contract to your local network first:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"truffle migrate --network test\n")),(0,r.kt)("p",null,"You can interact with your contract by running the truffle console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"truffle console --network test\ntruffle(test)> contract = await HelloWorld.deployed()\nundefined\ntruffle(test)> contract.getName()\n'Celo'\ntruffle(test)> contract.setName('MyName')\n{ tx:\n...\ntruffle(test)> contract.getName()\n'MyName'\n")),(0,r.kt)("h2",{id:"deploy-to-alfajores"},"Deploy to Alfajores"),(0,r.kt)("p",null,"When you are ready to deploy your contract to Alfajores, you'll need a Celo client connected to the testnet. We'll run a node somewhat similarly to the ",(0,r.kt)("a",{parentName:"p",href:"/getting-started/baklava-testnet/running-a-full-node-in-baklava"},"Instructions of running a full node on Baklava"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CELO_IMAGE=us.gcr.io/celo-org/geth:alfajores\n")),(0,r.kt)("h3",{id:"pull-the-celo-docker-image"},"Pull the Celo Docker image"),(0,r.kt)("p",null,"We're going to use a Docker image containing the Celo node software in this tutorial."),(0,r.kt)("p",null,"If you are re-running these instructions, the Celo Docker image may have been updated, and it's important to get the latest version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull $CELO_IMAGE\n")),(0,r.kt)("h3",{id:"set-up-a-data-directory"},"Set up a data directory"),(0,r.kt)("p",null,"First, create the directory that will store your node's configuration and its copy of the blockchain. This directory can be named anything you'd like, but here's a default you can use. The commands below create a directory and then navigate into it. The rest of the steps assume you are running the commands from inside this directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir celo-data-dir\ncd celo-data-dir\n")),(0,r.kt)("h3",{id:"create-an-account-and-get-its-address"},"Create an account and get its address"),(0,r.kt)("p",null,"In this step, you'll create an account on the network. If you've already done this and have an account address, you can skip this and move on to configuring your node."),(0,r.kt)("p",null,"Run the command to create a new account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v $PWD:/root/.celo --rm -it $CELO_IMAGE account new\n")),(0,r.kt)("p",null,"It will prompt you for a passphrase, ask you to confirm it, and then will output your account address: ",(0,r.kt)("inlineCode",{parentName:"p"},"Address: {<YOUR-ACCOUNT-ADDRESS>")),(0,r.kt)("p",null,"Save this address to an environment variables, so that you can reference it below (don't include the braces):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CELO_ACCOUNT_ADDRESS=<YOUR-ACCOUNT-ADDRESS>\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: this environment variable will only persist while you have this terminal window open. If you want this environment variable to be available in the future, you can add it to your `~/.bash_profile")),(0,r.kt)("h3",{id:"start-the-node"},"Start the node"),(0,r.kt)("p",null,"This command specifies the settings needed to run the node, and gets it started."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name celo-ultralight-node -d --restart unless-stopped -p 127.0.0.1:8545:8545 -v $PWD:/root/.celo $CELO_IMAGE --verbosity 3  --syncmode lightest --http --http.addr 0.0.0.0 --http.api eth,net,web3,debug,admin,personal --etherbase $CELO_ACCOUNT_ADDRESS --alfajores --datadir=/root/.celo --allow-insecure-unlock\n")),(0,r.kt)("p",null,"You can follow the logs with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f celo-ultralight-node\n")),(0,r.kt)("p",null,"After a few seconds of syncing (with ",(0,r.kt)("a",{parentName:"p",href:"/celo-codebase/protocol/consensus/ultralight-sync"},"Celo's ultralight sync"),"), you should be able to query the balance of your account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec celo-ultralight-node geth attach --exec 'eth.getBalance(\"<YOUR-ACCOUNT-ADDRESS>\")'\n")),(0,r.kt)("p",null,"If you go to our ",(0,r.kt)("a",{parentName:"p",href:"https://celo.org/build/faucet"},"Alfajores Faucet Page"),", you should be able to faucet your account some CELO and see your balance increase with the above command."),(0,r.kt)("h3",{id:"deploy-the-contract"},"Deploy the contract"),(0,r.kt)("p",null,"We are finally ready to deploy the contract. First let's unlock the account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker exec celo-ultralight-node geth attach --exec \'personal.unlockAccount("<YOUR-ACCOUNT-ADDRESS>", "<YOUR-ACCOUNT-PASSWORD>")\'\n')),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," reference your node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'alfajores: {\n  host: "127.0.0.1",\n  port: 8545,\n  network_id: 44787\n}\n')),(0,r.kt)("p",null,"Then you should be able to deploy your contract with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"truffle migrate --network alfajores\n")),(0,r.kt)("p",null,"You can verify your contract deployment on ",(0,r.kt)("a",{parentName:"p",href:"https://alfajores-blockscout.celo-testnet.org/"},"Blockscout"),", as well as interact with your new contract with the ",(0,r.kt)("inlineCode",{parentName:"p"},"truffle console --network alfajores"),". Congratulations!"),(0,r.kt)("p",null,"As you can see, all the goodies from Ethereum apply to Celo, so virtually all tutorials and other content should be easily translatable to Celo. Check out ",(0,r.kt)("a",{parentName:"p",href:"https://celo.org/build"},"https://celo.org/build")," for more resources!"))}h.isMDXComponent=!0}}]);