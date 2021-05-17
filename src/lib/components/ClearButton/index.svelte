<script lang="ts">
  import { message } from "$lib/i18n";
  import trashIcon from "./trash.svg";
</script>

<button>
  <img src={trashIcon} alt="Clear" />
  <span>{$message("button.clear")}</span>
</button>
