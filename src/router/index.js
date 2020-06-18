import Vue from 'vue'
import VueRouter from 'vue-router'

import StakeHome from './../views/home/Home'
import StakeAgenda from './../views/agenda/Agenda'
import StakeMessages from './../views/messages/Messages.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StakeHome',
    component: StakeHome
  },
  {
    path: '/agenda',
    name: 'StakeAgenda',
    component: StakeAgenda
  },
  {
    path: '/messages',
    name: 'StakeMessages',
    component: StakeMessages
  }
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
