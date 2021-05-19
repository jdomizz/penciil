<script lang="ts">
  import { sketch } from "$lib/sketch";
  import { message } from "$lib/i18n";
  import TrashIcon from "./trash.svelte";
</script>

<button disabled={$sketch.image === null}>
  <TrashIcon/>
  <span>{$message("button.clear")}</span>
</button>
