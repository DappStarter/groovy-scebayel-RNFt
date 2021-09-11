require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name rifle mirror proof gesture sleep force gather'; 
let testAccounts = [
"0x67f440f87b49521591a483acaf2b407aa6bd3d3afde709badf1a47afa619f9f2",
"0x188eacab113b91d1b1f4a314b5b1183f9609178b74b28810b9f95ed71f8c1a84",
"0x137610e3f25f6a3a682951ed1f9d5b59531ed9460f6dd19b2b6241117f191b76",
"0xaf31fd7b81a9af4822d3d4ed36a1014a2404f14d855e323a692ccb0eb3cb99f1",
"0xc0830faf0d2641fe37a32b2d9eb472ca9ba84b35523dafefdfd9e2c33bbc0422",
"0x09226766452d94f0bec75b84a85c7b114e2b19ff9926c4aed0440936046b34a4",
"0x946a9a0e247ff5254464a293ec21d189c505c75a85e5e1f300a332d8156209dc",
"0x9386028ec57693e155fa1ca0ce2bcaa617c370e3d3ab812380d5a453d735306c",
"0xcfc56cb052275f9723f540bfb5f42001d16a9fd42f856f181f284d45984945a5",
"0x2b229827c01dd10d1310e7e8a90f739bcb9562d84a4245d71f4cf14f672b7dca"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


