const db = require('./db')
const {
  Product,
  User,
  Category,
  ProductCategory
} = require('./models')
// register models
require('./models')

module.exports = {
  db,
  Product,
  User,
  Category,
  ProductCategory
}
