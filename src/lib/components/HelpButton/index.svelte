<script lang="ts">
  import { message } from "$lib/i18n";
  import helpIcon from "./help-circle.svg";
</script>

<button>
  <img src={helpIcon} alt="Help" />
  <span>{$message("button.help")}</span>
</button>