import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const whiteList: Array<string> = []
router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) === -1) {
    console.log(1)
  }
})

export default router
