/**
 * Asynova Landing Page Service Worker
 * Enables offline support and blazing fast performance
 */

const CACHE_NAME = 'asynova-landing-v2.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json',
  // Add other critical assets
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[SW] Skip waiting');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName.startsWith('asynova-landing-')) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Claiming clients');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    // Handle CDN resources with network-first strategy
    if (url.hostname.includes('cloudfront.net') || url.hostname.includes('unpkg.com')) {
      event.respondWith(
        fetch(request)
          .then((response) => {
            if (response && response.status === 200) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, responseToCache);
              });
            }
            return response;
          })
          .catch(() => {
            return caches.match(request);
          })
      );
      return;
    }
    return;
  }

  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => {
        return caches.match('/index.html');
      })
    );
    return;
  }

  // Handle API requests - network only
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(fetch(request));
    return;
  }

  // Handle static assets - cache first
  event.respondWith(
    caches.match(request).then((response) => {
      if (response) {
        // Update cache in background
        fetch(request).then((fetchResponse) => {
          if (fetchResponse && fetchResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, fetchResponse.clone());
            });
          }
        });
        return response;
      }

      return fetch(request).then((fetchResponse) => {
        if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
          return fetchResponse;
        }

        const responseToCache = fetchResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseToCache);
        });

        return fetchResponse;
      });
    }).catch(() => {
      // Offline fallback
      if (request.destination === 'image') {
        return caches.match('/static/images/offline-placeholder.svg');
      }
      return new Response('Offline - Please check your connection', {
        status: 503,
        statusText: 'Service Unavailable',
        headers: new Headers({
          'Content-Type': 'text/plain'
        })
      });
    })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'beta-signup') {
    event.waitUntil(
      // Process queued beta signups when back online
      self.registration.pushManager.getSubscription()
        .then(() => {
          console.log('[SW] Processing queued beta signups');
          // Implementation would go here
        })
    );
  }
});

// Push notifications for beta updates
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Asynova has exciting updates!',
    icon: '/icon-192x192.png',
    badge: '/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Open Asynova',
      },
      {
        action: 'close',
        title: 'Close',
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Asynova', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('https://asynova.com')
    );
  }
});

console.log('[SW] Service Worker loaded - Asynova Landing v2.0.0');
