<script lang="ts">
  import { message } from "$lib/i18n";
  import { sketch } from "$lib/sketch";
  import { playMode } from "./playMode";
	import PauseIcon from './pause.svelte';
	import PlayIcon from './play.svelte';
</script>

<button disabled={$sketch.image === null} on:click={playMode.toogle}>
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
    padding: 4px;
    border: 1px solid black;
    border-radius: 5%;
    background-color: black;
  }

  button:disabled {
    background-color: #dddddd;
    border: none;
  }

  button > span {
    color: white;
  }

  button:disabled > span {
    color: #cccccc;
  }
</style>
