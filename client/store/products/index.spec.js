import { expect } from 'chai'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import { fetchProducts, getProducts } from './'
import history from '../../history'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('product thunk creators', () => {
  let store
  let mockAxios

  const initialState = { products: [] }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })
})
