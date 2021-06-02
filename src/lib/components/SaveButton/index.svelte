<script lang="ts">
  import { message } from '$lib/i18n';
  import SaveIcon from './saveIcon.svelte';
</script>

<button disabled={true}>
  <SaveIcon />
  <span>{$message('button.save')}</span>
</button>
