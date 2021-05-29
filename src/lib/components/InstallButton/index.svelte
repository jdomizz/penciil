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
    border: 1px;
    border-style: solid;
    border-radius: 5%;
    background-color: black;
  }
  span {
    color: white;
  }
</style>
