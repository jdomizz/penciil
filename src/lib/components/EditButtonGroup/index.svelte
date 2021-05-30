<script lang="ts">
	import { message } from '$lib/stores/i18n';
	import { sketch } from '$lib/stores/sketch';
	import pencilIcon from './edit-2.svg';
	import eraserIcon from './edit-3.svg';
</script>

<div>
	<button disabled={!$sketch.eraserMode} on:click={sketch.toogleEraser}>
		<img src={pencilIcon} alt="Draw" />
		<span>{$message('button.draw')}</span>
	</button>
	<button disabled={$sketch.eraserMode} on:click={sketch.toogleEraser}>
		<img src={eraserIcon} alt="Erase" />
		<span>{$message('button.erase')}</span>
	</button>
</div>

<style>
	div {
		display: flex;
	}
	button {
		float: left;
		padding: 6px;
		margin: 0 !important;
		background-color: #dddddd;
	}

	button:disabled {
		background-color: black;
	}

	button > span {
		color: white;
	}
</style>
