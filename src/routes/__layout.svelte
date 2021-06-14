<script lang="ts">
  import { onMount } from 'svelte';
  import { locale, messages } from '$lib/i18n';
  import { sketches } from '$lib/sketch';
  import type { Sketch } from '$lib/types';
  import Header from '$lib/components/Header/index.svelte';
  import Footer from '$lib/components/Footer/index.svelte';
  import '../app.css';

  $: languages = Object.keys($messages);

  onMount(() => {
    const userLanguage = navigator.language.split('-')[0];
    const isAvailable = languages.filter((item) => item === userLanguage).length === 1;
    if (isAvailable) {
      locale.set(userLanguage);
    }
    const userSketchesKey = 'sketches';
    const userSketches = localStorage.getItem(userSketchesKey);
    if (userSketches) {
      sketches.set(JSON.parse(userSketches) as Sketch[]);
    }
    // } else {
    // 	localStorage.setItem(userSketchesKey, JSON.stringify([]));
    // }
    // console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
    
  });
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
