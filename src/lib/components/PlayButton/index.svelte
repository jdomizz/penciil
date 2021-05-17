<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { message } from "$lib/i18n";
	import pauseIcon from './pause.svg';
	import playIcon from './play.svg';

  let isPlaying = false;
  const dispatch = createEventDispatcher();

  function toogle() {
    isPlaying = !isPlaying;
    dispatch("toogle", isPlaying);
  }
</script>

<button class="border" on:click={toogle}>
  {#if isPlaying}
    <img src={pauseIcon} alt="Pause" />
    <span>{$message("button.pause")}</span>
  {:else}
    <img src={playIcon} alt="Play" />
    <span>{$message("button.play")}</span>
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
