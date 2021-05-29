<script lang="ts">
  import { message } from "$lib/i18n";
  import { sketch } from "$lib/sketch";
  import { playMode } from "./playMode";
	import playIcon from './play.svg';
</script>

<button disabled={$sketch.image === null} on:click={playMode.toogle}>
  <img src={playIcon} alt="Play" />
  <span>{$message("button.play")}</span>
</button>

<style>
  button {
    height: 56px;
    background-color: black;
  }

  button:disabled {
    background-color: #dddddd;
    border: none;
  }

  button > span {
    color: white;
  }
</style>
