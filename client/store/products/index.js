import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'
/**
 * ACTION CREATORS
 */

export function getProducts(products) {
  return {
    type: GET_PRODUCTS,
    products
  }
}

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...state, ...action.products]
    default:
      return state
  }
}
/**
 * THUNK CREATORS
 */

export const fetchProducts = () => {
  return dispatch => {
    axios.get('/api/products')
        .then(res => res.data)
        .then(products => dispatch(getProducts(products)))
        .catch(err => console.log(err))
      }
    }