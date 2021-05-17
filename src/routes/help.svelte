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
	<title>Penciil - Help</title>
</svelte:head>

<section>
  <div>
    <Logo />
  </div>
  <p>
    <strong>Penciil</strong> {$message("help.description")}
  </p>
  <div>
    <InstallButton />
  </div>
  <h3>{$message("help.usage.title")}</h3>
  <p>{$message("help.usage.description")}</p>
  <h3>{$message("help.credits.title")}</h3>
  <p>{$message("help.credits.description")} <a href="https://domi.land/">domi.land</a>.</p>
  <div>
    <a href="https://github.com/jdomizz/penciil" target="_blank">
      <img src={githubIcon} alt="GitHub" />
    </a>
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
    margin: 32px 0;
    display: flex;
    justify-content: center;
  }
  h3, p {
    margin-left: auto;
    margin-right: auto;
    width: 32em;
    text-align: center;
  }
  a {
    text-decoration: underline;
  }
  img {
    width: 24px;
  }
</style>
