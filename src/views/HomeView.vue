<template>
	<div class="home">
		<BalanceSidebar></BalanceSidebar>
		<div class="main-content">
			<GameCardList></GameCardList>
		</div>
	</div>
</template>

<script>

	import GameCardList from "../components/GameCardList";
	import BalanceSidebar from "../components/BalanceSidebar";
	export default {
		name: 'HomeView',
		components: {
			BalanceSidebar,
			GameCardList,
		},

	}
</script>

<style scoped>
	.main-content {
		padding:0 12px;
		margin-left:180px;
	}
	.home {
		max-width: 1600px;
		margin-left: auto;
		margin-right: auto;
	}
</style>