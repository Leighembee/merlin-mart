const router = require('express').Router()
const db = require('../db')
const Products = require('../db/models/products')
// console.log("!!!!!!!!", Products)

router.get('/', (req,res,next) => {
    Products.findAll()
     .then(products => res.send(products))
     .catch(next)
  })
  
  module.exports = router