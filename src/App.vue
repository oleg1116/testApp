<template>
	<div id="app">
		<div class="header"></div>
		<router-view/>
	</div>
</template>

<script>

</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	.header{
		height:80px
	}

	.mt-8px {
		margin-top:8px;
	}
	.mt-12px {
		margin-top:12px;
	}
	.error-text {
		color: firebrick;
	}
	.page-item {
		margin: 0 10px;
		background: lightslategray;
		border:1px solid black;
	}
	.page-item a {
		display:inline-block;
		padding: 5px 8px;
	}
	.page-item.active {
		background: whitesmoke;
	}
</style>
