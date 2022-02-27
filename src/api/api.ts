import request from '@/utils/request'

interface dingLoginData {
  username?: string
  password?: string
  code: string
  uuid?: string
}

export const dingLogin = (data: dingLoginData) => {
  return request({
    url: '/dingLogin',
    // headers: {
    //   isToken: false
    // },
    method: 'post',
    data: data
  })
}
