<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import { editMode } from "$lib/components/EditButton/editMode";
  import { Painter } from "./painter";

  const dispatch = createEventDispatcher();

  let canvas: HTMLCanvasElement;
  let painter: Painter;

  $: if (painter) {
    painter.eraserMode = $editMode;
  }

  onMount(() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    painter = new Painter(canvas);
  });

  function exportCanvas() {
    painter.brushEnabled = false;
    dispatch("export", canvas);
  }

  function paintCanvas(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    painter.paint(event);
  }
</script>

<canvas
  bind:this={canvas}
  on:mousedown={() => (painter.brushEnabled = true)}
  on:touchstart={() => (painter.brushEnabled = true)}
  on:mousemove={paintCanvas}
  on:touchmove={paintCanvas}
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
