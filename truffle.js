const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "<Infura PROJECT ID>";
// const fs = require('fs');
const mnemonic = "<METAMASK SEED>";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      gas: 6000000,
      gasPrice: 10000000000
    },
  },

  compilers: {
    solc: {
      // Can also be set to "native" to use a native solc
    }
  }
};