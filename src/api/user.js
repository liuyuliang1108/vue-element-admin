import request from '@/utils/request'

export function login(data) {
    console.log(data)
  return request({
    url: '/login/logining',
    method: 'post',
      params: { data: data }
  })
}

export function getInfo(token) {
  return request({
    url: '/userinfo/userinfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/userinfo/logout',
    method: 'post'
  })
}
