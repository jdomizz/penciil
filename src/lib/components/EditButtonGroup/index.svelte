<script lang="ts">
  import { message } from '$lib/i18n';
  import { sketch } from '$lib/sketch';
  import pencilIcon from './edit-2.svg';
  import eraserIcon from './edit-3.svg';
</script>

<div>
  <button disabled={!$sketch.eraserMode} on:click={sketch.toogleEraser}>
    <img src={pencilIcon} alt="Draw" />
    <span>{$message('button.draw')}</span>
  </button>
  <button disabled={$sketch.eraserMode} on:click={sketch.toogleEraser}>
    <img src={eraserIcon} alt="Erase" />
    <span>{$message('button.erase')}</span>
  </button>
</div>

<style>
  div {
    display: flex;
  }
  button {
    float: left;
    padding: 6px;
    margin: 0 !important;
    background-color: var(--secondary-color);
  }

  button:disabled {
    background-color: var(--primary-color);
  }

  button > span {
    color: var(--background-color);
  }
</style>
