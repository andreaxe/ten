import Vue from 'vue'
import Router from 'vue-router'
import Switch from './components/switch/switch'
import Cron from './components/cron/cron'
import Pin from './components/pin/pin'
import MaqLavar from './components/maquina_de_lavar/MaqLavar'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Switch, name: 'switch'},
    {path: '/cron', component: Cron, name: 'cron'},
    {path: '/pin', component: Pin, name: 'pin'},
    {path: '/maquina_lavar', component: MaqLavar, name:'maquina_lavar'}
  ],
  linkActiveClass: 'uk-active'
})
