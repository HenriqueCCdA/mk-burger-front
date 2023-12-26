import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/HomeVue.vue'

const routes = [
  {
    path: '/',
    name: 'HomeVue',
    component: HomeVue
  },
  {
    path: '/pedidos',
    name: 'PedidosVue',
    component: () => import(/* webpackChunkName: "about" */ '../views/PedidosVue.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
