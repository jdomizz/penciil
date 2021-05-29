<script lang="ts">
  import { sketch } from "$lib/stores/sketch";
  import { message } from "$lib/stores/i18n";
  import TrashIcon from "./trashIcon.svelte";
</script>

<button disabled={$sketch.image === null}>
  <TrashIcon/>
  <span>{$message("button.clear")}</span>
</button>
