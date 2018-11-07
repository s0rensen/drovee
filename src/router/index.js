import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import home from '@/components/home'
import team from '@/components/team'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCaretDown, faCaretUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false


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
    }
  ]
})
export default router
