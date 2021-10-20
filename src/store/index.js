import Vue from 'vue'
import Vuex from 'vuex'
import userRoles from '../../user_roles.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roles: userRoles,
    filterOptions: [ 'Active', 'InActive', 'Active and Inactive'],
    currentRole: 'Active and Inactive'
  },
  getters: {
    filterByRoles: state => () =>{
      switch (state.currentRole) {
        case 'Active':
          return state.roles.filter(function (role) {
            return role.active === true
          })
        case 'InActive':
          return state.roles.filter(function (role) {
            return role.active === false
          })
        default:
          return state.roles
      }
    }
  },
  mutations: {
    UpdateCurrentRole(state, payload){
      state.currentRole = payload
    }
  },
  actions: {
    setCurrentRole({ state, commit}, payload) {
      commit('UpdateCurrentRole', payload)
    }
  },
  modules: {
  }
})
