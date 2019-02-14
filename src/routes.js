import Vue from 'vue'
import Router from 'vue-router'
import Switch from './components/switch/switch'
import Cron from './components/cron/cron'
import Pin from './components/pin/pin'
import MaqLavar from './components/maquina_de_lavar/MaqLavar'
import Iluminacao from './components/iluminacao/Iluminacao'
import Aquecimento from './components/aquecimento/Aquecimento'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Switch, name: 'switch'},
    {path: '/cron', component: Cron, name: 'cron'},
    {path: '/pin', component: Pin, name: 'pin'},
    {path: '/iluminacao', component: Iluminacao, name: 'iluminacao'},
    {path: '/aquecimento', component: Aquecimento, name: 'aquecimento'},
    {path: '/maquina_lavar', component: MaqLavar, name:'maquina_lavar'}
  ],
  linkActiveClass: 'uk-active'
})
