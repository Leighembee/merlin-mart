const Sequelize = require('sequelize')
const db = require('../../db')
const Product = require('../product')

const Order = db.define('orders', {
  quantity: {
    type: Sequelize.INTEGER,
  },
  status: {
    type: Sequelize.ENUM('Created', 'Completed', 'Processing', 'Canceled')
  },
  total: {
    type: Sequelize.INTEGER
  }
}, {
  hooks: {
    beforeSave: (order) => {
      return Product.findAll({
        where: {
          id: order.productId
        }
      })
        .then((product) => {
          order.total = product.quantity * product.price
          return order.total
        })
    }
  }

})


module.exports = Order
