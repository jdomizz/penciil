<script lang="ts">
  import ClearButton from "$lib/components/ClearButton/index.svelte";
  import EditButtonGroup from "$lib/components/EditButtonGroup/index.svelte";
  import PlayButton from "$lib/components/PlayButton/index.svelte";
</script>

<footer>
  <ClearButton />
  <EditButtonGroup />
  <PlayButton />
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
</style>