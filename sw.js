// Cache name
const CACHE_NAME = 'pwa-test-chinsho';
// Cache targets
const urlsToCache = [
  './',
  './index.html',
  './jquery-3.6.0.min.js',
  './chinsho_VF.woff2',
  './notmovesp.svg',
  './Optima.ttc',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        return response ? response : fetch(event.request);
      })
  );
});