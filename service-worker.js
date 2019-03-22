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
    "revision": "6b6d7cba30884db60dff8c55b11eb7d4"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "c8fe7ad2520d7755e166e87fd37c0caf"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "e9fc11cc6fe6941c535bd3197595d29b"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "ffde2abbee17a8aa6cd166f22dc3e699"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "e9388d149437e5b01611a5054a3917a0"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "ecbbbd317f03b95aca0f430f28ddb1b9"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "008c93f23d9bcd16e352e842ca1555d6"
  },
  {
    "url": "api/index.html",
    "revision": "e69d5fae286ed0aac648f111b80a17ac"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "5cc1773efb555e84b991b45f80fb348d"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "e169d9163d2c8b48453d02d51b20ba64"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "57efcffed38a50dbef1797fe6b74b7bf"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "9e2423358ed919c69a2dd4a79d8263c8"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "2fa1ddaca4a76da36c16e98a71c481a4"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "f49a6a927ebc380ce6d8588fe8c7141b"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "30819212168c8b78eb0c397f2ce1f348"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "738e2d8ae39ac698edbe0ace71f3a021"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "ba1dc1d7761dd3abcb740f27ec219fac"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "3552b3789c998b1867bb44f716547b23"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "5eefc5879f3846a0e7e435f41ab37fba"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "966f12690085f2afe640bbdd57c9b9ec"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "702e3c3e6ddc6f8d6a17bd2df18da357"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "f499bed06c72067b36d2e6a9ece602e2"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "e6a8673bd5dc2c7a93c9cb298891b318"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "ffe5014c54d2aeb479ddb064e966aedf"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "9ce4a1654056af690421753493498dad"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "1f11f3c07e559dbe871417ce17195273"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "cadf53fd07111ad295cb05ea0e75441e"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "714ff75f44f755963e8c14e5bb5e8a28"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "badc50498c0c54b5fce184c7d343632e"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "74d211eb18194f25e543e11a464c6845"
  },
  {
    "url": "assets/css/0.styles.7adc9288.css",
    "revision": "e5acc8a21cd91817a62fd8ff9088f7e0"
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
    "url": "assets/js/33.43ab5500.js",
    "revision": "766dba1cd345b110fd0a534303cb4fd6"
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
    "url": "assets/js/app.2e141b95.js",
    "revision": "ef6b94ff32c1a0aa80f63c4b88280f29"
  },
  {
    "url": "documentation/index.html",
    "revision": "828f4ba7c5f5a3b52afa287c47372dac"
  },
  {
    "url": "guides/create-plugin.html",
    "revision": "dd3758f1c2d60c7899327d1309312292"
  },
  {
    "url": "guides/create-task.html",
    "revision": "bd670d085810f679a88f2de5bf2f5d3b"
  },
  {
    "url": "guides/index.html",
    "revision": "6fdbf73ef25e84a0a1c0be7d608b5225"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "475edfbc32e72d5cb718a1fd560fcdeb"
  },
  {
    "url": "index.html",
    "revision": "b95d38bbc935189297152a7dc993ea47"
  },
  {
    "url": "logo.png",
    "revision": "c0ee81993e6c6509ab9edc1c00d0ae93"
  },
  {
    "url": "mascots.svg",
    "revision": "29788591613e440f9ba4ab754d9fa186"
  },
  {
    "url": "plugins/index.html",
    "revision": "d3b3a24f2241da4a7082aa9973e0dba7"
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
