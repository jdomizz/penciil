/// <reference lib="WebWorker" />

export type {}; // needed because of tsc --isolatedModules flag

declare const self: ServiceWorkerGlobalScope;

const cacheName = "penciil-cache";
const version = "v1";

self.addEventListener("install", (event) => null);
self.addEventListener("activate", (event) => null);
self.addEventListener("fetch", (event) => null);