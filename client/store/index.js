import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import localForage from 'localforage'
import user from './user'
import products from './products'
import categories from './categories'
import cart from './cart'

const config = {
  key: 'cart_v1',
  storage: localForage
}

const reducer = combineReducers({
  user,
  products,
  categories,
  cart: persistReducer(config, cart)
})

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware))

export default function configureStore() {
  const store = createStore(reducer, middleware)
  const persistor = persistStore(store)

  return {
    store,
    persistor
  }
}

export * from './user'
export * from './products'
export * from './categories'
export * from './cart'
