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
    "revision": "1ceb77ce5c887d021a73441b028826e4"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "b965d2dedf1d165ebab3e1c08833e072"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "5f33b4a55f465b17bc3ae066c8b3dc3c"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "520906b6baf40de46380e4509939ac72"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "0bd361d718d90f32837acb31c61a0143"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "ea08367e27b28c915507cabb6a9d3ed7"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "d04f5cf984100927c0ff5b20eed86a4e"
  },
  {
    "url": "api/index.html",
    "revision": "307a23245a4e561e995dd5af40e2b740"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "c45894d15b7439c870bc3dafd251551f"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "748d7a23d52544d94ed5595d6d5b245a"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "985a5cbb4442a15d3cb7cb9dc976fe30"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "129148932cc599de9f5a164f50cd692b"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "cebd91be2deb212df694c3b4baca3b69"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "c4158f7d7b97eb49292e71cdb6e13ffe"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "b63c9f4f7c17b13fb42996222b3f313a"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "6261d21ee50545b2b952f099cb3a411c"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "9987043dfd4231c175b847dbc533eead"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "9876a2eaa081f41a7849e4110a02e1ef"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "490bcc9c3bb35443c74c8a18c828acfb"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "dcdbf320c80569daec5cef5c8c0f95d9"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "c027693a67ffaf025cde3c83b9182906"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "408795df74ae6177ffdbd80fac2dd33e"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "76ddcf76fcfac8f93ab483f06e0b65d6"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "e983c5cf9df9121bdf4a9c4ca9108cb0"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "f99106474d3749796697ccc91c942189"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "93cb3cb6a5085beac239aafd34f56849"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "53e00fc07e4ee72a88bdc2ccbf645b1a"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "b5a857b7600deb91713c9b9592807d4b"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "0377f11c4a5abdbd9ba691f4970b5e1a"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "d01be06a4f2dc635ec4a0511f3cb11db"
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
    "url": "assets/js/app.89002c3e.js",
    "revision": "82af2e8ca67228c08f372c567a9fe258"
  },
  {
    "url": "documentation/index.html",
    "revision": "50a706966e17f3266932329c8189c03a"
  },
  {
    "url": "guides/create-plugin.html",
    "revision": "4efbf28d360966e14a6aee4b13034e66"
  },
  {
    "url": "guides/create-task.html",
    "revision": "94dba2ea5229bee5b29c8a8f5d863aec"
  },
  {
    "url": "guides/index.html",
    "revision": "9d3aabc4cbf52f138a3819a3e78333da"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "7b49f8511434e9a2e11e2eb9c4f83686"
  },
  {
    "url": "index.html",
    "revision": "df6564370d44909520ebcb6c14a38ad4"
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
    "revision": "33cb57973841ecf0d305e1843df0b64b"
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
