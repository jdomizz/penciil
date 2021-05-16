<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import Animation from '$lib/components/Animation/index.svelte';
	import Canvas from '$lib/components/Canvas/index.svelte';
	import PlayButton from "$lib/components/PlayButton/index.svelte";
  import ThemeButton from "$lib/components/ThemeButton/index.svelte";
  import EditButton from "$lib/components/EditButton/index.svelte";
  import SaveButton from "$lib/components/SaveButton/index.svelte";
	import '../app.css';

	let isEraserMode = false;
  let isPlaying = false;
  let isDarkTheme = false;
  let image: string;

  function saveSketch() {
    console.log("TODO: guardar en localStorage!");
  }
</script>

<svelte:head>
	<title>Penciil</title>
</svelte:head>

<header>
	<div class="title">Penciil</div>
  <div class="toolbar">
    {#if isPlaying}
      <ThemeButton on:toogle={(event) => (isDarkTheme = event.detail)} />
    {:else}
      <EditButton on:toogle={(event) => (isEraserMode = event.detail)} />
    {/if}
    <SaveButton on:click={saveSketch} />
    <PlayButton on:toogle={(event) => (isPlaying = event.detail)} />
  </div>
</header>

<main>
	<Canvas
		hidden={isPlaying}
		eraser={isEraserMode}
		on:export={(event) => (image = event.detail.toDataURL())}
	/>
	{#if isPlaying}
		<Animation {image} dark={isDarkTheme} />
	{/if}
</main>

<style>
	header {
		position: fixed;
    width: 100%;
    height: 56px;
		display: flex;
		justify-content: space-between;
		align-items: center;
    align-content: center;
		background-color: white;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
      0 1px 4px 0 rgb(0 0 0 / 12%);
	}
	.title {
    font-weight: bold;
    font-size: larger;
    margin-left: 16px;
  }
  .toolbar {
    margin-right: 16px;
    display: flex;
    align-items: center;
  }
</style>