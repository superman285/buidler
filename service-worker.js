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
    "revision": "37b4214442851441f77687aa3f3508c9"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "8fb31eb5a44a1953a36bec0a399e6355"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "e374c34ceb6c813626225817bf02ae81"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "19bb007a7a66dd756f81be4a288fb33d"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "2e788eb67f65ca4b2c36495bc38c86c5"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "9b4a5217774ae711eb880a9cd7e12b12"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "370f3df752cda0038bd6c3acb3e8e42f"
  },
  {
    "url": "api/index.html",
    "revision": "f8cd007744c89329ea3bfd275b10b026"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "b12b88234dc7afd042082bd9f884db18"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "162ae61b3f820ccd39a356830c7582bf"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "7ca71890297adee9368d6809b58b582a"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "02868ffc8f6bd73fdcad6450cbc2a191"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "fac94d7a2918446b4ff22485e82bce22"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "c4b028540d36811634923c0d08667ef0"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "e9ed5497afad1625650e7c1f53ecd217"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "03c278f766722598f34cb1625f73ef17"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "fcfd5d89bf690f935c9952183559fe4f"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "da9ff18bd24d2abaec332d12383b0259"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "323fb7bf8b59e84f30a393938138bbc1"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "edb0f973aa7b6bf6b3a0111c80536c4d"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "09856ffff085cca30202026cbfd897da"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "2d9137942c01a496247037f0b6922bbb"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "41c3fc4d7ffa2c77dabc21df6ff0573d"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "74616e5f01f0d42fc13b16e8c1cfd7ee"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "410ff4a7c4e26ca4fa176b0b3b957282"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "2238fe24a84abad9c0bc9ce4038f983b"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "1e33fbab87e5ae80cbf0d9d2f66780fa"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "d816b554d6c8991998b4bbfab75b64cc"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "270be18d959e5c5b347e54a6cb597780"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "77f837b45eac698812fd34f4819721de"
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
    "url": "assets/js/app.96a39ed9.js",
    "revision": "91f1fc178f23f036f4e4a2c313f044bd"
  },
  {
    "url": "documentation/index.html",
    "revision": "d9dc2652bad172e7e4776cb68603bc42"
  },
  {
    "url": "guides/create-plugin.html",
    "revision": "fcc671a7608f4dbd37fd8f2f9bd61215"
  },
  {
    "url": "guides/create-task.html",
    "revision": "9c76745564d0167fefa9a9a0fc570e86"
  },
  {
    "url": "guides/index.html",
    "revision": "db79d72a455450f46970dc2893d08cda"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "f6a111ce23172bb6da73201b07d91105"
  },
  {
    "url": "index.html",
    "revision": "1e585d5b08f928aaaf2e0182e6d16a52"
  },
  {
    "url": "mascots.svg",
    "revision": "29788591613e440f9ba4ab754d9fa186"
  },
  {
    "url": "plugins/index.html",
    "revision": "862ec2cf0bf06e810fe10006e2bae282"
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
