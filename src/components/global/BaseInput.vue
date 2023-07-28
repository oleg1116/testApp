<template>
	<div class="base-input-container">
		<label v-if="label" class="base-input-label">{{ label }}</label>
		<input
				:value="value"
				@input="e => this.$emit('input', e.target.value)"
				:maxlength="maxLength > 0 ? maxLength : false"
				class="base-input mt-8px"
				:placeholder="placeholder"
				:type="type"
				:required="required"/>
		<span class="" v-if="error">{{ error }}</span>
	</div>
</template>

<script>
	export default {
		name: 'BaseInput',
		props: {
			label: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: 'text'
			},
			placeholder: {
				type: String,
				default: ''
			},
			maxLength: {
				type: Number,
				default: 0
			},
			value: {
				default: '',
				required: true
			},
			error: {
				type: String,
				default: ''
			},
			required: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			localValue: {
				get() {
					return this.value || '';
				},
				set(value) {
					this.$emit('input', value);
				}
			}
		}
	};
</script>

<style scoped>
	.base-input-container {
		display:flex;
		flex-direction: column;
	}
	.base-input{
		border-radius: 6px;
		display:block;
		max-width: 400px;
		padding:6px 12px;
	}
	.base-input-label {
		align-self: flex-start;
	}
</style>
