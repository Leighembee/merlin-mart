import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CATEGORIES = 'GET_CATEGORIES'
/**
 * ACTION CREATORS
 */

export function getCategories(categories) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return [...state, ...action.categories]
    default:
      return state
  }
}
/**
 * THUNK CREATORS
 */
export const fetchCategories = () => {
  return dispatch => {
    axios.get('/api/categories')
    .then(res => res.data)
      .then(categories => dispatch(getCategories(categories)))
      .catch(err => console.log(err))
  }
}
