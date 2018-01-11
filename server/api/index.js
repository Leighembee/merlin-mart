const router = require('express').Router()
const db = require('../db')

router.use('/products', require('./products'))

module.exports = router
