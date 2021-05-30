<script lang="ts">
	import { message } from '$lib/i18n';
	import { sketch } from '$lib/sketch';
	import PlayIcon from './playIcon.svelte';
</script>

<button disabled={$sketch.image === null} on:click={sketch.toogleAnimation}>
	<PlayIcon />
	<span>{$message('button.play')}</span>
</button>
