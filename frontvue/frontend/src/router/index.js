import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Datafeed from '@/views/Datafeed'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path:'/logask',
    name:'logask',
    component: Datafeed
  }
]

const router = new VueRouter({
  routes
})

export default router
