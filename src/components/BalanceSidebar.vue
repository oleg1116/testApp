<template>
	<div>
		<div class="sidebar-button-mobile" :class="{'active':sidebarVisibleMobile}" role="button" @click="toggleMobileSidebarVisibility"></div>
		<div class="sidebar" :style="{'width':width}" :class="{'sedebar-visible-mobile':sidebarVisibleMobile}">
			<div v-show="balance">
				<div class="balance-text">
					Balance
				</div>
				<div class="balance-amount mt-8px">{{balance.available}}{{currency}}</div>
				<div class="balance-text mt-12px">
					Bonus
				</div>
				<div class="balance-amount">{{balance.bonus}}{{currency}}</div>
				<div class="balance-text mt-12px">
					In Play
				</div>
				<div class="balance-amount">{{balance['in-play']}}{{currency}}</div>
			</div>
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
				sidebarVisibleMobile:false,
			}
		},
		mounted: async function() {
			await this.$store.dispatch('getUserBalance')
			this.balance = this.$store.state.userBalance
		},
		methods:{
			toggleMobileSidebarVisibility(){
				this.sidebarVisibleMobile = !this.sidebarVisibleMobile
			}
		},
		computed:{
			currency() {
				const currencies = {
					'USD':'$'
				}
				return this.balance && currencies[this.balance.currency] ? currencies[this.balance.currency] : ''
			},
			balance () {
				return this.$store.state.userBalance
			}
		}
	}
</script>

<style scoped>
	.sidebar{
		display:none;
		position:fixed;
		top:80px;
		width: 150px;
		padding:12px;
		border-radius:12px;
		background: lightslategray;
		z-index:100;
		min-height: 70vh;
	}
	.sidebar.sedebar-visible-mobile {
		padding-top:50px;
		display:block;
	}
	.balance-amount {
		text-align: center;
	}
	.balance-text {
		font-weight: bold;
	}
	.sidebar-button-mobile {
		display:block;
		position:fixed;
		top:80px;
		width:40px;
		height:40px;
		z-index:101;
		border-radius: 50%;
		border:1px solid transparent;
		background-color: whitesmoke;
		background-image:url('../assets/mobile-menu-icon.svg');
		background-size: 30px;
		background-repeat: no-repeat;
		background-position: center;
	}
	.sidebar-button-mobile.active {
		background-image:url('../assets/mobile-menu-close-icon.svg');
	}
	@media (min-width: 576px) {
		.sidebar-button-mobile {
			display:none;
		}
		.sidebar{
			display:block;
		}
	}
</style>