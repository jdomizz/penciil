<script lang="ts">
  import { onMount } from 'svelte';
  import { locale, messages } from '$lib/i18n';

  import Header from '$lib/components/Header/index.svelte';
  import Footer from '$lib/components/Footer/index.svelte';
  import '../app.css';

  $: languages = Object.keys($messages);

  function setUserLanguage() {
    const userLanguage = navigator.language.split('-')[0];
    if (languages.includes(userLanguage)) {
      locale.set(userLanguage);
    }
  }

  onMount(() => setUserLanguage());
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

<style>
  main {
    width: 100%;
    height: 100%;
  }
</style>
