const Sequelize = require('sequelize')
const db = require('../../db')


const Order = db.define('orders', {
  status: {
    type: Sequelize.ENUM('Created', 'Completed', 'Processing', 'Canceled')
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  address: Sequelize.STRING,
  state: Sequelize.STRING,
  zipcode: Sequelize.INTEGER

})


module.exports = Order
