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

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  it('eventually dispatches the GET USER action', () => {
    const products = [
      {
        categories: [4],
        id: 1,
        name: 'Fireball',
        description: 'Ize vavomite papras jeke ces ubeargu ivpe mitnu zoppe utjog zo ifubahe ca je fe de. Lojopi du garap acbobto wadzosda jatape ro hil fuzti tehkotu fuvohifu ezza fourafa rulpibmin. Valur utini mas ege fennilvib hac gefove jaz fihoci tis ziavoro dod hahlijut dus hila. Wailejov lop civdun epdele riwva wozodokik juc itu letuj nuif hu afozol.',
        price: 78.63,
        inventory: 20,
        image: 'https://i.imgur.com/IB0DAHY.png?1',
        createdAt: '2018-01-17T00:18:02.257Z',
        updatedAt: '2018-01-17T00:18:02.257Z'
      }
    ]
    mockAxios.onGet('/api/products').replyOnce(200, products)
    return store.dispatch(fetchProducts())
      .then(() => {
        const actions = store.getActions()
        expect(actions[0].type).to.be.equal('GET_PRODUCTS')
        expect(actions[0].products).to.be.deep.equal(products)
      })
  })
})
