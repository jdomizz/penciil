import { writable } from 'svelte/store';
import type { Sketch } from '$lib/types';

function createSketches() {
	const { subscribe, set, update } = writable<Sketch[]>([]);

	return {
		subscribe,
    set: (sketches: Sketch[]) => set(sketches),
    remove: (sketchId: number) => update((sketches) => sketches.filter(sketch => sketch.id !== sketchId)),
		add: (sketch: Sketch) => update((sketches) => sketches.concat(sketch)),
		reset: () => set([])
	};
}

export const sketches = createSketches();
