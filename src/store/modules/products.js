import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
        state.products = payload
    }
  },
  actions: {
    async getProducts ({ commit }) {
      try {
        const { data } = await api.products.getProducts()
        commit('SET_PRODUCTS', data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
