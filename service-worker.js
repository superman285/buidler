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
    "revision": "caea7794df4d10f95d0ef21963c11fc1"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "305372831cba036153a1824b8396a221"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "3eb6aa6d3f32c1113c2a368b8fc8559d"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "dea92972dbe1998b6af915b92d51dcf0"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "0d126f35f66b79af38f9ef9b9e4c5508"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "2bed6c787659eebdbafce6d048e96e10"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "43f818148cd4730fcd00cd504653ad48"
  },
  {
    "url": "api/index.html",
    "revision": "aea6bcc2bda79e6207821452f7dd7436"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "b735ef6e68240ad8e15f02dfc26806eb"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "5fe114ffc7bd96f99ef577257b839bdb"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "fa7257c33e962c435a0a187e213a43dc"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "ab2a03e5fd959b943da116f3a81fc650"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "eb61fb799c609722d76f75ab5c434b0f"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "2f80fe7bae02a847db268b90eefdfde4"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "8099894b0d2e9b7ddb97314873c579fe"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "79ee7104c14792bf348b6cc302fed003"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "33628105d9f8ec8ceab91fb1906b435c"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "4faaec0711bef2759e38554bc6e6a80d"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "5e130818fd96f2e2e9e1542127242fbc"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "18ca0e2776749ba686a02421888af274"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "ca3da30c376d8a44918459040db0d751"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "a5a796ce8168addd5c446953caf0986b"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "075b44fdbee3ef2c2dbf9bbe910deb12"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "ed29756f9773abee84ed035a03f9815d"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "98e6c1ad3ae3c586c58a6e989fa0db4b"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "a2744e589a3cc1fb4369c3e89528e62d"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "93ca79a709a70bfccdf839a71ef2d873"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "2cb2a94ad0abb0b5d768ea0e4f1bfaef"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "3c7906662cc28995825fc37a10368ff2"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "1a7be160446cbdb1c5f537787b749134"
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
    "url": "assets/js/app.f17ed63c.js",
    "revision": "1b36b312abc4e691e4700e78ae124a67"
  },
  {
    "url": "documentation/index.html",
    "revision": "0cd1386c59d3953402798c5e90a11c3a"
  },
  {
    "url": "guides/create-plugin.html",
    "revision": "07dc9aac5b5ddaf78176a1ab8742f69a"
  },
  {
    "url": "guides/create-task.html",
    "revision": "c716d66381213094a2e3134a4c9f6f00"
  },
  {
    "url": "guides/index.html",
    "revision": "47c1d8a2006d75fe1501857a4ba3908d"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "46987db47f80d770b90534e29e5d434d"
  },
  {
    "url": "index.html",
    "revision": "610a4a12b2ed5674cfc2ee10edc1054c"
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
    "revision": "52ef67d3d20fa3e9266951d2be2b2fe9"
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
