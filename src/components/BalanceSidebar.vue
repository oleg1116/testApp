<template>
	<div class="sidebar" :style="{'width':width}">
		<div v-show="balance">
			<div class="balance-text">
				Balance
			</div>
			<div class="balance-amount mt-8px">{{balance.available}}{{currency}}</div>
		</div>


	</div>
</template>

<script>
	export default {
		name: "BalanceSidebar",
		props:{
			width: {
				type:Number,
				default: 150,
			}

		},
		data() {
			return {
				balance:{
					available:0,
					currency:'USD'
				}
			}
		},
		mounted: async function() {
			await this.$store.dispatch('getUserBalance')
			this.balance = this.$store.state.userBalance
		},
		computed:{
			currency() {
				const currencies = {
					'USD':'$'
				}
				return this.balance && currencies[this.balance.currency] ? currencies[this.balance.currency] : ''
			}
		}
	}
</script>

<style scoped>
	.sidebar{
		position:fixed;
		top:80px;
		width: 150px;
		padding:12px;
		border-radius:12px;
		background: lightslategray;
		z-index:100;
	}
	.balance-amount {
		text-align: center;
	}
	.balance-text {
		font-weight: bold;
	}
</style>