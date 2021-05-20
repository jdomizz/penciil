<script lang="ts">
  import { onMount } from "svelte";
  import { sketch } from "$lib/sketch";
  import { themeMode } from "$lib/components/ThemeSwitch/themeMode";
  import { imageToAscii, updateAscii } from "./ascii";

  let ascii = "";

  $: (async () => (ascii = await imageToAscii($sketch.image)))();

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
