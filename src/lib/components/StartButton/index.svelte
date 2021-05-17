<script lang="ts">
  import { message } from "$lib/i18n";
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
    padding: 2px;
    border: 2px;
    border-style: solid;
    border-radius: 10%;
    background-color: black;
  }
  span {
    color: white;
  }
</style>