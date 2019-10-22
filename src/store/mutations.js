const mutations = {
  SET_TOKEN: (state, token) => {
    console.log(state);
    console.log(token);
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    console.log(state);
    console.log(roles);
    state.roles = roles
  },
  SET_PURVIEW: (state, purview) => {
    console.log(state);
    console.log(purview);
    state.purview = purview
  }
}
export default mutations
