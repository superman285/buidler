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
    "revision": "b8664b38f9c717843f4bbfde8ec96f94"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "5d2bcf883f2db9bdf371561498b5dd72"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "17a7f9a14a2074e7be03ee2f03f2e536"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "4e44864808622396bce43280db83de34"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "a7481083c19328459b5e3b2f67e3f2a9"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "ffc11ca68331c7ca61c472695e97fef9"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "32fc89b79a10fffce8148252a819a5a2"
  },
  {
    "url": "api/index.html",
    "revision": "05504486bc233ec86590abbec8b21f10"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "53265776e676ffe48c6deb503bdaaf53"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "949b9ed9c82139a2053a9dd76df66e6d"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "844b9d967f19f81a954ddafd339879d8"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "aeb5c83f1a6f039f7db8b1d3770f9d8d"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "22a97a5ead835641f07d3bca5d0460c2"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "ac7f3efda09ecbf97493c2f7e13ae4e5"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "265d0ea90e95149b73aa69f158415da7"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "95955287c091a478259bd5ef1b8ebdbf"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "f3c8902fda881f3d67af2124569bde2c"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "afb316fa3509a61cf148038458216dcf"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "a4b31110a744fc6ec7fef9773244148c"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "9aef3060bbe9d03ece74a60e478707cf"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "f183c412ed4cf773c1af8c546b817eca"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "3aeaa24572b689a87e106790419954fb"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "ee386b8f5cad59ccf244997b4c2bb867"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "75e20902dfeee51ffb861ab3ab3b96b7"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "6e5e7d7f70861f93515ced40adac360b"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "f5a487b5da5c7d2e1c8bea9052633869"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "7bd4c4d7fa27fa788909eb145ece819f"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "9ef51c7b499b73751968cc5e223ad77b"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "0ac243701bf7a6822078baf04cb2c19b"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "7f911ba360f19c8f68dc6db591127de9"
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
    "url": "assets/js/33.b2c5ece7.js",
    "revision": "93416399736cc2ae339494e4649ce5c3"
  },
  {
    "url": "assets/js/34.60b5d7a6.js",
    "revision": "05075bb1966c2da1bea8591247a3e537"
  },
  {
    "url": "assets/js/35.0cdcabc3.js",
    "revision": "8b58711dbec9f137bf9f87b136168670"
  },
  {
    "url": "assets/js/36.78017ad5.js",
    "revision": "fa323b5163a35b130d4e24fd4e7ee749"
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
    "url": "assets/js/app.ad1c1a72.js",
    "revision": "20b1515bf05c5f48356862978ffba52e"
  },
  {
    "url": "documentation/index.html",
    "revision": "08b15274c9b34a514217036255a9b06a"
  },
  {
    "url": "guides/index.html",
    "revision": "2f2b1e8587a62df72d7afd44d1667bec"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "72dacd9f4f33cf6501b78e349ce56f1f"
  },
  {
    "url": "index.html",
    "revision": "2da08b85d55a17c106879ad3865c28c5"
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
