import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import team from '@/components/team'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: 'Drovee - Food on the fly'
      }
    },
    {
      path: '/team',
      name: 'team',
      component: team

    }
  ]
})
router.replace({path: 'home'})
export default router
