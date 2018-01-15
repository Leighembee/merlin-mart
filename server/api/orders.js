const router = require('express').Router()
const { Order, Product } = require('../db/models')

router.get('/', (req, res, next) => {
  // Order.findAll()
  //   .then(order => res.send(order))
  //   .catch(next)
  Order.findAll({
    include: [{model: Product}]
  })
    .then(ordersWithProducts => res.send(ordersWithProducts))
    .catch(next)
})

module.exports = router
