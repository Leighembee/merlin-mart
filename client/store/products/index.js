const products = [
  { name: 'Fireball' },
  { name: 'Meteor Strike' },
  { name: 'Summon Dragon' },
  { name: 'Fire Wall' },
  { name: 'Fire Arrows' },
  { name: 'Hellstorm' }
]
/**
 * ACTION TYPES
 */
const GET_PRODUCTS = 'GET_PRODUCTS'
/**
 * ACTION CREATORS
 */
const getProducts = products => ({ type: GET_PRODUCTS, products })

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
export const fetchProducts = () =>
  dispatch =>
    // OB/JS: more dead code
    // axios.get('/api/products')
    //   .then(res =>
    dispatch(getProducts(products))
      //.catch(err => console.log(err))
