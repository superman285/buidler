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
    "revision": "d6571c209308e06eba587feae5557fd2"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "d7f85a07ec6f0aa2a8483da98839d05c"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "e76c6397fd3a04ce6875c9649a302cf6"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "97ae591852a6b8c897c8071c9f673017"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "fbd936dfb646f5dc8d6119989e96104f"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "29a3289e340d155bedddcca5e75394aa"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "17cbfe21005bf24bddd6388ad9ac615b"
  },
  {
    "url": "api/index.html",
    "revision": "37580a4d299bf793a118203b459f9e45"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "c41ead3b2566a8334e052bbac2db7c17"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "d05070cae07216d62e682f4c8a3f504c"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "e88b8bbd5cb747162c99e2ef9a92a8fe"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "56213d44ce7f0bf841925a320ffdfe1d"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "4585873018e4ad2de1571132160c0374"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "89b2f85ee61b734d068e924402051e52"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "9a36212b98e7cc1d7053ec6d7c67d3ba"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "82e87268f1c702226bf59306292b84be"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "b0a6095736abfcc079aa8773b4304227"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "b9cd3d79bfbb493f3723aa29f8841670"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "06a2fc0efb039d550286bec7d233884a"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "a447972a3b68d974daf359a35ed3e04f"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "1aededa59954e0c1e86a46443019b13b"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "ccaabf7edb7d6ed45717665e3ec1b1c6"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "d6860280f489d923514d77af1d6622f7"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "a97ea429e2fb937fdd623c43ea19e06b"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "55739a8353ed0fd6b2bac2fe7a300943"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "177aba93b20b79f60f67227548670470"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "873866e420877672950b814f9403de7a"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "36e800dd025ba172448b09dec0e48a55"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "5a607325af8ceb6bc1fc47515b745cdf"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "20ebe9289d043be59488d398e60a66f2"
  },
  {
    "url": "assets/css/0.styles.e9a6be8b.css",
    "revision": "b3f199e7f067a8abe932795fc2f132b0"
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
    "url": "assets/js/33.1d624d22.js",
    "revision": "e56a4060fb777b95d02d768be6cddf4e"
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
    "url": "assets/js/38.a128e371.js",
    "revision": "3b9f662fe8e9b6a333da6e23f9b059f9"
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
    "url": "assets/js/app.8bc72740.js",
    "revision": "28290bccd155210c82350864bce6093b"
  },
  {
    "url": "documentation/index.html",
    "revision": "6bfa015723e9742f3e07ab27bae7dbea"
  },
  {
    "url": "guides/create-plugin.html",
    "revision": "035358c0544e2f36d9e47bf8593db657"
  },
  {
    "url": "guides/create-task.html",
    "revision": "500fb73a4cffffb573fcf38e4f682ab3"
  },
  {
    "url": "guides/index.html",
    "revision": "11601404d9156acfd67686d2c1c90c50"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "910a89db315df475214ebcb13c135a13"
  },
  {
    "url": "index.html",
    "revision": "4b738d0b9dd65c3d48df4e9b6b73e01b"
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
