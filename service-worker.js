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
    "revision": "729d251a26bbbfacdfa68fde835c9776"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "63cd5ddc03b3355e2d7628636ec1daa1"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "73ac30ad253dcbea643c14b5bb44f071"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "9abb92724367d1a4abf712a95555ee72"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "55a3b70cb3a34ccb04434882eb8f39e3"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "8380e6dee48566594ea032305f71bd35"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "81b2e252c39cd49d0ffd57120e3a4b8f"
  },
  {
    "url": "api/index.html",
    "revision": "2a137d812b6aca20b72d85426eab65a2"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "8a120e578d0b18749edc983870a4807c"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "a193e2ec3635a9dea858c293b0a839f3"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "fa1c39c2ec91dc6ae2ded8577996245a"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "9e540fccf7e1b3466ef52e49ff156726"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "b8f305a114979f7dc7c5bfb1a97aa06a"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "aa0dff8614e22da25e3b60023b9dfade"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "9d52c493414762069d0ab0ee2f41c760"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "b51b05e790a7c924a77ff9cd52e6c46a"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "81d00957712d5766f76281e51be571f7"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "3ffb20133e2d7e1f3841bc93a649fce9"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "19ef63d29b0dfa19e166cbf5593a8538"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "355b3a1651dfbb9b0a58f8eb12e42f8d"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "e8156e568572a7fcd3484dce1c0615f4"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "4f507069c01e9146f4c621223fda2bd5"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "de91c1331ff9f1a6611e14ed52b82693"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "b57508863984cf2b91a30520f6ca53f4"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "7079d8bd2b17814159b1c35a6e7e2175"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "3bf34e31a599fffe9087f71876103668"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "b7056e8e77467e0553ad179c59cc1678"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "bbc1a30bb5fe59a2e18f174b223809aa"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "5652c95964218786f7cb33c808146dd6"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "f68745327a82cb6decbb85aae49ae583"
  },
  {
    "url": "assets/css/0.styles.635ba650.css",
    "revision": "d67ef90beec9342bacca2c66f901d024"
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
    "url": "assets/js/app.771a54c4.js",
    "revision": "43a4fdcbcbafecffc3c669e23e38cd73"
  },
  {
    "url": "documentation/index.html",
    "revision": "6729808533fbe8f3069c29bc40c688bd"
  },
  {
    "url": "guides/create-plugin.html",
    "revision": "359fe847a58c732972c457869dc2f163"
  },
  {
    "url": "guides/create-task.html",
    "revision": "13294ba590934e247f5e4bc75d76c86c"
  },
  {
    "url": "guides/index.html",
    "revision": "e2eeecc6d86b66a6cc1a9f370cdc6c03"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "a519980c9aaa35a8b3c5b1a710194248"
  },
  {
    "url": "index.html",
    "revision": "2f7336ae3db030944a5f766a126a984a"
  },
  {
    "url": "logo.png",
    "revision": "517e531564e8a45e68a421719e4e59ef"
  },
  {
    "url": "mascots.svg",
    "revision": "29788591613e440f9ba4ab754d9fa186"
  },
  {
    "url": "plugins/index.html",
    "revision": "67d7cac6c44d68750eeb99acbc3aa3e7"
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
