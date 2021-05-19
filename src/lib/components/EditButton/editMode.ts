import { writable } from 'svelte/store';

function createEditMode() {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		toogle: () => update(value => !value),
		reset: () => set(false)
	};
}

export const editMode = createEditMode();