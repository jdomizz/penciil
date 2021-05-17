<script lang="ts">
  import { message } from "$lib/i18n";
  import downloadIcon from "./download.svg";
</script>

<button >
  <img src={downloadIcon} alt="Install" />
  <span>{$message("button.install")}</span>
</button>

<style>
    button {
    padding: 2px;
    border: 2px;
    border-style: solid;
    border-radius: 10%;
  }
</style>
