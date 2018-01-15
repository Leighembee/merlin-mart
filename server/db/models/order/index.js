const Sequelize = require('sequelize')
const db = require('../../db')


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

})


module.exports = Order
