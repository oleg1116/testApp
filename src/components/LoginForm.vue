<template>
	<form @submit.prevent="submitLogin" class="login-form">
		<base-input v-model="login" class="mt-12px":label="'Login'" :required="true"/>
		<base-input v-model="password" class="mt-12px" :type="'password'" :label="'Password'" :required="true"/>
		<div v-show="loginError" class="mt-8px">{{loginError}}</div>
		<base-button :is-disabled="loginSubmitDisabled" :type="'submit'" class="mt-12px">Login</base-button>
	</form>
</template>

<script>
	import BaseInput from "../components/global/BaseInput";
	import BaseButton from "../components/global/BaseButton";
	export default {
		name: "LoginForm",
		components: {BaseButton, BaseInput},
		data() {
			return {
				login:'',
				password:'',
				loginError:'',
			}
		},
		computed: {
			loginSubmitDisabled() {
				return this.login.trim() === '' || this.password.trim() === ''
			}
		},
		methods:{
			async submitLogin(){
				this.loginError = ''
				try {
					await this.$store.dispatch('loginUser', {login: this.login, password:this.password})
					this.$router.push('/');
				} catch (err) {
					this.loginError = 'Login failed, please try again.'
				}
			}
		}
	}
</script>

<style scoped>
	.login-form {
		width:100%;
		max-width: 400px;
		padding:10px;
		border-radius: 6px;
	}
</style>