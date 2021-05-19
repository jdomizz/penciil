import { writable } from 'svelte/store';
import type { Sketch } from '$lib/types';

const emptySketch: Sketch = {
  id: null,
  imageSrc: null,
};

function createSketch() {
	const { subscribe, set } = writable<Sketch>(emptySketch);

	return {
		subscribe,
		reset: () => set(emptySketch)
	};
}

export const sketch = createSketch();
