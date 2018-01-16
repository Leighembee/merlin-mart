const Sequelize = require('sequelize')
const db = require('../../db')


const Order = db.define('orders', {
  status: {
    type: Sequelize.ENUM('Created', 'Completed', 'Processing', 'Canceled')
  }
})


module.exports = Order
