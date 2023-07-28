import axios from 'axios';

const baseURL = 'https://poker.evenbetpoker.com/api/web';
const clientId = 'default';

const API_LOGIN = (data) => {
	return axios.post('/v2/login', {...data, clientId}, {
		baseURL,
		params:{clientId}
	})
}

const API_REFRESH_TOKEN = (refreshToken) => {
	return axios.post('/auth/token', {refreshToken, clientId}, {
		baseURL,
		params:{clientId}
	})
}

const API_GET_GAMES = () => {
	return axios.get('/v2/casino/games', {
		baseURL,
		params:{clientId}
	})
}

const API_GET_USER_BALANCE = (authToken) => {
	return axios.get('v2/users/me/balance', {
		baseURL,
		params:{
			clientId,
			auth:authToken,
		}
	})
}

const API_GET_GAME_URL = (gameId) => {
	return axios.post(`/v2/casino/games/${gameId}/session-demo`, {}, {
		baseURL,
		params:{clientId}
	})
}

export {
	API_LOGIN,
	API_REFRESH_TOKEN,
	API_GET_GAMES,
	API_GET_USER_BALANCE,
	API_GET_GAME_URL,
}