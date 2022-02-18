import { _RouteRecordBase, createRouter, createWebHistory, RouteRecordNormalized, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/components/HelloWorld.vue'),
    meta: {
      title: '111'
    }
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/test',
    component: () => import('@/views/test.vue')
  },
  {
    path: '/test1',
    component: () => import('@/views/test1.vue')
  }
  // {
  //   path: '/register',
  //   component: () => import('@/views/register.vue')
  //
  // },
  // {
  //   path: '/404',
  //   component: () => import('@/views/error/404.vue')
  //
  // },
  // {
  //   path: '/401',
  //   component: () => import('@/views/error/401.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
