const db = require('./db')
const {
  Product,
  User
} = require('./models')
// register models
require('./models')

module.exports = {
  db,
  Product,
  User
}
