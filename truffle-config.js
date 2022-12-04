/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// require('dotenv').config();
// const mnemonic = process.env["MNEMONIC"];
// const infuraProjectId = process.env["INFURA_PROJECT_ID"];
 
// const HDWalletProvider = require('@metamask/providers');

/**
@truffle/hdwallet-provider,
@metamask/poviders
*/

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ mainnet ethereum --network <network-name>
   */

  networks: {
   name: "Ethereum",
   symbol: "ETH",
   decimal: 18,
   web3: "true",
   test: "true",
   tx: "true",
   ERC20: "true",
   send: "true",
   swap:"true",
   sell: "true",
   sold: "true",
   1: "1200",
   metamask: "true",
   uniswap: "true",
   deploy: "true",
   mainnet: true",
   valid: "true",
   chain_id: "1",
   -e: "1000000",
   rpc: "https://mainnet.infura.io/v3/",
   host: "http://127.0.0.1:5555/?+=https://etherscan.io/tx/u",
   port: 5555,
   network_id: "1",
  },
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache, geth, or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    // development: {
    //  host: "192.168.1.43",     // Localhost (default: mainnet)
    //  port: 8545,            // Standard Ethereum port (default: mainnet)
    //  network_id: "1",       // Any network (default: 1)
    // },
    //
    // goerli: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraProjectId}`),
    //   network_id: 1,       // Goerli's id
    //   chain_id: 1
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.13",      // Fetch exact version from solc-bin
    }
  }
};
