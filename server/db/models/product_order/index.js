const Sequelize = require('sequelize')
const db = require('../../db')

const ProductOrder = db.define('product_orders', {
  quantity: Sequelize.INTEGER,
  priceAtPurchase: Sequelize.INTEGER,
  total: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.getDataValue('quantity') * this.getDataValue('priceAtPurchase')
    }
  }
})

module.exports = ProductOrder

