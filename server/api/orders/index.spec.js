/* global describe beforeEach it */

const { expect } = require('chai')
const request = require('supertest')
const db = require('../../db/db')
const app = require('../index')

const Order = require('../../db/models/order')

describe('Order routes', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe(' GET api/orders/', () => {
    beforeEach(() => {
      return Order.create({
        quantity: 1,
        status: 'Created',
        total: 10
      })
    })

    xit('responds with an array via JSON', () => {

      return request(app)
        .get('/api/orders')
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body).to.be.an.instanceof(Array)
          expect(res.body).to.equal(
            [
              {
                id: 1,
                products: [
                  {
                    name: 'fireball',
                    price: 12,
                    quantity: 5,
                    total: 60
                  },
                  {
                    name: 'magic missile',
                    price: 10,
                    quantity: 10,
                    total: 100
                  }
                ]
              },
              {
                id: 2,
                products: [
                  {
                    name: 'hex',
                    price: 12,
                    quantity: 5,
                    total: 60
                  },
                  {
                    name: 'frogs',
                    price: 10,
                    quantity: 10,
                    total: 100
                  }
                ]
              }
            ])
        })
    })
  })
})
