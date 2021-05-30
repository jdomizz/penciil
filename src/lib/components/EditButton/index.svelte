<script lang="ts">
	import { sketch } from '$lib/sketch';
	import { message } from '$lib/i18n';
	import editIcon from './edit.svg';
</script>

<button on:click={sketch.toogleAnimation}>
	<img src={editIcon} alt="Edit" />
	<span>{$message('button.edit')}</span>
</button>
