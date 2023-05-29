"use strict";(self.webpackChunkcelo_docs=self.webpackChunkcelo_docs||[]).push([[1945],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73172:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],s={title:"Celo Monitoring",description:"Commands, metrics, APIs, and services for monitoring Validators and Proxies."},l="Monitoring",d={unversionedId:"validator-guide/monitoring",id:"validator-guide/monitoring",title:"Celo Monitoring",description:"Commands, metrics, APIs, and services for monitoring Validators and Proxies.",source:"@site/docs/validator-guide/monitoring.md",sourceDirName:"validator-guide",slug:"/validator-guide/monitoring",permalink:"/validator-guide/monitoring",editUrl:"",tags:[],version:"current",frontMatter:{title:"Celo Monitoring",description:"Commands, metrics, APIs, and services for monitoring Validators and Proxies."}},p=[{value:"Monitoring Validators and Proxies",id:"monitoring-validators-and-proxies",children:[{value:"Logging",id:"logging",children:[],level:3},{value:"Metrics",id:"metrics",children:[],level:3},{value:"Memory metrics",id:"memory-metrics",children:[],level:3},{value:"CPU metrics",id:"cpu-metrics",children:[],level:3},{value:"Network metrics",id:"network-metrics",children:[],level:3},{value:"Blockchain metrics",id:"blockchain-metrics",children:[],level:3},{value:"Validator health metrics",id:"validator-health-metrics",children:[],level:3},{value:"Consensus metrics",id:"consensus-metrics",children:[],level:3},{value:"Network consensus health metrics",id:"network-consensus-health-metrics",children:[],level:3},{value:"Management APIs",id:"management-apis",children:[],level:3}],level:2},{value:"Monitoring Attestation Service",id:"monitoring-attestation-service",children:[],level:2},{value:"Community Moniting Tools",id:"community-moniting-tools",children:[{value:"Vladiator Labs Signature & Attestation Viewer (Celo Vido)",id:"vladiator-labs-signature--attestation-viewer-celo-vido",children:[],level:3},{value:"Virtual Hive Celo Network Validator Exporter",id:"virtual-hive-celo-network-validator-exporter",children:[],level:3}],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoring"},"Monitoring"),(0,o.kt)("p",null,"Commands, metrics, APIs, and services for monitoring Validators and Proxies."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"monitoring-validators-and-proxies"},"Monitoring Validators and Proxies"),(0,o.kt)("h3",{id:"logging"},"Logging"),(0,o.kt)("p",null,"Several command line options control logging:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--verbosity"),": Sets logging verbosity. ",(0,o.kt)("inlineCode",{parentName:"p"},"3")," outputs logs up to ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO")," level and is recommended. ",(0,o.kt)("inlineCode",{parentName:"p"},"4")," outputs up to ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG")," level; ",(0,o.kt)("inlineCode",{parentName:"p"},"5")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"TRACE"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--vmodule"),": Overrides this verblosity in specific modules. For example, to configure ",(0,o.kt)("inlineCode",{parentName:"p"},"TRACE")," level logging of consensus activity, use ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus/istanbul/*=5"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--consoleoutput"),": Sends output to the given path, or to ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"(Deprecatedin v1.5) ",(0,o.kt)("inlineCode",{parentName:"p"},"--consoleformat"),": Formats logs for easy viewing in a terminal (",(0,o.kt)("inlineCode",{parentName:"p"},"term"),"), or as structured JSON (",(0,o.kt)("inlineCode",{parentName:"p"},"json"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"(Introduced in v1.5) ",(0,o.kt)("inlineCode",{parentName:"p"},"--log.json"),": Formats logs as structured JSON (",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"), or for easy viewing in a terminal (",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", default option)."))),(0,o.kt)("p",null,"Useful messages to record or set up log-based metrics on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'msg="Validator Election Results"'),": When the last block of any epoch (",(0,o.kt)("inlineCode",{parentName:"p"},"number"),") has been agreed, ",(0,o.kt)("inlineCode",{parentName:"p"},"elected")," shows whether the validator was selected in the validator election.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'msg="Elected but didn\'t sign block"'),": This validator was elected but did not have its signature included in the block given by ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," (in fact, in the child's parent seal). This block could count towards downtime if 12 successive blocks are missed."))),(0,o.kt)("h3",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"Celo Blockchain inherits ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/go-ethereum/wiki/Metrics-and-Monitoring"},"go-ethereum's metrics")," system, but additional Celo-specific metrics have been added."),(0,o.kt)("p",null,"Metrics reporting is enabled with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--metrics")," flag."),(0,o.kt)("p",null,"Pull-based metrics are available using the ",(0,o.kt)("inlineCode",{parentName:"p"}," --pprof")," flag. This enables the ",(0,o.kt)("inlineCode",{parentName:"p"},"pprof")," debugging HTTP server, by default on ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:6060"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"--pprof.addr")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--pprof.port")," options can be used to configure the interface and port respectively. If the node is running inside a Docker container, you will need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"--pprof.addr 0.0.0.0"),", then on your Docker command line add ",(0,o.kt)("inlineCode",{parentName:"p"},"-p 127.0.0.1:6060:6060"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Be sure never to expose the ",(0,o.kt)("inlineCode",{parentName:"p"},"pprof")," service to the public internet."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io"},"Prometheus")," format metrics are available at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:6060/debug/metrics/prometheus"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://golang.org/pkg/expvar/"},"ExpVar")," format metrics are available at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:6060/debug/metrics"),".  "),(0,o.kt)("p",null,"Support for pushing metrics to ",(0,o.kt)("a",{parentName:"p",href:"https://www.influxdata.com/products/influxdb-overview/"},"InfluxDB")," is available via ",(0,o.kt)("inlineCode",{parentName:"p"},"--metrics.influxdb")," and related flags. This works without the ",(0,o.kt)("inlineCode",{parentName:"p"},"pprof")," server."),(0,o.kt)("p",null,"Note that metric name separators differ between these endpoints."),(0,o.kt)("p",null,"All metrics are soft-state and are cleared when the process is restarted."),(0,o.kt)("h3",{id:"memory-metrics"},"Memory metrics"),(0,o.kt)("p",null,"Memory metrics derived from ",(0,o.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/go-graphite/carbonzipper/mstats"},"mstats"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"system_memory_held"),": Gauge of virtual address space allocated by the Celo Blockchain process, measured in bytes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"system_memory_used"),": Gauge of Memory in use by the Celo Blockchain process, measured as bytes of allocated heap objects."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"system_memory_allocs"),": Counter for memory allocations made, measured in bytes. Consider monitoring the rate."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"system_memory_pauses"),": Counter for stop-the-world Garbage Collection pauses, measured in nanoseconds. Consider monitoring the rate.")),(0,o.kt)("h3",{id:"cpu-metrics"},"CPU metrics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"system_cpu_sysload"),": Gauge of load average for the system."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"system_cpu_syswait"),": Gauge of IO wait time for the system."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"system_cpu_procload"),": Gauge of load average for the Celo Blockchain process.")),(0,o.kt)("h3",{id:"network-metrics"},"Network metrics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"p2p_peers"),": The number of connected peers. This should remain at exactly ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," for a proxied validator (just its proxy). It should remain at a relatively steady level for proxy nodes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"p2p_ingress"),": Counter for total inbound traffic, measured in bytes. Consider monitoring the rate.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"p2p_egress"),": Counter for total outbound traffic, measured in bytes. Consider monitoring the rate.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"p2p_dials"),": Counter for outbound connection attempts. Consider monitoring the rate.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"p2p_serves"),": Counter for accepted inbound connection attempts. Consider monitoring the rate."))),(0,o.kt)("h3",{id:"blockchain-metrics"},"Blockchain metrics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"chain_inserts_count"),": The count of insertions of new blocks into this node's chain. The rate of this metric should be close to constant at ",(0,o.kt)("inlineCode",{parentName:"li"},"0.2")," /second.")),(0,o.kt)("h3",{id:"validator-health-metrics"},"Validator health metrics"),(0,o.kt)("p",null,"A number of metrics are tracked for the parent of the last sealed block received (i.e. this is always two fewer than the current consensus sequence):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"consensus_istanbul_blocks_elected"),": Counts the number of blocks for which this validator has been elected")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"consensus_istanbul_blocks_signedbyus"),": Counts the blocks for which this validator was elected and its signature was included in the seal. This means the validator completed consensus correctly, sent a ",(0,o.kt)("inlineCode",{parentName:"p"},"COMMIT"),", its commit was received in time to make the seal of the parent received by the next proposer, or was received directly by the next proposer itself, and so the block will not count as downtime. Consider monitoring the rate.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"consensus_istanbul_blocks_missedbyus"),": Counts the blocks for which this validator was elected but not included in the child's parent seal (this block could count towards downtime if 12 successive blocks are missed).  Consider monitoring the rate.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"consensus_istanbul_blocks_missedbyusinarow"),": (",(0,o.kt)("em",{parentName:"p"},"since 1.0.2"),") Counts the blocks for which this validator was elected but not included in the child's parent seal in a row.  Consider monitoring the gauge.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"consensus_istanbul_blocks_proposedbyus"),": (",(0,o.kt)("em",{parentName:"p"},"since 1.0.2"),") Counts the blocks for which this validator was elected and for which a block it proposed was succesfully included in the chain. Consider monitoring the rate.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"consensus_istanbul_blocks_downtimeevent"),": (",(0,o.kt)("em",{parentName:"p"},"since 1.0.2"),") Counts the blocks for which this validator was elected and for blocks where it is considered down (occurs when ",(0,o.kt)("inlineCode",{parentName:"p"},"missedbyusinarow")," is >= 12). Consider monitoring the rate."))),(0,o.kt)("h3",{id:"consensus-metrics"},"Consensus metrics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"consensus_istanbul_core_desiredround"),": Current desired round for this validator, i.e the round we are waiting to see a quorum of validators send ",(0,o.kt)("inlineCode",{parentName:"p"},"RoundChange")," messages for. Usually this value should be ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),". Desired rounds increment with each timeout, which backoff exponentially. A value of ",(0,o.kt)("inlineCode",{parentName:"p"},"5")," indicates consensus has stalled for more than 30 seconds. Values above that means the validator is unable to participate in quorum (either because it is disconnected, out of sync, etc, or because of network partition or failure of other validators).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"consensus_istanbul_core_round"),": : Current consensus round for this validator, i.e the round for which this validator has received a quorum of ",(0,o.kt)("inlineCode",{parentName:"p"},"RoundChange")," messages. Usually this value should be ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),". If this value is less than ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus_istanbul_core_desiredround")," the validator is not connected to a quorum of other validators that are also unable to participate (for instance, they did see a proposed block, but this validator did not). If it is equal, it means the validator remains connected to a quorum of other validators but cannot agree on a block.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"consensus_istanbul_core_sequence"),": Current consensus sequence number, i.e the block number currently being proposed."))),(0,o.kt)("h3",{id:"network-consensus-health-metrics"},"Network consensus health metrics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"consensus_istanbul_blocks_totalsigs"),": The number of validators whose signatures were included in the child's parent seal. This can be used to determine how many validators are up and contributing to consensus. If this number falls towards two thirds of validator set size, network block production is at risk.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"consensus_istanbul_blocks_missedrounds"),": Sum of the ",(0,o.kt)("inlineCode",{parentName:"p"},"round")," included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"parentAggregatedSeal")," for the blocks seen. That is, the cumulative number of consensus round changes these blocks needed to make to get to this agreed block. This metric is only incremented when a block is succesfully produced after consensus rounds fails, indicating down validators or network issues.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"consensus_istanbul_blocks_missedroundsasproposer"),": (",(0,o.kt)("em",{parentName:"p"},"since 1.0.2"),") A meter noting when this validator was elected and could have proposed a block with their signature but did not. In some cases this could be required by the Istanbul BFT protocol.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"consensus_istanbul_blocks_validators"),": (",(0,o.kt)("em",{parentName:"p"},"since 1.0.2"),") Total number of validators eligible to sign blocks.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"consensus_istanbul_core_consensus_count"),": Count and timer for succesful completions of consensus (Use ",(0,o.kt)("inlineCode",{parentName:"p"},"quantile")," tag to find percentiles: ",(0,o.kt)("inlineCode",{parentName:"p"},"0.5"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0.75"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0.95"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0.99"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"0.999"),")"))),(0,o.kt)("h3",{id:"management-apis"},"Management APIs"),(0,o.kt)("p",null,"Celo blockchain inherits and extends go-ethereum's Javascript console, exposing ",(0,o.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/docs/rpc/server"},"management APIs")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/wiki/wiki/JavaScript-API"},"web3 DApp APIs"),"."),(0,o.kt)("p",null,"Connect a client using a variant of the ",(0,o.kt)("inlineCode",{parentName:"p"},"attach")," command line option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"geth attach --datadir DATADIR\ngeth attach ipc:PATH/TO/geth.ipc\ngeth attach http://localhost:8545\ngeth attach ws://localhost:8546\n")),(0,o.kt)("h2",{id:"monitoring-attestation-service"},"Monitoring Attestation Service"),(0,o.kt)("p",null,"It is also important to ",(0,o.kt)("a",{parentName:"p",href:"/validator-guide/attestation-service#monitoring"},"monitor Attestation Service")," and the full node that it depends on."),(0,o.kt)("h2",{id:"community-moniting-tools"},"Community Moniting Tools"),(0,o.kt)("h3",{id:"vladiator-labs-signature--attestation-viewer-celo-vido"},(0,o.kt)("a",{parentName:"h3",href:"https://vido.vladiatorlabs.io/block-map"},"Vladiator Labs Signature & Attestation Viewer (Celo Vido)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visualizer of current and historic data on validator signatures collected in each block on Mainnet and Baklava."),(0,o.kt)("li",{parentName:"ul"},"Visualizer of current and historic attestation requests and completions, and attestation endpoint versions and status on Mainnet and Baklava.")),(0,o.kt)("h3",{id:"virtual-hive-celo-network-validator-exporter"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/virtualhive/celo-network-validator-exporter"},"Virtual Hive Celo Network Validator Exporter")),(0,o.kt)("p",null,"Prometheus exporter that scrapes downtime and meta information for a specified validator signer address from the Celo blockchain. All data is collected from a blockchain node via RPC."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Please raise a Pull Request against ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/celo-org/celo-monorepo/blob/master/packages/docs/celo-holder-guide/voting-validators.md"},"this page")," to add/amend details of any community services!")))}m.isMDXComponent=!0}}]);