<template>
  <h1>login</h1>
</template>

<script setup lang="ts">

import * as dd from 'dingtalk-jsapi'
import { dingLogin } from '@/api/api'

ElMessage.info('this is login')
const url = window.location.href
dingLogin({ code: 'corpid' }).then(result => {
  console.log(result)
})
// 获取免登授权码
// dd.ready(async () => {
//   ElMessage.info(import.meta.env.VITE_APP_CORPID as string)
//   const corpid = import.meta.env.VITE_APP_CORPID as string
//
//   const userinfo = await dingLogin({ code: 'corpid' })
//   ElNotification({
//     title: 'Title',
//     message: h('i', { style: 'color: teal' }, JSON.stringify(userinfo))
//   })
// })
</script>

<style lang="scss">
</style>
