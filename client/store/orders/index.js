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
const orders = [
  {
    id: '1',
    name: 'John Smith',
    status: 'Canceled',
    products: [
      {
        name: 'fireball',
        price: '$12',
        quantity: '5',
        total: '$60'
      },
      {
        name: 'magic missle',
        price: '$12',
        quantity: '5',
        total: '$100'
      }
    ]
  },
  {
    id: '2',
    name: 'Randal White',
    status: 'Canceled',
    products: [
      {
        name: 'hex',
        price: '$12',
        quantity: '5',
        total: '$60'
      },
      {
        name: 'frogs',
        price: '$10',
        quantity: '5',
        total: '$100'
      }
    ]
  },
  {
    id: '3',
    name: 'Stephanie Sanders',
    status: 'Processing',
    products: [
      {
        name: 'fireball',
        price: '$12',
        quantity: '5',
        total: '$60'
      },
      {
        name: 'magic missle',
        price: '$12',
        quantity: '5',
        total: '$100'
      }
    ]
  },
  {
    id: '4',
    name: 'Steve Brown',
    status: 'Created',
    products: [
      {
        name: 'fireball',
        price: '$12',
        quantity: '5',
        total: '$60'
      },
      {
        name: 'magic missle',
        price: '$12',
        quantity: '5',
        total: '$100'
      }
    ]
  },
  {
    id: '5',
    name: 'Joyce Whitten',
    status: 'Completed',
    products: [
      {
        name: 'fireball',
        price: '$12',
        quantity: '5',
        total: '$60'
      },
      {
        name: 'magic missle',
        price: '$12',
        quantity: '5',
        total: '$100'
      }
    ]
  },
  {
    id: '6',
    name: 'Samuel Roberts',
    status: 'Processing',
    products: [
      {
        name: 'fireball',
        price: '$12',
        quantity: '5',
        total: '$60'
      },
      {
        name: 'magic missle',
        price: '$12',
        quantity: '5',
        total: '$100'
      }
    ]
  },
  {
    id: '7',
    name: 'Adam Moore',
    status: 'completed',
    products: [
      {
        name: 'fireball',
        price: '$12',
        quantity: '5',
        total: '$60'
      },
      {
        name: 'magic missle',
        price: '$12',
        quantity: '5',
        total: '$100'
      }
    ]
  },
]

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
export const fetchOrders = () => {
  return dispatch => 
  // {
  //   axios.get('/api/orders')
  //   .then(res => res.data)
  //   .then(orders => 
      dispatch(getOrders(orders))
    //)
  //   .catch(err => console.log(err))
  // }
}