(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{200:function(t,e,s){"use strict";s.r(e);var a=s(0),o=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("The entirety of your Builder setup is contained in this file. Feel free to add any configs you may find useful for your project, just make sure to assign them to "),s("code",[t._v("module.exports")]),t._v(" so they'll be accessible later on through the config object in the "),s("router-link",{attrs:{to:"./advanced/architecture.html#the-buidler-runtime-environment"}},[t._v("Builder Runtime Environment")]),t._v(".")],1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("You can customize the different paths that buidler uses by providing an object with the following keys:")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"buidler-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#buidler-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Buidler configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Buidler is exporting a Javascript from a "),e("code",[this._v("buidler.config.js")]),this._v(" file, which, by default, lives in the root of your project.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("An empty "),e("code",[this._v("builder.config.js")]),this._v(" is enough for builder to work.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"available-config-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#available-config-options","aria-hidden":"true"}},[this._v("#")]),this._v(" Available config options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The exported config object can have the following entries: "),e("code",[this._v("networks")]),this._v(", "),e("code",[this._v("solc")]),this._v(", and "),e("code",[this._v("paths")]),this._v(". A complete configuration would look like this:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  networks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  solc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("…"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  paths"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("…"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"networks-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#networks-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Networks configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("networks")]),this._v(" config field is an optional object where network names map to objects with the following optional fields:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("url")]),t._v(": The url of the node. Default value: "),s("code",[t._v('"http://localhost:8545"')]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("chainId")]),t._v(": An optional number, used to validate the network Buidlers connect to. If not present, this validation is ommited.")]),t._v(" "),s("li",[s("code",[t._v("from")]),t._v(": The address to use as default sender. If not present the first account of the node is used.")]),t._v(" "),s("li",[s("code",[t._v("gas")]),t._v(": Its value should be "),s("code",[t._v('"auto"')]),t._v(" or a number. If a number is used, it will be the gas limit used by default in every transaction. If "),s("code",[t._v('"auto"')]),t._v(" is used, the gas limit will be automatically estimated. Default value: "),s("code",[t._v('"auto"')]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("gasPrice")]),t._v(": Its value should be "),s("code",[t._v('"auto"')]),t._v(" or a number. This parameter behaves like "),s("code",[t._v("gas")]),t._v(". Default value: "),s("code",[t._v('"auto"')]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("gasMultiplier")]),t._v(": A number used to multiply the results of gas estimation to give it some slack due to the uncertenty of the estimation process. Default: "),s("code",[t._v("1.25")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("accounts")]),t._v(": This field controls which accounts Buidler uses. It can use the node's accounts (by setting it to "),s("code",[t._v('"remote"')]),t._v("), a list of local accounts (by setting it to an array of hex-encoded private keys), or use an HD Wallet (see below). Default value: "),s("code",[t._v('"remote"')]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"hd-wallet-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hd-wallet-config","aria-hidden":"true"}},[this._v("#")]),this._v(" HD Wallet config")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To use an HD Wallet with Buidler you should set your network's "),e("code",[this._v("accounts")]),this._v(" field to an object with the following fields:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("mnemonic")]),t._v(": A required string with the mnemonic of the wallet.")]),t._v(" "),s("li",[s("code",[t._v("path")]),t._v(": The HD parent of all the derived keys. Default value: "),s("code",[t._v("\"m/44'/60'/0'/0\"")]),t._v(".")]),t._v(" "),s("li",[t._v("initialIndex: The initial index to derive. Default value: "),s("code",[t._v("0")]),t._v(".")]),t._v(" "),s("li",[t._v("count: The number of accounts to derive. Default value: "),s("code",[t._v("10")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"default-networks-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-networks-object","aria-hidden":"true"}},[this._v("#")]),this._v(" Default networks object")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("develop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:8545"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"solc-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#solc-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Solc configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("solc")]),this._v(" config field is an optional object which can contain the following keys:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("version")]),t._v(": The solc version to use. We recommend always setting this field. Default value: "),s("code",[t._v('"0.5.3"')]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("optimizer")]),t._v(": An object with "),s("code",[t._v("enabled")]),t._v(" and "),s("code",[t._v("runs")]),t._v(" keys. Default value: "),s("code",[t._v("{ enabled: false, runs: 200 }")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("evmVersion")]),t._v(": A string controlling the target evm version. One of "),s("code",[t._v('"homestead"')]),t._v(", "),s("code",[t._v('"tangerineWhistle"')]),t._v(", "),s("code",[t._v('"spuriousDragon"')]),t._v(", "),s("code",[t._v('"byzantium"')]),t._v(", and "),s("code",[t._v('"constantinople"')]),t._v(". Default value: "),s("code",[t._v('"byzantium"')]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"path-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Path configuration")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("p",[s("code",[t._v("root")]),t._v(": The root of the Buidler project. This path is resolved from the "),s("code",[t._v("buidler.config.js")]),t._v("'s directory. Default value: '.'.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("sources")]),t._v(": The directory where your contract are stored. This path is resolved from the project's root. Default value: './contracts'.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("tests")]),t._v(": The directory where your tests are located. This path is resolved from the project's root. Default value: './test'.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("cache")]),t._v(": The directory used by Buidler to cache its internal stuff. This path is resolved from the project's root. Default value: './cache'.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("artifacts")]),t._v(": The directory where the compilation artifacts are stored. This path is resolved from the project's root. Default value: './artifacts'.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"quickly-integrating-other-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quickly-integrating-other-tools","aria-hidden":"true"}},[this._v("#")]),this._v(" Quickly integrating other tools")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Buidler's config file will always run before any task, so you can use it to integrate with other tools, like importing "),e("code",[this._v("@babel/register")]),this._v(".")])}],!1,null,null,null);e.default=o.exports}}]);