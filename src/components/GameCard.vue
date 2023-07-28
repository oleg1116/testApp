<template>
	<div class="game-card">
		<div class="game-card__image-container">
			<div class="game-card__image ">
				<img :src="imageUrl" :alt="title + ' image'" class="game-card__image">
			</div>
		</div>
		<h3 class="mt-12px">{{title}}</h3>
		<base-button @click="playDemo(id)">  Play Demo </base-button>
		<div v-show="error" class="error-text mt-8px">{{error}}</div>
	</div>
</template>

<script>
	import BaseButton from "./global/BaseButton";
	import {API_GET_GAME_URL} from "@/api-service"
	export default {
		name: "GameCard",
		components: {BaseButton},
		props: {
			imageUrl: {
				type: String,
				default:''
			},
			title: {
				type: String,
				default:''
			},
			id: {
				type: String,
				required:true,
			}
		},
		data () {
			return {
				error: '',
			}
		},
		methods: {
			async playDemo(gameId) {
				try {
					this.error=''
					const demoLinkResponse = await API_GET_GAME_URL(gameId)
					window.location.href = demoLinkResponse.data.data[0].attributes['launch-options']['game-url']
				} catch (err) {
					this.error = 'Failed to generate demo link. Please try again later.'
				}

			}
		}
	}
</script>

<style scoped>
	.game-card {
		border-radius: 12px;
		width:100%;
		border: 1px solid transparent;
		background: lightslategray;
		padding-bottom:12px;
	}
	.game-card__image-container {
		width:100%;
		position:relative;
		padding-bottom: 70%;
		background: #2c3e50;
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
		overflow: hidden;

	}
	.game-card__image {
		object-fit: cover;
		position: absolute;
		left:0;
		right:0;
		top:0;
		bottom:0;
		width:100%;
		height:100%;
		margin-left: auto;
		margin-right: auto;
	}
</style>