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
    "revision": "65c9da5a0f115f3950608f4e86b19497"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "a94c33f9070324623e08f06d87a1b6bf"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "de6750f6b2ef32150513c937343970a5"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "b96aba050af5ba9d184d82796d3c3d4b"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "938fbea6a58b3263f7bba0c98972822e"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "c727239d8b3bc87b3d55af35b4b52d9d"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "76525baaa920917c23573ef90812d9fa"
  },
  {
    "url": "api/index.html",
    "revision": "fe529ccfaf0a545b9c4a3eae2c686dfa"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "9cbb86eaeadda5ae6293e665da4f281e"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "23e3e568cdb4ed775e95123508e3c45d"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "199b476eb3a6f85b7792dda505a9b227"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "ce17ac176d6b5b9740fa29ae48dc25b8"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "73ab5f60f8f5cac725f6bb8209d824fb"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "3961822514991afa50c02143777f3036"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "642f233258824c77b2073d43f0028cb4"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "77a2e5f7248372a55a2615d8cce547f2"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "88b21f9d8381c540c833eddbe45f3e25"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "87457307ba599e6f09290f78b1be69cd"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "849eb5d5be69a69e6ba21bd20f350587"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "d3b14ecf7dafa48da869613f247e9c88"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "73d3d7d8c75e4e7e69aa98660ee1f30f"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "b13982191e21daac2d6eb985f2672e33"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "10aea19167d0c25551d067911cbe8cd4"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "88bbe3f90401ac85bf53759e93e9cc73"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "b3a41a071ea876a44229bb0dc6e52271"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "3406247c1e935b56eaac0a156e5c714e"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "d3766b41c0138e2f2852577c058357af"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "eb04698a6a2cb8520458c20fe599e2dd"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "815eb78b5dda1adae9a2a42539501e34"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "b458fb0192631c36c8fbea5281f9cf54"
  },
  {
    "url": "assets/css/0.styles.dbaeeaf6.css",
    "revision": "5c6f80edb35e08c17079cbdd70e47742"
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
    "url": "assets/js/33.b2c5ece7.js",
    "revision": "93416399736cc2ae339494e4649ce5c3"
  },
  {
    "url": "assets/js/34.60b5d7a6.js",
    "revision": "05075bb1966c2da1bea8591247a3e537"
  },
  {
    "url": "assets/js/35.0cdcabc3.js",
    "revision": "8b58711dbec9f137bf9f87b136168670"
  },
  {
    "url": "assets/js/36.78017ad5.js",
    "revision": "fa323b5163a35b130d4e24fd4e7ee749"
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
    "url": "assets/js/app.5990b693.js",
    "revision": "380a2c7fbd006f36fdf75193e515a883"
  },
  {
    "url": "documentation/index.html",
    "revision": "c9a5ca32b910300d6973498c8ae945e9"
  },
  {
    "url": "guides/index.html",
    "revision": "5176b8e5c4a73ada8082ac2680471bcd"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "139832573a66580d35057866bc470489"
  },
  {
    "url": "index.html",
    "revision": "259bb22d8d4837f0d566d3d90b6deb32"
  },
  {
    "url": "mascots.svg",
    "revision": "29788591613e440f9ba4ab754d9fa186"
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
