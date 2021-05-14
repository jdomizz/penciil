<script lang="ts">
  import { createEventDispatcher } from "svelte";
	import pause from './pause.svg';
	import play from './play.svg';

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
    <span>Pause</span>
  {:else}
    <img src={play} alt="Play" />
    <span>Play</span>
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
