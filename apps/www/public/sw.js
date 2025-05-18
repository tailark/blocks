const CACHE_NAME = 'cnblocks-iframe-cache-v2'

const URLS_TO_CACHE = ['/favicon.ico', '/payments.png', '/payments-light.png', '/origin-cal.png', '/origin-cal-dark.png', '/exercice.png', '/exercice-dark.png', '/charts-light.png', '/charts.png', '/music-light.png', '/music.png', '/mail-back-light.png', '/mail-upper.png', '/mail-back.png', '/card.png', '/dark-card.webp', './mist/tailark-2.png', './mist/tailark-3.png', './mist/tailark.png']

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache')
                return cache.addAll(URLS_TO_CACHE)
            })
            .then(() => self.skipWaiting())
    )
})

self.addEventListener('activate', (event) => {
    const currentCaches = [CACHE_NAME]
    event.waitUntil(
        caches
            .keys()
            .then((cacheNames) => {
                return cacheNames.filter((cacheName) => !currentCaches.includes(cacheName))
            })
            .then((cachesToDelete) => {
                return Promise.all(
                    cachesToDelete.map((cacheToDelete) => {
                        return caches.delete(cacheToDelete)
                    })
                )
            })
            .then(() => self.clients.claim())
    )
})

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url)
    const isIframeRequest = url.pathname.includes('/preview/') || url.pathname.includes('/examples/')

    if (event.request.method !== 'GET') return

    if (isIframeRequest) {
        event.respondWith(
            (async () => {
                try {
                    const networkResponse = await fetch(event.request)

                    if (networkResponse && networkResponse.status === 200) {
                        const cache = await caches.open(CACHE_NAME)
                        await cache.put(event.request, networkResponse.clone())
                    }
                    return networkResponse
                } catch (error) {
                    console.log('Network request failed, serving from cache', error)
                    const cachedResponse = await caches.match(event.request, { ignoreSearch: true })
                    return cachedResponse || new Response('Network error', { status: 408 })
                }
            })()
        )
    } else {
        event.respondWith(
            (async () => {
                const cachedResponse = await caches.match(event.request)
                return cachedResponse || fetch(event.request)
            })()
        )
    }
})

self.addEventListener('message', async (event) => {
    if (!event.data) return

    if (event.data.type === 'SKIP_WAITING') {
        self.skipWaiting()
        return
    }

    if (event.data.type === 'CLEAR_IFRAME_CACHE') {
        const url = event.data.url
        const cache = await caches.open(CACHE_NAME)

        if (url) {
            const cacheKeys = await cache.keys()
            const urlToDelete = new URL(url)

            const deletePromises = cacheKeys
                .filter((request) => {
                    const requestUrl = new URL(request.url)
                    return requestUrl.pathname === urlToDelete.pathname
                })
                .map((request) => cache.delete(request))

            await Promise.all(deletePromises)
        } else {
            await caches.delete(CACHE_NAME)
        }

        const clients = await self.clients.matchAll()
        clients.forEach((client) => {
            client.postMessage({
                type: 'CACHE_CLEARED',
                url: url || 'all',
            })
        })

        console.log(url ? `Cleared cache for: ${url}` : 'Cleared entire iframe cache')
    }
})
