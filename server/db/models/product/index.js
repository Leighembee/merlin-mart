const Sequelize = require('sequelize')
const db = require('../../db')

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.FLOAT
  },
  inventory: {
    type: Sequelize.INTEGER
  },
  image: {
    type: Sequelize.STRING
  }
})

module.exports = Product

