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
    border-top: solid 1px #dddddd;
	}
</style>