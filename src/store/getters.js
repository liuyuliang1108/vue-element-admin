const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  avatar: state => state.user.avatar,
  introduction: state => state.user.introduction,
  token: state => state.user.token,
  roles: state => state.user.roles,
  purview: state => state.user.purview,
  username: state => state.user.username,
  userinfo: state => state.user.userinfo,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs
}
export default getters
