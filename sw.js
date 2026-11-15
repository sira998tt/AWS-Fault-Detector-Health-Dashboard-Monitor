const CACHE_NAME = 'tmd-monitor-pwa-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Network-first strategy for live meteorological data
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
