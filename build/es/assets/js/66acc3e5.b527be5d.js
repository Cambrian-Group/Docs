"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[1212],{3905:function(e,n,l){l.d(n,{Zo:function(){return p},kt:function(){return g}});var i=l(67294);function t(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function o(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,i)}return l}function r(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?o(Object(l),!0).forEach((function(n){t(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function a(e,n){if(null==e)return{};var l,i,t=function(e,n){if(null==e)return{};var l,i,t={},o=Object.keys(e);for(i=0;i<o.length;i++)l=o[i],n.indexOf(l)>=0||(t[l]=e[l]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)l=o[i],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(t[l]=e[l])}return t}var c=i.createContext({}),u=function(e){var n=i.useContext(c),l=n;return e&&(l="function"==typeof e?e(n):r(r({},n),e)),l},p=function(e){var n=u(e.components);return i.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var l=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(l),g=t,m=d["".concat(c,".").concat(g)]||d[g]||s[g]||o;return l?i.createElement(m,r(r({ref:n},p),{},{components:l})):i.createElement(m,r({ref:n},p))}));function g(e,n){var l=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=l.length,r=new Array(o);r[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:t,r[1]=a;for(var u=2;u<o;u++)r[u]=l[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,l)}d.displayName="MDXCreateElement"},97803:function(e,n,l){l.r(n),l.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var i=l(83117),t=l(80102),o=(l(67294),l(3905)),r=["components"],a={},c="celocli plugins",u={unversionedId:"command-line-interface/plugins",id:"command-line-interface/plugins",title:"celocli plugins",description:"list installed plugins",source:"@site/docs/command-line-interface/plugins.md",sourceDirName:"command-line-interface",slug:"/command-line-interface/plugins",permalink:"/es/command-line-interface/plugins",editUrl:"https://celo.crowdin.com/celo-docs/es",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"celocli oracle",permalink:"/es/command-line-interface/oracle"},next:{title:"celocli releasegold",permalink:"/es/command-line-interface/releasegold"}},p=[{value:"<code>celocli plugins</code>",id:"celocli-plugins-1",children:[],level:2},{value:"<code>celocli plugins:install PLUGIN...</code>",id:"celocli-pluginsinstall-plugin",children:[],level:2},{value:"<code>celocli plugins:link PLUGIN</code>",id:"celocli-pluginslink-plugin",children:[],level:2},{value:"<code>celocli plugins:uninstall PLUGIN...</code>",id:"celocli-pluginsuninstall-plugin",children:[],level:2},{value:"<code>celocli plugins:update</code>",id:"celocli-pluginsupdate",children:[],level:2}],s={toc:p};function d(e){var n=e.components,l=(0,t.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"celocli-plugins"},(0,o.kt)("inlineCode",{parentName:"h1"},"celocli plugins")),(0,o.kt)("p",null,"list installed plugins"),(0,o.kt)("h2",{id:"celocli-plugins-1"},(0,o.kt)("inlineCode",{parentName:"h2"},"celocli plugins")),(0,o.kt)("p",null,"list installed plugins"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"list installed plugins\n\nUSAGE\n  $ celocli plugins\n\nOPTIONS\n  --core  show core plugins\n\nEXAMPLE\n  $ celocli plugins\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/oclif/plugin-plugins/blob/v1.9.5/src/commands/plugins/index.ts"},"@oclif/plugin-plugins"))),(0,o.kt)("h2",{id:"celocli-pluginsinstall-plugin"},(0,o.kt)("inlineCode",{parentName:"h2"},"celocli plugins:install PLUGIN...")),(0,o.kt)("p",null,"installs a plugin into the CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"installs a plugin into the CLI\nCan be installed from npm or a git url.\n\nInstallation of a user-installed plugin will override a core plugin.\n\ne.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in the CLI without the need to patch and update the whole CLI.\n\n\nUSAGE\n  $ celocli plugins:install PLUGIN...\n\nARGUMENTS\n  PLUGIN  plugin to install\n\nOPTIONS\n  -f, --force    yarn install with force flag\n  -h, --help     show CLI help\n  -v, --verbose\n\nDESCRIPTION\n  Can be installed from npm or a git url.\n\n  Installation of a user-installed plugin will override a core plugin.\n\n  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed\n  plugin with a 'hello' command will override the core plugin implementation. This is\n  useful if a user needs to update core plugin functionality in the CLI without the need\n  to patch and update the whole CLI.\n\n\nALIASES\n  $ celocli plugins:add\n\nEXAMPLES\n  $ celocli plugins:install myplugin\n\n  $ celocli plugins:install https://github.com/someuser/someplugin\n\n  $ celocli plugins:install someuser/someplugin\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/oclif/plugin-plugins/blob/v1.9.5/src/commands/plugins/install.ts"},"@oclif/plugin-plugins"))),(0,o.kt)("h2",{id:"celocli-pluginslink-plugin"},(0,o.kt)("inlineCode",{parentName:"h2"},"celocli plugins:link PLUGIN")),(0,o.kt)("p",null,"links a plugin into the CLI for development"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"links a plugin into the CLI for development\nInstallation of a linked plugin will override a user-installed or core plugin.\n\ne.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' command will override the user-installed or core plugin implementation. This is useful for development work.\n\n\nUSAGE\n  $ celocli plugins:link PLUGIN\n\nARGUMENTS\n  PATH  [default: .] path to plugin\n\nOPTIONS\n  -h, --help     show CLI help\n  -v, --verbose\n\nDESCRIPTION\n  Installation of a linked plugin will override a user-installed or core plugin.\n\n  e.g. If you have a user-installed or core plugin that has a 'hello' command,\n  installing a linked plugin with a 'hello' command will override the user-installed or\n  core plugin implementation. This is useful for development work.\n\n\nEXAMPLE\n  $ celocli plugins:link myplugin\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/oclif/plugin-plugins/blob/v1.9.5/src/commands/plugins/link.ts"},"@oclif/plugin-plugins"))),(0,o.kt)("h2",{id:"celocli-pluginsuninstall-plugin"},(0,o.kt)("inlineCode",{parentName:"h2"},"celocli plugins:uninstall PLUGIN...")),(0,o.kt)("p",null,"removes a plugin from the CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"removes a plugin from the CLI\n\nUSAGE\n  $ celocli plugins:uninstall PLUGIN...\n\nARGUMENTS\n  PLUGIN  plugin to uninstall\n\nOPTIONS\n  -h, --help     show CLI help\n  -v, --verbose\n\nALIASES\n  $ celocli plugins:unlink\n  $ celocli plugins:remove\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/oclif/plugin-plugins/blob/v1.9.5/src/commands/plugins/uninstall.ts"},"@oclif/plugin-plugins"))),(0,o.kt)("h2",{id:"celocli-pluginsupdate"},(0,o.kt)("inlineCode",{parentName:"h2"},"celocli plugins:update")),(0,o.kt)("p",null,"update installed plugins"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"update installed plugins\n\nUSAGE\n  $ celocli plugins:update\n\nOPTIONS\n  -h, --help     show CLI help\n  -v, --verbose\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/oclif/plugin-plugins/blob/v1.9.5/src/commands/plugins/update.ts"},"@oclif/plugin-plugins"))))}d.isMDXComponent=!0}}]);