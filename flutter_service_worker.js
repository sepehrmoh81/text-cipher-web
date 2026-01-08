'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4cb86f1b6fc2b64965f3260c4fad230c",
".git/config": "c312258714388b4d2e69c4aaef1edb5e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3fc13b35084f74c499ad9b302926c9b3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "39eb95edf8d84e69240b89c1b553c085",
".git/logs/refs/heads/master": "16f0276f1c3c32433d1627dfeb2fe8ce",
".git/logs/refs/remotes/origin/master": "06c6d58de579626656a643ccc84b58c5",
".git/objects/00/33635975263565f444a902a3fb8d56e3ab8705": "75b1ceb0857af42e05c64cca30327c77",
".git/objects/01/45c2459a55c3e5091d5ac71661a633c34c0c34": "36ec6b024b032cda2c1879ad84cbcb29",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/a7017fb4493587949886afa09a2315266c3ddb": "73f9fa1e93a90c4169e8a284471ffbbf",
".git/objects/09/235263b3cf5a70980120f989d67d2c2b4b5736": "caabaf22c3dea6304f5d98290bbe4823",
".git/objects/0d/9a88966f644d600819adbb9d62d9d36666e76a": "0daef216e56267e173dbf4f1a7b784f2",
".git/objects/11/8b3dc069e88b60bc4866cbd97c45ef86ccf85d": "6c9470d3f316951bf5c4d4fa748c9a83",
".git/objects/11/e89ca51532211c74e92c07dad43b09011bae82": "979e3c050a672e81bf011a33faed2174",
".git/objects/12/81b4153c3ddaf97f1d8917ece6e25384659c65": "3c620a2b45b3ff4f80de7b87b78f99f3",
".git/objects/19/2248bbf353d70c2f3a967d27aaf4fb46a6b419": "de1592e3818c438cfd909dbd92571b77",
".git/objects/1c/a8de1c5b7fdba476f917e3f7ba2ec11e45fbcc": "401ba84dd9fa283776b7c4ec18b90d21",
".git/objects/24/3103c371281c981cbcdcf58c4a5c39e59c4c41": "e3f951c6b4c1bec1863efaa1b0c97a27",
".git/objects/24/ddd38d286ad87894b2ed8155b52cb088b3f6d2": "b686b22edd52099311bcffa804ce9038",
".git/objects/2b/ce3d7edee6265abb7f6550495e18a9482b1c7d": "9b165c2c623b21d3f06e268dcd1766f8",
".git/objects/36/68feb4ff08f1ffb2275792dad3717420797349": "4fb53c2b1d2960b1d4ef8c9cadd9f57b",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/c106060768346e0879c5b379ec024e12d5286b": "c5c3e2c32c4f60167e722fcc672f19b5",
".git/objects/3b/a2e0bdbae10714518902b91cfabe5da13feae6": "e4d7b38683b6310eac8d01dfe748f646",
".git/objects/3c/1d768b8cd90a161a5e8ae7a7b5b03860e1f6b8": "055cc13db93faa42bbbda57b14023c2a",
".git/objects/43/c2fd292636274e9171ee6a0abd824f08a92cb6": "c4d633058e7bff7dc0704fe79c05daf5",
".git/objects/45/7408e5047768118a11cfde2c53a2d1b89d876c": "66fd39ba7e347fc1a2b50957f95c2f80",
".git/objects/48/30ab50073a54dedf2739448860ae72c7851ee6": "daecc8acccdfd2d3850e95571c34f29b",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/15ade732acadcf502c1c7d1fea3018b75408c9": "2054b3949606f2dc308312272af2be0a",
".git/objects/55/cdedcdc99cdc49b99063d49b0cae1f97af2117": "4d1ac6bd007e922545051dd5e01c8684",
".git/objects/5a/dbad0c04883800be22e766a50b30c76d9d924b": "521c1885c52ae4c35b0981112e0cb545",
".git/objects/5c/cb64216ea0a06b807e4e0d1fdab4a337010982": "a8e6f0ac9cc0519392bbfe94a385493b",
".git/objects/64/b6ac6a715fd7045e064f3c2a0ff5655cab6dfe": "0c6225a6496157a9979d5fba57c7fa57",
".git/objects/66/2c7c6c35bf17211e9c7c42ff0936b80aef999f": "4f43fe2d2c9398cb825df7c5b3d25e0a",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/92338a1c1e4ed3a82859d220b85342a611ddf5": "cf2fcee0a5f15c7a53fd13c7871ec16f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/93c7967e7c43d5f4fe08549021fe2cf13f5080": "262cbb31b07a64dde37c6480b7077fad",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/2dd23effd44ae152c4352ae47a137d0097a0b1": "004f2d5cf3e3960464e8d01749e560d8",
".git/objects/72/7c976add47f54aec13acb92f2f5f24b14cbb9d": "90805cccdddc43ce9603d099cda3b09e",
".git/objects/72/cd73eb5672d80bd4f1dd563964fceb84408179": "3b2f6de30c6ff569007345ec2c473da7",
".git/objects/74/83385f320f059a49367ca6b3946798d47befc8": "4b20b6a1e2d9a7b0d368e8d61d92879c",
".git/objects/76/93432818eda944dfc222c61b9ce58f896eb18a": "88d69409c92cad5ad8c1fbc18d1eb84f",
".git/objects/78/24bff684d615adb9858ff7b3e4d6bb98e09630": "ee595f4176eecdbfbfc233d5189c878f",
".git/objects/78/e49cb60ecf0133809e4a1764c028e245248178": "45cfdbab35b3bd2c0559a90c32bad218",
".git/objects/78/f8ffa70a61fdf51e74371fbe9a7c43b43343bd": "08e1e124a409412fb0e223d0bdcabe37",
".git/objects/79/e63df84b1636e8fd6e69b47cc92d8e885a41f7": "44befd5bdf40624ec1c20243b575e9d4",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/eef0cbef3c0320bd9e987cb7397f988522b105": "f648b81578342294b8cc4eddbcf106c7",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/d460dc948c9ab850e42da8d17855ba059e7ed5": "27288a160ddc3ab4ea0a469dc08de86c",
".git/objects/88/14d809911bf869a3c5c0f7d4663a57c48b7f31": "dc62a1111cb572bf870a00c0b5137fa6",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/87ea7c5897894066c2cefd8a1c80cc4bbbe478": "cac087e67df7b71af31835fe1654650d",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9a/01cf29d6c5de10ca13a4c14d81bae066e9cefc": "1363899d1da7b557dbf7a749e4e073b3",
".git/objects/9a/9ba8948a023c3ad33a3ee94c01cc47d174a25f": "6219f0b53e5c12ffdb99ac25069e0316",
".git/objects/a1/acb24992805c1996ab8034e5ae524ad21a1997": "e3d3e0805293f8686cf507c41e205d4e",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/0916fa3f45b7f503bf5a97f0e35d5d6dccd898": "8b74bc08a92f71d15f0491b381259659",
".git/objects/b0/294ea6811c08faad39593ab8f95fe13dc349b7": "1ce4f45994e62b2d37db6075bd4508da",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ba/35eab381727c0a0f55756da45b42c8c63b4194": "655c265784da4f612b3858b89e3a2888",
".git/objects/c4/0f1342ac31e796b66fc278775fe05084c60bd0": "996e08f72dd83e66c2981f26f85f5696",
".git/objects/c4/6fe8a76fddf5dd12a6876c67f2b9759bdce039": "2fdd9ae2f64e5d7f81db1dcdb5638bde",
".git/objects/c7/94369a7fa1e2e36d241232c3a0fbaf7b346fe2": "a32d24f7d52b18a1f74a700978b30f32",
".git/objects/c8/040051d820a6af46015d523b76f2a289979a1b": "b7d81b019425459c54526d65c591774b",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/7a9e37b4b01d71d92a8784c2f96f598b65cf2f": "989804665e8aaafd2252df55cd970012",
".git/objects/ce/45eaf861a967fd4beff8bca1838a6e9d1dac6d": "9fa47b09f8d38a3b67241e8efab4ba7e",
".git/objects/d2/1f7472a349b89899c4999a44d2bb7549ef5d94": "ddb689e5004d122c80eb2e42ac907a46",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/9aeb14afbcd1aa09e3bb3dee37f3f34a86b8dd": "1005d6751ac5ea4997abf7754091ea17",
".git/objects/d6/33585e41a2c389611d694fb8e5a174dd862651": "4b8075405b36fd9291cc83ff3fa72118",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/567d1159cf4a002944e1b30d3d4c1179981612": "626b86c0ae137d50f4ab75c12b5fd539",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/df/1dceaefbd330955ee8d804a4b62852f61b6880": "122504a80cd72687b11a69d75b10b035",
".git/objects/e0/70867abdddf132b7fa900b45f9f5b05235db0e": "1dd4ad05468357053d0803543fef7c4e",
".git/objects/e2/3e5a2961ee2b41dc52d50423f34849a4e87095": "0ad315ce9525fc1970ce191c45825cda",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ec/5844907756623652a5629d91d6c7751ccbfba3": "d1fc8a61f248c85812cc2e0000c5ca03",
".git/objects/f0/7a7f70e2094c8e6dd012bd1e2d6d241da04ace": "1facb29197ac55b34719e0e7e412c33f",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/4135707aec4ca96c4907f582c9d825fc7aa231": "5cd5817db3a45ef382a9f8e7f7241639",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f9/d244cd19146670ba3f909d39bfacf1b8b4a6cc": "baf8d52bf2e5e157e090c11b7aed692e",
".git/objects/fa/01ac1f135e4b34c6bfa82681de6f5d5d662bb1": "b2e182ea595cb60f8c2ff009f452ca4e",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/ORIG_HEAD": "70bf3202024ef52d3c97b175699796d5",
".git/refs/heads/master": "d27af50c10e1fadf1919dc37d09c8f40",
".git/refs/remotes/origin/master": "d27af50c10e1fadf1919dc37d09c8f40",
"assets/AssetManifest.bin": "deac98a88a34fce3bc6b4dd8dff2d3b2",
"assets/AssetManifest.bin.json": "79cd19d66be95c500d760e3006e8e771",
"assets/FontManifest.json": "9d771815d1e9a4eb44fd1ae2fd5faab5",
"assets/fonts/GoogleSans-Bold.woff2": "2698780e07cc1e886d647609b5edccbd",
"assets/fonts/GoogleSans-Medium.woff2": "280e6b4b006b2733eee06d18e9b8a8b2",
"assets/fonts/GoogleSans-Regular.woff2": "831056157b9c65c3231a9497fa9ee447",
"assets/fonts/MaterialIcons-Regular.otf": "167deb7d54a0f27f4528a7e42113d5ff",
"assets/fonts/Vazirmatn-UI-Bold.woff2": "4b80e729b3913e94102118e80b4108b9",
"assets/fonts/Vazirmatn-UI-Medium.woff2": "4e9752779119fe066b02f03e0f4eb18a",
"assets/fonts/Vazirmatn-UI-Regular.woff2": "79e5aaa5e0bd73b132d26b0becadbf69",
"assets/NOTICES": "a9d8bf2565745f3933e258efee8b83a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.ico": "686a86512d0684a2693ec09e9359b6e0",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "908cd98992ca095aa4a3aca5c45bb840",
"icons/apple-touch-icon.png": "4a77cc93f6e7055171a3dbeadb39de64",
"icons/icon-192-maskable.png": "7b9384d7308d8f24cf44e722ac963497",
"icons/icon-192.png": "2b6ab9675e98a3a016a845968f1bdca3",
"icons/icon-512-maskable.png": "c1c37398dc28ade63fb35432883e99a1",
"icons/icon-512.png": "d816bab872bc2a73b1bd21ac056eed43",
"index.html": "4b0f1d1195abca99266d0321d9954006",
"/": "4b0f1d1195abca99266d0321d9954006",
"main.dart.js": "ff2356a12a1d37f2c072e01a159c2ec1",
"manifest.json": "6ecfded594b902dc39d45ed60fd3e490",
"sprite_60fps.css": "9f716ef7396118fa97d37305056d149e",
"sprite_60fps.svg": "ad3cf99ec6bfef820b72478137d6f9d3",
"sprite_60fps_dark.svg": "f938c8ddbcb1de5a6c99af6943f75869",
"version.json": "80513e4aa1e55f4c4d28f4faeaf913e7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
