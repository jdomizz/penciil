import { writable } from 'svelte/store';

function createPlayMode() {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		toogle: () => update(value => !value),
		reset: () => set(false)
	};
}

export const playMode = createPlayMode();