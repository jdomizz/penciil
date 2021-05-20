import { writable } from 'svelte/store';

function createThemeMode() {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		toogle: () => update(value => !value),
		reset: () => set(false)
	};
}

export const themeMode = createThemeMode();