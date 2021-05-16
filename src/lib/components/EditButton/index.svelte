<script lang="ts">
  import { createEventDispatcher } from "svelte";
	import edit from './edit.svg';
	import eraser from './eraser.svg';

  let isEraser = false;
  const dispatch = createEventDispatcher();

  function toogle() {
    isEraser = !isEraser;
    dispatch("toogle", isEraser);
  }
</script>

<button on:click={toogle}>
  {#if isEraser}
    <img src={edit} alt="Draw" />
    <span>Draw</span>
  {:else}
    <img src={eraser} alt="Erase" />
    <span>Erase</span>
  {/if}
</button>
