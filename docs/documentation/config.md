---
prev: false
next: false
sidebarDepth: 0
---
# Buidler configuration

Buidler is exporting a Javascript from a `buidler.config.js` file, which, by default, lives in the root of your project.

The entirety of your Builder setup is contained in this file. Feel free to add any configs you may find useful for your project, just make sure to assign them to `module.exports` so they'll be accessible later on through the config object in the [Builder Runtime Environment](advanced/architecture.md#the-buidler-runtime-environment). 

An empty `builder.config.js` is enough for builder to work.

## Available config options

The exported config object can have the following entries: `networks`, `solc`, and `paths`. A complete configuration would look like this:

```js
module.exports = {
  networks: {...},
  solc: {…},
  paths:{…}
}
```

### Networks configuration

The `networks` config field is an optional object where network names map to objects with the following optional fields:

- `url`: The url of the node. Default value: `"http://localhost:8545"`.
- `chainId`: An optional number, used to validate the network Buidlers connect to. If not present, this validation is ommited.
- `from`: The address to use as default sender. If not present the first account of the node is used.
- `gas`: Its value should be `"auto"` or a number. If a number is used, it will be the gas limit used by default in every transaction. If `"auto"` is used, the gas limit will be automatically estimated. Default value: `"auto"`.
- `gasPrice`: Its value should be `"auto"` or a number. This parameter behaves like `gas`. Default value: `"auto"`.
- `gasMultiplier`: A number used to multiply the results of gas estimation to give it some slack due to the uncertenty of the estimation process. Default: `1.25`.
- `accounts`: This field controls which accounts Buidler uses. It can use the node's accounts (by setting it to `"remote"`), a list of local accounts (by setting it to an array of hex-encoded private keys), or use an HD Wallet (see below). Default value: `"remote"`.

#### HD Wallet config

To use an HD Wallet with Buidler you should set your network's `accounts` field to an object with the following fields:

- `mnemonic`: A required string with the mnemonic of the wallet.
- `path`: The HD parent of all the derived keys. Default value: `"m/44'/60'/0'/0"`.
- initialIndex: The initial index to derive. Default value: `0`.
- count: The number of accounts to derive. Default value: `10`.

#### Default networks object

```js
develop: {
  url: "http://127.0.0.1:8545";
}
```

#### Solc configuration

The `solc` config field is an optional object which can contain the following keys:

- `version`: The solc version to use. We recommend always setting this field. Default value: `"0.5.3"`.
- `optimizer`: An object with `enabled` and `runs` keys. Default value: `{ enabled: false, runs: 200 }`.
- `evmVersion`: A string controlling the target evm version. One of `"homestead"`, `"tangerineWhistle"`, `"spuriousDragon"`, `"byzantium"`, and `"constantinople"`. Default value: `"byzantium"`.

#### Path configuration

You can customize the different paths that buidler uses by providing an object with the following keys:

- `root`: The root of the Buidler project. This path is resolved from the `buidler.config.js`'s directory. Default value: '.'.
- `sources`: The directory where your contract are stored. This path is resolved from the project's root. Default value: './contracts'.
- `tests`: The directory where your tests are located. This path is resolved from the project's root. Default value: './test'.

- `cache`: The directory used by Buidler to cache its internal stuff. This path is resolved from the project's root. Default value: './cache'.
- `artifacts`: The directory where the compilation artifacts are stored. This path is resolved from the project's root. Default value: './artifacts'.

## Quickly integrating other tools

Buidler's config file will always run before any task, so you can use it to integrate with other tools, like importing `@babel/register`.
