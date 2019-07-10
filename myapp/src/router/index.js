import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
          path: 'cinema',
          name: 'cinema',
          component:() => import(/* webpackChunkName: "group-admin" */ '@/pages/admin/cinema'),
        },
        {
          path: 'movie',
          name: 'movie',
          component:() => import(/* webpackChunkName: "group-admin" */ '@/pages/admin/movie'),
        },
        {
          path: '/admin',
          redirect: 'user'
        }
      ]
    }
  ]
})
