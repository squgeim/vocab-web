const VERSION = 3;
const FILES = [
  'src/utils/misc.js',
  'src/utils/history.js',
  'src/utils/model.js',
  'src/utils/baseElement.js',
  'src/models/dictionary.js',
  'src/models/history.js',
  'src/components/wordList/index.js',
  'src/components/searchInput/index.js',
  'src/components/header/index.js',
  'src/pages/home.js',
  'src/normalize.css',
  'src/root.css',
];

const cacheName = `vocab-${VERSION}`;

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(FILES);
    })
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  const matchedCache = (() => {
    switch (url.hostname) {
      case 'unpkg.com':
        return 'unpkg';
      case 'fonts.google.com':
        return 'fonts';
      default:
        return cacheName;
    }
  })();

  event.respondWith(
    caches.open(matchedCache).then(cache => {
      return cache.match(event.request).then(response => {
        return (
          response ||
          fetch(event.request).then(response => {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});
