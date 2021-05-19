<script lang="ts">
  import { message } from "$lib/i18n";
  import { playMode } from "./playMode";
	import pauseIcon from './pause.svg';
	import playIcon from './play.svg';
</script>

<button class="border" on:click={playMode.toogle}>
  {#if $playMode}
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
