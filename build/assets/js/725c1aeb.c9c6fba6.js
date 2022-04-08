"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[1293],{3905:function(t,e,o){o.d(e,{Zo:function(){return p},kt:function(){return d}});var n=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=c(o),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return o?n.createElement(g,i(i({ref:e},p),{},{components:o})):n.createElement(g,i({ref:e},p))}));function d(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},25936:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=o(83117),a=o(80102),r=(o(67294),o(3905)),i=["components"],s={title:"Optics Bridge GUI",description:"How to send ETH From Ethereum to Celo using the Optics Bridge GUI."},l="Optics Bridge GUI",c={unversionedId:"celo-codebase/protocol/bridging/optics-gui",id:"celo-codebase/protocol/bridging/optics-gui",title:"Optics Bridge GUI",description:"How to send ETH From Ethereum to Celo using the Optics Bridge GUI.",source:"@site/docs/celo-codebase/protocol/bridging/optics-gui.md",sourceDirName:"celo-codebase/protocol/bridging",slug:"/celo-codebase/protocol/bridging/optics-gui",permalink:"/celo-codebase/protocol/bridging/optics-gui",editUrl:"https://github.com/celo-org/docs/edit/main/docs/celo-codebase/protocol/bridging/optics-gui.md",tags:[],version:"current",frontMatter:{title:"Optics Bridge GUI",description:"How to send ETH From Ethereum to Celo using the Optics Bridge GUI."},sidebar:"docs",previous:{title:"Celo Bridges",permalink:"/celo-codebase/protocol/bridging/bridging-to-celo"},next:{title:"Bridge Native Assets with Etherscan",permalink:"/celo-codebase/protocol/bridging/bridging-native-assets"}},p=[{value:"Sending ETH From Ethereum to Celo",id:"sending-eth-from-ethereum-to-celo",children:[],level:2},{value:"Sending WETH from Celo to Ethereum",id:"sending-weth-from-celo-to-ethereum",children:[],level:2},{value:"Sending Assets from Celo to Polygon",id:"sending-assets-from-celo-to-polygon",children:[],level:2}],u={toc:p};function m(t){var e=t.components,o=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"optics-bridge-gui"},"Optics Bridge GUI"),(0,r.kt)("p",null,"How to send ETH From Ethereum to Celo using the Optics Bridge GUI."),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Other translations: ",(0,r.kt)("a",{parentName:"p",href:"/celo-codebase/protocol/bridging/optics-gui-zh_cn"},"zh_cn"),", ",(0,r.kt)("a",{parentName:"p",href:"/celo-codebase/protocol/bridging/optics-gui-kr"},"kr")))),(0,r.kt)("h2",{id:"sending-eth-from-ethereum-to-celo"},"Sending ETH From Ethereum to Celo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install Metamask from ",(0,r.kt)("a",{parentName:"li",href:"https://metamask.io"},"https://metamask.io"),"."),(0,r.kt)("li",{parentName:"ul"},"Make sure you have ETH in your account."),(0,r.kt)("li",{parentName:"ul"},"Go to the ",(0,r.kt)("a",{parentName:"li",href:"https://optics.app/"},"Optics Bridge app"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Connect Metamask"),(0,r.kt)("li",{parentName:"ul"},"Make sure Metamask is connected to Ethereum Mainnet."),(0,r.kt)("li",{parentName:"ul"},"In the top ",(0,r.kt)("strong",{parentName:"li"},"From")," section, Select \u201cETH on Ethereum\u201d. This indicates that you want to send the ETH asset that is currently on Ethereum."),(0,r.kt)("li",{parentName:"ul"},"Enter the amount, destination chain (Celo in this case), and destination address. The sending address is filled in by default.")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/critesjosh/images/blob/main/optics-gui/setup%20ETH%20bridge%20to%20celo.png?raw=true",alt:"setup eth bridge to celo"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click \u201cBridge\u201d. Metamask will pop up asking for confirmation.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/critesjosh/images/blob/main/optics-gui/send%20ETH%20to%20bridge.png?raw=true",alt:"send ETH to bridge.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click \u201cConfirm\u201d.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once your transaction is confirmed, you will be taken to the Transaction History tab where you can see your pending transactions through the bridge."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can view the status of the transfer by mousing over the \u201cStatus\u201d of the transaction.")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/critesjosh/images/blob/main/optics-gui/WETH%20to%20Celo%20tx%20history.png?raw=true",alt:"WETH to Celo tx history.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once your transaction is approved your transaction details may not appear in the transaction history immediately. This does not mean that your transaction wasn\u2019t successful. If you don\u2019t see your transaction details, check a block explorer of the source network to verify that your transaction to the bridge was successful."),(0,r.kt)("li",{parentName:"ul"},"Wait for your ETH to be bridged. WETH will show up at the specified account address when bridging is complete.")),(0,r.kt)("h2",{id:"sending-weth-from-celo-to-ethereum"},"Sending WETH from Celo to Ethereum"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install Metamask from ",(0,r.kt)("a",{parentName:"li",href:"https://metamask.io"},"https://metamask.io"),"."),(0,r.kt)("li",{parentName:"ul"},"Make sure you have ",(0,r.kt)("a",{parentName:"li",href:"https://explorer.celo.org/address/0xE919F65739c26a42616b7b8eedC6b5524d1e3aC4/transactions"},"WETH")," in your Celo account."),(0,r.kt)("li",{parentName:"ul"},"Go to the Optics Bridge app.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Connect Metamask."),(0,r.kt)("li",{parentName:"ul"},"Make sure Metamask is connected to the Celo network."),(0,r.kt)("li",{parentName:"ul"},"In the top ",(0,r.kt)("strong",{parentName:"li"},"From")," section, Select \u201cWETH on Celo\u201d. This indicates that you want to send the WETH asset that is currently on Celo."),(0,r.kt)("li",{parentName:"ul"},"Enter the amount, destination chain (Ethereum in this case), and destination address. The sending address is filled in by default.")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/critesjosh/images/blob/main/optics-gui/setup%20WETH%20celo%20to%20eth.png?raw=true",alt:"setup WETH celo to eth.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click \u201cBridge\u201d. Metamask will pop up asking for you to approve the Optics Bridge to send WETH on your behalf.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/critesjosh/images/blob/main/optics-gui/approve%20WETH%20on%20celo.png?raw=true",alt:"approve WETH on celo.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once the approval transaction is confirmed, Metamask will pop up asking for you to confirm the WETH transfer to the bridge.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/critesjosh/images/blob/main/optics-gui/send%20WETH%20from%20celo%20to%20ETH.png?raw=true",alt:"send WETH from celo to ETH.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once your transaction is approved your transaction details may not appear in the transaction history immediately. This does not mean that your transaction wasn\u2019t successful. If you don\u2019t see your transaction details, check a block explorer of the source network to verify that your transaction to the bridge was successful."),(0,r.kt)("li",{parentName:"ul"},"Wait for Optics to send your assets to the destination network.")),(0,r.kt)("h2",{id:"sending-assets-from-celo-to-polygon"},"Sending Assets from Celo to Polygon"),(0,r.kt)("p",null,"We demo how to send assets from Celo to Polygon, but the process is the same for sending between other networks as well."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install Metamask from ",(0,r.kt)("a",{parentName:"li",href:"https://metamask.io"},"https://metamask.io"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/getting-started/wallets/using-metamask-with-celo/manual-setup"},"Add the Celo network to Metamask"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/critesjosh/images/blob/main/optics-gui/add%20Celo%20to%20MM.png?raw=true",alt:"add Celo to MM.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/#configure-polygon-on-metamask"},"Add Polygon to Metamask"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/critesjosh/images/blob/main/optics-gui/add%20polygon%20network%20to%20MM.png?raw=true",alt:"add polygon network to MM.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure you have Celo assets to send."),(0,r.kt)("li",{parentName:"ul"},"Go to the Optics Bridge app.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Connect metamask"),(0,r.kt)("li",{parentName:"ul"},"Make sure metamask is connected to the Celo network"))),(0,r.kt)("li",{parentName:"ul"},"Enter the amount, destination chain (Polygon in this case) and destination address. The sending address is filled by default.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/critesjosh/images/blob/main/optics-gui/setup%20CELO%20to%20polygon.png?raw=true",alt:"setup CELO to Polygon"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow the bridge application to send CELO on your behalf.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/critesjosh/images/blob/main/optics-gui/approve%20optics%20to%20spend%20CELO.png?raw=true",alt:"approve optics to spend CELO.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Approve the transaction to send CELO to the Optics bridge.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/critesjosh/images/blob/main/optics-gui/send%20celo%20to%20polygon.png?raw=true",alt:"send celo to polygon.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can view your transaction history in the corresponding tab.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can view the status of the transfer by mousing over the \u201cStatus\u201d of the transaction.")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/critesjosh/images/blob/main/optics-gui/celo%20to%20polygon%20tx%20history.png?raw=true",alt:"celo to polygon tx history.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once your transaction is approved your transaction details may not appear in the transaction history immediately. This does not mean that your transaction wasn\u2019t successful. If you don\u2019t see your transaction details, check a block explorer of the source network to verify that your transaction to the bridge was successful."),(0,r.kt)("li",{parentName:"ul"},"Wait for Optics to send your assets to the destination network.")))}m.isMDXComponent=!0}}]);