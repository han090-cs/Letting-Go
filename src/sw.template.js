// Template for dist/sw.js: the build (vite.config.ts) fills in the version hash and the pre-cache file list.
// Only the app's own static files are cached. Nothing a person writes is ever sent or stored.
const VERSION='__VERSION__';
const CACHE='letting-go-'+VERSION;
const ASSETS=__ASSETS__;

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('letting-go-')&&k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  e.respondWith((async()=>{
    const cache=await caches.open(CACHE);
    const hit=await cache.match(r,{ignoreSearch:true})||(r.mode==='navigate'?await cache.match('./index.html')||await cache.match('./'):undefined);
    if(hit)return hit;
    try{return await fetch(r)}catch{
      return r.mode==='navigate'?(await cache.match('./index.html'))||Response.error():Response.error();
    }
  })());
});
