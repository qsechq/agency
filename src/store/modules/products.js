import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    products: [],
    fillter: ''
  },
  getters: {
    getProductdById: (state) => (id) => state.products.find((item) => item.id === id),
    sortedProducts: (state) => {
      return [...state.products].sort((post1, post2) => post1[state.fillter] > post2[state.fillter] ? 1 : -1)
    }
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload
    },
    SET_FILLTER(state, payload) {
      state.fillter = payload
    }
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const { data } = await api.products.getProducts()
        commit('SET_PRODUCTS', data)
      } catch (e) {
        console.log(e)
      }
    },
    // async addToCart( productData ) {
    //   try {
    //     console.log(productData);
    //     await api.products.addToCart({ id: productData.id, name: productData.name, price: productData.price, quantity: 1 })
    //   } catch (e) {
    //     console.log(e)
    //   }
    // },
    async addToCart({ getters }, id) {
      try {
        const product = getters.getProductdById(id)
        await api.products.addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })
      } catch (e) {
        console.log(e)
      }
    },
    changeFillter({ commit }, value) {
      commit('SET_FILLTER', value)
    }
  }
}
