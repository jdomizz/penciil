<script lang="ts">
  import { message } from '$lib/i18n';
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

<style>
  section {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 92px;
  }
  p {
    margin-left: auto;
    margin-right: auto;
    width: 16em;
    text-align: center;
  }
</style>
