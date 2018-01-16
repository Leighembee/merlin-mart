const router = require('express').Router()
const { Order, Product } = require('../db/models')
const map = require('lodash/map')
const Promise = require('bluebird')

router.get('/', (req, res, next) => {
  Order.findAll({
    include: [{
      attributes: ['name'],
      model: Product,
    }],
    attributes: ['id', 'createdAt', 'updatedAt', 'status'],
  })
    .then((orders) => {
      return orders.map((order) => {
        const products = order.products.map(product => ({
          id: product.product_orders.productId,
          name: product.name,
          quantity: product.product_orders.quantity,
          price: product.product_orders.priceAtPurchase,
          total: product.product_orders.total
        }))

        return {
          id: order.id,
          status: order.status,
          createdAt: order.createdAt,
          updatedAt: order.updatedAt,
          products,
        }
      })
    })
    .then(orders => res.send(orders))
    .catch(next)
})

router.post('/', (req, res, next) => {
  const { items, checkoutForm } = req.body
  Order.create({
    ...checkoutForm,
    userId: req.user.id || null,
    status: 'Created'
  }).tap((order) => {
    const itemsAsArray = map(items, (item, id) => ({ ...item, id }))
    return Promise.each(itemsAsArray, item =>
      order.addProduct(item.id, {
        through: {
          quantity: item.quantity,
          priceAtPurchase: item.price
        }
      }))
  }).then(order => res.json(order))
    .catch(next)
})

module.exports = router

