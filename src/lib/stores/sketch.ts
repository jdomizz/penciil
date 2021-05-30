import { writable } from 'svelte/store';
import type { Sketch } from '$lib/types';

const emptySketch: Sketch = {
  id: null,
  image: null,
	eraserMode: false,
	animationRunning: false,
	darkTheme: false,
};

function createSketch() {
	const { subscribe, set, update } = writable<Sketch>(emptySketch);

	return {
		subscribe,
		toogleAnimation: () => update((sketch) => {
			const animationRunning = !sketch.animationRunning;
			return {...sketch, animationRunning};
		}),
		toogleEraser: () => update((sketch) => {
			const eraserMode = !sketch.eraserMode;
			return {...sketch, eraserMode};
		}),
		toogleTheme: () => update((sketch) => {
			const darkTheme = !sketch.darkTheme;
			return {...sketch, darkTheme};
		}),
		updateImage: (image) => update((sketch) => ({...sketch, image})),
		reset: () => set(emptySketch)
	};
}

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

export const sketch = createSketch();
export const sketches = createSketches();
