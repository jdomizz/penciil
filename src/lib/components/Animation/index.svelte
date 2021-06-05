<script lang="ts">
  import { onMount } from 'svelte';
  import { sketch } from '$lib/sketch';
  import { imageToAscii, updateAscii } from '$lib/ascii';

  let ascii = '';

  $: (async () => (ascii = await imageToAscii($sketch.image)))();

  onMount(() => {
    setInterval(() => {
      ascii = updateAscii(ascii);
    }, 200);
  });
</script>

<div class={$sketch.darkTheme ? 'dark' : ''}>
  {ascii}
</div>

<style>
  div {
    font-size: 10px;
    line-height: 10px;
    display: block;
    font-family: monospace;
    white-space: pre;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -6px;
  }

  .dark {
    background-color: black;
    color: white;
  }
</style>
