const router = require('express').Router()
const db = require('../db')
const Products = require('../db/models/products')


// router.use('/products', require('./products'))

// router.use((req, res, next) => {
//   const error = new Error('Not Found')
//   error.status = 404
//   next(error)
// })

router.get('/products', (req,res,next) => {
  Products.findAll()
   .then(products => res.send(products))
   .catch(next)
})

module.exports = router