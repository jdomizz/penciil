<script lang="ts">
  import helpIcon from "./help-circle.svg";
</script>

<a sveltekit:prefetch href="/about">
  <button>
    <img src={helpIcon} alt="About" />
  </button>
</a>