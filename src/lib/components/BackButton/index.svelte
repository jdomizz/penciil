<script lang="ts">
  import backIcon from "./arrow-left.svg";
</script>

<button on:click={() => window.history.back()}>
  <img src={backIcon} alt="Back" />
</button>