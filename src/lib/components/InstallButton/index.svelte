<script lang="ts">
  import { message } from '$lib/i18n';
  import downloadIcon from './download.svg';
</script>

<button>
  <img src={downloadIcon} alt="Install" />
  <span>{$message('button.install')}</span>
</button>

<style>
  button {
    background-color: var(--primary-color);
    margin: 24px;
  }
  span {
    color: var(--background-color);
  }
</style>
