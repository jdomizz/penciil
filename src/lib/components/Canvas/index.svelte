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

  onMount(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    painter = new Painter(canvas);
  });

  function exportCanvas() {
    painter.disable();
    sketch.updateImage(canvas.toDataURL());
  }
</script>

<canvas
  bind:this={canvas}
  on:mousedown|preventDefault={(event) => painter.enable(event)}
  on:touchstart|preventDefault={(event) => painter.enable(event)}
  on:mousemove|preventDefault={(event) => painter.paint(event)}
  on:touchmove|preventDefault={(event) => painter.paint(event)}
  on:mouseup={exportCanvas}
  on:touchend={exportCanvas}
/>

<style>
  canvas {
    cursor: pointer;
  }
</style>
