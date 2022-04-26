require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remind arrow grid knee swallow season'; 
let testAccounts = [
"0xf9f432f66d23fbb84166fd2a60387b337c6b4d88bd64adc0bc8bb420634725a5",
"0xed2fcaf699f974de25d7f6eb8f6de30e80de58fd75b4d62b707136e506524d6c",
"0x5a21cfff93d8a3fa9220459fae1cfabcc423b2012b072b0639ba8808075c79f9",
"0x2dd485ee21ab194d2ca4d7f058f7c9890932975486fdb6670a5301fdb99407df",
"0xae919abf6998d21a564a65418e727fcbfc41b9e88aabe728f4d28a9a7030725e",
"0xbc374a24593ce8bc4a9c96f75c5d7ca5fbe733bffc04fb3f45a53655a082c6be",
"0x6cbeea84b0d02b39008465a7f587da41aede0a2c9afd4d43e68174959ed092ae",
"0x688874e07347db8d504639b1b95b47a57737909a11cd9ba304059b408d5e53ec",
"0xbe27f31235ae65c1ccdfa9d7f6f1bc0963368e489a6baa834734b29db034ac77",
"0x92192c9acde8cff10021a81e459d7384158d0816977627e14543e201902f0e15"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

