//cacheファイルの設定
var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
  '/'
];

//インストール処理
self.addEventListener('install', (event) =>{
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((params) =>{
        return caches.addAll(urlsToCache);
      })
  );
});

//リソースフェッチ時のキャッシュロード処理
self.addEventListener((event) =>{
  event.respondWith(
    caches
      .match(event.request)
      .then(function(event){
        return response ? response : fetch(event.request);
      })
  );
});
