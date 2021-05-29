<script lang="ts">
	import { onMount } from "svelte";
	import { page } from '$app/stores';
	import { locale, messages } from "$lib/stores/i18n";
	import Header from '$lib/components/Header/index.svelte';
	import Footer from '$lib/components/Footer/index.svelte';
	import '../app.css';

  $: languages = Object.keys($messages);

  onMount(() => {
    const userLang = window.navigator.language.split('-')[0];
		const isAvailable = languages.filter(item => item === userLang).length === 1;
    if (isAvailable) {
      locale.set(userLang);
    }
  });
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

