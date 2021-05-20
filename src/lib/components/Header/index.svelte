<script lang="ts">
  import { page } from '$app/stores';
  import { message } from "$lib/i18n";
	import { playMode } from "$lib/components/PlayToogle/playMode";
	import PlayButton from "$lib/components/PlayToogle/index.svelte";
  import ThemeButton from "$lib/components/ThemeSwitch/index.svelte";
  import ClearButton from "$lib/components/ClearButton/index.svelte";
  import EditButtonGroup from "$lib/components/EditButtonGroup/index.svelte";
  import SaveButton from "$lib/components/SaveButton/index.svelte";
  import AboutButton from "$lib/components/AboutButton/index.svelte";
  import CreateButton from "$lib/components/CreateButton/index.svelte";
  import BackButton from "$lib/components/BackButton/index.svelte";
</script>

<header>
	<div class="side"> 
    {#if $page.path !== '/'}
      <BackButton />
    {/if}
    {#if $page.path === '/'}
      <span class="title">Penciil</span>
    {/if}
    {#if $page.path === '/about'}
      <span class="title">{$message("about.title")}</span>
    {/if}

    
  </div>
  <div class="side">
    {#if $page.path === '/'}
      <!-- <CreateButton /> -->
      <AboutButton />
    {/if}
    {#if $page.path === '/sketch'}
      {#if $playMode}
        <ThemeButton />
      {:else}
        <EditButtonGroup />
        <ClearButton />
        <SaveButton />
      {/if}
      <PlayButton />
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