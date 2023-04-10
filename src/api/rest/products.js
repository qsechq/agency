import { makeRequest } from '../requests'

export const getProducts = () => {
    return makeRequest({
        url: `/products`
    })
}
