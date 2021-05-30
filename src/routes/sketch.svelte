<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { title } from '$lib/title';
	import { sketch } from '$lib/sketch';
	import Animation from '$lib/components/Animation/index.svelte';
	import Canvas from '$lib/components/Canvas/index.svelte';
</script>

<svelte:head>
	<title>Penciil - {$title}</title>
</svelte:head>

<div class={$sketch.animationRunning ? 'hidden' : ''}>
	<Canvas />
</div>
{#if $sketch.animationRunning}
	<Animation />
{/if}

<style>
	.hidden {
		display: none;
	}
</style>
