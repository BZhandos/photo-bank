const dadata = {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    addingToList: (state, payload) => {
      state.list.push(payload)
    },
    deleteFromList: (state, index) => {
      state.list.splice(index, 1)
    }
  },
  actions: {
    addToList ({ commit }, payload) {
      commit('addingToList', payload)
    },
    deleteFromList ({ commit }, index) {
      commit('deleteFromList', index)
    }
  },
  getters: {
    getList: state => {
      return state.list
    }
  }
}

export default dadata
