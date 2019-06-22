import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Views/Home'
import reused from './Views/Reused'
import VueChartJS from '@/Views/VueChartJS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chartjs',
      name: 'VueChartJS',
      component: VueChartJS
    },
    {
      path: '/reused',
      name: 'Reused',
      component: reused
    }
  ]
})