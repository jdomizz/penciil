<script lang="ts">
  import { createEventDispatcher } from "svelte";
	import edit from './edit.svg';
	import eraser from './eraser.svg';
  import { message } from "$lib/i18n";

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
    <span>{$message("button.draw")}</span>
  {:else}
    <img src={eraser} alt="Erase" />
    <span>{$message("button.erase")}</span>
  {/if}
</button>
