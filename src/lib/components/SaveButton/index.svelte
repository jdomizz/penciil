<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import save from "./save.svg";
  import { i18n } from "$lib/i18n";

  const dispatch = createEventDispatcher();
</script>

<button disabled={true} on:click={() => dispatch("click")}>
  <img src={save} alt="Save" />
  <span>{$i18n("save")}</span>
</button>
