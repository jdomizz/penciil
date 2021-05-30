<script lang="ts">
  import { page } from '$app/stores';
  import { title } from "$lib/stores/title";
  import { sketch } from "$lib/stores/sketch";
	// import SaveButton from "$lib/components/SaveButton/index.svelte";
  import ThemeButton from "$lib/components/ThemeSwitch/index.svelte";
  import HelpButton from "$lib/components/HelpButton/index.svelte";
  import HomeLink from "$lib/components/HomeLink/index.svelte";
  import EditButton from "$lib/components/EditButton/index.svelte";
  import LanguageSelect from "$lib/components/LanguageSelect/index.svelte";
</script>

<header>
	<div class="side"> 
    <HomeLink />
    <span class="title">{$title}</span>
  </div>
  <div class="side">
    {#if $page.path === '/sketch'}
      {#if $sketch.animationRunning}
        <ThemeButton />
      {:else}
        <!-- <SaveButton /> -->
      {/if}
    {/if}
    {#if $page.path === '/'}
      <HelpButton />
    {/if}
    <LanguageSelect />
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
    border-bottom: solid 1px #dddddd;
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