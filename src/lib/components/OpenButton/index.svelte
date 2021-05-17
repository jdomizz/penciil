<script lang="ts">
  import { message } from "$lib/i18n";
  import folderIcon from "./folder.svg";
</script>

<button>
  <img src={folderIcon} alt="Open" />
  <span>{$message("button.open")}</span>
</button>
