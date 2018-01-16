import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ORDERS = 'GET_ORDERS'

/**
 * ACTION CREATORS
 */

export function getOrders(orders) {
  return {
    type: GET_ORDERS,
    orders
  }
}

/**
 * REDUCER
 */

export default function (state = [], action) {
  switch (action.type) {
    case GET_ORDERS:
      return [...state, ...action.orders]
    default:
      return state
  }
}

/**
 * THUNK CREATORS
 */
export const fetchOrders = () => dispatch => (
  axios.get('/api/orders')
    .then(res => res.data)
    .then(orders => dispatch(getOrders(orders)))
    .catch(err => console.log(err))
)
