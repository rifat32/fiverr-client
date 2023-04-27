"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8216],{88216:function(t,e){function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(e,"__esModule",{value:!0}),e.networkById=e.default=void 0;var c="rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn",a="TVau3x4zuCaAWN6oX2b8BTputTrJSPTGx8",s="0xd41c4805a9a3128f9f7a7074da25965371ba50d5",i="9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E",d=function(t){return t.startsWith("0x")?/^0x[a-zA-Z0-9]{40}$/.test(t)?void 0:"Address should be like ".concat(s):"Address should start with 0x"},p={placeholder:s,validator:d,erc20:!0},m={ETH:n(n({},p),{},{name:"Ethereum",shortName:"Ethereum",slither:"",symbol:"ETH",makeExplorerTxLink:function(t){return"https://etherscan.io/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://etherscan.io/address/".concat(t)},makeExplorerLink:function(t){return"https://etherscan.io/token/".concat(t)},feesCheckerContract:"0x7F97A0db6309003d4F0CB00D237dc9a85B400488",lockerFactory:"0x269D4d211CBc9845B006128717eE51b0D6524955",listed:!0,chainId:1,rpc:"https://mainnet.infura.io/v3/08162b8c23874ad6a075fb1eb700178b",routerAddress:"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",dividentTracker:"0x687D7a1a6fF81974ed101557b98030d77e905a0d"}),BSC:n(n({},p),{},{name:"Binance Smart Chain",shortName:"BSC",slither:"bsc",symbol:"BNB",makeExplorerTxLink:function(t){return"https://bscscan.com/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://bscscan.com/address/".concat(t)},makeExplorerLink:function(t){return"https://bscscan.com/token/".concat(t)},feesCheckerContract:"0xA127ddf1747adcbE45a15dcadF69a844492424a6",lockerFactory:"0x269D4d211CBc9845B006128717eE51b0D6524955",listed:!0,chainId:56,rpc:"https://bsc-dataseed.binance.org/",routerAddress:"0x10ED43C718714eb63d5aA57B78B54704E256024E",dividentTracker:"0x9795DcF2CfEe83456bCD4801eeB7a7f9c7A7551B"}),MATIC:n(n({},p),{},{name:"Matic",shortName:"Matic",slither:"poly",symbol:"MATIC",makeExplorerTxLink:function(t){return"https://polygonscan.com/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://polygonscan.com/address/".concat(t)},makeExplorerLink:function(t){return"https://polygonscan.com/token/".concat(t)},feesCheckerContract:"0xcD9d5f112828839f0D470E7b26f186167493EcF7",lockerFactory:"0x269D4d211CBc9845B006128717eE51b0D6524955",listed:!0,chainId:137,rpc:"https://polygon-rpc.com",routerAddress:"0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",dividentTracker:"0xEC8eea03ec866514F8e7Caa2131f1c4B4564d974"}),AVAX:n(n({},p),{},{name:"Avalanche",shortName:"Avax",slither:"avax",symbol:"AVAX",makeExplorerTxLink:function(t){return"https://snowtrace.io/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://snowtrace.io/address/".concat(t)},makeExplorerLink:function(t){return"https://snowtrace.io/token/".concat(t)},lockerFactory:"0x269D4d211CBc9845B006128717eE51b0D6524955",feesCheckerContract:"0x7F97A0db6309003d4F0CB00D237dc9a85B400488",feesCheckerContract2:"0xf1d320D75650b95e3a5c4b6942a7488bEa5EE519",listed:!0,chainId:43114,rpc:"https://api.avax.network/ext/bc/C/rpc",routerAddress:"0x60aE616a2155Ee3d9A68541Ba4544862310933d4"}),CRO:n(n({},p),{},{name:"Cronos",shortName:"Cronos",symbol:"CRO",makeExplorerTxLink:function(t){return"https://cronoscan.com/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://cronoscan.com/address/".concat(t)},makeExplorerLink:function(t){return"https://cronoscan.com/token/".concat(t)},lockerFactory:"0x269D4d211CBc9845B006128717eE51b0D6524955",listed:!0,chainId:25,rpc:"https://evm.cronos.org",routerAddress:"0xcd7d16fB918511BF7269eC4f48d61D79Fb26f918"}),DOGE:n(n({name:"Doge",shortName:"Doge",symbol:"DOGE",makeExplorerTxLink:function(t){return"https://explorer.dogechain.dog/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://explorer.dogechain.dog/address/".concat(t)},makeExplorerLink:function(t){return"https://explorer.dogechain.dog/token/".concat(t)}},p),{},{listed:!0,chainId:2e3,rpc:"https://rpc01-sg.dogechain.dog"}),ONE:n(n({},p),{},{name:"Harmony One",shortName:"One",symbol:"ONE",makeExplorerTxLink:function(t){return"https://explorer.harmony.one/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://explorer.harmony.one/address/".concat(t)},makeExplorerLink:function(t){return"https://explorer.harmony.one/token/".concat(t)},lockerFactory:"0x097f5E933306ad0EbB1c0027B223a3dd153520BE",listed:!0,chainId:16666e5,rpc:"https://api.harmony.one"}),FTM:n(n({},p),{},{name:"Fantom",shortName:"Fantom",slither:"ftm",symbol:"FTM",makeExplorerTxLink:function(t){return"https://ftmscan.com/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://ftmscan.com/address/".concat(t)},makeExplorerLink:function(t){return"https://ftmscan.com/token/".concat(t)},lockerFactory:"0x269D4d211CBc9845B006128717eE51b0D6524955",listed:!0,chainId:250,rpc:"https://rpc.ankr.com/fantom/",routerAddress:"0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"}),KCC:n(n({},p),{},{name:"KuCoin",shortName:"KuCoin",symbol:"KCS",makeExplorerTxLink:function(t){return"https://explorer.kcc.io/en/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://explorer.kcc.io/en/address/".concat(t)},makeExplorerLink:function(t){return"https://explorer.kcc.io/en/token/".concat(t)},listed:!0,rpc:"https://rpc-mainnet.kcc.network",chainId:321,routerAddress:"0xa58350d6dee8441aa42754346860e3545cc83cda"}),TRX:{name:"Tron",shortName:"Tron",symbol:"TRX",makeExplorerTxLink:function(t){return"https://tronscan.org/#/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://tronscan.org/#/address/".concat(t)},makeExplorerLink:function(t){return"https://tronscan.org/#/transaction/".concat(t)},placeholder:a,validator:function(t){return t.startsWith("T")?/^T[a-zA-Z0-9]{33}$/.test(t)?void 0:"TRX address should be like ".concat(a):"TRX address should start with T"},listed:!0},XRP:{name:"XRP",shortName:"XRP",symbol:"XRP",makeExplorerTxLink:function(t){return"https://xrpscan.com/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://xrpscan.com/account/".concat(t)},makeExplorerLink:function(t){return"https://xrpscan.com/account/".concat(t)},placeholder:c,validator:function(t){return t.startsWith("r")?/^r[a-zA-Z0-9]{25,35}$/.test(t)?void 0:"XRP address should be like ".concat(c):"XRP address should start with r"},listed:!0},SOL:{name:"Solana",shortName:"Solana",symbol:"SOL",makeExplorerTxLink:function(t){return"https://solscan.io/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://solscan.io/address/".concat(t)},makeExplorerLink:function(t){return"https://solscan.io/token/".concat(t)},placeholder:i,validator:function(t){if(!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(t))return"SOL address should be like ".concat(i)},listed:!0},AME:{name:"AME Chain",shortName:"Ame",makeExplorerTxLink:function(t){return"https://amescan.io/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://amescan.io/address/".concat(t)},makeExplorerLink:function(t){return"https://amescan.io/token/".concat(t)},placeholder:s,validator:d,listed:!0,chainId:180,rpc:"https://node1.amechain.io/"},VLX:n(n({},p),{},{name:"Velas",shortName:"Velas",symbol:"VLX",makeExplorerTxLink:function(t){return"https://evmexplorer.velas.com/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://evmexplorer.velas.com/address/".concat(t)},makeExplorerLink:function(t){return"https://evmexplorer.velas.com/token/".concat(t)},listed:!0,chainId:106,rpc:"https://explorer.velas.com/rpc"}),HT:n(n({},p),{},{name:"Heco Chain",shortName:"Heco",symbol:"HT",makeExplorerTxLink:function(t){return"https://hecoinfo.com/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://hecoinfo.com/address/".concat(t)},makeExplorerLink:function(t){return"https://hecoinfo.com/token/".concat(t)},listed:!0,chainId:128,rpc:"https://http-mainnet.hecochain.com",routerAddress:"0x0f1c2d1fdd202768a4bda7a38eb0377bd58d278e"}),ROSE:{name:"Oasis Network",shortName:"Oasis",symbol:"ROSE",makeExplorerTxLink:function(t){return"https://explorer.emerald.oasis.dev/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://explorer.emerald.oasis.dev/address/".concat(t)},makeExplorerLink:function(t){return"https://explorer.emerald.oasis.dev/token/".concat(t)},placeholder:s,validator:function(){return!1},listed:!0,chainId:42262,rpc:"https://emerald.oasis.dev",routerAddress:"0x612a405AECBFBd8049333a91141f712Dae37c172"},MOVR:n(n({},p),{},{name:"Moonriver",shortName:"Moonriver",symbol:"MOVR",makeExplorerTxLink:function(t){return"https://moonriver.moonscan.io/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://moonriver.moonscan.io/address/".concat(t)},makeExplorerLink:function(t){return"https://moonriver.moonscan.io/token/".concat(t)},listed:!0,chainId:1285,rpc:"https://rpc.api.moonriver.moonbeam.network",routerAddress:"0xAA30eF758139ae4a7f798112902Bf6d65612045f"}),GLMR:n(n({},p),{},{name:"Moonbeam",shortName:"Moonbeam",symbol:"GLMR",makeExplorerTxLink:function(t){return"https://moonscan.io/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://moonscan.io/address/".concat(t)},makeExplorerLink:function(t){return"https://moonscan.io/token/".concat(t)},listed:!0,chainId:1284,rpc:"https://rpc.api.moonbeam.network",routerAddress:"0x96b244391D98B62D19aE89b1A4dCcf0fc56970C7"}),CELO:n(n({},p),{},{name:"Celo",shortName:"Celo",symbol:"CELO",makeExplorerTxLink:function(t){return"https://explorer.celo.org/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://explorer.celo.org/address/".concat(t)},makeExplorerLink:function(t){return"https://explorer.celo.org/token/".concat(t)},listed:!0,chainId:42220,rpc:"https://forno.celo.org"}),ARBITRUM:n(n({},p),{},{name:"Arbitrum One",shortName:"Arbitrum",slither:"arbi",symbol:"AETH",makeExplorerTxLink:function(t){return"https://arbiscan.io/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://arbiscan.io/address/".concat(t)},makeExplorerLink:function(t){return"https://arbiscan.io/token/".concat(t)},listed:!0,chainId:42161,rpc:"https://arb1.arbitrum.io/rpc",routerAddress:"0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",lockerFactory:"0x269D4d211CBc9845B006128717eE51b0D6524955",dividentTracker:"0x4EF50A0E87481CAe04927eDA96231CDA5891FD4F"}),ETC:n(n({},p),{},{name:"Ethereum Classic",shortName:"ETC",symbol:"ETC",makeExplorerTxLink:function(t){return"https://blockscout.com/etc/mainnet/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://blockscout.com/etc/mainnet/address/".concat(t)},makeExplorerLink:function(t){return"https://blockscout.com/etc/mainnet/token/".concat(t)},listed:!0,chainId:61,rpc:"https://geth-at.etc-network.info",routerAddress:"0x79Bf07555C34e68C4Ae93642d1007D7f908d60F5"}),XDAI:n(n({},p),{},{name:"Gnosis",shortName:"Gnosis",symbol:"xDAI",makeExplorerTxLink:function(t){return"https://blockscout.com/xdai/mainnet/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://blockscout.com/xdai/mainnet/address/".concat(t)},makeExplorerLink:function(t){return"https://blockscout.com/xdai/mainnet/token/".concat(t)},listed:!0,chainId:100,rpc:"https://rpc.gnosischain.com",routerAddress:"0xE43e60736b1cb4a75ad25240E2f9a62Bff65c0C0"}),OPTIMISM:n(n({},p),{},{name:"Optimism",shortName:"Optimism",symbol:"ETH",slither:"optim",makeExplorerTxLink:function(t){return"https://optimistic.etherscan.io/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://optimistic.etherscan.io/address/".concat(t)},makeExplorerLink:function(t){return"https://optimistic.etherscan.io/token/".concat(t)},listed:!0,chainId:10,rpc:"https://mainnet.optimism.io"}),BRISE:n(n({},p),{},{name:"Brise Chain",shortName:"Brise",symbol:"BRISE",makeExplorerAddressLink:function(t){return"https://brisescan.com/address/".concat(t)},makeExplorerLink:function(t){return"https://brisescan.com/token/".concat(t)},makeExplorerTxLink:function(t){return"https://brisescan.com/tx/".concat(t)},listed:!0,chainId:32520,rpc:"https://mainnet-rpc.brisescan.com"}),LOOP:n(n({},p),{},{name:"Loop Network",shortName:"LOOP",symbol:"LOOP",makeExplorerAddressLink:function(t){return"https://explorer.mainnetloop.com/address/".concat(t)},makeExplorerLink:function(t){return"https://explorer.mainnetloop.com/token/".concat(t)},makeExplorerTxLink:function(t){return"https://explorer.mainnetloop.com/tx/".concat(t)},listed:!0,chainId:15551,rpc:"https://api.mainnetloop.com"}),SEPOLIA:n(n({},p),{},{name:"Sepolia Ethereum Testnet",shortName:"Sepolia",symbol:"SEP",makeExplorerAddressLink:function(t){return"https://sepolia.etherscan.io/address/".concat(t)},makeExplorerLink:function(t){return"https://sepolia.etherscan.io/token/".concat(t)},makeExplorerTxLink:function(t){return"https://sepolia.etherscan.io/tx/".concat(t)},lockerFactory:"0x269D4d211CBc9845B006128717eE51b0D6524955",rpc:"https://sepolia.infura.io/v3/08162b8c23874ad6a075fb1eb700178b",chainId:11155111,listed:!1}),GOERLI:n(n({},p),{},{name:"Goerli Ethereum Testnet",shortName:"Goerli",slither:"goerli",symbol:"ETH",makeExplorerTxLink:function(t){return"https://goerli.etherscan.io/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://goerli.etherscan.io/address/".concat(t)},makeExplorerLink:function(t){return"https://goerli.etherscan.io/token/".concat(t)},lockerFactory:"0x269D4d211CBc9845B006128717eE51b0D6524955",listed:!1,chainId:5,rpc:"https://goerli.infura.io/v3/08162b8c23874ad6a075fb1eb700178b",routerAddress:"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",dividentTracker:"0x3401a9EfC55714cdE172B661f40FA398BFE16732"}),BSC_TESTNET:n(n({},p),{},{name:"Binance Smart Chain Testnet",shortName:"BSC Testnet",slither:"testnet.bsc",symbol:"BNB",makeExplorerTxLink:function(t){return"https://testnet.bscscan.com/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://testnet.bscscan.com/address/".concat(t)},makeExplorerLink:function(t){return"https://testnet.bscscan.com/token/".concat(t)},feesCheckerContract:"0xA127ddf1747adcbE45a15dcadF69a844492424a6",lockerFactory:"0x097f5E933306ad0EbB1c0027B223a3dd153520BE",listed:!1,chainId:97,rpc:"https://bsc-testnet.public.blastapi.io/",routerAddress:"0xD99D1c33F9fC3444f8101754aBC46c52416550D1",dividentTracker:"0xcF534A4CF13565F964c515877A08711e21e7F19D"}),POLYGON_MUMBAI:n(n({},p),{},{name:"Polygon Mumbai",shortName:"Polygon Mumbai",symbol:"MATIC",slither:"mumbai",makeExplorerAddressLink:function(t){return"https://explorer-mumbai.maticvigil.com/address/".concat(t)},makeExplorerLink:function(t){return"https://explorer-mumbai.maticvigil.com/token/".concat(t)},makeExplorerTxLink:function(t){return"https://explorer-mumbai.maticvigil.com/tx/".concat(t)},lockerFactory:"0x269D4d211CBc9845B006128717eE51b0D6524955",listed:!1,chainId:80001,rpc:"https://polygon-mumbai-infura.wallet.coinbase.com",routerAddress:"0xb71c52BA5E0690A7cE3A0214391F4c03F5cbFB0d"}),AVAX_TESTNET:n(n({},p),{},{name:"Avax Testnet",shortName:"Avax Testnet",slither:"testnet.avax",symbol:"AVAX",makeExplorerTxLink:function(t){return"https://testnet.snowtrace.io/tx/".concat(t)},makeExplorerAddressLink:function(t){return"https://testnet.snowtrace.io/address/".concat(t)},makeExplorerLink:function(t){return"https://testnet.snowtrace.io/token/".concat(t)},listed:!1,chainId:43113,rpc:"https://api.avax-test.network/ext/bc/C/rpc",routerAddress:"0x688d21b0b8dc35971af58cff1f7bf65639937860"}),ROPSTEN:n(n({},p),{},{name:"Ropsten Ethereum Testnet",shortName:"Ropsten",slither:"ropsten",symbol:"ETH",makeExplorerAddressLink:function(t){return"https://ropsten.etherscan.io/address/".concat(t)},makeExplorerLink:function(t){return"https://ropsten.etherscan.io/token/".concat(t)},makeExplorerTxLink:function(t){return"https://ropsten.etherscan.io/tx/".concat(t)},listed:!1,chainId:3,rpc:"https://rpc.ankr.com/eth_ropsten"}),KOVAN:n(n({},p),{},{name:"Kovan Ethereum Testnet",shortName:"Kovan",slither:"kovan",symbol:"ETH",makeExplorerAddressLink:function(t){return"https://kovan.etherscan.io/address/".concat(t)},makeExplorerLink:function(t){return"https://kovan.etherscan.io/token/".concat(t)},makeExplorerTxLink:function(t){return"https://kovan.etherscan.io/tx/".concat(t)},listed:!1,chainId:42,rpc:"https://kovan.infura.io/v3/08162b8c23874ad6a075fb1eb700178b"}),RINKEBY:n(n({},p),{},{name:"Rinkeby Ethereum Testnet",shortName:"Rinkeby",slither:"rinkeby",symbol:"ETH",lockerFactory:"0x269D4d211CBc9845B006128717eE51b0D6524955",makeExplorerAddressLink:function(t){return"https://rinkeby.etherscan.io/address/".concat(t)},makeExplorerLink:function(t){return"https://rinkeby.etherscan.io/token/".concat(t)},makeExplorerTxLink:function(t){return"https://rinkeby.etherscan.io/tx/".concat(t)},listed:!1,chainId:4,rpc:"https://rpc.ankr.com/eth_rinkeby"}),OPTIMISTIC_GOERLI:n(n({},p),{},{name:"Optimistic G\xf6rli",shortName:"Optimistic G\xf6rli",symbol:"ETH",makeExplorerAddressLink:function(t){return"https://goerli-optimism.etherscan.io/address/".concat(t)},makeExplorerLink:function(t){return"https://goerli-optimism.etherscan.io/token/".concat(t)},makeExplorerTxLink:function(t){return"https://goerli-optimism.etherscan.io/tx/".concat(t)},listed:!1,chainId:420,rpc:"https://goerli.optimism.io/"}),ARBITRUM_GOERLI:n(n({},p),{},{name:"Arbitrum Goerli",shortName:"Arbitrum Goerli",slither:"testnet.arbi",symbol:"AETH",makeExplorerAddressLink:function(t){return"https://goerli.arbiscan.io/address/".concat(t)},makeExplorerLink:function(t){return"https://goerli.arbiscan.io/token/".concat(t)},makeExplorerTxLink:function(t){return"https://goerli.arbiscan.io/tx/".concat(t)},listed:!1,chainId:421613,rpc:"https://goerli-rollup.arbitrum.io/rpc"}),FANTOM_TESTNET:n(n({},p),{},{name:"Fantom Testnet",shortName:"Fantom Testnet",symbol:"FTM",makeExplorerAddressLink:function(t){return"https://testnet.ftmscan.com/address/".concat(t)},makeExplorerLink:function(t){return"https://testnet.ftmscan.com/token/".concat(t)},makeExplorerTxLink:function(t){return"https://testnet.ftmscan.com/tx/".concat(t)},listed:!1,chainId:4002,rpc:"https://rpc.ankr.com/fantom_testnet",routerAddress:"0xa6AD18C2aC47803E193F75c3677b14BF19B94883"})},l=Object.keys(m).filter((function(t){return m[t].chainId})).reduce((function(t,e){return n(n({},t),{},o({},m[e].chainId,n(n({},m[e]),{},{id:e})))}),{});e.networkById=l;var u=m;e.default=u}}]);