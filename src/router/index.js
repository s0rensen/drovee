import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import home from '@/components/home'
import team from '@/components/team'
import webdesign from '@/components/webdesign'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/webdesign',
      name: 'webdesign',
      component: webdesign
    }
  ]
})
// router.replace({path: 'home'})
export default router
