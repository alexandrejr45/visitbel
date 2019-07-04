importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

self.addEventListener("fetch", event => {
  if (event.request.url.endsWith(/\.(?:png|jpg|jpeg|svg|gif|css|js|html|ttf)$/)) {
    workbox.routing.registerRoute(
      /\.(?:js|css)$/,
      new workbox.strategies.NetworkFirst()
    );


    workbox.routing.registerRoute(
      // Cache image files.
      /\.(?:png|jpg|jpeg|svg|gif|ttf)$/,
      // Use the cache if it's available.
      new workbox.strategies.CacheFirst({
        // Use a custom cache name.
        cacheName: "image-cache",
        plugins: [
          new workbox.expiration.Plugin({
            // Cache only 20 images.
            maxEntries: 20,
            // Cache for a maximum of a week.
            maxAgeSeconds: 7 * 24 * 60 * 60
          })
        ]
      })
    );

    const cacheFirst = new workbox.strategies.CacheFirst();
    event.respondWith(cacheFirst.makeRequest({ request: event.request }));
  }
});

