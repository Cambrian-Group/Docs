"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[5145],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=o,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6350:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=a(3117),o=a(102),n=(a(7294),a(3905)),l=["components"],i={title:"Import Valora Wallet to MetaMask",description:"How to import your Celo account to MetaMask from a Valora wallet."},s="Import Valora to MetaMask",c={unversionedId:"getting-started/wallets/using-metamask-with-celo/metamask-valora-import",id:"getting-started/wallets/using-metamask-with-celo/metamask-valora-import",title:"Import Valora Wallet to MetaMask",description:"How to import your Celo account to MetaMask from a Valora wallet.",source:"@site/docs/getting-started/wallets/using-metamask-with-celo/metamask-valora-import.md",sourceDirName:"getting-started/wallets/using-metamask-with-celo",slug:"/getting-started/wallets/using-metamask-with-celo/metamask-valora-import",permalink:"/getting-started/wallets/using-metamask-with-celo/metamask-valora-import",editUrl:"",tags:[],version:"current",frontMatter:{title:"Import Valora Wallet to MetaMask",description:"How to import your Celo account to MetaMask from a Valora wallet."}},p=[{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Set up your project",id:"set-up-your-project",children:[{value:"Valora Private Keys",id:"valora-private-keys",children:[],level:3},{value:"Import Private Key",id:"import-private-key",children:[],level:3},{value:"Delete Project Directory",id:"delete-project-directory",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,a=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"import-valora-to-metamask"},"Import Valora to MetaMask"),(0,n.kt)("p",null,"How to import your Celo account to MetaMask from a Valora wallet."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Importing a Celo Account to MetaMask allows you to extend Celo to any application that integrates with MetaMask. This guide helps you import your Celo account using a Valora Wallet and so you to access your Celo account using MetaMask."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Prerequisites required to start using MetaMask and Celo"),(0,n.kt)("li",{parentName:"ul"},"Create a simple project directory to temporarily store project information"),(0,n.kt)("li",{parentName:"ul"},"Access your Valora account and private key with the celocli"),(0,n.kt)("li",{parentName:"ul"},"Import your private key to MetaMask to access your Celo account")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before getting started, it\u2019s important to have downloaded MetaMask, Valora, and have completed some basic configuration on each account. Follow the links below for additional guides on each topic."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://metamask.io/download.html"},"Download MetaMask")," and create an account."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://valoraapp.com/"},"Download Valora")," and create an account."),(0,n.kt)("li",{parentName:"ul"},"Configure ",(0,n.kt)("a",{parentName:"li",href:"https://docs.celo.org/getting-started/wallets/using-metamask-with-celo"},"MetaMask to work with Celo"))),(0,n.kt)("h2",{id:"set-up-your-project"},"Set up your project"),(0,n.kt)("p",null,"Create a new project directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mkdir valora-metamask\n")),(0,n.kt)("p",null,"Change into your project directory."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd valora-metamask\n")),(0,n.kt)("p",null,"Create a text file to temporarily store your Valora Recovery Phrase."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"touch valora-recovery-phrase.txt\n")),(0,n.kt)("p",null,"Open the text file to store your Recovery Phrase."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"open valora-recovery-phrase.txt\n")),(0,n.kt)("h3",{id:"valora-private-keys"},"Valora Private Keys"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the Valora App, navigate to ",(0,n.kt)("strong",{parentName:"li"},"Menu > Recovery Phrase"),", and Enter PIN to reveal your Recovery Phrase.")),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"The Recovery Phrase is a series of 24 unique words specific to your Valora wallet. Do not lose these words or share them with anyone at any time."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Populate Text File")),(0,n.kt)("p",null,"Populate your text file with the Recovery Phrase shown in your Valora wallet."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"one two three four five six seven...\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Access Private Key")),(0,n.kt)("p",null,"Open your terminal and type the following command to read your account information."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"celocli account:new --mnemonicPath valora-recovery-phrase.txt\n")),(0,n.kt)("p",null,"This command will display your Valora wallet mnemonic, accountAddress, privateKey, publicKey, and address. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"mnemonic: one two three four five six seven...\naccountAddress: 0x...\nprivateKey: [COPY THIS PRIVATE KEY]\npublicKey: ...\naddress: 0x...\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Copy the ",(0,n.kt)("strong",{parentName:"li"},"privateKey")," from your terminal window.")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"This celocli command also shows your ",(0,n.kt)("strong",null,"accountAddress"),". You won\u2019t be using this in this guide, but it is important to verify that this is the correct address for your Valora wallet. Before moving on, confirm that the digits of the ",(0,n.kt)("strong",null,"Account Address")," from your Valora Wallet match the ",(0,n.kt)("strong",null,"accountAddress")," displayed in your terminal."))),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Anyone that has access to your private key will be able to access and control the funds in your wallet. Only store your private key in a safe location and do not share it with anyone."))),(0,n.kt)("h3",{id:"import-private-key"},"Import Private Key"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open MetaMask and select ",(0,n.kt)("strong",{parentName:"li"},"Celo (Mainnet)")," as your network.`"),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Settings > Import Account "),"select type",(0,n.kt)("strong",{parentName:"li"}," Private Key "),"and paste the private key from your terminal window."),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Import")," to import your Celo Account from your Valora Wallet.")),(0,n.kt)("h3",{id:"delete-project-directory"},"Delete Project Directory"),(0,n.kt)("p",null,"MetaMask is now connected to your Valora wallet. The value of your Valora wallet should show in your MetaMask account and you can now use MetaMask to access your funds. "),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"You may now delete your project directory along with the text file used to store your wallet address."))))}m.isMDXComponent=!0}}]);