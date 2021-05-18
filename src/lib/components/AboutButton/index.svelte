<script lang="ts">
  import infoIcon from "./info.svg";
</script>

<a sveltekit:prefetch href="/about">
  <button>
    <img src={infoIcon} alt="Info" />
  </button>
</a>