const cacheName = 'visor3d-corazon-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json',
  '/guidedAssembly.js',
  '/toggleDescriptions.js',
  '/adminAccess.js',
  '/supervisordetiempo.js',
  '/magnetMap_heart_extended.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});