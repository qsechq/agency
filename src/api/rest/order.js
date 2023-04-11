import { makeRequest } from '../requests'

export const getOrder = () => {
    return makeRequest({
        url: `/orders`
    })
}

export const removeProductAtCart = ({id}) => makeRequest({
    url: `/orders/${id}`,
    method: 'DELETE'
})

export const increaseQuantity = ({id, quantity, price, name}) => makeRequest({
    url: `/orders/${id}`,
    method: 'PUT',
    data: {
        quantity: quantity + 1,
        price: price,
        name: name
    }
})

export const decreaseQuantity = ({id, quantity, price, name}) => makeRequest({
    url: `/orders/${id}`,
    method: 'PUT',
    data: {
        quantity: quantity - 1,
        price: price,
        name: name
    }
})


