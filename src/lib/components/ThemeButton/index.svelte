<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { message } from "$lib/i18n";
  import moonIcon from "./moon.svg";
  import sunIcon from "./sun.svg";

  let isDarkTheme = false;
  const dispatch = createEventDispatcher();

  function toogle() {
    isDarkTheme = !isDarkTheme;
    dispatch("toogle", isDarkTheme);
  }
</script>

<button on:click={toogle}>
  {#if isDarkTheme}
    <img src={sunIcon} alt="Sun" />
    <span>{$message("button.light")}</span>
  {:else}
    <img src={moonIcon} alt="Moon" />
    <span>{$message("button.dark")}</span>
  {/if}
</button>