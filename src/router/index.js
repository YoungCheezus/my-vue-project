import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main' },
    component: Home
  },
  {
    path: '/beats',
    name: 'beats',
    meta: { layout: 'main' },
    component: () => import('../views/Chart.vue'),
  },
  {
    path: '/produsers',
    name: 'produsers',
    meta: { layout: 'main' },
    component: () => import('../views/Produsers.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty' },
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main' },
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/messages',
    name: 'messages',
    meta: { layout: 'main' },
    component: () => import('../views/Messages.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    meta: { layout: 'main' },
    component: () => import('../views/Settings.vue'),
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
