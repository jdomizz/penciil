<script lang="ts">
  import { message } from "$lib/stores/i18n";
  import startIcon from "./log-in.svg";
</script>

<a sveltekit:prefetch href="/sketch">
  <button>
    <img src={startIcon} alt="Start" />
    <span>{$message("button.start")}</span>
  </button>
</a>

<style>
  button {
    background-color: black;
  }
  span {
    color: white;
  }
</style>