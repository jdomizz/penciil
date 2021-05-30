/// <reference lib="WebWorker" />

export type {}; // needed because of tsc --isolatedModules flag

declare const self: ServiceWorkerGlobalScope;

self.addEventListener('install', () => null);
self.addEventListener('activate', () => null);
self.addEventListener('fetch', () => null);
