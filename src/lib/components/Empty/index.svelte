
<script lang="ts">
    import { message } from "$lib/i18n";
  	import Logo from '$lib/components/Logo/index.svelte';
  	import StartButton from '$lib/components/StartButton/index.svelte';
</script>

<section>
  <div>
    <Logo />
  </div>
  <p>
    <strong>Penciil</strong> {$message("app.description")} 🖍️
  </p>
  <div>
    <StartButton />
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
</style>
