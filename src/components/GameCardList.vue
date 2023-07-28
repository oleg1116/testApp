<template>
	<div class="game-cards-container">
		<div v-for="game in gamesList" :key="game.id" class="game-card-column">
			<game-card  :title="game.attributes.title" :imageUrl="game.attributes.image" :id="game.id"/>
		</div>
	</div>
</template>

<script>
	import GameCard from "./GameCard";

	export default {
		name: "GameCardList",
		components: {
			GameCard
		},
		data(){
			return {
				gamesList: [],
			}
		},
		mounted: async function() {
			await this.$store.dispatch('getGames')
			this.gamesList = this.$store.state.gamesList
		},
	}
</script>

<style scoped>
	.game-cards-container {
		display:flex;
		flex-wrap: wrap;
		margin-right: -12px;
		margin-left: -12px;
	}
	.game-card-column {
		padding-left: 12px;
		padding-right: 12px;
		flex: 0 0 100%;
		max-width: 100%;
		margin-bottom: 24px;
		box-sizing: border-box;
	}
	@media (min-width: 576px) {
		.game-card-column {
			flex: 0 0 50%;
			max-width: 50%;
		}
	}
	@media (min-width: 992px) {
		.game-card-column {
			width:33.3%;
		}
	}
	@media (min-width: 1200px) {
		.game-card-column {
			flex: 0 0 25%;
			max-width: 25%;
		}
	}
</style>