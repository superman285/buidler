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
    "revision": "a57b2c3d0bcfabb91467168d12d0b8f9"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "7fa7f2d331281854ccc7d282e8a85e80"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "164c026321b8c66ba4768e9fb6ea9d3b"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "163af455cafb326ba79b800914429328"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "9c802d8dc21f6059dc5c7fc54ae008bd"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "5c284a6f2fc1b37638836ceba0809133"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "535795fbf9bb80eb085512beb9e67353"
  },
  {
    "url": "api/index.html",
    "revision": "5aa1acf08d188e988066c8670be176e3"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "4b9fe98dbd4375759d7b19fda40f864d"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "c38bd4a77c0dfff360145b90f2d6a076"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "257e23e2cb5b22aca3dd681850ff32df"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "1c1f26237095ccd9b4b0a5d58c1a11c7"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "de8b6b96285d9939f2d8f6d097942bca"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "7d018ecdecec7ae5a2851f4d17a840fc"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "5ea56a022e44d904301b5b7d4e515071"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "dfea18a55ef893d054d90ca29e5290a0"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "973106ed03e499b5780c18a58c8411a1"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "da17ce5dc3058b1d626a8f2387ec65e3"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "e744a58780bf92029b44ade1137293d5"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "cb3e44c37cad215a4bb1ffc2f203fa2f"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "9111814ee35076a9f07e39ed2a2dfbee"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "850fea03da9543d630c6b8c0606de74b"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "eb8aa156f4f90956bc464a630037147d"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "259639130e57fc404a2d3489e8f8fcbd"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "fd0ca1e9bcb0ed52c7ae46de86ae8aa8"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "084a310c7cc7cade2a1d5769dc8b99de"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "6764409d17808e10b2330791b0cc6a87"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "04dc03045041c81415ce890229c646d1"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "3ae70bf6e6bf7e866a8a206d8a46fa43"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "c58c59706b47f64eb6a15e8e83d755f4"
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
    "url": "assets/js/app.7aff678c.js",
    "revision": "a28aea3b0dd81554a6ae8e1115398cf0"
  },
  {
    "url": "documentation/index.html",
    "revision": "95f2f4eda098c3fe87853e5fc69f554a"
  },
  {
    "url": "guides/create-plugin.html",
    "revision": "315bc2ef68668e4966dcca557a207002"
  },
  {
    "url": "guides/create-task.html",
    "revision": "568febc4efbe88263b7acda3396c5163"
  },
  {
    "url": "guides/index.html",
    "revision": "4ee3e36508e96d9ce6d4b0a1252c12f1"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "48b436236005886b022113f912851876"
  },
  {
    "url": "index.html",
    "revision": "940f16ce5d836a8a30c7b9b7d2ab78bf"
  },
  {
    "url": "mascots.svg",
    "revision": "29788591613e440f9ba4ab754d9fa186"
  },
  {
    "url": "plugins/index.html",
    "revision": "b208819184b5fe0b23f87b25d47c2e19"
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
