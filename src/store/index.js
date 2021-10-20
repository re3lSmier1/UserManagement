import Vue from 'vue'
import Vuex from 'vuex'
import userRoles from '../../user_roles.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roles: userRoles
  },
  mutations: {

  },
  actions: {
    async getUser({ state, commit}) {
      return await new Promise((resolve, reject)=>
      {
        //resolve(commit)
      })
    }
  },
  modules: {
  }
})
