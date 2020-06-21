import Vue from 'vue'
import VueRouter from 'vue-router'

import StakeHome from './../views/home/Home'
import StakeAgenda from './../views/agenda/Agenda'
import StakeMessages from './../views/messages/Messages'
import StakeNewsLetter from './../views/news/NewsLetter'
import StakeEldersQuorum from '../views/news/moreinfo/EldersQuorum'

import Stake404 from './../views/404'

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
  },
  {
    path: '/newsletter',
    name: 'StakeNewsLetter',
    component: StakeNewsLetter,
    children: [
      {
        path: 'elders-quorum',
        name: 'StakeEldersQuorum',
        component: StakeEldersQuorum
      }
    ]
  },
  {
    path: '*',
    name: 'Stake404',
    component: Stake404
  }
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
