<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import save from "./save.svg";

  const dispatch = createEventDispatcher();
</script>

<button disabled={true} on:click={() => dispatch("click")}>
  <img src={save} alt="Save" />
  <span>Save</span>
</button>
