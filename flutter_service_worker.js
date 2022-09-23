'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "837f184f4e136b14982b7968a4f36520",
"assets/assets/icon/icon.png": "6f3a7c96ee3379a9127f43b1ed733867",
"assets/assets/img/africa.png": "a33693c03c77499723d146a8c2df31de",
"assets/assets/img/america-del-norte.png": "00d9122ba506ac15d7ade0a6096573ac",
"assets/assets/img/america-del-sur.png": "ee2cb5ba3d6733acb89ed3445b9bcf6c",
"assets/assets/img/asia.png": "7ccd7d6ef12ac7b7a3a88ecdc6c1c450",
"assets/assets/img/australia.png": "d48f710c1bd020eb612a45fc35d62db5",
"assets/assets/img/bandera-bn.png": "2325a799e374c1806e15df4326f6d47d",
"assets/assets/img/bandera-cbb.png": "68b8acea806bd0bdd689ff386f4336e4",
"assets/assets/img/bandera-ch.png": "6113004fd0abaf0693d3319cf69862e2",
"assets/assets/img/bandera-lp.png": "b3479739cf760e4626af5b8e41f4f3b7",
"assets/assets/img/bandera-or.png": "5b08955b13630bde17014cf22c1b6912",
"assets/assets/img/bandera-pd.png": "37e4557d4fc5abea2901983a24d19eee",
"assets/assets/img/bandera-pt.png": "fc5e48fd20ef65f882548e492375e533",
"assets/assets/img/bandera-sc.png": "b2eb58096fb6dad60b892e90abcf467f",
"assets/assets/img/bandera-tj.png": "c15b59ed03e17c0a923d77ebcf15a779",
"assets/assets/img/bolivia.png": "71ee0e1e959618a44ef3b71270d4442f",
"assets/assets/img/escudo-bn.png": "d4acbdf3d7bcbf147c3c8bcb3f455c53",
"assets/assets/img/escudo-cbb.png": "208cb72d28fe5c88caee54ba9c5a23ac",
"assets/assets/img/escudo-ch.png": "d4c2ecbe2522c0a6943a874105a1d31e",
"assets/assets/img/escudo-lp.png": "e8230f7b3e81ea7549a3500d56100d91",
"assets/assets/img/escudo-or.png": "1a8d750a9658756096968563997143ff",
"assets/assets/img/escudo-pd.png": "94832c0efbdce9d012d95ab0ec36bd5c",
"assets/assets/img/escudo-pt.png": "3d60f76c0e4bf5000034b79c98c657b7",
"assets/assets/img/escudo-sc.png": "b57cd5b3f1e5e1b8c247ea69dda8a755",
"assets/assets/img/escudo-tj.png": "2081ba397bf1f44cc47a465aa6c49351",
"assets/assets/img/europa.png": "ad7c866180bd3b8146c0378871d34b5b",
"assets/assets/img/fondos/fondos-mundo0.png": "1b0fdddb4ac743e9ea2f8a70eb0f3b93",
"assets/assets/img/fondos/fondos-mundo1.png": "35569f9859789c2afa52f2f6cd4f801e",
"assets/assets/img/fondos/fondos-mundo10.png": "51ce71e98f29ff621112a228f4f35d6d",
"assets/assets/img/fondos/fondos-mundo11.png": "0b9d2d745d1f94ca432f0696c062f8f6",
"assets/assets/img/fondos/fondos-mundo12.png": "8a8728e612727778c0928ed73ef945a0",
"assets/assets/img/fondos/fondos-mundo13.png": "970cf04492b1d9ba376c91db2103ddef",
"assets/assets/img/fondos/fondos-mundo14.png": "b5f5c24b6dbe7c76644db41e45b75e33",
"assets/assets/img/fondos/fondos-mundo15.png": "5d5721c6b6345daafc80b7d453efb46a",
"assets/assets/img/fondos/fondos-mundo16.png": "6fae39b8f158a56e15793207ab4c9151",
"assets/assets/img/fondos/fondos-mundo17.png": "035926c3ad9deaa207820edff1b25030",
"assets/assets/img/fondos/fondos-mundo18.png": "ac150288eb560e66cfb07ba1eefff47c",
"assets/assets/img/fondos/fondos-mundo19.png": "ba49ffc3f19689f3fe83be286e5cf383",
"assets/assets/img/fondos/fondos-mundo2.png": "099addfd28338666a2e215abc0cc3292",
"assets/assets/img/fondos/fondos-mundo20.png": "83f4401c8031fc3845ca26bbd94bccbe",
"assets/assets/img/fondos/fondos-mundo21.png": "824cb3b38ffeb61c70e4ddde6f91ab83",
"assets/assets/img/fondos/fondos-mundo22.png": "9e2fde1781a659b5587e8907cf70a045",
"assets/assets/img/fondos/fondos-mundo23.png": "555869d355491ae9981d83dbbcb1d63b",
"assets/assets/img/fondos/fondos-mundo24.png": "91f02d0f5e8d432c4e3a63562ad39836",
"assets/assets/img/fondos/fondos-mundo25.png": "9def3afad37d31a85a8ad67ceebe2b27",
"assets/assets/img/fondos/fondos-mundo26.png": "a3bf64be00ab6dbfed5a0cce44bf2fc1",
"assets/assets/img/fondos/fondos-mundo27.png": "df2d56a01f096736c8fc1ba02da9fab4",
"assets/assets/img/fondos/fondos-mundo28.png": "47c3944058c8ab6046d02b871a468dcd",
"assets/assets/img/fondos/fondos-mundo29.png": "fee2f013865a5b422e585d5dbb77ebc9",
"assets/assets/img/fondos/fondos-mundo3.png": "498a707bbc523a26d2acb56f9bff7cdd",
"assets/assets/img/fondos/fondos-mundo30.png": "06ba969c400627255458708d7b5596f4",
"assets/assets/img/fondos/fondos-mundo4.png": "8580aa265667baaeb397d83b2deb744d",
"assets/assets/img/fondos/fondos-mundo5.png": "df2de19aea1310dab452b6e611650284",
"assets/assets/img/fondos/fondos-mundo6.png": "8db90f212ea2da2d9dbf06cf697c8b23",
"assets/assets/img/fondos/fondos-mundo7.png": "f6a347e0d392b282437bf75160f9f5de",
"assets/assets/img/fondos/fondos-mundo8.png": "27758e31f0a0292e173b4dda429535b4",
"assets/assets/img/fondos/fondos-mundo9.png": "50cbd8fc0a9a6b91789f1655ffedd223",
"assets/assets/img/fondos/fondos0.png": "3457f4b4e78fd1db5bcb65dfef578feb",
"assets/assets/img/fondos/fondos1.png": "a8b2df455f9cc293a08b7678dd09c412",
"assets/assets/img/fondos/fondos10.png": "375390ab6174b886bc796f7d623ddbc2",
"assets/assets/img/fondos/fondos11.png": "60e1b435c9ac831b34576187a5de5dad",
"assets/assets/img/fondos/fondos12.png": "e8de7b3533f6f616acebba281dd48a30",
"assets/assets/img/fondos/fondos13.png": "78ea73e9b4a934f250902da993780948",
"assets/assets/img/fondos/fondos14.png": "931359060f7692f88d73a7513b17e925",
"assets/assets/img/fondos/fondos15.png": "bd42db9d03b8b7273aa7d18e11f2214e",
"assets/assets/img/fondos/fondos16.png": "b830b0ae57c7137d0ea3ac2e37e7f92a",
"assets/assets/img/fondos/fondos17.png": "9d80ab3eff302b1a9b24e36c87e70482",
"assets/assets/img/fondos/fondos18.png": "2b61fc72592cb7da64efc0676faa7173",
"assets/assets/img/fondos/fondos19.png": "752bfe8f312f309768d1414a5b6e1e62",
"assets/assets/img/fondos/fondos2.png": "afdb92b24dc8c0438c5eec2705090bc8",
"assets/assets/img/fondos/fondos20.png": "036aa6561e7f3122f9626ecb0566e253",
"assets/assets/img/fondos/fondos21.png": "3cbaa5b2b37f26fb6e8ca273b612fd4c",
"assets/assets/img/fondos/fondos22.png": "d49119a12af1fd0ccaeed845779f0bef",
"assets/assets/img/fondos/fondos23.png": "81904231940788fb939c5703955cab04",
"assets/assets/img/fondos/fondos24.png": "8d8b8654fcefd5d6e45c5545df6450d2",
"assets/assets/img/fondos/fondos25.png": "32e5d1e68ade6d1addd534c10023441e",
"assets/assets/img/fondos/fondos26.png": "6e908c50704691efb90429ec52c1bcec",
"assets/assets/img/fondos/fondos27.png": "1aa445a2c2533c3ca3a403199927b425",
"assets/assets/img/fondos/fondos28.png": "d60b12178f9d670e40d497eb9042b84c",
"assets/assets/img/fondos/fondos29.png": "7d8a18521c4e683cae357ba4cdf29131",
"assets/assets/img/fondos/fondos3.png": "cfc7c1f95740eb80d042f512ad72071f",
"assets/assets/img/fondos/fondos30.png": "ccc0a18f6fcbc4af679c0fc0ff2bd4a0",
"assets/assets/img/fondos/fondos31.png": "84f7289d5937a2f43a640543af51728b",
"assets/assets/img/fondos/fondos4.png": "e7705f839c8292dc488bf12df2c7a459",
"assets/assets/img/fondos/fondos5.png": "12c270c75e32cd376aac6c3c523b4159",
"assets/assets/img/fondos/fondos6.png": "42403526d14ba962f22e3ba66968c4a8",
"assets/assets/img/fondos/fondos7.png": "a16106b4ce1b7872f5b1430b11c0a02e",
"assets/assets/img/fondos/fondos8.png": "69713f0acb9e64766bbb30dfe3510352",
"assets/assets/img/fondos/fondos9.png": "c8488cd344a1f3a6965b18a43e7cbec1",
"assets/assets/img/ge0tic-logo-432x432.png": "0115aac518e7d8f5dd7eefd61903a9be",
"assets/assets/img/ge0tic-logo.png": "75f41f1f3b40f977260fb23d008db48b",
"assets/assets/img/icon-atlas-white.png": "efb2f93a50719ec044513a92ec3948d6",
"assets/assets/img/icon-atlas.png": "aa4a3650d96a3dd72d5e0a001bb458ef",
"assets/assets/img/icon-bolivia-municipios-white.png": "cf413a53df600466907770c3b03de2a6",
"assets/assets/img/icon-bolivia-provincias-search-white.png": "0073074ce43cdb76f920fc26066e1c5e",
"assets/assets/img/icon-bolivia-provincias-white.png": "9212c8a9f2dc172994798ebb3e24256f",
"assets/assets/img/icon-bolivia-search-white.png": "7657ee5351dcb781fcce479c4e22717b",
"assets/assets/img/icon-bolivia-white.png": "ba22dbdcae06ebadeabd884d4119527f",
"assets/assets/img/icon-bolivia.png": "7413f8b8f0c880fbf086e7f4a2f21b04",
"assets/assets/img/icon-flag.png": "e495815ace5b885d6dc1f24b8f506a7c",
"assets/assets/img/icon-game-maps-white.png": "bae0df7ac688ed84d772cf8bfce4ab36",
"assets/assets/img/icon-game-maps.png": "421181fe5d28f9619b968fa4c078510b",
"assets/assets/img/icon-search.png": "c2eafc33b55dbe6193c0fb32c6609140",
"assets/assets/img/icon-sudamerica-search-white.png": "2f116f54af05b15a6daa68068c08a826",
"assets/assets/img/icon-sudamerica-white.png": "f1aa313ea265028d8edfc2a997c7b3b8",
"assets/assets/img/icon-sudamerica.png": "4cf30e9e6798b798cbbc5e7ab92ce337",
"assets/assets/img/icon-world-search-white.png": "33f10de13d503f5b149d2a2896e23d32",
"assets/assets/img/icon-world-white.png": "44233d562fe03eea30d95665d53e4510",
"assets/assets/img/icon-world.png": "7163869fdebee043d5e5561b35d98ab6",
"assets/assets/img/icon-world2.png": "cf459c9c9525c5f3c5e6011bc16ab539",
"assets/assets/img/lapaz-1.png": "f0c299a8603ab1e86c7073682e939a92",
"assets/assets/img/mundo.png": "80b26f4e458fdfe29ee3784632b4e2a3",
"assets/assets/json/bolivia3.json": "77a31bcb04c7698472ceac89b961d6ba",
"assets/assets/json/continentes/Africa.json": "321d5cac697278dff81499ca350d83fd",
"assets/assets/json/continentes/Asia.json": "a97072961ee65f4136e3b70b75c80bf1",
"assets/assets/json/continentes/Australia.json": "7e5272023e45379428ecb886d5539ca8",
"assets/assets/json/continentes/Europa.json": "1d386773bcb3ff0ac095872c3b547e1c",
"assets/assets/json/continentes/Norte-america.json": "e77460e99a6af46dcee03d17166a328e",
"assets/assets/json/continentes/Sur-america.json": "d67b59cf10ad293b1b233cd5d78aae43",
"assets/assets/json/departamentos.json": "66a3c7b02edd4f5fd08e0ebc1cc1ec4c",
"assets/assets/json/mun-beni.json": "f26b962bcbbf639045f4dda63a78ab7a",
"assets/assets/json/mun-chuquisaca.json": "194652467700e21ee7441823400a885e",
"assets/assets/json/mun-cochabamba.json": "8f7d43a08ae741712d087b366dfdb3f6",
"assets/assets/json/mun-lapaz.json": "5710b48dd186fab162c5994e4ff6e43c",
"assets/assets/json/mun-oruro.json": "9f28fefc99a51796d69af111732f0323",
"assets/assets/json/mun-pando.json": "b6f95cacc82992cc5cd32dbf7cdfdc18",
"assets/assets/json/mun-potosi.json": "705803eb39831fd1b97d6e294c3a9d06",
"assets/assets/json/mun-santacruz.json": "721ee4a819dca44430d037e5d6ef7318",
"assets/assets/json/mun-tarija.json": "8c4405a3846f7b1a3d8d05055890bba2",
"assets/assets/json/municipios.json": "b424f2839cb5d106b242a06e76aa4db1",
"assets/assets/json/prov-beni.json": "4e258bd41bed5e113f6f2ededd35ed54",
"assets/assets/json/prov-chuquisaca.json": "c83f57a9a3ad7d065a226a519f0d975c",
"assets/assets/json/prov-cochabamba.json": "586fb3bff561d6d9b1bedf05bd3b8dbc",
"assets/assets/json/prov-lapaz.json": "1477694328739dbb171f623ad56af939",
"assets/assets/json/prov-oruro.json": "1ff54258fc7b0afa314dc516ac602a6c",
"assets/assets/json/prov-pando.json": "8e73e216982ee3f7b932b71ad958c6c4",
"assets/assets/json/prov-potosi.json": "e0b62afe656a42a454d25035e21ef035",
"assets/assets/json/prov-santacruz.json": "46191669e9588c14d09054b3487686e2",
"assets/assets/json/prov-tarija.json": "805e54c145920c706ff89dd0563e5b7e",
"assets/assets/json/provincias.json": "540ac285928fae9e1ad26cb7731b1e2c",
"assets/assets/json/south_america.json": "0a64ec092eb191b1072bb25556039dad",
"assets/assets/json/world_map.json": "affb02d9e216f26878824abfdc39b16d",
"assets/assets/qr/dona-1.png": "75ecb30ace8ad46365eeb2e826e7d6d3",
"assets/assets/sounds/fail-sound.mp3": "6841101f637c024362bbceda3ace0308",
"assets/assets/sounds/ok-sound.mp3": "67aca747b94bdff1a90594f86975325b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/google_fonts/ComingSoon-Regular.ttf": "95385de6f074e502e733dad5aeb95068",
"assets/google_fonts/LICENSE.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/NOTICES": "31b2bf70d82cd3049af124c5da28ea6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "966b84ad8d8dd720190adf775c9b8851",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "966b84ad8d8dd720190adf775c9b8851",
"icons/Icon-512.png": "966b84ad8d8dd720190adf775c9b8851",
"icons/Icon-maskable-192.png": "966b84ad8d8dd720190adf775c9b8851",
"icons/Icon-maskable-512.png": "966b84ad8d8dd720190adf775c9b8851",
"index.html": "2d42b5417d7733523f356b22b933c170",
"/": "2d42b5417d7733523f356b22b933c170",
"main.dart.js": "0d6aa625a00ace3c2ad4610ca7773012",
"manifest.json": "9be1273c1398aff7b8a2ab82412fa07f",
"splash/img/dark-1x.png": "4a0eacd6838e8ce74a4bcd2469837215",
"splash/img/dark-2x.png": "a35ce4894c58578bee5453c84a9e46c5",
"splash/img/dark-3x.png": "8632291e1b9fe0ee1c84d96d2c7cbd96",
"splash/img/dark-4x.png": "464fa34c903f4bc560af2c9dfac0c4da",
"splash/img/light-1x.png": "4a0eacd6838e8ce74a4bcd2469837215",
"splash/img/light-2x.png": "a35ce4894c58578bee5453c84a9e46c5",
"splash/img/light-3x.png": "8632291e1b9fe0ee1c84d96d2c7cbd96",
"splash/img/light-4x.png": "464fa34c903f4bc560af2c9dfac0c4da",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "2e6df68c18efc965e0beb1b72c5b4ae9",
"version.json": "11a7c301008705eacc2d36b1c2e00487"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
