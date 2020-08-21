var filesToCache = [
'/molise-run/',
'index.html',
'style.css',
'assets/script.js',
'assets/font.ttf',
'assets/icons/48.png',
'assets/icons/96.png',
'assets/icons/192.png',
'assets/icons/384.png',
'assets/icons/512.png',
'assets/icons/1024.png',
'assets/icons/m_96.png',
'assets/icons/m_192.png',
'assets/icons/m_384.png',
'assets/icons/m_512.png',
'assets/icons/m_1024.png'
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
