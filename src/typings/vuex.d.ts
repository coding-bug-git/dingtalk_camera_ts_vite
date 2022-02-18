//
// import { ComponentCustomProperties } from 'vue'
// import { Store } from 'vuex'
//
// declare module '@vue/runtime-core' {
//   // 声明自己的 store state
//
//   // 为 `this.$store` 提供类型声明
//   interface ComponentCustomProperties {
//     $store: Store<unknown>
//   }
// }
import { _RouteRecordBase, RouteRecordNormalized } from 'vue-router'

interface RouteRecordRawExt extends RouteRecordNormalized {
  meta: Exclude<_RouteRecordBase['meta'], void>;
}

interface meta {
  title: string
}
