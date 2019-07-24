import Vue from 'vue'
import Router from 'vue-router'
import Times from './views/Times.vue'
import Vacation from './views/Vacation.vue'
import Travel from './views/Travel.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'times',
      component: Times
    },
    {
      path: '/vacation',
      name: 'vacation',
      component: Vacation
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel
    }
  ]
})
