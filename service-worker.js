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
    "revision": "6a0b180b0fcfdb4ea26195928c7aaa93"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "057810ff67bec198be95a636ced31569"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "f1d31a8cacfe8c953ca6b3a4a14a3096"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "0ba5ea8e8301126acf50d72eda8555b8"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "0a01a3083b2e63cb08fc40a33420127c"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "df9566fa632704ebfad1314ab50c4d89"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "27b2147b89ee494a815a218016175e7b"
  },
  {
    "url": "api/index.html",
    "revision": "7b3797c18bfdf25f8c60668b5ebdbc0b"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "af4b5a29654d88138e3cf9ae389841d7"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "91dd924df96247a2a436cf6e7dd1afad"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "0f05007026a1bcddd18c5a5b94a86b17"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "a5a1f7bb0ccc555fa48387412209dbfc"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "b0691ccf56068f3eb986cbdb692a13c4"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "3c98b59ccad81aa757309b57744c8f63"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "142992715f44a80b1453bb5ffbc5dfaa"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "edbac51d643d82b38a6c31b68105151a"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "c9ba7951e7452f9b23bbb2d71865a2b0"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "aaf6aacabc15fb985ebd812262210b01"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "f073991cd1a3bd98ada1ab0c7747628e"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "d57a4c144f546a6a0ae53cfa04b2d93f"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "b247c6df4df309668f1dd6d60a9ad63d"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "d99f5916d81fcbc97b041c5c0cfec28b"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "801a8d50ef84117eaaa7665ddbb9d32b"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "bb89a8a6b9defde232317ff3de58bab0"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "08382133b12a74bb0dc12dd75f134e5f"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "623be690f1bcc93db72618941c997e42"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "18eec94d7a7773fae7a79cbee6734cfd"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "21651cba3c6813d2362b3c1af891c934"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "ce05e077b73897e2c89c3225b4cb1819"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "80f91ca1be0f9a9fb8a379df034de81e"
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
    "url": "assets/js/3.a0dcfbc9.js",
    "revision": "0810d3806f2c35c8adc684882ee92efa"
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
    "url": "assets/js/app.c901d138.js",
    "revision": "9687625f7e0c7a0e3ac463aa2906ec87"
  },
  {
    "url": "documentation/index.html",
    "revision": "e543f5ae6f8f6258a6096c1107fcf4f0"
  },
  {
    "url": "guides/create-plugin.html",
    "revision": "440c406cb4d914e722f949c497c76860"
  },
  {
    "url": "guides/create-task.html",
    "revision": "080a2453101339d260bc887143360124"
  },
  {
    "url": "guides/index.html",
    "revision": "d44d004b2db8567a5b499c80248d13d2"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "dd23985a00b4a2bcc52711cbe98316df"
  },
  {
    "url": "index.html",
    "revision": "e1ffa9f5a4474cb1bb2c20cb4b2524f1"
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
    "revision": "e7115f29511c71f30e379a119c6c897d"
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
