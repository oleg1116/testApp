import Vue from 'vue'
import Vuex from 'vuex'
import {API_LOGIN, API_REFRESH_TOKEN, API_GET_GAMES, API_GET_USER_BALANCE} from "@/api-service";

Vue.use(Vuex)

const tokenRefreshTime = 800 * 1000
const balanceRefreshTime = 30 * 1000

export default new Vuex.Store({
	state: {
		tokenRefreshTimeout: null,
		token: '',
		gamesList: [],
		userBalance: {
			available:0,
			bonus:0,
			'':0,
			currency:'USD',
		},
	},
	getters: {},
	mutations: {
		setTokenRefreshTimeout(state, tokenRefreshTimeout) {
			state.tokenRefreshTimeout = tokenRefreshTimeout
		},
		setToken(state, token) {
			state.token = token
		},
		setGamesList(state, games) {
			state.gamesList = games
		},
		setUserBalance(state, balance) {
			state.userBalance = balance
		}
	},
	actions: {
		async loginUser({commit, dispatch}, credentialsData) {
			try {
				const loginResponse = await API_LOGIN(credentialsData)
				const {token, 'refresh-token': refreshToken, 'life-time': lifeTime} = loginResponse.data.data[0].attributes
				const tokenRefreshTimeout = setTimeout(() => dispatch('refreshToken', refreshToken), tokenRefreshTime)
				commit('setTokenRefreshTimeout', tokenRefreshTimeout)
				commit('setToken', token)
			} catch (err) {
				console.log('Failed to log in user ' + err)
				throw err
			}


		},
		async refreshToken({commit, dispatch}, previousRefreshToken) {
			try {
				const refreshResponse = await API_REFRESH_TOKEN(previousRefreshToken)
				const {token, 'refresh-token': refreshToken, 'life-time': lifeTime} = refreshResponse.data
				const tokenRefreshTimeout = setTimeout(() => dispatch('refreshToken', refreshToken), tokenRefreshTime)
				commit('setTokenRefreshTimeout', tokenRefreshTimeout)
				commit('setToken', token)

			} catch (err) {
				console.log('Failed to refresh user token' + err)
			}
		},
		async getUserBalance({commit, dispatch, state}) {
			try {
				const balanceResponse = await API_GET_USER_BALANCE(state.token)
				setTimeout(() => dispatch('getUserBalance'), balanceRefreshTime)
				commit('setUserBalance', balanceResponse.data.data[0].attributes)
			} catch (err) {
				console.log('Failed to get user balance ' + err)
				//Try to get balance later
				setTimeout(() => dispatch('getUserBalance'), balanceRefreshTime)
			}


		},
		async getGames({commit}) {
			try {
				const gamesListResponse = await API_GET_GAMES()
				commit('setGamesList', gamesListResponse.data.data)

			} catch (err) {
				console.log('Failed to get games list' + err)
			}
		},
		logout({commit, state}) {
			clearTimeout(state.tokenRefreshTimeout);
			commit('setTokenRefreshTimeout', null)
		}
	},
	modules: {}
})
