const Product = require('./product')
const Category = require('./category')
const User = require('./user')
const ProductCategory = require('./product_category')
const Order = require('./order')
const ProductOrder = require('./product_order')

const Review = require('./review')

// PUT RELATIONSHIPS HERE
Product.belongsToMany(Category, { through: 'product_categories' })
Product.belongsToMany(Order, { through: 'product_orders' })
Order.belongsToMany(Product, { through: 'product_orders' })

Review.belongsTo(Product)
Review.belongsTo(User)
Product.hasMany(Review)
User.hasMany(Review)
User.hasMany(Order)

module.exports = {
  Product,
  Category,
  User,
  ProductCategory,
  Order,
  ProductOrder,
  Review
}
