<script lang="ts">
  import { playMode } from "$lib/components/PlayButton/playMode";
  import backIcon from "./arrow-left.svg";

  function goBack(): void {
    if ($playMode) {
      playMode.toogle();
    } else {
      window.history.back();
    }
  }
</script>

<button on:click={goBack}>
  <img src={backIcon} alt="Back" />
</button>