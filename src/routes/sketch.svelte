<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import Animation from '$lib/components/Animation/index.svelte';
	import Canvas from '$lib/components/Canvas/index.svelte';

	let isEraserMode = false;
  let isPlaying = false;
  let isDarkTheme = false;
  let image: string;

  function saveSketch() {
    console.log("TODO: guardar en localStorage!");
  }
</script>

<svelte:head>
	<title>Penciil - Sketch</title>
</svelte:head>

<Canvas
	hidden={isPlaying}
	eraser={isEraserMode}
	on:export={(event) => (image = event.detail.toDataURL())}
/>
{#if isPlaying}
	<Animation {image} dark={isDarkTheme} />
{/if}

