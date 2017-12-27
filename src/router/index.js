import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Mapp from '@/page/map'
import Path from '@/page/path'
import Plan from '@/page/plan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/map',
      name: 'Map',
      component: Mapp
    },
    {
      path: '/path',
      name: 'Path',
      component: Path
    },
    {
      path: '/plan',
      name: 'Plan',
      component: Plan
    }
  ]
})
