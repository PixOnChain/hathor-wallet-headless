module.exports = {
  // HTTP API Settings
  http_bind_address: 'localhost',
  http_port: 8000,

  // Uncomment the following line to enable API Key Auth.
  // http_api_key: 'YOUR_PRIVATE_KEY',

  // Hathor Full-node
  network: 'mainnet',
  server: 'https://node2.mainnet.hathor.network/v1a/',

  // Tx Mining Service
  // This is optional. If you do not set, the hathor-wallet-lib's default will be used.
  // Use it only if you want to use your own tx mining service, e.g. 'https://mytxmining.domain/'
  txMiningUrl: null,

  // Atomic Swap Service
  // This is optional. If you do not set, the mainnet or testnet URL will be used,
  // according to the `network` setting
  // above. Use it only if you want to use your own Atomic Swap Service, e.g. 'https://my-atomic-swap-service.domain/'
  atomicSwapService: null,

  // HSM Integration
  // These are optional. If all are not present, HSM-related requests will be rejected.
  hsmHost: null,
  hsmUsername: null,
  hsmPassword: null,

  // Only change the URL if you want to use the Sandbox API under 'https://sandbox-api.fireblocks.io'
  fireblocksUrl: 'https://api.fireblocks.io',
  fireblocksApiKey: null,
  // This should be a string containing the secret (with line breaks)
  fireblocksApiSecret: null,
  // This supercedes the fireblocksApiKey if both are set
  fireblocksApiSecretFile: null,

  // ApiKey to use with Tx Mining Service
  // This is optional. You should set it only if you have an api-key.
  txMiningApiKey: null,

  // Wallet seeds
  seeds: {
    default: 'mercy outdoor neck season already cute battle erode tenant cheese kitchen project diamond federal wagon bleak property success crazy minimum flavor gate verb message',
  },

  // Optional wallet multisig configuration
  // Use the seedKey as key and the value should have `total` (max no. of signatures),
  // `numSignatures` (required no. of signatures) and `pubkeys` as a list of participant pubkeys.
  // Ex.: { default: { total: 3, numSignatures: 2, pubkeys: [ 'xpub1...', 'xpub2...',
  // 'xpub3...'] } }
  // The total should match the length of the pubkeys, this can be configured for any seed
  multisig: {},

  // Log format for HTTP Requests (default: combined)
  // Common choices: combined, common, dev, short, tiny
  // For further information, see https://github.com/expressjs/morgan#predefined-formats
  httpLogFormat: null,

  // Console logging level (default: info).
  // Levels: error, warn, info, http, verbose, debug, silly.
  // For further information, see https://github.com/winstonjs/winston#logging-levels.
  consoleLevel: null,

  // File logging configuration.
  /*
  logging: {
    debug: {
      filename: 'debug.log',
      level: 'debug',
    },
  },
  */

  // Optional config so you can set the token you want to use in this wallet
  // If this parameter is set you don't need to pass your token when getting balance
  // or sending tokens
  tokenUid: '',

  // Maximum number of addresses to be generated in sequence without usage
  // if not set will use the default from the lib (20)
  gapLimit: null,

  // Timeout of the websocket connection in milliseconds
  // if not set we use the default from the lib (5000)
  connectionTimeout: null,

  // This allows the user to set a passphrase when starting the wallet
  // This value is false by default and, starting a wallet with passphrase
  // will only be allowed if it's set to true in the config.js file
  allowPassphrase: false,

  // Enabling this requires all requests to have the X-First-Address header
  // to confirm that the client is connected to the right wallet. The primary
  // purpose of this parameter is to avoid operational mistakes and loss of funds.
  confirmFirstAddress: false,

  // Optional config to enable plugins
  // Hathor already provides some plugins, more in https://github.com/HathorNetwork/hathor-wallet-headless/blob/master/PLUGIN.md#provided-plugins
  // To enable a plugin, just add it's id on this parameter.
  enabled_plugins: [],
  // To add custom plugins you need to configure it on this parameter
  // The key is the plugin id (for `enabled_plugins`) and the configuration requires
  // a `file` property which is the filename of the plugin on the plugin directory
  // Example: plugin_config: { custom: { name: 'custom', file: 'custom.js' } },
  plugin_config: {},

  // Configure whether a healthcheck 'warn' status received from a component
  // should make the service be considered unhealthy.
  // You should consider what components you are enabling in the /health endpoint when setting this.
  // Check the /health endpoint documentation for more info.
  considerHealthcheckWarnAsUnhealthy: true,

  // Configure default history sync mode for the wallets
  // Accepted values are: 'polling_http_api', 'xpub_stream_ws', 'manual_stream_ws'
  // If no value is configured the default of 'polling_http_api' will be used
  // history_sync_mode: 'polling_http_api|xpub_stream_ws|manual_stream_ws'
};
