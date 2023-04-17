import * as api from '../../api'

export default {
    namespaced: true,
    state: {
        order: []
    },
    getters: {
        getProductdById: (state) => (id) => state.order.find((item) => item.id === id)
    },
    mutations: {
        SET_ORDER(state, payload) {
            state.order = payload
        },
        DELETE_PRODUCT(state, payload) {
            const ndxToDelete = state.order.indexOf(payload)
            state.order.splice(ndxToDelete, 1)
        },
        INCRACY_QUANTITY(state, payload) {
            const ndxToDelete = state.order.indexOf(payload)
            state.order[ndxToDelete].quantity += 1
        },
        DECREASE_QUANTITY(state, payload) {
            const ndxToDelete = state.order.indexOf(payload)
            state.order[ndxToDelete].quantity -= 1
        }
    },
    actions: {
        async getOrder({ commit }) {
            try {
                const { data } = await api.order.getOrder()
                commit('SET_ORDER', data)
            } catch (e) {
                console.log(e)
            }
        },
        async removeProductAtCart({ getters, commit }, id) {
            try {
                const product = getters.getProductdById(id)
                await api.order.removeProductAtCart({ id: product.id })
                commit('DELETE_PRODUCT', product)
            } catch (e) {
                console.log(e)
            }
        },
        async increaseQuantity({ getters, commit }, id) {
            try {
                const product = getters.getProductdById(id)
                await api.order.increaseQuantity({ id: product.id, quantity: product.quantity, name: product.name, price: product.price })
                commit('INCRACY_QUANTITY', product)
            } catch (e) {
                console.log(e)
            }
        },
        async decreaseQuantity({ getters, commit }, id) {
            try {
                const product = getters.getProductdById(id)
                if(product.quantity === 1) {
                    await api.order.removeProductAtCart({ id: product.id })
                    commit('DELETE_PRODUCT', product)
                } else {
                    await api.order.decreaseQuantity({ id: product.id, quantity: product.quantity, name: product.name, price: product.price })
                    commit('DECREASE_QUANTITY', product)
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
}
