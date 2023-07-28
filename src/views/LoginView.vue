<template>
	<div class="login-form-container">
		<login-form/>
	</div>
</template>

<script>

    import LoginForm from "../components/LoginForm";
	export default {
    	name: "LoginView",
		components: {LoginForm},
	}
</script>

<style scoped>
	.login-form-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height:80vh;
	}
</style>
