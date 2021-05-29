<script lang="ts">
  import { locale, messages } from "$lib/i18n";

  $: languages = Object.keys($messages);
</script>

<select bind:value={$locale}>
  {#each languages as lang}
    <option value={lang}>
      {lang}
    </option>
  {/each}
</select>


<style>
  select {
    border: none;
    margin-right: 4px;
    background-color: white;
  }
</style>

