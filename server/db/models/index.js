const Product = require('./product')
const Category = require('./category')
const User = require('./user')
const ProductCategory = require('./product_category')
const Order = require('./order')
const ProductOrder = require('./product_order')

// PUT RELATIONSHIPS HERE
Product.belongsToMany(Category, { through: 'product_categories' })
Product.belongsToMany(Order, { through: 'product_orders' })
Order.belongsToMany(Product, { through: 'product_orders' })

module.exports = {
  Product,
  Category,
  User,
  ProductCategory,
  Order,
  ProductOrder
}
