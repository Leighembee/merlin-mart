const router = require('express').Router()
const db = require('../db')
const Products = require('../db/models/products')
// OB/JS: keep undead code out of master
// console.log("!!!!!!!!", Products)

// OB/JS: watch out for indentation / consistent style
router.get('/', (req,res,next) => {
    Products.findAll()
     .then(products => res.send(products))
     .catch(next)
  })
  
  module.exports = router