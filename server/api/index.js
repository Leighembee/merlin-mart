const router = require('express').Router()

router.use('/products', require('./products'))
router.use('/categories', require('./categories'))
router.use('/orders', require('./orders'))

module.exports = router
