<script lang="ts">
  import { page } from '$app/stores';
  import { sketch } from '$lib/sketch';
  // import SaveButton from "$lib/components/SaveButton/index.svelte";
  import ClearButton from '$lib/components/ClearButton/index.svelte';
  import EditButton from '$lib/components/EditButton/index.svelte';
  import EditButtonGroup from '$lib/components/EditButtonGroup/index.svelte';
  import PlayButton from '$lib/components/PlayButton/index.svelte';
</script>

{#if $page.path === '/sketch'}
  <footer>
    <ClearButton />
    {#if !$sketch.animationRunning}
      <EditButtonGroup />
      <PlayButton />
    {:else}
      <EditButton />
      <!-- <SaveButton/>   -->
    {/if}
  </footer>
{/if}

<style>
  footer {
    z-index: 10;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    background-color: var(--background-color);
    border-top: solid 1px var(--secondary-color);
  }
  @media (min-width: 768px) {
    footer {
      display: none;
    }
  }
</style>
