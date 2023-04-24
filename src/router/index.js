import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/rolunk',
    name: 'rolunk',
    component: () => import('../views/RolunkView.vue')
  },
  {
    path: '/termekek',
    name: 'termekek',
    component: () => import( '../views/TermekekView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/passreset',
    name: 'passreset',
    component: () => import('../views/PassResetView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
