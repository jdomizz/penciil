<script lang="ts">
  import { createEventDispatcher } from "svelte";
	import edit from './edit.svg';
	import eraser from './eraser.svg';
  import { i18n } from "$lib/i18n";

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
    <span>{$i18n("button.draw")}</span>
  {:else}
    <img src={eraser} alt="Erase" />
    <span>{$i18n("button.erase")}</span>
  {/if}
</button>
