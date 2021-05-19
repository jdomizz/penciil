<script lang="ts">
  import { message } from "$lib/i18n";
  import { themeMode } from "./themeMode";
  import moonIcon from "./moon.svg";
  import sunIcon from "./sun.svg";
</script>

<button on:click={themeMode.toogle}>
  {#if $themeMode}
    <img src={sunIcon} alt="Sun" />
    <span>{$message("button.light")}</span>
  {:else}
    <img src={moonIcon} alt="Moon" />
    <span>{$message("button.dark")}</span>
  {/if}
</button>