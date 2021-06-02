<script lang="ts">
  import { message } from '$lib/i18n';
  import StartButton from '$lib/components/StartButton/index.svelte';
  import LogoIcon from './LogoIcon.svelte';
</script>

<section>
  <div>
    <LogoIcon />
  </div>
  <p>
    <strong>{$message('app.name')}</strong>
    {$message('app.description')} 🖍️
  </p>
  <div>
    <StartButton />
  </div>
</section>

<style>
  section {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  div {
    display: flex;
    justify-content: center;
  }
  p {
    margin-top: 32px;
    margin-bottom: 32px;
    margin-left: auto;
    margin-right: auto;
    width: 16em;
    text-align: center;
  }
</style>
