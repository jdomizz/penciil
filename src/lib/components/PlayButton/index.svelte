<script lang="ts">
  import { createEventDispatcher } from "svelte";
	import pause from './pause.svg';
	import play from './play.svg';
  import { i18n } from "$lib/i18n";

  let isPlaying = false;
  const dispatch = createEventDispatcher();

  function toogle() {
    isPlaying = !isPlaying;
    dispatch("toogle", isPlaying);
  }
</script>

<button class="border" on:click={toogle}>
  {#if isPlaying}
    <img src={pause} alt="Pause" />
    <span>{$i18n("button.pause")}</span>
  {:else}
    <img src={play} alt="Play" />
    <span>{$i18n("button.play")}</span>
  {/if}
</button>

<style>
  button {
    padding: 2px;
    border: 2px;
    border-style: solid;
    border-radius: 10%;
  }
</style>
