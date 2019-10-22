//权限控制文件
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar 进度条
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from '@/utils/get-page-title'
import  { getToken,logoutToken } from '@/assets/js/util.js';
NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
console.log(to);
console.log(from);
//console.log(next);
  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()
// //判断有没有登录
//   console.log(hasToken)
 // const hasToken = store.getters.token
  if (hasToken) {
    //有登录
    if (to.path === '/login') {
      console.log(7);
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
     //不是进入登录页面
      // determine whether the user has obtained his permission roles through getInfo
      //角色 名称 权限号缺一不可
      console.log(store.getters.roles);
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      const hasPurview = store.getters.purview
      const hasUserInfo = store.getters.userinfo
      if (hasRoles&&hasPurview&&hasUserInfo) {
        console.log(2);
        //角色 权限号缺一不可
        try {
          const accessRoutes = await store.dispatch('permission/generateRoutes', store.getters.roles )
          // 根据roles权限生成可访问的路由表

          // dynamically add accessible routes
          router.addRoutes(accessRoutes)
          // 动态添加可访问路由表
          console.log(accessRoutes);
          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          store.commit('user/SET_USERINFO',[])
          store.commit('user/SET_ROLES', [])
          store.commit('user/SET_PURVIEW', [])
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
        console.log(3);
        next()
      } else {
        //获取信息
        console.log(4);
        await store.dispatch('user/getInfo')
       
        next()
        NProgress.done()
      }
    }
  } else {
    /* has no token*/
    console.log(5);
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      console.log(6);
      store.commit('user/SET_USERINFO',[])
      store.commit('user/SET_ROLES', [])
      store.commit('user/SET_PURVIEW', [])
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
