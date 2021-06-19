<script context="module" lang="ts">
  export const prerender = false;
</script>

<script lang="ts">
  import Welcome from '$lib/components/Welcome/index.svelte';
  import SketchList from '$lib/components/SketchList/index.svelte';
  import { sketches } from '$lib/sketch';
</script>

<svelte:head>
  <title>Penciil</title>
</svelte:head>

{#if $sketches.length > 0}
<SketchList />
{:else}
  <Welcome />
{/if}