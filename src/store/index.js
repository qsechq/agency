
import { createStore } from 'vuex'
import products from './modules/products'
import order from './modules/order'

export default createStore({
  modules: {
    products,
    order
  }
})
