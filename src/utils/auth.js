import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const appFwkey = '2587l6QEQ3mPHJZgYTAznd2sN17mlBQZ4CgMNdYoEZJ3'
const wxappid = 'wx62f265fe41b0f080'
const appMode = 'nvlang'
const appUrl = 'http://nvlang.baibangma.com'
const apiUrl = '/vueapi'
const plaform = 'vueapi'

export function getToken() {
  return Cookies.get(TokenKey)
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function getTokenFwkey() {
  return Cookies.get(appFwkey)
}
export function setTokenFwkey(tokenFwkey) {
  return Cookies.set(appFwkey, tokenFwkey)
}
export function removeTokenFwkey() {
  return Cookies.remove(appFwkey)
}
export function getPlaform() {
  return Cookies.get(plaform)
}
export function setPlaform(plaform) {
  return Cookies.set(plaform, plaform)
}
export function removePlaform() {
  return Cookies.remove(plaform)
}

