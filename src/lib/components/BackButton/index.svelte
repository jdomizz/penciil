<script lang="ts">
  import { sketch } from "$lib/sketch";
  import backIcon from "./arrow-left.svg";

  function goBack(): void {
    if ($sketch.animationRunning) {
      sketch.toogleAnimation();
    } else {
      sketch.reset();
      window.history.back();
    }
  }
</script>

<button on:click={goBack}>
  <img src={backIcon} alt="Back" />
</button>