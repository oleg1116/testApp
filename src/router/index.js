import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import notFoundView from '../views/404.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      authorizedOnly: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      unauthorizedOnly: true
    }
  },
  { path: '/404', component: notFoundView },
  { path: '*', redirect: '/404' },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.authorizedOnly)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
      })
    }
  } else if(to.matched.some(record => record.meta.unauthorizedOnly)) {
    if(store.state.token){
      next({
        path: '/'
      })
    }
    else{
      next()
    }
  } else {
    next()
  }
})

export default router
