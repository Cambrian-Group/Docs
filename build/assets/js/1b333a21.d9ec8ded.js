"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[8970],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var i=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return o?i.createElement(h,n(n({ref:t},c),{},{components:o})):i.createElement(h,n({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,n=new Array(r);n[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var u=2;u<r;u++)n[u]=o[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8215:function(e,t,o){var i=o(7294);t.Z=function(e){var t=e.children,o=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:o,className:a},t)}},6396:function(e,t,o){o.d(t,{Z:function(){return d}});var i=o(3117),a=o(7294),r=o(2389),n=o(9443);var s=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=o(6681),u=o(6010),c="tabItem_vU9c";function p(e){var t,o,r,n=e.lazy,p=e.block,d=e.defaultValue,m=e.values,h=e.groupId,f=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(t=null!=d?d:null==(o=y.find((function(e){return e.props.default})))?void 0:o.props.value)?t:null==(r=y[0])?void 0:r.props.value;if(null!==w&&!v.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),b=k.tabGroupChoices,N=k.setTabGroupChoices,P=(0,a.useState)(w),C=P[0],T=P[1],S=[],x=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var W=b[h];null!=W&&W!==C&&v.some((function(e){return e.value===W}))&&T(W)}var I=function(e){var t=e.currentTarget,o=S.indexOf(t),i=v[o].value;i!==C&&(x(t),T(i),null!=h&&N(h,i))},O=function(e){var t,o=null;switch(e.key){case"ArrowRight":var i=S.indexOf(e.currentTarget)+1;o=S[i]||S[0];break;case"ArrowLeft":var a=S.indexOf(e.currentTarget)-1;o=S[a]||S[S.length-1]}null==(t=o)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,o=e.label,r=e.attributes;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return S.push(e)},onKeyDown:O,onFocus:I,onClick:I},r,{className:(0,u.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=o?o:t)}))),n?(0,a.cloneElement)(y.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,r.Z)();return a.createElement(p,(0,i.Z)({key:String(t)},e))}},4805:function(e,t,o){o.d(t,{Z:function(){return u}});var i=o(7294),a="pageRef_Ejpu",r="left_uwxi",n="arrow_+Oog",s="pageName_Jzs5",l="url_tyFG";function u(e){var t=e.url,o=e.pageName;return i.createElement("a",{className:a,href:t},i.createElement("div",{className:r},i.createElement("div",{className:n},"\u2192"),i.createElement("div",{className:s},o)),i.createElement("div",{className:l},t))}},1982:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=o(3117),a=o(102),r=(o(7294),o(3905)),n=(o(4805),o(6396),o(8215),["components"]),s={title:"Privacy Policy",description:"Lmax Group Privacy Policy."},l="Privacy Policy",u={unversionedId:"validator-guide/overview",id:"validator-guide/overview",title:"Privacy Policy",description:"Lmax Group Privacy Policy.",source:"@site/docs/validator-guide/overview.md",sourceDirName:"validator-guide",slug:"/validator-guide/overview",permalink:"/validator-guide/overview",editUrl:"",tags:[],version:"current",frontMatter:{title:"Privacy Policy",description:"Lmax Group Privacy Policy."},sidebar:"validators",next:{title:"Disclaimers",permalink:"/validator-guide/attestation-service"}},c=[{value:"Applicability of This Policy",id:"applicability-of-this-policy",children:[],level:2},{value:"What We Collect",id:"what-we-collect",children:[],level:2},{value:"How We Use Information",id:"how-we-use-information",children:[{value:"Providing Services and Features",id:"providing-services-and-features",children:[],level:3}],level:2},{value:"Safety and Security",id:"safety-and-security",children:[],level:2},{value:"User Support",id:"user-support",children:[],level:2},{value:"Research and Development",id:"research-and-development",children:[],level:2},{value:"Legal and Regulatory Compliance",id:"legal-and-regulatory-compliance",children:[],level:2},{value:"Direct Marketing",id:"direct-marketing",children:[],level:2},{value:"How We Share &amp; Disclose Information",id:"how-we-share--disclose-information",children:[],level:2},{value:"Data Retention",id:"data-retention",children:[],level:2},{value:"Security",id:"security",children:[],level:2},{value:"Age Limitations",id:"age-limitations",children:[],level:2},{value:"Changes to This Policy",id:"changes-to-this-policy",children:[],level:2},{value:"Online Tracking Opt-out Guide",id:"online-tracking-opt-out-guide",children:[],level:2},{value:"Notice to California Residents - CCPA Scope and Exclusions",id:"notice-to-california-residents---ccpa-scope-and-exclusions",children:[],level:2},{value:"Privacy Practices",id:"privacy-practices",children:[],level:2},{value:"Privacy Rights",id:"privacy-rights",children:[],level:2},{value:"How to Submit a Request",id:"how-to-submit-a-request",children:[],level:2},{value:"Identity Verification",id:"identity-verification",children:[],level:2},{value:"Authorized Agents",id:"authorized-agents",children:[],level:2},{value:"Additional Disclosure for Our Consumers and Customers",id:"additional-disclosure-for-our-consumers-and-customers",children:[],level:2},{value:"Reasons We Can Share Your Personal Information",id:"reasons-we-can-share-your-personal-information",children:[],level:2},{value:"How Does Lmax group Protect My Personal Information?",id:"how-does-lmax-group-protect-my-personal-information",children:[],level:2},{value:"How Does Ondo Collect My Personal Information?",id:"how-does-ondo-collect-my-personal-information",children:[],level:2},{value:"Contact Us",id:"contact-us",children:[],level:2}],p={toc:c};function d(e){var t=e.components,o=(0,a.Z)(e,n);return(0,r.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"privacy-policy"},"Privacy Policy"),(0,r.kt)("p",null,"Last Updated: May 2023."),(0,r.kt)("hr",null),(0,r.kt)("p",null,'This Privacy Policy ("Policy") describes how Ondo Finance Inc. ("Ondo," "we," "us" or "our") may collect, use and disclose information, and your choices regarding this information. Please read this Policy carefully and contact us with questions at ',(0,r.kt)("a",{parentName:"p",href:"mailto:LmaxGroup@gmail.com"},"LmaxGroup@gmail.com")," ."),(0,r.kt)("h2",{id:"applicability-of-this-policy"},"Applicability of This Policy"),(0,r.kt)("p",null,'This Policy applies to our services, which include the services we provide on our platform, user interface to the Protocol or any other websites, pages, features, mobile applications, or content we own or operate (collectively, the "Sites") or when you use any Ondo API or third party applications relying on such an API, and related services (collectively, the "Services"). If you do not agree with the terms of this Policy, do not access or use the Services, Sites, or any other aspect of our business.'),(0,r.kt)("h2",{id:"what-we-collect"},"What We Collect"),(0,r.kt)("p",null,"When you interact with our Services, we may collect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contact Information, such as your email address.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Financial Information, such as your Ethereum address, cryptocurrency wallet information, transaction history, and associated fees paid.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transaction Information, such as information about the transactions you make on our Services, such as the type of transaction, transaction amount, and timestamp.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Correspondence, such as your feedback, questionnaire and other survey responses, and information you provide to our support teams, including via our help chat.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Online Identifiers, such as geo location/tracking details, browser fingerprint, operating system, browser name and version, and/or personal IP addresses.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Usage Data, such as user preferences and other data collected via cookies and similar technologies.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Information We Get from Others. We may get information about you from other sources as required or permitted by applicable law, including public databases, credit bureaus & ID verification partners. We may combine the information collected from these sources with the information we get from this Site in order to comply with our legal obligations and limit the use of our Services in connection with fraudulent or other illicit activities.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Information from cookies and other tracking technologies. We, and third parties we authorize, may Sites and mobile apps, and collect information about the use of the Services, as well as about our interactions with you. This information may include internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and clickstream data, and information about your interactions with the communications we send to you. We may combine this automatically collected log information with other information we collect about you. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, please note that some parts of our Services may not function properly."))),(0,r.kt)("h2",{id:"how-we-use-information"},"How We Use Information"),(0,r.kt)("p",null,"We use your information in accordance with your instructions, including any applicable terms in the Terms of Use, and as required by applicable law. We may also use the information we collect for:"),(0,r.kt)("h3",{id:"providing-services-and-features"},"Providing Services and Features"),(0,r.kt)("p",null,"We may use the information we collect to provide, personalize, maintain, and improve our products and Services, including as we described in the Terms of Use. This includes using information to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"operate, maintain, customize, measure, and improve our Services, and manage our business;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"process transactions;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"send information, including confirmations, notices, updates, security alerts, and support and administrative messages; and\nto create de-identified or aggregated data."))),(0,r.kt)("h2",{id:"safety-and-security"},"Safety and Security"),(0,r.kt)("p",null,"We may use your information to help maintain the safety, security, and integrity of you and our Services, including to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"protect, investigate, and deter against fraudulent, unauthorized, or illegal activity;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"monitor and verify identity or service access, combat spam, malware or security risks;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"perform internal operations necessary to provide our Services, including to troubleshoot software bugs and operational problems;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"enforce our agreements with third parties, and address violations of our Terms of Use or agreements for other Services; and\ncomply with applicable security laws and regulations."))),(0,r.kt)("h2",{id:"user-support"},"User Support"),(0,r.kt)("p",null,"We may use information we collect to provide support, including to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"direct questions to the appropriate support person;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"investigate and address user concerns; and")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"monitor and improve our customer support responses and processes."))),(0,r.kt)("h2",{id:"research-and-development"},"Research and Development"),(0,r.kt)("p",null,"We may use the information we collect for testing, research, analysis, and product development to improve your experience. This helps us to improve and enhance the safety and security of our Services, improve our ability to prevent the use of our Services for illegal or improper purposes and develop new features and products relating to our Services."),(0,r.kt)("h2",{id:"legal-and-regulatory-compliance"},"Legal and Regulatory Compliance"),(0,r.kt)("p",null,"We may verify your identity by comparing the personal information you provide against third-party databases and public records. We may use the information we collect to investigate or address claims or disputes relating to use of our Services, or as otherwise allowed by applicable law, or as requested by regulators, government entities, and official inquiries."),(0,r.kt)("h2",{id:"direct-marketing"},"Direct Marketing"),(0,r.kt)("p",null,'We may use the information we collect to market our Services to you. This may include sending you communications about our Services, features, promotions, surveys, news, updates, and events, and managing your participation in these promotions and events. If you do not want us to send you marketing communications, please opt out by selecting "unsubscribe" to any marketing email sent by us or by contacting us at ',(0,r.kt)("a",{parentName:"p",href:"mailto:LmaxGroup@gmail.com"},"LmaxGroup@gmail.com"),"."),(0,r.kt)("h2",{id:"how-we-share--disclose-information"},"How We Share & Disclose Information"),(0,r.kt)("p",null,"We may share your information in the following circumstances:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"With Your Consent. For example, you may let us share personal information with others for their own marketing uses. Those uses will be subject to their privacy policies.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To Comply with Our Legal Obligations. We may share your information: (A) to cooperate with government or regulatory investigations; (B) when we are compelled to do so by a subpoena, court order, or similar legal procedure; (C) when we believe in good faith that the disclosure of personal information is necessary to prevent harm to another person; (D) to report suspected illegal activity; or (E) to investigate violations of our User Agreement or any other applicable policies.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"With Service Providers. We may share your information with service providers who help facilitate business and compliance operations such as marketing and technology services. Our contracts require these service providers to only use your information in connection with the services they perform for us.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"During a Change to Our Business. If we engage in a merger, acquisition, bankruptcy, dissolution, reorganization, sale of some or all of our assets or stock, financing, public offering of securities, acquisition of all or a portion of our business, a similar transaction or proceeding, or steps in contemplation of such activities, some or all of your information may be shared or transferred, subject to standard confidentiality arrangements.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Aggregated or De-identified Data. We may share aggregated and/or anonymized data with others for their own uses."))),(0,r.kt)("h2",{id:"data-retention"},"Data Retention"),(0,r.kt)("p",null,"To view or update your information, contact us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:LmaxGroup@gmail.com."},"LmaxGroup@gmail.com.")," We store your information throughout the life of your use of the Protocol and retain your information for a minimum of five (5) years to comply with our legal obligations or to resolve disputes. If you cease using the Protocol, we will neither use your information for any further purposes, nor sell or share your information with third parties, except as necessary to prevent fraud and assist law enforcement, as required by law, or in accordance with this Policy."),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("p",null,"We maintain administrative, technical and physical safeguards designed to protect the personal information we maintain against unauthorized access or disclosure. No system can be completely secure. Therefore, although we take steps to secure your information, we cannot guarantee that your information, searches, or other communication will always remain secure. You are responsible for all activity on the Protocol relating to any of your Ethereum network addresses and/or cryptocurrency wallets."),(0,r.kt)("h2",{id:"age-limitations"},"Age Limitations"),(0,r.kt)("p",null,"To the extent prohibited by applicable law, we do not allow use of our Services and Sites by anyone younger than the legal age in the jurisdiction in which the user resides. If you learn that anyone younger than the legal age has unlawfully provided us with personal data, please contact us at Lmax ",(0,r.kt)("a",{parentName:"p",href:"mailto:Group@gmail.com"},"Group@gmail.com")," and we will take steps to delete such information, close any such accounts, and, to the extent possible, prevent the user from continuing to use our Services."),(0,r.kt)("h2",{id:"changes-to-this-policy"},"Changes to This Policy"),(0,r.kt)("p",null,"If we make any changes, we will change the Last Updated date above. We encourage you to review this Policy to stay informed. If we make material changes, we will provide additional notice, such as via the email specified in your account or through the Services or Sites."),(0,r.kt)("h2",{id:"online-tracking-opt-out-guide"},"Online Tracking Opt-out Guide"),(0,r.kt)("p",null,"Like many companies online, we use services provided by Google and other companies that use tracking technology. These services rely on tracking technologies-such as cookies and web beacons-to collect directly from your device information about your browsing activities, your interactions with websites, and the device you are using to connect to the Internet. There are a number of ways to opt out of having your online activity and device data collected through these services, which we have summarized below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Blocking cookies in your browser. Most browsers let you remove or reject cookies, including cookies used for interest-based advertising. To do this, follow the instructions in your browser settings. Many browsers accept cookies by default until you change your settings. For more information about cookies, including how to see what cookies have been set on your device and how to manage and delete them, visit ",(0,r.kt)("a",{parentName:"p",href:"http://www.allaboutcookies.org"},"www.allaboutcookies.org"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Blocking advertising ID use in your mobile settings. Your mobile device settings may provide functionality to limit use of the advertising ID associated with your mobile device for interest-based advertising purposes. Using privacy plug-ins or browsers. You can block our websites from setting cookies used for interest-based ads by using a browser with privacy features.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Platform opt-outs. The following advertising partner offers opt-out features that let you opt-out of use of your information for interest-based advertising - Google: ",(0,r.kt)("a",{parentName:"p",href:"https://adssettings.google.com."},"https://adssettings.google.com.")," Advertising industry opt-out tools. You can also use the opt-out options set forth below to limit use of your information for interest-based advertising by participating companies. Note that because these opt-out mechanisms are specific to the device or browser on which they are exercised, you will need to opt out on every browser and device that you use. Digital Advertising Alliance: ",(0,r.kt)("a",{parentName:"p",href:"http://optout.aboutads.info"},"http://optout.aboutads.info")," Network Advertising Initiative: ",(0,r.kt)("a",{parentName:"p",href:"http://optout.networkadvertising.org/"},"http://optout.networkadvertising.org/")))),(0,r.kt)("h2",{id:"notice-to-california-residents---ccpa-scope-and-exclusions"},"Notice to California Residents - CCPA Scope and Exclusions"),(0,r.kt)("p",null,"This California Consumer Privacy Act of 2018 (CCPA) Notice, including the description of our Privacy Practices and your Privacy Rights, apply only to California residents whose interactions with us are limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"visiting our consumer websites; and")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"signing up for email alerts; and This CCPA Notice does not apply to the personal information we collect, use or disclose about:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"individuals who provide information to us to initiate or complete the process of interacting with our platform, which are subject to the notice set forth in the Additional Disclosure section of this Policy.; or")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"representatives of businesses that seek to obtain our products or services, or to provide products or services to us."))),(0,r.kt)("h2",{id:"privacy-practices"},"Privacy Practices"),(0,r.kt)("p",null,'We do not "sell" the personal information we collect (as such term is defined in the CCPA) for monetary value (and will not sell it without providing a right to opt out). Like many companies, we may use third-party cookies for our advertising purposes. If you would like to learn how you may opt out of our use of cookies and other tracking technologies, please review the instructions provided in the Online Tracking Opt-out Guide section of this Policy.'),(0,r.kt)("h2",{id:"privacy-rights"},"Privacy Rights"),(0,r.kt)("p",null,"The CCPA grants individuals the following rights:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Information. You can request information about how we have collected, used and shared your personal information during the past 12 months. For details about the personal information we have collected over the last 12 months, including the categories of sources, please see the What We Collect section of this Policy. We collect this information for the business and commercial purposes described in the How We Use Information section of this Policy. We share this information with the categories of third parties described in the How We Share and Disclose Information section of this Policy.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Access. You can request a copy of the personal information that we maintain about you.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deletion. You can ask us to delete the personal information that we collected or maintain about you."))),(0,r.kt)("p",null,"Please note that the CCPA limits these rights by, for example, prohibiting us from providing certain sensitive information in response to an access request and limiting the circumstances in which we must comply with a deletion request. We will also respond to requests for information and access only to the extent we are able to associate with a reasonable effort the information we maintain with the identifying details you provide in your request. If we deny your request, we will communicate our decision to you. You are entitled to exercise the rights described above free from discrimination."),(0,r.kt)("h2",{id:"how-to-submit-a-request"},"How to Submit a Request"),(0,r.kt)("p",null,"To request access to or deletion of personal information to ",(0,r.kt)("a",{parentName:"p",href:"mailto:LmaxGroup@gmil.com"},"LmaxGroup@gmil.com")),(0,r.kt)("h2",{id:"identity-verification"},"Identity Verification"),(0,r.kt)("p",null,"The CCPA requires us to verify the identity of the individual submitting a request to access or delete personal information before providing a substantive response to the request. We will ask you to verify your identity when you submit a request."),(0,r.kt)("h2",{id:"authorized-agents"},"Authorized Agents"),(0,r.kt)("p",null,'California residents can empower an "authorized agent" to submit requests on their behalf. We will require the authorized agent to have a written authorization confirming that authority.'),(0,r.kt)("h2",{id:"additional-disclosure-for-our-consumers-and-customers"},"Additional Disclosure for Our Consumers and Customers"),(0,r.kt)("p",null,"This Additional Disclosure governs our collection, use and sharing of personal information that users provide to us to initiate or complete the process of interacting with the Protocol. To the extent there are conflicting provisions between this Additional Disclosure and other sections of the Privacy Policy, the Additional Disclosure will govern."),(0,r.kt)("p",null,"The types of personal information we collect and share can include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contact details")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transaction history")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cryptocurrency balances and wallets When you are no longer our customer, we continue to share your information as described in this notice."))),(0,r.kt)("h2",{id:"reasons-we-can-share-your-personal-information"},"Reasons We Can Share Your Personal Information"),(0,r.kt)("p",null,"We need to share users' personal information to operate certain aspects of the Protocol and our business. Below, whether we share your personal information, the reasons we share your personal information and whether you can limit this sharing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We share users' personal information for our everyday business purposes, such as to process and match your orders and respond to court orders and legal investigations. You cannot limit our sharing of this information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We share users' personal information for our marketing purposes, such as to offer our products and services to you. You cannot limit our sharing of this information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We do not share users' personal information for joint marketing with financial companies.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We do not share users' personal information for our affiliates' everyday business purposes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We do not share users' personal information for our affiliates to market to you.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We do not share users' personal information for nonaffiliates to market to you."))),(0,r.kt)("p",null,'"Affiliates" refer to companies related by common ownership or control; "nonaffiliates" refer to companies no related by common ownership or control; and "joint marketing" refers to a formal agreement between nonaffiliated financial companies that together market financial products or services to you.'),(0,r.kt)("h2",{id:"how-does-lmax-group-protect-my-personal-information"},"How Does Lmax group Protect My Personal Information?"),(0,r.kt)("p",null,"To protect your personal information from unauthorized access and use, we use security measures that comply with applicable law. These measures include computer safeguards and secured files and buildings."),(0,r.kt)("h2",{id:"how-does-ondo-collect-my-personal-information"},"How Does Ondo Collect My Personal Information?"),(0,r.kt)("p",null,"We collect your personal information, for example, when you deposit Digital Assets in the Protocol, make transactions using the Protocol, or withdraw Digital Assets from the Protocol. We may also collect your personal information from other companies."),(0,r.kt)("h2",{id:"contact-us"},"Contact Us"),(0,r.kt)("p",null,"Please contact us if you have any questions about this Policy or if you are seeking to exercise any of your statutory rights. Subject to applicable laws, we will respond within a reasonable timeframe. You may contact us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:LmaxGroup@gmail.com"},"LmaxGroup@gmail.com"),"."))}d.isMDXComponent=!0}}]);