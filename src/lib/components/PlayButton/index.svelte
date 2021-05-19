<script lang="ts">
  import { message } from "$lib/i18n";
  import { sketch } from "$lib/sketch";
  import { playMode } from "./playMode";
	import PauseIcon from './pause.svelte';
	import PlayIcon from './play.svelte';
</script>

<button disabled={$sketch.image === null} class="border" on:click={playMode.toogle}>
  {#if $playMode}
    <PauseIcon/>
    <span>{$message("button.pause")}</span>
  {:else}
    <PlayIcon/>
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
