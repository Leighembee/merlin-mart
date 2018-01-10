const router = require('express').Router()
const db = require('../db')
const Products = require('../db/models/products')


router.use('/products', require('./products'))



module.exports = router