<script lang="ts">
  import { message } from '$lib/i18n';
  import fileIcon from './file-plus.svg';
</script>

<a sveltekit:prefetch href="/sketch">
  <button>
    <img src={fileIcon} alt="New" />
    <span>{$message('button.new')}</span>
  </button>
</a>
