<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { message } from "$lib/i18n";
	import { playMode } from "$lib/components/PlayButton/playMode";
  import Animation from '$lib/components/Animation/index.svelte';
	import Canvas from '$lib/components/Canvas/index.svelte';

  let image: string;

</script>

<svelte:head>
	<title>Penciil - {$message("sketch.title")}</title>
</svelte:head>

<div class={$playMode ? "hidden" : ""}>
	<Canvas on:export={(event) => (image = event.detail.toDataURL())}/>
</div>
{#if $playMode}
	<Animation {image} />
{/if}

<style>
  .hidden {
    display: none;
  }
</style>

