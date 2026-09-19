const CACHE = "spanish-gym-offline-current";
const APP_FILES = [
  "./",
  "./index.html",
  "./lehrkraft.html",
  "./manifest.webmanifest",
  "./assets/content.js",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/avatars/luna.jpg",
  "./assets/avatars/diego.jpg",
  "./assets/avatars/sofia.jpg",
  "./assets/avatars/mateo.jpg",
  "./assets/avatars/valentina.jpg",
  "./assets/avatars/nico.jpg",
  "./assets/avatars/camila.jpg",
  "./assets/avatars/santiago.jpg",
  "./assets/avatars/isabella.jpg",
  "./assets/avatars/thiago.jpg",
  "./assets/avatars/lucia.jpg",
  "./assets/avatars/enzo.jpg",
  "./assets/avatars/mariana.jpg",
  "./assets/avatars/alejandro.jpg",
  "./assets/avatars/paula.jpg",
  "./assets/avatars/javier.jpg",
  "./assets/avatars/abril.jpg",
  "./assets/avatars/gael.jpg",
  "./assets/avatars/daniela.jpg",
  "./assets/avatars/pablo.jpg",
  "./assets/avatars/salome.jpg",
  "./assets/avatars/adrian.jpg",
  "./assets/avatars/nuria.jpg",
  "./assets/avatars/joel.jpg",
  "./assets/avatars/rayo.jpg",
  "./assets/avatars/nika.jpg",
  "./assets/avatars/tadeo.jpg",
  "./assets/avatars/luma.jpg",
  "./assets/avatars/brio.jpg",
  "./assets/avatars/zenda.jpg",
  "./assets/sports/football-training.jpg",
  "./assets/sports/football-challenge.jpg",
  "./assets/sports/basketball-training.jpg",
  "./assets/sports/basketball-challenge.jpg",
  "./assets/sports/beach-volleyball-training.jpg",
  "./assets/sports/beach-volleyball-challenge.jpg",
  "./assets/sports/athletics-training.jpg",
  "./assets/sports/athletics-challenge.jpg",
  "./assets/sports/padel-training.jpg",
  "./assets/sports/padel-challenge.jpg",
  "./assets/sports/skate-training.jpg",
  "./assets/sports/skate-challenge.jpg",
  "./assets/sports/swimming-training.jpg",
  "./assets/sports/swimming-challenge.jpg",
  "./assets/sports/mtb-training.jpg",
  "./assets/sports/mtb-challenge.jpg",
  "./assets/bosses/torval-football.jpg",
  "./assets/bosses/valeriax-basketball.jpg",
  "./assets/bosses/brison-beach-volleyball.jpg",
  "./assets/bosses/relampias-athletics.jpg",
  "./assets/bosses/caziel-padel.jpg",
  "./assets/bosses/mareya-swimming.jpg",
  "./assets/bosses/mtb-king.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fresh = fetch(event.request).then(response => {
        if (response.ok) caches.open(CACHE).then(cache => cache.put(event.request, response.clone()));
        return response;
      }).catch(() => cached || caches.match("./index.html"));
      return cached || fresh;
    })
  );
});

