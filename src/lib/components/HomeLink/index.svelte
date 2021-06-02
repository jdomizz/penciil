<script lang="ts">
  import { sketch } from '$lib/sketch';
  import logoIcon from './logo.svg';
</script>

<a sveltekit:prefetch href="/" on:click={sketch.reset}>
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
