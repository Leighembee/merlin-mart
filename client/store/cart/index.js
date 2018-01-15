import omit from 'lodash/omit'

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

/**
 * REDUCER
 */
export default function (state = { items: {} }, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return addItemToCart(state, action.product)
    case REMOVE_FROM_CART:
      return removeItemFromCart(state, action.id)
    case CLEAR_CART:
      return []
    default:
      return state
  }
}

function addItemToCart(cart, product) {
  if (cart.items[product.id]) {
    const { quantity, ...rest } = cart.items[product.id]
    return {
      ...cart,
      items: {
        ...cart.items, [product.id]: { quantity: quantity + 1, ...rest }
      }
    }
  }
  const { name, image, price } = product
  return {
    ...cart,
    items: {
      ...cart.items,
      [product.id]: {
        quantity: 1,
        name,
        image,
        price
      }
    }
  }
}

function removeItemFromCart(items, product) {
  // delete items[product.id]
  //return { ...items }
  var items = omit(items, product.id)
  return items
}
