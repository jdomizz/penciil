<script lang="ts">
  import { onMount } from "svelte";
  import { sketch } from "$lib/sketch";
  import { editMode } from "$lib/components/EditButton/editMode";
  import { Painter } from "./painter";

  let canvas: HTMLCanvasElement;
  let painter: Painter;

  $: if (painter) {
    painter.eraser = $editMode;
  }

  onMount(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    painter = new Painter(canvas);
  });

  function exportCanvas() {
    painter.enabled = false;
    sketch.update(canvas.toDataURL());
  }
</script>

<canvas
  bind:this={canvas}
  on:mousedown={() => painter.enabled = true}
  on:touchstart={() => painter.enabled = true}
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
