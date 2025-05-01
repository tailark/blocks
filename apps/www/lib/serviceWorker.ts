/**
 * Service worker registration and management utilities
 */

// Register the service worker
export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}

// Send a message to the service worker
type SWMessage = {
  type: string;
  url?: string;
};

export function sendMessageToSW(message: SWMessage) {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage(message);
  }
}

// Clear iframe cache for a specific URL or all iframe caches if no URL provided
export function clearIframeCache(url?: string) {
  sendMessageToSW({
    type: 'CLEAR_IFRAME_CACHE',
    url
  });
}

// Update the service worker
export function updateServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.update();
    });
  }
}

// Check if a URL is already cached by the service worker
export async function isUrlCached(url: string): Promise<boolean> {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return false;
  }

  try {
    const cache = await caches.open('cnblocks-iframe-cache-v1');
    const cachedResponse = await cache.match(url);
    return cachedResponse !== undefined;
  } catch (error) {
    console.error('Error checking cache:', error);
    return false;
  }
} 