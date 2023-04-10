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
