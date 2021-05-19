<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { message } from "$lib/i18n";
	import { playMode } from "$lib/components/PlayButton/playMode";
  import Animation from '$lib/components/Animation/index.svelte';
	import Canvas from '$lib/components/Canvas/index.svelte';

	let isEraserMode = false;
  let isDarkTheme = false;
  let image: string;

  function saveSketch() {
    console.log("TODO: guardar en localStorage!");
  }
</script>

<svelte:head>
	<title>Penciil - {$message("sketch.title")}</title>
</svelte:head>

<Canvas
	hidden={$playMode}
	eraser={isEraserMode}
	on:export={(event) => (image = event.detail.toDataURL())}
/>
{#if $playMode}
	<Animation {image} dark={isDarkTheme} />
{/if}

