import Mock from 'mockjs'
import { nullDefined } from '@/env'

const Random = Mock.Random
const mock = (url: string, method: string, fn: Function) => {
  Mock.mock(import.meta.env.VITE_APP_BASE_API as string + url, method, fn)
}

type AjaxResult = {
  code: number
  msg: string
  data: {} | nullDefined
}

const ajaxResult: AjaxResult = {
  code: 200,
  msg: 'success',
  data: null
}

mock('/test11', 'get', () => {
  ajaxResult.data = {
    token: Random.string(32)
  }
  return ajaxResult
})

mock('/getCameraListByAreaId', 'get', ({ body }: any) => {
  const number = Random.integer(5, 20)
  const list = []
  for (let i = 0; i < number; i++) {
    const s = 'camera' + Random.integer(0, 100)
    list.push({
      cameraName: s,
      snapshot: Random.dataImage('360x300', s)
    })
  }

  ajaxResult.data = {
    cameraList: list
  }
  return ajaxResult
})

Mock.mock('/login', 'post', () => {
  ajaxResult.code = 400
  ajaxResult.msg = '验证码错误'
  return ajaxResult
})
