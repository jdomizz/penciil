<script context="module" lang="ts">
	export const prerender = false;
</script>

<script lang="ts">
	import Welcome from '$lib/components/Welcome/index.svelte';
</script>

<svelte:head>
	<title>Penciil</title>
</svelte:head>

<Welcome />
