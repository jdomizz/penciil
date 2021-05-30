<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { message } from '$lib/stores/i18n';
	// import InstallButton from '$lib/components/InstallButton/index.svelte';
</script>

<svelte:head>
	<title>{$message('app.name')} - {$message('about.title')}</title>
</svelte:head>

<section>
	<p><strong>{$message('app.name')}</strong> {$message('about.description')}</p>
	<p>{$message('about.help')}</p>
	<p>{$message('about.install')}</p>
	<p>{$message('about.credits')} <a href="https://domi.land/">domi.land</a>.</p>
</section>
<div class="footer">
	<!-- <InstallButton /> -->
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		padding: 24px;
		margin-top: 56px;
	}
	a {
		text-decoration: underline;
	}
	.footer {
		z-index: 10;
		position: fixed;
		bottom: 0;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
