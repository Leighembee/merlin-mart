/**
 * ACTION TYPES
 */
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'

/**
 * ACTION CREATORS
 */

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product
  }
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

const intialState = [
  { id: 1, name: 'Fireball', image: '', quantity: 3, price: 20 },
  { id: 2, name: 'Love Spell', image: '', quantity: 1, price: 30 },
  { id: 3, name: 'Money', image: '', quantity: 2, price: 25 }
]

/**
 * REDUCER
 */
export default function (state = intialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return addItemToCart(state, action.id)
    case REMOVE_FROM_CART:
      return removeItemFromCart(state, action.id)
    case CLEAR_CART:
      return []
    default:
      return state
  }
}

function addItemToCart(state, product) {
  return state
}

function removeItemFromCart(state, product) {
  return state
}
