import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    products: [],
    sort: 'priceUp',
    selectedFillter: ''
  },
  getters: {
    getProductdById: (state) => (id) => state.products.find((item) => item.id === id),
    sortedProducts: (state) => {
      if (state.sort === 'priceUp') {
        return [...state.products].sort((post1, post2) => post1['price'] > post2['price'] ? -1 : 1)
      } else if (state.sort === 'price') {
        return [...state.products].sort((post1, post2) => post1[state.sort] > post2[state.sort] ? 1 : -1)
      } else if (state.sort === 'new') {
        return [...state.products].sort((post1, post2) => post1[state.sort] > post2[state.sort] ? -1 : 1)
      } else if (state.sort === 'popular') {
        return [...state.products].sort((post1, post2) => post1[state.sort] > post2[state.sort] ? -1 : 1)
      }
    },
    sortedAndFiltered(state, getters) {
      if (state.selectedFillter != '') {
        return getters.sortedProducts.filter(post => post[state.selectedFillter] === true);
      } else {
        return getters.sortedProducts
      }
    },
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload
    },
    SET_SORT(state, payload) {
      state.sort = payload
    },
    SET_FILLTER(state, payload) {
      state.selectedFillter = payload
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
    async addToCart({ getters }, id) {
      try {
        const product = getters.getProductdById(id)
        await api.products.addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })
      } catch (e) {
        console.log(e)
      }
    },
    changeSort({ commit }, value) {
      commit('SET_SORT', value)
    },
    changeFillter({ commit }, value) {
      commit('SET_FILLTER', value)
    }
  }
}
