import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { VitePWA } from 'vite-plugin-pwa'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		adapter: adapter(),
		vite: {
			plugins: [
				VitePWA({
					registerType: 'autoUpdate',  
					manifest: {
						name: 'Penciil',
						short_name: 'Penciil',
						description: 'A simple ASCII art sketchpad',
						display: 'standalone',
						orientation: 'any',
						start_url: '.',
						theme_color: '#ffffff',
						background_color: '#ffffff',
						icons: [
							{
								src: '/pwa-192x192.png',
								sizes: '192x192',
								type: 'image/png',
							},
							{
								src: '/pwa-512x512.png',
								sizes: '512x512',
								type: 'image/png',
							},
							{
								src: '/pwa-512x512.png',
								sizes: '512x512',
								type: 'image/png',
								purpose: 'any maskable',
							},
						],
					}
				})
			]
		}
	}
};

export default config;
