<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { message } from "$lib/i18n";
  import saveIcon from "./save.svg";

  const dispatch = createEventDispatcher();
</script>

<button disabled={true} on:click={() => dispatch("click")}>
  <img src={saveIcon} alt="Save" />
  <span>{$message("button.save")}</span>
</button>
