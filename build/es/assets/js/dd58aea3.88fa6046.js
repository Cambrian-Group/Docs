"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[588],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},92124:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var n=a(83117),o=a(80102),i=(a(67294),a(3905)),r=["components"],l={title:"Run a Baklava Full Node",description:"How to get a full node running on the Baklava Network using a prebuilt Docker image."},s="Run a Baklava Full Node",d={unversionedId:"getting-started/baklava-testnet/running-a-full-node-in-baklava",id:"getting-started/baklava-testnet/running-a-full-node-in-baklava",title:"Run a Baklava Full Node",description:"How to get a full node running on the Baklava Network using a prebuilt Docker image.",source:"@site/docs/getting-started/baklava-testnet/running-a-full-node-in-baklava.md",sourceDirName:"getting-started/baklava-testnet",slug:"/getting-started/baklava-testnet/running-a-full-node-in-baklava",permalink:"/es/getting-started/baklava-testnet/running-a-full-node-in-baklava",editUrl:"",tags:[],version:"current",frontMatter:{title:"Run a Baklava Full Node",description:"How to get a full node running on the Baklava Network using a prebuilt Docker image."}},c=[{value:"What is a Baklava Full Node?",id:"what-is-a-baklava-full-node",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Celo Networks",id:"celo-networks",children:[],level:2},{value:"Pull the Celo Docker image",id:"pull-the-celo-docker-image",children:[],level:2},{value:"Set up a data directory",id:"set-up-a-data-directory",children:[],level:2},{value:"Create an account and get its address",id:"create-an-account-and-get-its-address",children:[],level:2},{value:"Start the node",id:"start-the-node",children:[],level:2},{value:"Command Line Interface",id:"command-line-interface",children:[],level:2},{value:"Light Client Serving",id:"light-client-serving",children:[],level:2}],u={toc:c};function p(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run-a-baklava-full-node"},"Run a Baklava Full Node"),(0,i.kt)("p",null,"How to get a full node running on the ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/baklava-testnet"},"Baklava Network")," using a prebuilt Docker image."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"what-is-a-baklava-full-node"},"What is a Baklava Full Node?"),(0,i.kt)("p",null,"Full nodes play a special purpose in the Celo ecosystem, acting as a bridge between the mobile wallets ","(","running as light clients",")"," and the validator nodes. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you would like to keep up-to-date with all the news happening in the Celo community, including validation, node operation and governance, please sign up to our ",(0,i.kt)("a",{parentName:"p",href:"https://celo.activehosted.com/f/15"},"Celo Signal mailing list here"),"."),(0,i.kt)("p",{parentName:"div"},"You can add the ",(0,i.kt)("a",{parentName:"p",href:"https://calendar.google.com/calendar/u/0/embed?src=c_9su6ich1uhmetr4ob3sij6kaqs@group.calendar.google.com"},"Celo Signal public calendar")," as well which has relevant dates."))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Full node incentives have not been enabled yet because the mechanism for negotiating a gateway fee is still under development. Currently, light clients are configured to send a gateway fee of 0 and full nodes are set to accept a minimum gateway fee of 0."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you are transitioning from the Baklava network prior to the June 24 reset, you will need to start with a fresh chain database. You can either shut down your existing node, delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"celo")," folder, and continue by following the guide below or create a new node following these directions."),(0,i.kt)("p",{parentName:"div"},"Key differences are:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"New network ID is ",(0,i.kt)("inlineCode",{parentName:"li"},"62320")),(0,i.kt)("li",{parentName:"ul"},"A new image has been pushed to ",(0,i.kt)("inlineCode",{parentName:"li"},"us.gcr.io/celo-org/geth:baklava")),(0,i.kt)("li",{parentName:"ul"},"A new genesis block and bootnode enode are included in the Docker image"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ReleaseGold")," contracts are available for all previously faucetted addresses ",(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/nategraf/245232883a34cbb162eb599e34afd7c0"},"here"))))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"You have Docker installed.")," If you don\u2019t have it already, follow the instructions here: ",(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Get Started with Docker"),". It will involve creating or signing in with a Docker account, downloading a desktop app, and then launching the app to be able to use the Docker CLI. If you are running on a Linux server, follow the instructions for your distro ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/install/#server"},"here"),". You may be required to run Docker with ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo")," depending on your installation environment.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Code you'll see on this page is bash commands and their output."),(0,i.kt)("p",{parentName:"div"},"When you see text in angle brackets ","<",">",", replace them and the text inside with your own value of what it refers to. Don't include the ","<",">"," in the command."))),(0,i.kt)("h2",{id:"celo-networks"},"Celo Networks"),(0,i.kt)("p",null,"First we are going to setup the environment variables required for ",(0,i.kt)("inlineCode",{parentName:"p"},"Baklava")," network. Run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export CELO_IMAGE=us.gcr.io/celo-org/geth:baklava\n")),(0,i.kt)("h2",{id:"pull-the-celo-docker-image"},"Pull the Celo Docker image"),(0,i.kt)("p",null,"We're going to use a Docker image containing the Celo node software in this tutorial."),(0,i.kt)("p",null,"If you are re-running these instructions, the Celo Docker image may have been updated, and it's important to get the latest version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull $CELO_IMAGE\n")),(0,i.kt)("h2",{id:"set-up-a-data-directory"},"Set up a data directory"),(0,i.kt)("p",null,"First, create the directory that will store your node's configuration and its copy of the blockchain. This directory can be named anything you'd like, but here's a default you can use. The commands below create a directory and then navigate into it. The rest of the steps assume you are running the commands from inside this directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir celo-data-dir\ncd celo-data-dir\n")),(0,i.kt)("h2",{id:"create-an-account-and-get-its-address"},"Create an account and get its address"),(0,i.kt)("p",null,"In this step, you'll create an account on the network. If you've already done this and have an account address, you can skip this and move on to configuring your node."),(0,i.kt)("p",null,"Run the command to create a new account:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v $PWD:/root/.celo --rm -it $CELO_IMAGE account new\n")),(0,i.kt)("p",null,"It will prompt you for a passphrase, ask you to confirm it, and then will output your account address: ",(0,i.kt)("inlineCode",{parentName:"p"},"Public address of the key: <YOUR-ACCOUNT-ADDRESS>")),(0,i.kt)("p",null,"Save this address to an environment variables, so that you can reference it below (don't include the braces):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export CELO_ACCOUNT_ADDRESS=<YOUR-ACCOUNT-ADDRESS>\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This environment variable will only persist while you have this terminal window open. If you want this environment variable to be available in the future, you can add it to your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")))),(0,i.kt)("h2",{id:"start-the-node"},"Start the node"),(0,i.kt)("p",null,"This command specifies the settings needed to run the node, and gets it started."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name celo-fullnode -d --restart unless-stopped --stop-timeout 300 -p 127.0.0.1:8545:8545 -p 127.0.0.1:8546:8546 -p 30303:30303 -p 30303:30303/udp -v $PWD:/root/.celo $CELO_IMAGE --verbosity 3 --syncmode full --http --http.addr 0.0.0.0 --http.api eth,net,web3,debug,admin,personal --light.serve 90 --light.maxpeers 1000 --maxpeers 1100 --etherbase $CELO_ACCOUNT_ADDRESS --baklava --datadir /root/.celo\n")),(0,i.kt)("p",null,"You'll start seeing some output. After a few minutes, you should see lines that look like this. This means your node has started syncing with the network and is receiving blocks."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"INFO [07-16|14:04:24.924] Imported new chain segment               blocks=139  txs=319 mgas=61.987 elapsed=8.085s mgasps=7.666 number=406  hash=9acf16\u20264fddc8 age=6h58m44s cache=1.51mB\nINFO [07-16|14:04:32.928] Imported new chain segment               blocks=303  txs=179 mgas=21.837 elapsed=8.004s mgasps=2.728 number=709  hash=8de06a\u202677bb92 age=6h33m37s cache=1.77mB\nINFO [07-16|14:04:40.918] Imported new chain segment               blocks=411  txs=0   mgas=0.000  elapsed=8.023s mgasps=0.000 number=1120 hash=3db22a\u20269fa95a age=5h59m30s cache=1.92mB\nINFO [07-16|14:04:48.941] Imported new chain segment               blocks=335  txs=0   mgas=0.000  elapsed=8.023s mgasps=0.000 number=1455 hash=7eb3f8\u202632ebf0 age=5h31m43s cache=2.09mB\nINFO [07-16|14:04:56.944] Imported new chain segment               blocks=472  txs=0   mgas=0.000  elapsed=8.003s mgasps=0.000 number=1927 hash=4f1010\u20261414c1 age=4h52m31s cache=2.34mB\n")),(0,i.kt)("p",null,"You will have fully synced with the network once you have pulled the latest block number, which you can lookup by visiting at the ",(0,i.kt)("a",{parentName:"p",href:"https://baklava-celostats.celo-testnet.org/"},"Baklava Network Stats")," or ","[Baklava Block Explorer]","](",(0,i.kt)("a",{parentName:"p",href:"https://baklava-blockscout.celo-testnet.org/"},"https://baklava-blockscout.celo-testnet.org/"),") pages."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Security"),": The command line above includes the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"--http.addr 0.0.0.0")," which makes the Celo Blockchain software listen for incoming RPC requests on all network adaptors. Exercise extreme caution in doing this when running outside Docker, as it means that any unlocked accounts and their funds may be accessed from other machines on the Internet. In the context of running a Docker container on your local machine, this together with the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker -p")," flags allows you to make RPC calls from outside the container, i.e from your local host, but not from outside your machine. Read more about ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/network-tutorial-standalone/#use-user-defined-bridge-networks"},"Docker Networking")," here."))),(0,i.kt)("h2",{id:"command-line-interface"},"Command Line Interface"),(0,i.kt)("p",null," tool ",(0,i.kt)("inlineCode",{parentName:"p"},"celocli"),". For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g @celo/celocli\n...\n$ celocli node:synced\ntrue\n$ celocli account:new\n...\n")),(0,i.kt)("h2",{id:"light-client-serving"},"Light Client Serving"),(0,i.kt)("p",null,"Light clients may connect to you as people run the ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/alfajores-testnet/using-the-mobile-wallet"},"Celo Mobile Wallet")," and you will start earning gateway fees for any transactions that these users initiate, which you can read more about in the ",(0,i.kt)("a",{parentName:"p",href:"/celo-codebase/protocol/transactions/full-node-incentives"},"Full Node Incentives")," document. The account that this node advertises for light clients to use for these fees is given by the ",(0,i.kt)("inlineCode",{parentName:"p"},"etherbase")," parameter. The ",(0,i.kt)("inlineCode",{parentName:"p"},"light.serve")," parameter defines the percentage of time this node should spend serving light clients. Valid values are 0-100. If this node is having trouble catching up to the current block, dropping this to a lower percentage may help. The ",(0,i.kt)("inlineCode",{parentName:"p"},"light.maxpeers")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"maxpeers")," parameters set limits on the number of light clients and full node peers that the node will accept."))}p.isMDXComponent=!0}}]);