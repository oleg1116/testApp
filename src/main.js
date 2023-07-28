import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "normalize.css"
import globalComponents from './components/global'
import Paginate from 'vuejs-paginate'

Vue.component('paginate', Paginate)

// Register global components
globalComponents.forEach(c => {
	Vue.component(c.name, c)
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
