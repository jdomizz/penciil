<script lang="ts">
  import { message } from "$lib/i18n";
  import { editMode } from './editMode'; 
  import editIcon from './edit.svg';
	import eraserIcon from './eraser.svg';
</script>

<div>
  <button disabled={!$editMode} on:click={editMode.toogle}>
    <img src={editIcon} alt="Draw" />
    <span>{$message("button.draw")}</span>
  </button>
  <button disabled={$editMode} on:click={editMode.toogle}>
    <img src={eraserIcon} alt="Erase" />
    <span>{$message("button.erase")}</span>
  </button>
</div>

<style>
  div {
    display: flex;
    height: 56px;
  }
  button {
    float: left;
    padding: 4px;
    margin: 0 !important;
    background-color: #dddddd;
  }

  button:disabled {
    background-color: black;
  }

  button > span {
    color: white;
  }
  button:not(:last-child) {
    border-right: none;
  }
</style>