<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { title } from "$lib/title";
	import { playMode } from "$lib/components/PlayButton/playMode";
  import Animation from '$lib/components/Animation/index.svelte';
	import Canvas from '$lib/components/Canvas/index.svelte';
</script>

<svelte:head>
	<title>Penciil - {$title}</title>
</svelte:head>

<div class={$playMode ? "hidden" : ""}>
	<Canvas/>
</div>
{#if $playMode}
	<Animation/>
{/if}

<style>
  .hidden {
    display: none;
  }
</style>

