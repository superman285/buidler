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
    "revision": "f5ec5b1823b89929762dbda589c3096a"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "b3409d974cc4024ad80ba6c2616d0041"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "68d87d066e4ea6a6662150593514ed5a"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "7be0235c1175eb69e6bd6acbe1d8f4a0"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "c72863614410ca451a74c4f3b27723e9"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "5e4095b8eb10d56f131e3ac6b938308f"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "759207d30dc6e8e721d3b2537deb06d5"
  },
  {
    "url": "api/index.html",
    "revision": "cd5f3fbddd7f1ab64c8c9a6da070fba3"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "9e8629ad9b96c2b2baae4011e5cac70a"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "7c0b0a8b46503c0de07d5d4fa96732d6"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "4d9c80c7623cd314ec31009e1b189e63"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "62e827d366fd205136bc0145cd4f298f"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "a59b819fe12c22817084136c9250a9f5"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "674224b3b43e928db064f5f28c4b5696"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "ca714804f7dfcaf24f54af0a46bff122"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "c60f70c7c870dbcf03820d29d81dc391"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "52d70c4e3ab98220b27e94e13b7bfd77"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "8949a9986249be6d67daa609677f0f79"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "07e07158f4e37707bc233f85ad5865d5"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "57cad8e17e5c41fdfcf53d0cbdcaa10b"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "c0b09859ceae6854519ee2a9af2398ee"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "e81ce038a038a4e70825c1d010b04c83"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "459770309e99a438437bcf89f02c275a"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "08124f819a805174aaa24ecb10f09f4f"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "7979d70c77e58a7ce6309eecf647db2b"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "ea2fc5320b3d365c4b73a70cd211f27c"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "3e507737cbf96c8c92f916564e4af0d8"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "2691a43beabc4ea73a5cbf2407faf24b"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "a3684fc8d102aa99da4d3d10c2a69cba"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "106834fdb0825873ac2468824400e12c"
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
    "url": "assets/js/app.8ff488a0.js",
    "revision": "5a8daf3fc0bdb0b18652c37323654419"
  },
  {
    "url": "documentation/index.html",
    "revision": "77edb05474ce6508c520ef8ce97b9cf8"
  },
  {
    "url": "guides/create-plugin.html",
    "revision": "91f4829e2f30a80664e5e86ae705f98e"
  },
  {
    "url": "guides/create-task.html",
    "revision": "7c79743711462b890d69a0e5d11e141e"
  },
  {
    "url": "guides/index.html",
    "revision": "c2e732dfc71dddc49a65d6c6f548aca8"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "67fde0674ebadbb092b6d2d46848500a"
  },
  {
    "url": "index.html",
    "revision": "8797175e0b1427c4f9bb12d971fa6a7a"
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
    "revision": "978f60ee5e2bdde0be6ffbb8527e0158"
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
