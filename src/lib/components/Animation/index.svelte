<script lang="ts">
  import { onMount } from "svelte";
  import { themeMode } from "$lib/components/ThemeButton/themeMode";
  import { imageToAscii, updateAscii } from "./ascii";

  export let image = "";

  let ascii = "";

  $: (async () => (ascii = await imageToAscii(image)))();

  onMount(() => {
    setInterval(() => {
      ascii = updateAscii(ascii);
    }, 200);
  });
</script>

<div class={$themeMode ? "dark" : ""}>
  {ascii}
</div>

<style>
  div {
    font-size: 10px;
    line-height: 10px;
    display: block;
    font-family: monospace;
    white-space: pre;
  }

  .dark {
    background-color: black;
    color: white;
  }
</style>
