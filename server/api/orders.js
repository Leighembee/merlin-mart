const router = require('express').Router()
const { Order, Product } = require('../db/models')

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
  // const { items, checkoutForm } = req.body
  res.send('OK')
  // Order.create({

  // }).then(orders => res.send(orders))
    // .catch(next)
})

module.exports = router

