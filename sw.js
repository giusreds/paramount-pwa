var filesToCache = [
'/paramount-pwa/',
'index.html',
'icons/48.png',
'icons/96.png',
'icons/128.png',
'icons/256.png',
'icons/512.png',
'icons/1024.png'
]; 
/* Avvia il Service Worker e memorizza il contenuto nella cache */
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('molise-run').then(function(cache) {
return cache.addAll(filesToCache);
})
);
});

/* Serve i contenuti memorizzati quando si e' offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
    caches.match(e.request).then(function(response) {
    return response || fetch(e.request);
    })
    );
    });
