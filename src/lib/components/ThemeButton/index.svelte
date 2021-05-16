<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import moon from "./moon.svg";
  import sun from "./sun.svg";

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
    <span>Light</span>
  {:else}
    <img src={moon} alt="Moon" />
    <span>Dark</span>
  {/if}
</button>