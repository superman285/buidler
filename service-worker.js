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
    "revision": "54363acffda1aae6b90f75739bce3932"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "79531593fbc346d1b6e0d443bad269e2"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "48009dee60163068a4fb22646864cb0a"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "10faf5775e2c64a05301175212202caa"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "045ca43d57c86b6bf4eeb0c9f0f17138"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "39485103068202bed758d5339d568b36"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "3feb770fa4ad03dc748742e33bc816c4"
  },
  {
    "url": "api/index.html",
    "revision": "b849903c1a967bd2e31c459468f9aebe"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "4d870d8bdbc5900ff3b68bc6d118be6c"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "c66a88bb7097538ea8f80afa8538ed5a"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "60b755aa377924ea53021e72f9e4dc1e"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "011b79ea8ca5588227c93bc88bc4b1e5"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "c5017ce21cc59d468da142469360f3cb"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "fd2875be652ac17128c5115608fe25a2"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "55ab9993052157d39a83a8ea4f8acc3c"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "daf6ba3358a964c21ec88f91cd376803"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "e1bcaad90a306c05b305199b7fd91372"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "93f7088533e44c33750fc7078f54e065"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "14f5315f695cfc00886ce949020077b2"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "92020ef6e787b084106044505c820010"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "c51bc2ca82219ae541bacd1c9db5357e"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "782a99a1bef877a808986463d670de8a"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "03286834ffd67248b075c1c2f4b684a2"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "f44c42d85a7e54270f75d2376e2dab50"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "722593fafa0b3d1d70c13daabfb6ee8d"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "83b5bcf92d3d9ccc17525e21242c0cb9"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "fe5930e00799fa2e7700a8f906c26a53"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "2498abe8a3e3acf5f1c65ce6d610bf92"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "9b1ab5865c9b8e23c39a02db555f6344"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "1f1b5ce107341d29508a6bdae9e9a84d"
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
    "url": "assets/js/app.fb28af1c.js",
    "revision": "fe5312de489ba57e70672b632ad33e94"
  },
  {
    "url": "documentation/index.html",
    "revision": "9c965bc05c6e8aeee0631e34251cd097"
  },
  {
    "url": "guides/create-plugin.html",
    "revision": "dd074a0813d20d7759a825f82fb5fc0a"
  },
  {
    "url": "guides/create-task.html",
    "revision": "17576d272e68b14a0cd1e13a89cfd961"
  },
  {
    "url": "guides/index.html",
    "revision": "6e1971e3be805d7212c142d8fef70d19"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "6a28f0ba9a517fae5ae42de426590bea"
  },
  {
    "url": "index.html",
    "revision": "86177c337f440a554759012546f67e4b"
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
    "revision": "0a0c1d97c42d8b6a2dea1393ae626f19"
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
