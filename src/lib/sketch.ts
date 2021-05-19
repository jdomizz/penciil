import { writable } from 'svelte/store';
import type { Sketch } from '$lib/types';

const emptySketch: Sketch = {
  id: null,
  image: null,
};

function createSketch() {
	const { subscribe, set, update } = writable<Sketch>(emptySketch);

	return {
		subscribe,
		update: (image) => update((sketch) => ({...sketch, image})),
		reset: () => set(emptySketch)
	};
}

export const sketch = createSketch();
