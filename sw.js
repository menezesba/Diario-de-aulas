self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Necessário apenas para o Chrome aprovar a instalação do Aplicativo
});
