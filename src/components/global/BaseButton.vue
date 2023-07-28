<template>
	<button
			@click="$emit('click')"
			@keyup.enter="$emit('click')"
			class="base-button"
			:disabled="isDisabled"
	>
		<slot/>
	</button>
</template>

<script>
export default {
	name: 'BaseButton',
	props: {
		isDisabled: {
			default: false,
			type: Boolean
		},
	}
};
</script>

<style scoped>
	.base-button {
		padding:6px 20px;
		text-align: center;
		border-radius: 6px;
		cursor:pointer;
	}
</style>