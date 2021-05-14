<script lang="ts">
  import { onMount, createEventDispatcher } from "svelte";
  import { Painter } from "./painter";

  export let hidden = false;
  export let eraser = true; // FIXME: ojo pq esto debería ser false
  const dispatch = createEventDispatcher();

  let canvas: HTMLCanvasElement;
  let painter: Painter;

  $: if (painter) {
    painter.eraserMode = eraser;
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

<div class={hidden ? "hidden" : ""}>
  <canvas
    bind:this={canvas}
    on:mousedown={() => (painter.brushEnabled = true)}
    on:touchstart={() => (painter.brushEnabled = true)}
    on:mousemove={paintCanvas}
    on:touchmove={paintCanvas}
    on:mouseup={exportCanvas}
    on:touchend={exportCanvas}
  />
</div>

<style>
  canvas {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .hidden {
    display: none;
  }
</style>
