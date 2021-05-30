<script lang="ts">
  import { message } from "$lib/stores/i18n";
  import { sketch } from "$lib/stores/sketch";
  import pencilIcon from './edit-2.svg';
	import eraserIcon from './edit-3.svg';
</script>

<div>
  <button disabled={!$sketch.eraserMode} on:click={sketch.toogleEraser}>
    <img src={pencilIcon} alt="Draw" />
    <span>{$message("button.draw")}</span>
  </button>
  <button disabled={$sketch.eraserMode} on:click={sketch.toogleEraser}>
    <img src={eraserIcon} alt="Erase" />
    <span>{$message("button.erase")}</span>
  </button>
</div>

<style>
  div {
    display: flex;
    /* margin-left: 4px; */
    /* border: 1px solid black;
    border-radius: 4%; */
  }
  button {
    float: left;
    padding: 6px;
    margin: 0 !important;
    background-color: #dddddd;
    /* border: 1px solid #dddddd;
    border-radius: 4%; */
  }

  button:disabled {
    background-color: black;
    /* border: 1px solid black; */
  }

  button > span {
    color: white;
  }
  button:not(:last-child) {
    border-right: none !important;
  }
</style>