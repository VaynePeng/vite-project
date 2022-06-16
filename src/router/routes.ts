import { RouteRecordRaw } from 'vue-router'
import { HomeFilled } from '@element-plus/icons-vue'
import Layout from '@layouts/index.vue'

const menuList: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页',
      icon: HomeFilled
    }
  }
]

const routes: RouteRecordRaw[] = [
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: menuList
  }
]

export { routes as default, menuList }
