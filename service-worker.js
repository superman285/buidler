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
    "revision": "a7eea2551cf4e4afe88fdd49b0893792"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "97a8eb1d761cff0c94e7717d01054969"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "a813db7071de348346d9cfd3fbb26c29"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "69aad9c97266fb7273fa53142969e915"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "981dd15a3dd59e49ec33f5981b5c4636"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "8cf23c89a31162c5decef35ef79b0938"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "096e94e86c7aa0cb19684bd0b2c7a1c2"
  },
  {
    "url": "api/index.html",
    "revision": "166e13a6382351ef98301cd651ae1221"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "dded8368e46c562fa20298ea927d5b35"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "e2cbe0109dd03d9f48d31c4beb6b4213"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "ac031d8ca83215e8ba1d6c041ce039fe"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "ebd164a6beff4041bd284f5953b76f29"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "b8c81a344e7d578ca1fe7139c5f3136f"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "61823af680cd43b61b62f2a3cb0dcda9"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "58c16205f866328ebc459a503543033d"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "85674a6a1b72b13381607f129ee67b27"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "762315e7a76c51069ee29098fbf88ae8"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "e6b7f7503925c344b13653f0f96a020d"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "341f7172177b3da2463cff54a4a8eff4"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "96577567912e414b767a9c4e67fe5cac"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "cf8e66f690a02f3c2122a4bfafcfda31"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "4f30ec933351f7eb1391624d15cedf39"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "40799cd1a1481b2a097e1f3681aa3bf0"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "2396f69f460586f8a57631fd5cacc5af"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "5d699ed985cc921e45b02d73294557ad"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "e4bfec02d653b3a868941dcd5d69ee06"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "947f972a7487fecfa7c3c9f1270e68ec"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "bfc02d761d9d4f9bb9eda62fbd6536c5"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "a9f79d5665c7fae3825bbb2ae066d512"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "556c69906ef90eb1512977c2a78c66a6"
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
    "url": "assets/js/3.4026287a.js",
    "revision": "29ae054f3ff8d488bca890a245f2943d"
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
    "url": "assets/js/app.c6e5db81.js",
    "revision": "ae12a647f901c0ed92fd2b0116a6ca3e"
  },
  {
    "url": "documentation/index.html",
    "revision": "71dcd32d614a86a4af529ae0e74e0356"
  },
  {
    "url": "guides/create-plugin.html",
    "revision": "1983ecd7df0db6c52e2604c25f239cf7"
  },
  {
    "url": "guides/create-task.html",
    "revision": "c38b75a5f36fe2c29227e3743806b450"
  },
  {
    "url": "guides/index.html",
    "revision": "4048b18703306a57550c51d25cc1e56a"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "87e49148a62edb0c5b6e205279b6bee1"
  },
  {
    "url": "index.html",
    "revision": "749a30b507f6da3cd206b978aa2ffcc3"
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
    "revision": "8587fc4b0383b74c8aa0b27c20250fef"
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
