<script lang="ts">
  import { onMount } from 'svelte';
  import { sketch } from '$lib/sketch';
  import { Painter } from '$lib/painter';

  let canvas: HTMLCanvasElement;
  let painter: Painter;

  $: if (painter) {
    painter.eraser = $sketch.eraserMode;
  }

  $: if (painter && !painter.enabled && $sketch.image === null) {
    painter = new Painter(canvas);
  }

  const size = () => window.innerWidth < window.innerHeight 
    ? window.innerWidth
    : window.innerHeight;

  onMount(() => {
    canvas.width = size();
    canvas.height = size();
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
    cursor: pointer;
    border: dashed 1px #cccccc;
  }
</style>
