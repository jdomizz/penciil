<script lang="ts">
  import { sketch } from "$lib/sketch";
  import { message } from "$lib/i18n";
  import SaveIcon from "./save.svelte";
</script>

<button disabled={$sketch.image === null}>
  <SaveIcon />
  <span>{$message("button.save")}</span>
</button>
