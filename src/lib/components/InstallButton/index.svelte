<script lang="ts">
  import { message } from "$lib/stores/i18n";
  import downloadIcon from "./download.svg";
</script>

<button >
  <img src={downloadIcon} alt="Install" />
  <span>{$message("button.install")}</span>
</button>

<style>
  button {
    background-color: black;
    margin: 24px;
  }
  span {
    color: white;
  }
</style>
