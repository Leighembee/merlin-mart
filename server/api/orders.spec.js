/* global describe beforeEach it */

const { expect } = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')

const Order = db.model('order')

describe('Orders routes', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe(' GET api/orders/', () => {

    it('responds with an array via JSON', () => {

      return request.app
        .get('/orders')
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body).to.be.an.instanceof(Array)
        })

    })
  })
})
