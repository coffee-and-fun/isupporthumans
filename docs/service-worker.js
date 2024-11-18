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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/styles.css",
    "revision": "f7c291c2c58f84ba52f01a400c8a4a93"
  },
  {
    "url": "assets/images/1034364_quality_award_prize_star_trophy_icon.png",
    "revision": "e3dc14d94da63eca534fba4127a631d6"
  },
  {
    "url": "assets/images/2.png",
    "revision": "ff8b1391b5eb662f6f7681f2995f2b38"
  },
  {
    "url": "assets/images/apps/1.png",
    "revision": "4cc2701428984e2bcadc807459e8e645"
  },
  {
    "url": "assets/images/apps/2.png",
    "revision": "1d281aa11d540d3addda1e51488988a6"
  },
  {
    "url": "assets/images/apps/bear.png",
    "revision": "2a7059739e521a8816bb195039e5ca07"
  },
  {
    "url": "assets/images/apps/bill.png",
    "revision": "2acfb5c86b07f2e3db316809c8a6d329"
  },
  {
    "url": "assets/images/apps/cards.png",
    "revision": "cf01642045076a74e77195de4fcefd3c"
  },
  {
    "url": "assets/images/apps/clean.png",
    "revision": "8f3c202b3bbe9e62d12e8d65588d1ae0"
  },
  {
    "url": "assets/images/apps/coco.png",
    "revision": "4cc2701428984e2bcadc807459e8e645"
  },
  {
    "url": "assets/images/apps/Coffee & Fun Apps (2).png",
    "revision": "2acfb5c86b07f2e3db316809c8a6d329"
  },
  {
    "url": "assets/images/apps/coffee.png",
    "revision": "0caaa556480515325aa25b8b470398a9"
  },
  {
    "url": "assets/images/apps/confetti.png",
    "revision": "c2e1c747208d90afb36c0761721ff323"
  },
  {
    "url": "assets/images/apps/flash.png",
    "revision": "a58401282ece9199e3d3eb7748f2f0e8"
  },
  {
    "url": "assets/images/apps/google.png",
    "revision": "4370cb93e7433e090cf1ca055e95c708"
  },
  {
    "url": "assets/images/apps/helperbird.png",
    "revision": "39d059f4b2a92509c8973e30227910d6"
  },
  {
    "url": "assets/images/apps/instant-incognito.png",
    "revision": "797b5f271c51677f741f2914a5c1bda0"
  },
  {
    "url": "assets/images/apps/markdown.png",
    "revision": "1d281aa11d540d3addda1e51488988a6"
  },
  {
    "url": "assets/images/apps/maths.png",
    "revision": "6fc0a8b93aa18182585c98290b6e48dd"
  },
  {
    "url": "assets/images/apps/netflix.png",
    "revision": "ae62168382182afd8fe1b46a86780886"
  },
  {
    "url": "assets/images/apps/pii.png",
    "revision": "b460f66f8d61c64330694e6a8707e5d6"
  },
  {
    "url": "assets/images/apps/procrastinot-2.png",
    "revision": "f35e9d40ec71d1dbe4d3adffa6054525"
  },
  {
    "url": "assets/images/apps/procrastinot.png",
    "revision": "5f8448c856333869618531cabcb840a8"
  },
  {
    "url": "assets/images/apps/rank.png",
    "revision": "7eb1260fa26729f415a2ac29e2c1c780"
  },
  {
    "url": "assets/images/apps/reddit.png",
    "revision": "b30b3c542e17e3bf71968c6a829d37e9"
  },
  {
    "url": "assets/images/apps/screenshot.png",
    "revision": "a688c58d813cfcea7842f63ca06f2a34"
  },
  {
    "url": "assets/images/apps/social-rank.png",
    "revision": "7eb1260fa26729f415a2ac29e2c1c780"
  },
  {
    "url": "assets/images/apps/trivia-app.png",
    "revision": "2b41c291479a09c1224f70f48d83013b"
  },
  {
    "url": "assets/images/apps/Untitled design (3).png",
    "revision": "c2e1c747208d90afb36c0761721ff323"
  },
  {
    "url": "assets/images/apps/yeti.png",
    "revision": "05db40e5180db1f3eb3d5fcbe8f60234"
  },
  {
    "url": "assets/images/blog/airtag.png",
    "revision": "f0edb91afcfae7033c139c65c54aaf3e"
  },
  {
    "url": "assets/images/blog/airtag/1.webp",
    "revision": "8a22eaf796a7b2b5bebe235250ee8d3a"
  },
  {
    "url": "assets/images/blog/airtag/2.webp",
    "revision": "f5e324303f6bc73d35796edc6839cf3b"
  },
  {
    "url": "assets/images/blog/airtag/3.webp",
    "revision": "de0d803ce9dbe5c50a69ec9eb8e3c762"
  },
  {
    "url": "assets/images/blog/airtag/4.webp",
    "revision": "6cbfab9464797b034cd756870deac5ff"
  },
  {
    "url": "assets/images/blog/Coffee & Fun Blog covers.png",
    "revision": "2a57290f8fdb7837d4645e324161b388"
  },
  {
    "url": "assets/images/blog/facebook.png",
    "revision": "c689363606cd5523238ee72d83b7ac60"
  },
  {
    "url": "assets/images/blog/maths-update.png",
    "revision": "2a57290f8fdb7837d4645e324161b388"
  },
  {
    "url": "assets/images/blog/redbox.png",
    "revision": "a02f58a011425fe91ecdcebc8e25f054"
  },
  {
    "url": "assets/images/blog/switch-battery.png",
    "revision": "82a1ca8978651a0a7016a6f3d6528351"
  },
  {
    "url": "assets/images/blog/test-in-production.png",
    "revision": "eeab8da5b3836ca6083bd8d8cdce563c"
  },
  {
    "url": "assets/images/blog/woobox.png",
    "revision": "7b05f996f0cb6428789992842631e8aa"
  },
  {
    "url": "assets/images/chrome.png",
    "revision": "16b9ac116a44042bbecdb9db475fbf3a"
  },
  {
    "url": "assets/images/coco.png",
    "revision": "b5adb2e066959860b42ce6250e133835"
  },
  {
    "url": "assets/images/coffee-and-fun-logo-dark.png",
    "revision": "9eb41a43b9b81f9dbba281116c97b8eb"
  },
  {
    "url": "assets/images/coffee-and-fun-logo-old.png",
    "revision": "835aae9ca06f8e91251903e222b94d3c"
  },
  {
    "url": "assets/images/coffee-and-fun-logo.png",
    "revision": "9d2722c66c5190c5cf5d5a82671d367c"
  },
  {
    "url": "assets/images/credits.png",
    "revision": "d55805848a036129dba18d787e875786"
  },
  {
    "url": "assets/images/edge.png",
    "revision": "08216bf8bb6261c731578bed2a5e7f3f"
  },
  {
    "url": "assets/images/favicon.ico",
    "revision": "780996719e6ca94956a8551f1b87028e"
  },
  {
    "url": "assets/images/favicon.png",
    "revision": "c259f2738e4ceff7ef171066565f8695"
  },
  {
    "url": "assets/images/flash-cards-old.png",
    "revision": "a78baf71ebddcd8ff4bce450cc8b1fbf"
  },
  {
    "url": "assets/images/flash-cards.png",
    "revision": "02a166499900cbd5d42828c3e1ca38c8"
  },
  {
    "url": "assets/images/forgot.png",
    "revision": "ff8b1391b5eb662f6f7681f2995f2b38"
  },
  {
    "url": "assets/images/forgotten/cards/bestbuy.png",
    "revision": "5887b7d712a70a7ff4251c5653b055c8"
  },
  {
    "url": "assets/images/forgotten/cards/kroger.png",
    "revision": "d1707000c7c60656ea9ab3e36f56f4a0"
  },
  {
    "url": "assets/images/forgotten/cards/target.png",
    "revision": "887022f0c6f4a055bc7a8e17f9f73924"
  },
  {
    "url": "assets/images/forgotten/cards/tesco.png",
    "revision": "60429b01fe17fdb3b2254f6c2a42e446"
  },
  {
    "url": "assets/images/forgotten/logos/bestbuy.png",
    "revision": "0b11e07775d08e51ccf6df6740b7e34a"
  },
  {
    "url": "assets/images/forgotten/logos/kroger.png",
    "revision": "1ed80368d71ff9f069821ac9db6cb404"
  },
  {
    "url": "assets/images/forgotten/logos/target.png",
    "revision": "194bad664b1a18c5202380d2da2703e6"
  },
  {
    "url": "assets/images/forgotten/logos/tesco.png",
    "revision": "7c00973e22af5162d8f01bb27f1f3805"
  },
  {
    "url": "assets/images/instant-incognito.png",
    "revision": "239ce3bb7540d07f306461a15e4fbd9d"
  },
  {
    "url": "assets/images/logo.png",
    "revision": "f0dd0e6d19c000c9fa7631e8cf9c278a"
  },
  {
    "url": "assets/images/Now Showing (1).png",
    "revision": "b4048183335b73ecf51b85ac1fcfb014"
  },
  {
    "url": "assets/images/Now Showing (2).png",
    "revision": "7eb1260fa26729f415a2ac29e2c1c780"
  },
  {
    "url": "assets/images/qr-code.png",
    "revision": "17543ea10d2f043e657bc1f0eee6b09c"
  },
  {
    "url": "assets/images/social-icon.png",
    "revision": "a8620eb5666b53dd5b837759cf409cc0"
  },
  {
    "url": "assets/images/social-rank.png",
    "revision": "7eb1260fa26729f415a2ac29e2c1c780"
  },
  {
    "url": "assets/images/social-trivia.png",
    "revision": "fffab0f9232ffff65f80ef0afa9aca03"
  },
  {
    "url": "assets/images/social/1200.png",
    "revision": "5a91dabc071cc69de3afd6a15e541283"
  },
  {
    "url": "assets/images/social/192.png",
    "revision": "c259f2738e4ceff7ef171066565f8695"
  },
  {
    "url": "assets/images/social/384.png",
    "revision": "c259f2738e4ceff7ef171066565f8695"
  },
  {
    "url": "assets/images/star.png",
    "revision": "e3dc14d94da63eca534fba4127a631d6"
  },
  {
    "url": "assets/images/supporthumans.png",
    "revision": "c259f2738e4ceff7ef171066565f8695"
  },
  {
    "url": "assets/images/trivia.png",
    "revision": "cd395969ad974a67479db84ff2d65f74"
  },
  {
    "url": "assets/js/core/app.js",
    "revision": "262d4704c89cd94bfb1f7f98a4608334"
  },
  {
    "url": "assets/js/core/third-party.js",
    "revision": "c6ed6ddf9126d34a35f7b578ab5c29b3"
  },
  {
    "url": "assets/js/index.js",
    "revision": "0a30be565b1d1a6e649e77514f81a8d7"
  },
  {
    "url": "assets/js/main.bundle.js",
    "revision": "8ec85c76cf4b131e7530815efd88e97d"
  },
  {
    "url": "assets/js/main.css",
    "revision": "be0c463b0d5cb78e0612329dd792fd05"
  },
  {
    "url": "blog/ethically-hack-woobox-voting-node-puppeteer/index.html",
    "revision": "4123f483c24420c9ab98ece675eed7e9"
  },
  {
    "url": "blog/how-to-change-battery-in-an-apple-airtag/index.html",
    "revision": "61445a5a04c33b11ca6ef4c6685d4137"
  },
  {
    "url": "blog/how-to-delete-or-deactivate-your-facebook-account/index.html",
    "revision": "d3abcd829e6ef872019d9b2bc08c95c0"
  },
  {
    "url": "blog/how-to-replace-the-battery-in-your-nintendo-switch/index.html",
    "revision": "7c1914f056c661d8f01b21d2cf7f09f7"
  },
  {
    "url": "blog/index.html",
    "revision": "dbc6254619eff0b185d92b91a21dd872"
  },
  {
    "url": "blog/procrastinot-maths-challenge-update/index.html",
    "revision": "ca4683f2d3979284787cbd4e8f68b4bf"
  },
  {
    "url": "blog/should-you-test-your-code-in-production/index.html",
    "revision": "542588f52ae18ac58625b13ad9ecc7a7"
  },
  {
    "url": "blog/testing-redbox-kiosk-offline-hack-for-free-dvds/index.html",
    "revision": "ce8b021cd38cdba8b40b46b7519b9e91"
  },
  {
    "url": "flash-cards/index.html",
    "revision": "6519a2b752e030ff11eec8eefbe4af1b"
  },
  {
    "url": "forever-advert/index.html",
    "revision": "f81362fbe91ccfd4de5f34033ad06fb9"
  },
  {
    "url": "forever-credits/index.html",
    "revision": "b09396e30a81f197f19c493c858aad90"
  },
  {
    "url": "forgotten-cards/index.html",
    "revision": "94cfd0ab51dc2ce32366f8b2b77c8116"
  },
  {
    "url": "index.html",
    "revision": "a3e29d90c8d50a3b016ae462ff096c9b"
  },
  {
    "url": "instant-incognito/index.html",
    "revision": "28e2e2d2ffb7e5cd4b11e8a5431f7d96"
  },
  {
    "url": "privacy/index.html",
    "revision": "96d0f8736fb95b211c32ce815f80af96"
  },
  {
    "url": "procrastinot/index.html",
    "revision": "9c9e79a533dca03752c9c8543277ad08"
  },
  {
    "url": "reviews/index.html",
    "revision": "2a013d440a291d696fcf75ccdaaddbab"
  },
  {
    "url": "stop-wasting/index.html",
    "revision": "eb1c25255eb3e87ae1ef40f76ff5c003"
  },
  {
    "url": "trivia/index.html",
    "revision": "9f715d7d181196196d2706b933f4d89d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');