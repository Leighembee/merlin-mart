const Product = require('./product')
const Category = require('./category')
const User = require('./user')
const ProductCategory = require('./product_category')


// PUT RELATIONSHIPS HERE
Product.belongsToMany(Category, { through: 'product_categories' })



module.exports = {
  Product,
  Category,
  User,
  ProductCategory
}
