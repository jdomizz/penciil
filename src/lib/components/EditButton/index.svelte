<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { message } from "$lib/i18n";
	import editIcon from './edit.svg';
	import eraserIcon from './eraser.svg';

  let isEraser = false;
  const dispatch = createEventDispatcher();

  function toogle() {
    isEraser = !isEraser;
    dispatch("toogle", isEraser);
  }
</script>

<button on:click={toogle}>
  {#if isEraser}
    <img src={editIcon} alt="Draw" />
    <span>{$message("button.draw")}</span>
  {:else}
    <img src={eraserIcon} alt="Erase" />
    <span>{$message("button.erase")}</span>
  {/if}
</button>
