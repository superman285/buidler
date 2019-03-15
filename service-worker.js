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
    "revision": "5c2b36b4cbb263dcb6880ccc981312bb"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "5049cffdbcaf4e97fadf87e88a57e8e5"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "ff1dfd39ae5121b3e3908e23009a62c6"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "9dfa3e85c705ec25bd8177f482efabed"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "585a3b62c19c895f5962578ae0c6164f"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "bc86354d5146acfd42ca931da5cfbb8f"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "c6025af6066924da3da4198d1c95d15e"
  },
  {
    "url": "api/index.html",
    "revision": "9fd74bf48ddcd09e08c4df8304624e96"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "4a2c6ff74d45508ca4ee5e253eea74e2"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "ebd69516a44f6c2aa36535aabdc3030b"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "9e551fe5310f403e676442a08aece9a7"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "decd829a9a0223fd483ca0f946801057"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "8b52c94efc09fa09728a449fe40d7aa9"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "c23773c7022cbee434a9e0e41c67bcbf"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "442b3a176b99b5d377d4ebaa2f9d7e4c"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "fdb5c6ec325ea62547ded2fdd3fb5b9f"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "262b9e995fae137cb41c2b30f396c645"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "7a8cd443aa47906e7a67fc5002d29d72"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "30581086eeeea271da48fe5ef67e4ebf"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "e4e9d197699c9b0cf7c8753c9bc1f193"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "4e4b3ef2d2f0d5bfa043598220b391a3"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "304a7f6e39ed981382126fd095d12db0"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "1fa6c4396538f09442b4588d47f19be4"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "d131623d87d5fb557482772a53a22930"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "e00813a317aaf7216edad55c8650c05e"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "53adac8605505903db98b89badf07f81"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "1d53aa2fb7479dd9f3cf3abd1ff28e62"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "6447eb3c51959bb8e9d2843e64582ee4"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "089aef209877d3d27af52d4c1fffe64b"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "5da4efea28df154404c32eeb70013a45"
  },
  {
    "url": "assets/css/0.styles.dbaeeaf6.css",
    "revision": "5c6f80edb35e08c17079cbdd70e47742"
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
    "url": "assets/js/33.8efd32e4.js",
    "revision": "658d628ad0d4476875bb694d13c8929c"
  },
  {
    "url": "assets/js/34.1694e862.js",
    "revision": "f2b95c6f54bc0e78920de35ec415f08a"
  },
  {
    "url": "assets/js/35.c6511f4d.js",
    "revision": "609f329c303be4809853f3dab8dce6b9"
  },
  {
    "url": "assets/js/36.bd45631d.js",
    "revision": "a35cbb929c14188a3f31a4c5b09172dd"
  },
  {
    "url": "assets/js/37.52e60a46.js",
    "revision": "156c286f53b8e6e442eb2c7a7a8b2b8c"
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
    "url": "assets/js/app.c7fa6efc.js",
    "revision": "ce7f27e4e0452fe68cde1606cd0251b1"
  },
  {
    "url": "documentation/advanced/architecture.html",
    "revision": "38ca462d7a14d96b8a8749fbe9b57cbc"
  },
  {
    "url": "documentation/config.html",
    "revision": "5214dcd92fd878adda13ebb6bb54962d"
  },
  {
    "url": "documentation/index.html",
    "revision": "f8ca2e44c16b74e6f975268f3c63c569"
  },
  {
    "url": "documentation/tutorials/truffle-migration.html",
    "revision": "1503240df3f40549d9d36f3aa5824774"
  },
  {
    "url": "index.html",
    "revision": "3d8fddcd2270af315af2e7de050c251f"
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
