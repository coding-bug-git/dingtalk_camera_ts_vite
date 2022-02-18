import { store } from '@/store'
import router from '@/router'
import NProgress from 'nprogress'
import { getToken } from '@/utils/auth'
import type { RouteMeta, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

const whiteList: Array<string> = ['/login', '/test']

router.beforeEach((to: RouteLocationNormalized, from, next) => {
  NProgress.start()
  if (getToken()) {
    to.meta.title ? (document.title = to.meta.title) : (document.title = import.meta.env.VITE_APP_TITLE)

    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetUserInfo').then(() => {
          store.dispatch('GetRoutes').then(routeArr => {
            routeArr.forEach((route: RouteRecordRaw) => {
              router.addRoute(route)
              next({ ...to, replace: true })
            })
          })
            .catch(err => {
              store.dispatch('Logout').then(() => {
                ElMessage.error(err)
                next({ path: '/' })
              })
            })
        })
      } else {
        next()
      }
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
  NProgress.done()
})
