<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
  import { message } from "$lib/i18n";
  import Logo from '$lib/components/Logo/index.svelte';
  import InstallButton from "$lib/components/InstallButton/index.svelte";
  import githubIcon from './github.svg';

</script>

<svelte:head>
	<title>Penciil - {$message("about.title")}</title>
</svelte:head>

<section>
  <div>
    <Logo />
  </div>
  <p>
    <strong>Penciil</strong> {$message("about.description")}
  </p>
  <div>
    <InstallButton />
  </div>
  <p>
    {$message("about.credits")} 
    <a href="https://domi.land/">domi.land</a>
  </p>
  <div>
    <a href="https://github.com/jdomizz/penciil" target="_blank">
      <img src={githubIcon} alt="GitHub" />
    </a>
  </div>
</section>

<style>
  section {
    margin-top: -2em;
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
  a {
    text-decoration: underline;
  }
  img {
    width: 24px;
  }
</style>
