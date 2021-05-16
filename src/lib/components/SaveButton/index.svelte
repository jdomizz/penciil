<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import save from "./save.svg";
  import { translate } from "$lib/i18n";

  const dispatch = createEventDispatcher();
</script>

<button disabled={true} on:click={() => dispatch("click")}>
  <img src={save} alt="Save" />
  <span>{$translate("save")}</span>
</button>
