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
    "revision": "fc5e680c976c96ca275c10e23f96f247"
  },
  {
    "url": "api/classes/buidlererror.html",
    "revision": "53e082473e847370519ac638263e262a"
  },
  {
    "url": "api/classes/buidlerpluginerror.html",
    "revision": "c19cdcad2a89c3fec28e087b06c534a7"
  },
  {
    "url": "api/classes/environment.html",
    "revision": "488fa3abeecba5586d99a9b45f0d943a"
  },
  {
    "url": "api/classes/overriddentaskdefinition.html",
    "revision": "d4334d10316b2d4fcbb734033d07a5b0"
  },
  {
    "url": "api/classes/simpletaskdefinition.html",
    "revision": "16c2601bbd4edfcfe851e5f932e87d71"
  },
  {
    "url": "api/classes/tasksdsl.html",
    "revision": "a0de03015091e3bff3240edd4ab5df51"
  },
  {
    "url": "api/index.html",
    "revision": "798a50cf6f515d6a6f8e226e9e9aef7d"
  },
  {
    "url": "api/interfaces/argumenttype.html",
    "revision": "aab3e8c01391bc9c543b222cc5ffb896"
  },
  {
    "url": "api/interfaces/artifact.html",
    "revision": "d791eeaafe4598dc9b05a4c6ca8c64f5"
  },
  {
    "url": "api/interfaces/autonetworkconfig.html",
    "revision": "9d76a1496e10bca0ec5ce1cf1f66989b"
  },
  {
    "url": "api/interfaces/buidlerarguments.html",
    "revision": "ba53cd6989b6e8727664726d457eca2a"
  },
  {
    "url": "api/interfaces/buidlerconfig.html",
    "revision": "e6b88456144aafbaf4ed3a146ec8c737"
  },
  {
    "url": "api/interfaces/buidlerruntimeenvironment.html",
    "revision": "04303956247c4da2c0808a6b718e2ab2"
  },
  {
    "url": "api/interfaces/configurabletaskdefinition.html",
    "revision": "60efd1eb2cbb4e0b2e5e9f8ce660e534"
  },
  {
    "url": "api/interfaces/errordescription.html",
    "revision": "12f282d011184ca79752f29a0ec1cfed"
  },
  {
    "url": "api/interfaces/hdaccountsconfig.html",
    "revision": "2e7953221a60556077e05eb1f9775872"
  },
  {
    "url": "api/interfaces/httpnetworkconfig.html",
    "revision": "f6e4f90830d523801b77d1aa9ee6e5c9"
  },
  {
    "url": "api/interfaces/networks.html",
    "revision": "4bc03b4baded4bf2e7f43f987568cedb"
  },
  {
    "url": "api/interfaces/optionalparamdefinition.html",
    "revision": "c4eaa3303be3f5e681c60b297976dfd4"
  },
  {
    "url": "api/interfaces/otheraccountsconfig.html",
    "revision": "829838cd4c34d3f068175fbef55648ba"
  },
  {
    "url": "api/interfaces/paramdefinition.html",
    "revision": "5bbe958aaf02b2fb642d74cb299a8c83"
  },
  {
    "url": "api/interfaces/paramdefinitionsmap.html",
    "revision": "91f6519a50c25e0a634b21915c657b15"
  },
  {
    "url": "api/interfaces/projectpaths.html",
    "revision": "ad9750dbe1eb542a1676852a025ba856"
  },
  {
    "url": "api/interfaces/resolvedbuidlerconfig.html",
    "revision": "82896b8e776b3c2126dcbd5f6e319760"
  },
  {
    "url": "api/interfaces/solcconfig.html",
    "revision": "cffc21b8cc69c09192bb51d0b5955835"
  },
  {
    "url": "api/interfaces/solcoptimizerconfig.html",
    "revision": "b4245cffa90db5e63b4b4bce09259ab5"
  },
  {
    "url": "api/interfaces/taskarguments.html",
    "revision": "1e7c219308e0a4c66575e8cda64d948f"
  },
  {
    "url": "api/interfaces/taskdefinition.html",
    "revision": "00587860305e9fa698e08442f502c19c"
  },
  {
    "url": "api/interfaces/tasksmap.html",
    "revision": "2077f2b23ccb69382476a293db605195"
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
    "url": "assets/js/app.eca1202d.js",
    "revision": "865b2f90e95b46cee7928974eac3ef4b"
  },
  {
    "url": "documentation/index.html",
    "revision": "82057312aa17ba7ca18c51e0b39c3a5c"
  },
  {
    "url": "guides/create-plugin.html",
    "revision": "eecd36b544a6af59723b9d3a95ab280b"
  },
  {
    "url": "guides/create-task.html",
    "revision": "d532e0c8030fbf1a48196694f56121cc"
  },
  {
    "url": "guides/index.html",
    "revision": "6dc9264584763344f0c75456630e5cc3"
  },
  {
    "url": "guides/truffle-migration.html",
    "revision": "966d73fedd941aab49fd753d974851a4"
  },
  {
    "url": "index.html",
    "revision": "046be22873d26263ccbf53cb0e87d863"
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
