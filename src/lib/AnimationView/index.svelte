<script lang="ts">
  import { onMount } from "svelte";
  import { imageToAscii, updateAscii } from "./ascii";

  export let image = "";
  export let dark = false;

  let ascii = "";

  $: (async () => (ascii = await imageToAscii(image)))();

  onMount(() => {
    setInterval(() => {
      ascii = updateAscii(ascii);
    }, 200);
  });
</script>

<div class={dark ? "dark" : ""}>
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
