const router = require('express').Router()
const { Product, Category } = require('../db/models')

router.get('/', (req, res, next) => {
  Product.findAll({
    include: [{
      model: Category,
      attributes: ['id']
    }]
  })
    .then(products => products.map(product => {
      const { categories, ...rest  } = JSON.parse(JSON.stringify(product))
      const newCategories = categories.map(category => category.product_categories.categoryId)
      return { categories: newCategories, ...rest }
    }))
    .then(products => res.send(products))
    .catch(next)
})

module.exports = router

