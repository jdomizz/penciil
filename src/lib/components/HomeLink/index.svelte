<script lang="ts">
  import logoIcon from "./logo.svg";
</script>

<a sveltekit:prefetch href="/">
  <img src={logoIcon} alt="Logo" />
</a>

<style>
  a {
    display: flex;
    margin: 8px;
  }
  img {
    width: 20px;
    border: solid 2px;
  }
</style>
