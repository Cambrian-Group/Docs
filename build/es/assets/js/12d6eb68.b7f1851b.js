"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[4761],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82585:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Using a Cloud HSM with Celo",description:"How to create a cloud HSM in Azure and connect it to celocli.",slug:"/developer-guide/integrations/cloud-hsm"},c="Using a Cloud HSM",s={unversionedId:"developer-resources/integrations/cloud-hsm",id:"developer-resources/integrations/cloud-hsm",title:"Using a Cloud HSM with Celo",description:"How to create a cloud HSM in Azure and connect it to celocli.",source:"@site/docs/developer-resources/integrations/cloud-hsm.md",sourceDirName:"developer-resources/integrations",slug:"/developer-guide/integrations/cloud-hsm",permalink:"/es/developer-guide/integrations/cloud-hsm",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{title:"Using a Cloud HSM with Celo",description:"How to create a cloud HSM in Azure and connect it to celocli.",slug:"/developer-guide/integrations/cloud-hsm"},sidebar:"developers",previous:{title:"Celo Listing Integrations",permalink:"/es/developer-guide/integrations/listings"},next:{title:"Celo for Ethereum Developers",permalink:"/es/developer-guide/celo-for-eth-devs"}},u=[{value:"Introduction to HSM",id:"introduction-to-hsm",children:[],level:2},{value:"Create an Azure subscription",id:"create-an-azure-subscription",children:[],level:2},{value:"Deploy your Azure Key Vault",id:"deploy-your-azure-key-vault",children:[],level:2},{value:"Create your key",id:"create-your-key",children:[],level:2},{value:"Create a Service Principal",id:"create-a-service-principal",children:[],level:2},{value:"Grant your Service Principal access to the key",id:"grant-your-service-principal-access-to-the-key",children:[],level:2},{value:"Connecting CeloCLI to KeyVault",id:"connecting-celocli-to-keyvault",children:[],level:2},{value:"Connecting ContractKit to KeyVault",id:"connecting-contractkit-to-keyvault",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-a-cloud-hsm"},"Using a Cloud HSM"),(0,o.kt)("p",null,"How to create a cloud HSM in Azure and connect it to ",(0,o.kt)("inlineCode",{parentName:"p"},"celocli"),". "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"introduction-to-hsm"},"Introduction to HSM"),(0,o.kt)("p",null,"A cloud Hardware Security Module (HSM) provides a good balance between security and accessibility. A cloud HSM can manage a Celo private key and can be used seamlessly with ",(0,o.kt)("inlineCode",{parentName:"p"},"celocli")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"contractkit"),". Similar to a ledger device, a key in an HSM avoids the key from ever being sent over the network or stored on disk since the key can never leave the hardware boundary and all signing is performed within the HSM. To authenticate to the HSM, it's recommended to create a service principal account that has been granted access to sign with the managed keys. A cloud HSM can be a great option for managing vote signer keys, since you may want these keys to be portable but also maintain good security practices. "),(0,o.kt)("h2",{id:"create-an-azure-subscription"},"Create an Azure subscription"),(0,o.kt)("p",null,"If you don't have an Azure subscription already, you can ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/free/"},"create a free trial here")," that starts with $200 credit. You can ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/pricing/details/key-vault/"},"view the pricing for Eliptic Curve Cryptography (ECC) HSM keys here"),"."),(0,o.kt)("h2",{id:"deploy-your-azure-key-vault"},"Deploy your Azure Key Vault"),(0,o.kt)("p",null,"The Key Vault can store keys, secrets, and certificates. Permission can be specified to perform certain actions across the entire Key Vault (ex. key signing)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Search the marketplace for "Key Vault"'),(0,o.kt)("li",{parentName:"ul"},"Click Create and fill out the deployment information"),(0,o.kt)("li",{parentName:"ul"},"Ensure you select the Premium pricing tier for HSM support"),(0,o.kt)("li",{parentName:"ul"},"Enable soft-delete and purge protection to ensure your keys aren't accidentally deleted")),(0,o.kt)("h2",{id:"create-your-key"},"Create your key"),(0,o.kt)("p",null,"Next, we'll create the ECDSA key. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to your newly created Key Vault and click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Keys")," section. "),(0,o.kt)("li",{parentName:"ul"},'Click on "Generate/Import"'),(0,o.kt)("li",{parentName:"ul"},'Select "EC-HSM"'),(0,o.kt)("li",{parentName:"ul"},'Select "SECP256K1"')),(0,o.kt)("p",null,"You'll see your newly generated key listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Keys")," section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# On your local machine\nexport AZURE_VAULT_NAME=<VAULT-NAME>\nexport AZURE_KEY_NAME=<KEY-NAME>\n")),(0,o.kt)("h2",{id:"create-a-service-principal"},"Create a Service Principal"),(0,o.kt)("p",null,"A Service Principal (SP) is preferred over your personal account so that permission can be heavily restricted. In general, Service Principal accounts should be used for any automation or services that need to access Azure resources."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://shell.azure.com/bash"},"Cloud Shell")," to create the client credentials."),(0,o.kt)("p",null,"Create a service principal and configure its access to Azure resources:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# In the Cloud Shell\naz ad sp create-for-rbac -n <your-application-name> --skip-assignment\n")),(0,o.kt)("p",null,"The account will be created and will output the account's credentials."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "appId": "generated-app-ID",\n  "displayName": "dummy-app-name",\n  "name": "http://dummy-app-name",\n  "password": "random-password",\n  "tenant": "tenant-ID"\n}\n')),(0,o.kt)("p",null,"Set these as environment variables so that they can be used by ",(0,o.kt)("inlineCode",{parentName:"p"},"celocli")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"contractkit"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# On your local machine\nexport AZURE_CLIENT_ID=<GENERATED-APP-ID>\nexport AZURE_CLIENT_SECRET=<PASSWORD>\nexport AZURE_TENANT_ID=<TENANT-ID>\n")),(0,o.kt)("h2",{id:"grant-your-service-principal-access-to-the-key"},"Grant your Service Principal access to the key"),(0,o.kt)("p",null,"In the Cloud Shell or Access Policies pane of the Key Vault, set the ","[GET, LIST, SIGN]"," permission for the new account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# In the Cloud Shell\naz keyvault set-policy --name <your-key-vault-name> --spn $AZURE_CLIENT_ID --key-permissions get list sign\n")),(0,o.kt)("h2",{id:"connecting-celocli-to-keyvault"},"Connecting CeloCLI to KeyVault"),(0,o.kt)("p",null,"Now that your environment variables are set, we just need to let ",(0,o.kt)("inlineCode",{parentName:"p"},"celocli")," know that we want to use this Key Vault signer. We do this by passing in the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--useAKV")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--azureVaultName"),". Similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"--useLedger"),", all CLI commands will use the HSM signer when ",(0,o.kt)("inlineCode",{parentName:"p"},"--useAKV")," is specified."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# On your local machine\ncelocli account:list --useAKV --azureVaultName $AZURE_VAULT_NAME\n")),(0,o.kt)("p",null,'Your Key Vault address will show up under "Local Addresses". If you\'d like to use this key as your vote signer key, you can follow ',(0,o.kt)("a",{parentName:"p",href:"/es/celo-owner-guide/quick-start#authorize-vote-signer-keys"},"this guide")," and replace ",(0,o.kt)("inlineCode",{parentName:"p"},"--useLedger")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"--useAKV --azureVaultName $AZURE_VAULT_NAME"),"."),(0,o.kt)("h2",{id:"connecting-contractkit-to-keyvault"},"Connecting ContractKit to KeyVault"),(0,o.kt)("p",null,"To leverage your HSM keys in ",(0,o.kt)("inlineCode",{parentName:"p"},"contractkit"),", first create an ",(0,o.kt)("inlineCode",{parentName:"p"},"AzureHSMWallet")," object and use it to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractKit")," object with ",(0,o.kt)("inlineCode",{parentName:"p"},"newKitFromWeb3"),". Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"AzureHSMWallet")," expects AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, and AZURE_TENANT_ID environment variables to be specified."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { ContractKit, newKitFromWeb3 } from '@celo/contractkit'\nimport { AzureHSMWallet } from '@celo/wallet-hsm-azure'\n\nconst azureVaultName = \"AZURE-VAULT-NAME\"\nconst akvWallet = await new AzureHSMWallet(azureVaultName)\nawait akvWallet.init()\nconsole.log(`Found addresses: ${await akvWallet.getAccounts()}`)\nconst contractKit = newKitFromWeb3(this.web3, akvWallet)\n")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"You can now leverage a cloud HSM key to perform signing as a user or application. This improves both security and availability of your Celo keys. We also recommend enabling two-factor authentication across your Azure subscription and to leverage ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview"},"Managed Service Identities")," where possible."))}d.isMDXComponent=!0}}]);