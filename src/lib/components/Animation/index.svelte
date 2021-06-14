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
    padding: 0;
    overflow: hidden;
    font-family: monospace;
    white-space: pre;
    font-size: 10px;
    line-height: 10px;
    height: 100%;
  }

  .dark {
    background-color: var(--primary-color);
    color: var(--background-color);
  }
</style>
