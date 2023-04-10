import { makeRequest } from '../requests'

export const getProducts = () => {
    return makeRequest({
        url: `/products`
    })
}

export const addToCart = ({ id, name, price, quantity }) => {
    return makeRequest({
        url: `/orders`,
        method: 'POST',
        data: {
            id,
            name,
            price,
            quantity
        }
    })
}
