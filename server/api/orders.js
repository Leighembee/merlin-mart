const router = require('express').Router()
const { Order } = require('../db/models')

router.get('/', (req, res, next) => {
  Order.findAll()
    .then(order => res.send(order))
    .catch(next)
})

module.exports = router
