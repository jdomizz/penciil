<script lang="ts">
  import { page } from '$app/stores';
  import { title } from "$lib/title";
	import { playMode } from "$lib/components/PlayButton/playMode";
	import PlayButton from "$lib/components/PlayButton/index.svelte";
  import ThemeButton from "$lib/components/ThemeSwitch/index.svelte";
  import AboutButton from "$lib/components/AboutButton/index.svelte";
  import CreateButton from "$lib/components/CreateButton/index.svelte";
  import BackButton from "$lib/components/BackButton/index.svelte";
</script>

<header>
	<div class="side"> 
    {#if $page.path !== '/'}
      <BackButton />
    {/if}
    <span class="title">{$title}</span>
  </div>
  <div class="side">
    {#if $page.path === '/'}
      <CreateButton />
      <AboutButton />
    {/if}
    {#if $page.path === '/sketch'}
      {#if $playMode}
        <ThemeButton />
      {:else}
      <PlayButton />
      {/if}
    {/if}
  </div>
</header>

<style>
	header {
    z-index: 10;
		position: fixed;
    width: 100%;
    height: 56px;
		display: flex;
		justify-content: space-between;
		align-items: center;
    align-content: center;
		background-color: white;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
      0 1px 4px 0 rgb(0 0 0 / 12%);
	}
  .title {
    margin-left: 8px;
    font-weight: bold;
    font-size: larger;
  }
	.side {
    display: flex;
    align-items: center;
  }
</style>