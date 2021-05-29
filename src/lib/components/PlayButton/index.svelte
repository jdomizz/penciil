<script lang="ts">
  import { message } from "$lib/stores/i18n";
  import { sketch } from "$lib/stores/sketch";
	import playIcon from './play.svg';
</script>

<button disabled={$sketch.image === null} on:click={sketch.toogleAnimation}>
  <img src={playIcon} alt="Play" />
  <span>{$message("button.play")}</span>
</button>

<style>
  button {
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
