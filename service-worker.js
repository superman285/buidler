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
    "revision": "28bce057e612e8c4f7d9ca8e6da7de91"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "e61d33cc93e3f8ae28e327721a3f91d8"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "87e6093a22d1d430cb804f597f2dd2e5"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "fd198ad42ec3d87e759a3309e613428e"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "c9ba035f2c5986ef829f6653a76ce4d3"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "20b5739057703ec3a339117cb4ff1ff6"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "35e0f941eb788bf7a7daab69564ecf5b"
  },
  {
    "url": "api/index.html",
    "revision": "168f4969054c411e944993e56cb231d5"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "91f812ef24c0900bb4ebd4cff6ae289a"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "9caae79d9428baa24a3e4c30aa45bc77"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "131e7d7701d5f587384a33536fe9e5c0"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "1dd70e354bfa9ab6d0d07286887c54ae"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "52fca242f065cb6bdf35f2155b3fd3b6"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "04e3c1287676c60304ef1d7ee6c8e56c"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "7cbda4ff2b8840c92ba3ac4a77c58c00"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "35aa4bced115610e13d7a04914196526"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "4c98cf29a513f19930be2fe7bc2a8f73"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "a756ddf789b1e566aeb30d06a334dccb"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "1dfb0a8f13aef0148a0f73945d45ba06"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "a9e149f3285750f5698269f0f24e2668"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "259065f1d4cb76d9e5d4385b6f243466"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "4f573fa953cfe3e7ffb2e957f40eb644"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "c8cc958b8c88b38947eba38eef0d1b95"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "b7bbbd053a21aa6aa43f894627039313"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "59a14ac40fae1aa27bb260c795c5ac98"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "0399e15f1ce26de04b73d171d66349b3"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "89fdc39de24ae84d10ce294d6ca8071b"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "02ab356b425cadb1c214c5bd455ef262"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "a7498c1f4f7ebb70fb54c63e517daa92"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "2c39b996110afa583347598790c6c557"
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
    "url": "assets/js/app.33dea671.js",
    "revision": "ed48614cf69b6997821e9f2414ac7166"
  },
  {
    "url": "documentation/index.html",
    "revision": "5d03f5cc0556925b5c99734865c8edc4"
  },
  {
    "url": "guides/create-plugin.html",
    "revision": "17d513dc2e153e9b534f4de2144bb85b"
  },
  {
    "url": "guides/create-task.html",
    "revision": "a6f6b412e990ed6bf1869c2af3a3c0d4"
  },
  {
    "url": "guides/index.html",
    "revision": "9283674288706bd1fdc1a266c77c3c55"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "8c02375822fc8830bae953160ed168f9"
  },
  {
    "url": "index.html",
    "revision": "5642c934976a06bc165d2db1a636dd45"
  },
  {
    "url": "mascots.svg",
    "revision": "29788591613e440f9ba4ab754d9fa186"
  },
  {
    "url": "nomic.svg",
    "revision": "18f3038fe5af39bbcedc88376b991555"
  },
  {
    "url": "plugins/index.html",
    "revision": "12a76f9f7254193ef8feec933e30184f"
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
