<script lang="ts">
  import { sketch } from "$lib/sketch";
  import ClearButton from "$lib/components/ClearButton/index.svelte";
  import EditButtonGroup from "$lib/components/EditButtonGroup/index.svelte";
  import SaveButton from "$lib/components/SaveButton/index.svelte";
</script>

<footer>
  <div class="side">
    {#if !$sketch.animationRunning}
      <EditButtonGroup />
    {/if}
  </div>
  <div class="side"> 
    <ClearButton />
    <SaveButton />
  </div>
</footer>

<style>
	footer {
    z-index: 10;
		position: fixed;
    bottom: 0;
    width: 100%;
    height: 56px;
		display: flex;
    justify-content: space-between;
		align-items: center;
    align-content: center;
		background-color: white;
    box-shadow: 1px 0 4px 0 rgb(0 0 0 / 20%), 1px 0 1px 0 rgb(0 0 0 / 14%),
      1px 0 1px 0 rgb(0 0 0 / 12%);
	}
  .side {
    display: flex;
    align-items: center;
  }
</style>