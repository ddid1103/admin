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
          meta: ['两级菜单', '角色管理'],
        },
        {
          path: 'root',
          name: 'root',
          component:() => import(/* webpackChunkName: "group-admin" */ '@/pages/admin/Root'),
          meta: ['两级菜单', '权限管理'],
        },
        {
          path: 'home',
          name: 'home',
          component:() => import(/* webpackChunkName: "group-admin" */ '@/pages/admin/Home'),
          meta: ['一级菜单', 'home'],
        },
        {
          path: 'goods',
          name: 'goods',
          component:() => import(/* webpackChunkName: "group-admin" */ '@/pages/admin/Goods'),
          meta: ['两级菜单', '商品管理'],
        },
        {
          path: 'addlist',
          name: 'addList',
          component:() => import(/* webpackChunkName: "group-admin" */ '@/pages/admin/Addlist'),
          meta: ['两级菜单', '添加商品'],
        },
        {
          path: 'echart',
          name: 'echart',
          component:() => import(/* webpackChunkName: "group-admin" */ '@/pages/admin/Echart'),
          meta: ['两级菜单', '图表管理'],
        },
        {
          path: '/admin',
          redirect: 'user'
        }
      ]
    }
  ]
})
