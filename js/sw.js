const CACHE_NAME = 'ccode-wiki-cache-v1'; // Mude a versão ao atualizar assets
const ASSETS_TO_CACHE = [
    '/', // Alias para index.html
    '/index.html',
    '/css/style.css',
    '/js/main.js',
    '/manifest.json',
    // Páginas principais
    '/pages/getting-started.html',
    '/pages/introduction.html',
    '/pages/modes.html',
    // Páginas de blocos
    '/pages/blocks/control.html',
    '/pages/blocks/data-text.html',
    '/pages/blocks/editor-expressions.html',
    '/pages/blocks/events.html',
    '/pages/blocks/media.html',
    '/pages/blocks/objects-filters.html',
    '/pages/blocks/physics.html',
    '/pages/blocks/shapes.html',
    '/pages/blocks/transitions.html',
    '/pages/block-examples/example-block.html',
    // Assets estáticos
    '/images/logo.png',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];
];

// Evento de Instalação: Cacheia os assets principais
self.addEventListener('install', event => {
    console.log('[Service Worker] Instalando...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[Service Worker] Cacheando assets principais');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => {
                console.log('[Service Worker] Assets principais cacheados com sucesso.');
                return self.skipWaiting(); // Força o SW a ativar imediatamente
            })
            .catch(error => {
                console.error('[Service Worker] Falha ao cachear assets principais:', error);
            })
    );
});

// Evento de Ativação: Limpa caches antigos
self.addEventListener('activate', event => {
    console.log('[Service Worker] Ativando...');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Removendo cache antigo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('[Service Worker] Ativado e caches antigos limpos.');
            return self.clients.claim(); // Permite que o SW controle clientes abertos imediatamente
        })
    );
});

// Evento de Fetch: Implementa estratégia stale-while-revalidate
self.addEventListener('fetch', event => {
    // Ignora requisições que não são GET
    if (event.request.method !== 'GET') {
        return;
    }
    // Ignora requisições para extensões do Chrome
    if (event.request.url.startsWith('chrome-extension://')) {
        return;
    }

    event.respondWith(
        caches.open(CACHE_NAME).then(cache => {
            return cache.match(event.request).then(cachedResponse => {
                const fetchPromise = fetch(event.request).then(networkResponse => {
                    if (networkResponse && networkResponse.status === 200 && !event.request.url.endsWith('sw.js')) {
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                }).catch(error => {
                    console.error('[Service Worker] Erro na rede:', error);
                    // Se temos uma resposta em cache, use-a como fallback
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    // Se não temos cache, retorne uma página offline personalizada
                    if (event.request.headers.get('accept').includes('text/html')) {
                        return cache.match('/offline.html');
                    }
                    throw error;
                });

                // Retorna o cache imediatamente enquanto atualiza em segundo plano
                return cachedResponse || fetchPromise;

                // Se não está no cache, busca na rede
                // console.log('[Service Worker] Buscando na rede:', event.request.url);
                return fetch(event.request).then(networkResponse => {
                    // Clona a resposta para poder usá-la e armazená-la no cache
                    const responseToCache = networkResponse.clone();
                    
                    // Abre o cache e armazena a nova resposta
                    // Apenas cacheia respostas válidas e que não sejam o próprio SW
                    if (networkResponse && networkResponse.status === 200 && !event.request.url.endsWith('sw.js')) {
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                    }
                    return networkResponse;
                }).catch(error => {
                    console.error('[Service Worker] Erro ao buscar na rede:', error, event.request.url);
                    // TODO: Você pode retornar uma página offline customizada aqui se a rede falhar
                    // e o recurso não estiver no cache.
                    // Ex: return caches.match('pages/offline.html');
                });
            })
    );
});