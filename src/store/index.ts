// store.ts
import { InjectionKey } from 'vue'
import { State } from '@vue/runtime-core'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export const key: InjectionKey<Store<State>> = Symbol('store_key')

export const store = createStore<State>({
  state: {
    aa: 11,
    c: '223'
  },
  mutations: {
    GET_USER_INFO () {
      console.log('commit user info')
    }
  },
  actions: {
    GetUserInfo (context) {
      console.log('userInfo')
      context.commit('GET_USER_INFO')
    },
    GetRoutes () {
      console.log('routes')
    },
    Logout () {
      console.log('logout')
    },
    Demo () {
    }
  },
  getters: {},
  modules: {}
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
