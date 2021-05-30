<script lang="ts">
	import { onMount } from 'svelte';
	import { sketch } from '$lib/stores/sketch';
	import { Painter } from '$lib/utils/painter';

	let canvas: HTMLCanvasElement;
	let painter: Painter;

	$: if (painter) {
		painter.eraser = $sketch.eraserMode;
	}

	$: if (painter && !painter.enabled && $sketch.image === null) {
		painter = new Painter(canvas);
	}

	onMount(() => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		painter = new Painter(canvas);
	});

	function exportCanvas() {
		painter.enabled = false;
		sketch.updateImage(canvas.toDataURL());
	}
</script>

<canvas
	bind:this={canvas}
	on:mousedown={() => (painter.enabled = true)}
	on:touchstart={() => (painter.enabled = true)}
	on:mousemove|preventDefault={(event) => painter.paint(event)}
	on:touchmove|preventDefault={(event) => painter.paint(event)}
	on:mouseup={exportCanvas}
	on:touchend={exportCanvas}
/>

<style>
	canvas {
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
</style>
