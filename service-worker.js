/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e9a8b94d1800dedc0e7b2ce2e2ec45e6"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "a6ea469a0b2467dce58a3d52947c251e"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "5eb0d96d835c14171f68a9c362516b5b"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "0aff86d42071bc94e76751d3a86c58ee"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "40e3040c1b7e50c33f1921d10d7d2474"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "7d8d6b8759801278c8fd03e6dde71319"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "32847705c42c745d84a05c0e08d727a5"
  },
  {
    "url": "api/index.html",
    "revision": "e95435f8d8617ee114e824e41d506c67"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "41b7a9731bd4b077fb27e270ae17070d"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "9d4ea44ad9c2837ebeea887a24d09852"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "e3d525f4792302bec2de33ce5a16afd8"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "f4569059765f50a5fc38816f2c954880"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "95fc80939d8bf2ec42affa4f99eb9274"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "f6e39ee4f6c4b79a0b41d976569f2576"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "4887eea46a91a9f9257b3343aa314f85"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "4ec3fa258d066c608874cb4d9f10e1ca"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "dd9facbc60add714ccb5db6dfe66ba49"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "9d21f42b9a55a1665555c259d5453e5a"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "b1b17896b1c1e84b05a6cdbe8cb980e3"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "606ef9b4130f5be645413160ea612de3"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "88335f8457306738d30f01384122ab01"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "ecd2b7d5535cd61d402fcff9258474d5"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "bde60b037446c93697236e47a63201ab"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "a9ec2d62c9dc192e6a13a668317605e2"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "19612d48fd1c2d62c6623fa71894105d"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "6799f4400cb901ecb3fc044184910d3e"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "fa5fc95df605437160aa63f42ed0fa9b"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "5d883e6dcdb331e4d632d02ae50ee842"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "27e0408ffc3c4d93f8d41c0ba6b89b3b"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "91a91b32a1cd8a5592836425350b6fb4"
  },
  {
    "url": "assets/css/0.styles.ad6ea3ed.css",
    "revision": "4538d71712edd05cc37a7ef5fe0f43cc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a06519f9.js",
    "revision": "ae6669719eb8fb0c1e458cdb1234f20e"
  },
  {
    "url": "assets/js/11.06e3b161.js",
    "revision": "f118090181f4b4f908893b01584ed353"
  },
  {
    "url": "assets/js/12.fdf556c3.js",
    "revision": "dbf8478daaeb6c8c6cf3fdbc1686934b"
  },
  {
    "url": "assets/js/13.d50ced3d.js",
    "revision": "5f46bcc1f64e9527e6b71ddab5578ab7"
  },
  {
    "url": "assets/js/14.e46d37e3.js",
    "revision": "55ce652a534592503f69e7d5ef204e74"
  },
  {
    "url": "assets/js/15.1e2aa375.js",
    "revision": "6a2f506cd00f0666a1c4a8f2aa5dec2b"
  },
  {
    "url": "assets/js/16.8436a63d.js",
    "revision": "d53df8a44f31097f383511ee260c3cab"
  },
  {
    "url": "assets/js/17.f54ab3c4.js",
    "revision": "affa767d41df03ff000deaef76c69574"
  },
  {
    "url": "assets/js/18.25e7f5a3.js",
    "revision": "05f8c4da399d5df687148430b99ae965"
  },
  {
    "url": "assets/js/19.91b2691f.js",
    "revision": "f3adeb1069bde84bc147683e4a7f4365"
  },
  {
    "url": "assets/js/2.0f4038f2.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/20.d8289532.js",
    "revision": "176df36da93312ece91245f4948d32f1"
  },
  {
    "url": "assets/js/21.90a1a2f7.js",
    "revision": "7bf6d21259f899675ef7453f2bc0263c"
  },
  {
    "url": "assets/js/22.84a614f0.js",
    "revision": "05775024fafa6604d5a6a5375a084b5b"
  },
  {
    "url": "assets/js/23.ff52837b.js",
    "revision": "1de714c62ed5e61f19b49cf65946c822"
  },
  {
    "url": "assets/js/24.1218c3a3.js",
    "revision": "2934b0d6566ef561cd2f1e9b0bbcce3a"
  },
  {
    "url": "assets/js/25.cc0b4272.js",
    "revision": "0323a752766783ceead0bdfda9e74086"
  },
  {
    "url": "assets/js/26.33cb2bdc.js",
    "revision": "8deb4f696c57f6e7594e3f312748a0a9"
  },
  {
    "url": "assets/js/27.b25a9b86.js",
    "revision": "2e022f9de0efbe9c624503ff1afddcec"
  },
  {
    "url": "assets/js/28.c9e57264.js",
    "revision": "4da6b2af736d090d207a801de8891b40"
  },
  {
    "url": "assets/js/29.9f296f4d.js",
    "revision": "0ed359f392502d44cca4182a55a8df95"
  },
  {
    "url": "assets/js/3.56846e81.js",
    "revision": "43afde135875e282cb85b22b04586201"
  },
  {
    "url": "assets/js/30.7c30568c.js",
    "revision": "23e2ed42fc74f26f195a892b54c0ef89"
  },
  {
    "url": "assets/js/31.cf7fc61d.js",
    "revision": "329dd3f10e4102d8621817cfe10fe359"
  },
  {
    "url": "assets/js/32.45834b58.js",
    "revision": "0e7693316b1ccf92aed5939b7a44bc2c"
  },
  {
    "url": "assets/js/33.c07af706.js",
    "revision": "8f74f71797c4028e8ab60f33919a622e"
  },
  {
    "url": "assets/js/34.e0b3b89a.js",
    "revision": "2fd4f661d0f1651be2b8503a4a5551bc"
  },
  {
    "url": "assets/js/35.53fc917f.js",
    "revision": "91956dd8538311839b08af88e4ebaa45"
  },
  {
    "url": "assets/js/36.48fad1c8.js",
    "revision": "c4ca261450cb1e0c0139b2c41fd5d2be"
  },
  {
    "url": "assets/js/37.42228a27.js",
    "revision": "f07fb07808b6c195f37ab06666662307"
  },
  {
    "url": "assets/js/38.ac796079.js",
    "revision": "52c75e625dcf0d8ea9503b8fb41a9094"
  },
  {
    "url": "assets/js/39.e654182e.js",
    "revision": "f8872d4a8c95e7b80a56214e59f2a3a5"
  },
  {
    "url": "assets/js/4.7c54d4fe.js",
    "revision": "3940e406fde6fe62472fd5697ca38ee5"
  },
  {
    "url": "assets/js/5.d23f39d6.js",
    "revision": "9b644a689bab7c10573833c2c8ddadc2"
  },
  {
    "url": "assets/js/6.04438e9a.js",
    "revision": "b740b34d5ff9743fb52d7b502c93158f"
  },
  {
    "url": "assets/js/7.d66e7b16.js",
    "revision": "9b7684a8d46cbceacccce043dab71f18"
  },
  {
    "url": "assets/js/8.543fdb29.js",
    "revision": "1cebd98f0b50ff162082a9cfa8358515"
  },
  {
    "url": "assets/js/9.c78751c5.js",
    "revision": "e6a69725ea184d70cce40cad17b96fd1"
  },
  {
    "url": "assets/js/app.5a068564.js",
    "revision": "dbb8b495cdaa45a23a3abacd85333193"
  },
  {
    "url": "documentation/index.html",
    "revision": "527a326c4def90c050732649c851e87d"
  },
  {
    "url": "guides/create-plugin.html",
    "revision": "f3d7a1c5abf4d9665942f05b44861c4e"
  },
  {
    "url": "guides/create-task.html",
    "revision": "94709c7ea0230b1561196c8ae2b21c9f"
  },
  {
    "url": "guides/index.html",
    "revision": "95371fbecfc69f2ca47c3b6dd7d2d27d"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "f2f3bb0c5193edd9995fbf39c01ef490"
  },
  {
    "url": "index.html",
    "revision": "39b36248b157f76d04020174a74a28c4"
  },
  {
    "url": "mascots.svg",
    "revision": "29788591613e440f9ba4ab754d9fa186"
  },
  {
    "url": "plugins/index.html",
    "revision": "f1f3fd7308de2725592146233f7ce690"
  },
  {
    "url": "sam-fem.svg",
    "revision": "3264157e6975c07a4e37ceb3ec9123ae"
  },
  {
    "url": "sam.svg",
    "revision": "de8800fbc2996398062be3589f307d1b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
