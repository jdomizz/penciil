<script lang="ts">
  import { page } from '$app/stores';
  import { message } from "$lib/i18n";
  import helpIcon from "./help-circle.svg";
</script>

<a class:active={$page.path === '/about'} sveltekit:prefetch href="/about">
  <button>
    <img src={helpIcon} alt="About" />
    <span>{$message("button.help")}</span>
  </button>
</a>