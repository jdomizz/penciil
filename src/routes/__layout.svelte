<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/components/Header/index.svelte';
	import Footer from '$lib/components/Footer/index.svelte';
	import '../app.css';
</script>

<Header />
<main>
	<slot />
</main>
{#if $page.path === '/sketch'}
	<Footer />
{/if}

<style>
	main {
		width: 100%;
		height: 100%;
	}
</style>

