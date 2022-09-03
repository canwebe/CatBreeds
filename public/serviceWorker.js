const CACHE_NAME = 'HTML_CACHE'
const cacheUrls = ['index.html', 'offline.html']

//install serviceWorker

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(cacheUrls)
    })
  )
})

//listen

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match('offline.html'))
    })
  )
})

//activate

self.addEventListener('activate', (event) => {
  const cacheList = []
  cacheList.push(CACHE_NAME)

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheList.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        })
      )
    )
  )
})
