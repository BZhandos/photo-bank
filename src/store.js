import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: null
  },
  mutations: {
    naming: (state, payload) => {
      state.userName = payload
    }
  },
  actions: {
    simulateLogin ({ commit }, payload) {
      setTimeout(() => { commit('naming', payload) }, 500)
    }
  },
  getters: {
    isAuthenticated (state) {
      return state.userName !== null
    }
  }
})
