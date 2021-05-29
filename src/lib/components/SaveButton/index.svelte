<script lang="ts">
  import { sketch } from "$lib/sketch";
  import { message } from "$lib/i18n";
  import SaveIcon from "./save.svelte";
</script>

<button disabled={true}>
  <SaveIcon />
  <span>{$message("button.save")}</span>
</button>
