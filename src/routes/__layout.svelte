<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header/index.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		width: 100%;
		height: 100%;
	}
</style>

