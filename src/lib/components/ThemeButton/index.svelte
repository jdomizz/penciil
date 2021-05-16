<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import moon from "./moon.svg";
  import sun from "./sun.svg";
  import { translate } from "$lib/i18n";

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
    <span>{$translate("light")}</span>
  {:else}
    <img src={moon} alt="Moon" />
    <span>{$translate("dark")}</span>
  {/if}
</button>