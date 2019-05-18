import Vue from 'vue'
import Router from 'vue-router'

// import FlowInspect from '@/components/FlowInspect/index'
import Login from '@/components/Login/index'
import BackendManager from '@/components/BackendManager/index'
import UserManager from '@/components/UserManager/index'
import PaperManager from '@/components/PaperManager/index'
import AdminManager from '@/components/AdminManager/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      alias: '/'
    },
    {
      path: '/backend',
      name: 'BackendManager',
      component: BackendManager,
      children: [
        {
          path: 'userManager',
          name: 'UserManager',
          component: UserManager
        },
        {
          path: 'paperManager',
          name: 'PaperManager',
          component: PaperManager,
          alias: '/'
        },
        {
          path: 'adminManager',
          name: 'AdminManager',
          component: AdminManager
        }
      ]
    }
  ]
})
