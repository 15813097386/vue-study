import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import shop from '../views/shopIndex.vue'
import Type from '../views/shopType.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomeView,
    children:[
      {
        path: '/',
        redirect: '/index'
      },
      {
        path: '/index',
        component: shop
      },
      {
        path:'/type',
        component: Type
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
