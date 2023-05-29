"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[5169],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,c(c({ref:t},p),{},{components:n})):a.createElement(m,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62380:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r="center_B31j";function o(e){var t=e.path,n=e.alt,o=e.width;return a.createElement("div",{className:r},a.createElement("img",{src:t,alt:n,width:o}))}},6018:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),c=n(62380),l=["components"],i={title:"Celo Valora + WalletConnect v1",description:"How to use Wallet Connect version 1 in a DApp to connect to Valora."},s="Valora + WalletConnect v1",p={unversionedId:"developer-resources/walkthroughs/valora-wc-v1",id:"developer-resources/walkthroughs/valora-wc-v1",title:"Celo Valora + WalletConnect v1",description:"How to use Wallet Connect version 1 in a DApp to connect to Valora.",source:"@site/docs/developer-resources/walkthroughs/valora-wc-v1.md",sourceDirName:"developer-resources/walkthroughs",slug:"/developer-resources/walkthroughs/valora-wc-v1",permalink:"/developer-resources/walkthroughs/valora-wc-v1",editUrl:"",tags:[],version:"current",frontMatter:{title:"Celo Valora + WalletConnect v1",description:"How to use Wallet Connect version 1 in a DApp to connect to Valora."}},d=[{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Add Packages",id:"add-packages",children:[],level:2},{value:"Connect",id:"connect",children:[],level:2},{value:"Send cUSD",id:"send-cusd",children:[],level:2},{value:"Pay Fees in Stable currencies",id:"pay-fees-in-stable-currencies",children:[],level:2}],u={toc:d};function h(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"valora--walletconnect-v1"},"Valora + WalletConnect v1"),(0,o.kt)("p",null,"How to use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.walletconnect.com/1.0/"},"WalletConnect version 1")," in a DApp to connect to ",(0,o.kt)("a",{parentName:"p",href:"https://valoraapp.com/"},"Valora"),". "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"In this example, we will demonstrate how to add WalletConnect to a simple React app."),(0,o.kt)("p",null,"This is a simple DApp that focuses on demonstrating how to connect WalletConnect to Valora, but also shows how to set up ",(0,o.kt)("a",{parentName:"p",href:"/developer-guide/contractkit"},"ContractKit")," and make a simple cUSD transfer. You can view the DApp code ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/critesjosh/valora-wallet-connect-v1"},"here"),"."),(0,o.kt)("h2",{id:"add-packages"},"Add Packages"),(0,o.kt)("p",null,"Add the packages that you need to your project."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@walletconnect/web3-provider"},"@walletconnect/web3-provider")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@celo/contractkit"},"Contractkit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/web3"},"Web3"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @wallet-connect/web3-provider web3 @celo/contractkit\n")),(0,o.kt)("p",null,"Import the packages to your project code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import WalletConnectProvider from '@walletconnect/web3-provider';\nimport Web3 from 'web3';\nimport { newKitFromWeb3 } from '@celo/contractkit';\n")),(0,o.kt)("h2",{id:"connect"},"Connect"),(0,o.kt)("p",null,"If the DApp does not detect a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.walletconnect.com/1.0/quick-start/dapps/web3-provider"},"wallet connect provider"),", the user will be presented with a button to initiate a wallet connection."),(0,o.kt)("p",null,"If the DApp is being accessed on a computer or device other than the mobile device with the wallet, the user can connect to the mobile wallet by scanning the presented QR code. If the DApp is being accessed on the same device as the wallet, the connection will be made via the appropriate linking mechanism (iOS and Android are different). You can read more about that ",(0,o.kt)("a",{parentName:"p",href:"https://docs.walletconnect.com/1.0/mobile-linking#wallet-support"},"here"),"."),(0,o.kt)("p",null,"When a provider is detected, the DApp will show a button to send some cUSD."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"connect dapp",src:n(61683).Z})),(0,o.kt)("p",null,"The connect function sets up the WalletConnect Provider and initializes ContractKit with the provider and user account. It also sets up a listener that will log when the user changes accounts. The DApp then saves the provider and initialized Contractkit in the ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/faq-state.html"},"React component state"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},' connect = async() => {\n    const provider = new WalletConnectProvider({\n      rpc: {\n        44787: "https://alfajores-forno.celo-testnet.org",\n        42220: "https://forno.celo.org",\n      },\n    });\n\n    await provider.enable()\n    const web3 = new Web3(provider);\n    let kit = newKitFromWeb3(web3)\n\n    kit.defaultAccount = provider.accounts[0]\n\n    provider.on("accountsChanged", (accounts) => {\n      console.log(accounts);\n    });\n\n    this.setState({provider, kit})\n  }\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DApp:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"qr code",src:n(73201).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Valora:")),(0,o.kt)(c.Z,{path:"/img/doc-images/valora-wc-v1/connect-valora.jpg",alt:"connect valora",width:"200",mdxType:"ImageWrapper"}),(0,o.kt)("p",null,"When the provider has been set and the DApp is connected to Valora, the UI will update the button and display the user account address below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"send cusd",src:n(37864).Z})),(0,o.kt)("h2",{id:"send-cusd"},"Send cUSD"),(0,o.kt)("p",null,"Clicking the new button will prompt the user to send 0.001 cUSD to a hard-coded address. The user will have to click Allow to send the transaction. Once the transaction is confirmed, the transaction receipt will be printed in the DApp browser console."),(0,o.kt)("p",null,"You can code the transaction approval request with just a few lines, demonstrated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"sendcUSD")," function."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get the saved instance of ContractKit from ",(0,o.kt)("inlineCode",{parentName:"li"},"this.state.kit")),(0,o.kt)("li",{parentName:"ul"},"Get the stabletoken (cUSD) contract"),(0,o.kt)("li",{parentName:"ul"},"Call ",(0,o.kt)("inlineCode",{parentName:"li"},"transfer")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"send")," with the recipient and amount")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"}," sendcUSD = async () => {\n    let kit = this.state.kit\n\n    let amount = kit.web3.utils.toWei('0.001', 'ether')\n\n    const stabletoken = await kit.contracts.getStableToken()\n    const tx = await stabletoken.transfer(this.state.someAddress, amount).send()\n    const receipt = await tx.waitReceipt()\n\n    console.log(receipt)\n  }\n\n")),(0,o.kt)(c.Z,{path:"/img/doc-images/valora-wc-v1/valora-send.jpg",alt:"approve valora",width:"200",mdxType:"ImageWrapper"}),(0,o.kt)("p",null,"The receipt will be logged once the user approves the transaction and it is confirmed on the network."),(0,o.kt)("h2",{id:"pay-fees-in-stable-currencies"},"Pay Fees in Stable currencies"),(0,o.kt)("p",null,"Specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"feeCurrency")," field in the transaction will allow users to pay transaction fees in that currency. Here's how you can have users pay transaction fees in cUSD, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const stabletoken = await kit.contracts.getStableToken()\nlet tx = await stabletoken.transfer(this.state.someAddress, amount).send({ feeCurrency: stabletoken.address })\n")))}h.isMDXComponent=!0},61683:function(e,t,n){t.Z=n.p+"assets/images/connect-dapp-572c92d7fb22758ae3662c0ecdc0eaed.png"},73201:function(e,t,n){t.Z=n.p+"assets/images/qr-code-b73e05aa2e75fd14fb7d1feb12fabc13.png"},37864:function(e,t,n){t.Z=n.p+"assets/images/send-cusd-c0f314fff37f58609e4e166d00e7979c.png"}}]);