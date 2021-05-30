<script lang="ts">
  import { page } from '$app/stores';
  import { title } from "$lib/stores/title";
  import { sketch } from "$lib/stores/sketch";
	import SaveButton from "$lib/components/SaveButton/index.svelte";
  import ThemeButton from "$lib/components/ThemeSwitch/index.svelte";
  import HelpButton from "$lib/components/HelpButton/index.svelte";
  import HomeLink from "$lib/components/HomeLink/index.svelte";
  import CreateButton from "$lib/components/CreateButton/index.svelte";
  import EditButton from "$lib/components/EditButton/index.svelte";
  import LanguageSelect from "$lib/components/LanguageSelect/index.svelte";
</script>

<header>
	<div class="side"> 
    <HomeLink />
    <span class="title">{$title}</span>
  </div>
  <div class="side">
    {#if $page.path === '/'}
      <!-- <CreateButton /> -->
      <HelpButton />
    {/if}
    {#if $page.path === '/sketch'}
      {#if $sketch.animationRunning}
        <ThemeButton />
        <EditButton />
      {:else}
        <SaveButton />
      {/if}
    {:else}
      <LanguageSelect />
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