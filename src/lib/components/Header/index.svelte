<script lang="ts">
  import { page } from '$app/stores';
	import PlayButton from "$lib/components/PlayButton/index.svelte";
  import ThemeButton from "$lib/components/ThemeButton/index.svelte";
  import ClearButton from "$lib/components/ClearButton/index.svelte";
  import EditButton from "$lib/components/EditButton/index.svelte";
  import SaveButton from "$lib/components/SaveButton/index.svelte";
  import HelpButton from "$lib/components/HelpButton/index.svelte";
  import AboutButton from "$lib/components/AboutButton/index.svelte";
  import CreateButton from "$lib/components/CreateButton/index.svelte";
  import OpenButton from "$lib/components/OpenButton/index.svelte";
  import BackButton from "$lib/components/BackButton/index.svelte";
</script>

<header>
	<div class="title"> 
    {#if $page.path === '/'}
      Penciil
    {:else}
      <BackButton />
    {/if}
  </div>
  <div class="toolbar">
    <!-- <CreateButton /> -->
    <!-- <OpenButton /> -->
    <!-- <SaveButton />
    <ClearButton />
    <EditButton />
    <PlayButton />
    <ThemeButton /> -->
  </div>

  {#if $page.path === '/about'}
    <HelpButton />
  {:else}
    <AboutButton />
  {/if}
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
    font-weight: bold;
    font-size: larger;
    display: flex;
  }
  .toolbar {
    margin-right: 16px;
    display: flex;
    align-items: center;
  }
</style>