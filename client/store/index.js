import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import products from './products'
import categories from './categories'

const reducer = combineReducers({ user, products, categories })
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './products'
export * from './categories'
