<script lang="ts">
  import { message } from "$lib/i18n";
  import { editMode } from './editMode'; 
  import editIcon from './edit.svg';
	import eraserIcon from './eraser.svg';
</script>

<button on:click={editMode.toogle}>
  {#if $editMode}
    <img src={editIcon} alt="Draw" />
    <span>{$message("button.draw")}</span>
  {:else}
    <img src={eraserIcon} alt="Erase" />
    <span>{$message("button.erase")}</span>
  {/if}
</button>
