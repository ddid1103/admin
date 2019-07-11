import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/admin',
      // component: 
    },
    {
      path: '/login',
      name: 'login',
      component: () => import ('@/pages/login/login')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "group-admin" */ '@/pages/admin'),
      children: [
        {
          path: 'user',
          name: 'user',
          component:() => import(/* webpackChunkName: "group-admin" */ '@/pages/admin/user'),
        },
        {
          path: 'root',
          name: 'root',
          component:() => import(/* webpackChunkName: "group-admin" */ '@/pages/admin/Root'),
        },
        {
          path: 'home',
          name: 'home',
          component:() => import(/* webpackChunkName: "group-admin" */ '@/pages/admin/Home'),
        },
        {
          path: '/admin',
          redirect: 'user'
        }
      ]
    }
  ]
})
