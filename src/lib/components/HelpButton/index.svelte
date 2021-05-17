<script lang="ts">
  import { message } from "$lib/i18n";
  import helpIcon from "./help-circle.svg";
</script>

<a sveltekit:prefetch href="/about">
  <button>
    <img src={helpIcon} alt="About" />
    <span>{$message("button.help")}</span>
  </button>
</a>