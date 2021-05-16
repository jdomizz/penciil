<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import moon from "./moon.svg";
  import sun from "./sun.svg";
  import { i18n } from "$lib/i18n";

  let isDarkTheme = false;
  const dispatch = createEventDispatcher();

  function toogle() {
    isDarkTheme = !isDarkTheme;
    dispatch("toogle", isDarkTheme);
  }
</script>

<button on:click={toogle}>
  {#if isDarkTheme}
    <img src={sun} alt="Sun" />
    <span>{$i18n("button.light")}</span>
  {:else}
    <img src={moon} alt="Moon" />
    <span>{$i18n("button.dark")}</span>
  {/if}
</button>