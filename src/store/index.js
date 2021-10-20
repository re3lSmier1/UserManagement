import Vue from 'vue'
import Vuex from 'vuex'
import userRoles from '../../user_roles.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roles: userRoles,
    filterOptions: [ 'Active', 'InActive', 'Active and Inactive'],
    currentRole: 'Active and Inactive',
    searchKey: '',
  },
  getters: {
    filterByRoles: state => () =>{
      switch (state.currentRole) {
        case 'Active':
          return state.roles.filter(function (role) {
            return role.active === true && role.name.match(state.searchKey)
          })
        case 'InActive':
          return state.roles.filter(function (role) {
            return role.active === false && role.name.match(state.searchKey)
          })
        default:
          return state.roles.filter(function (role) {
            return role.name.match(state.searchKey)
          })
      }
    }
  },
  mutations: {
    UpdateCurrentRole(state, payload){
      state.currentRole = payload
    },
    UpdateSearchKey(state, payload){
      state.searchKey = payload
    },
    AddNewRole(state, payload){
        state.roles.push(payload)
    }
  },
  actions: {
    setCurrentRole({ state, commit}, payload) {
      commit('UpdateCurrentRole', payload)
    },
    setSearchKey({commit}, payload){
      console.log(payload)
      commit('UpdateSearchKey', payload)
    },
    AddNewRole({state, commit}, payload){
      commit('AddNewRole', payload)
    }

  },
  modules: {
  }
})
