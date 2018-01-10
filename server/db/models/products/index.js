const Sequelize = require('sequelize')
const db = require('../../db')

// OB/JS: non-urgent, think about validations
const Products = db.define('products', {
  name: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    // OB/JS: floating point math woes, one fix: SQL has a DECIMAL type for this reason; other fix: can use INTEGER and measure in cents (and/or use hooks or getters/setters)
    type: Sequelize.FLOAT
  },
  inventory: {
    type: Sequelize.INTEGER
  },
  image: {
    type: Sequelize.STRING
  }
})

module.exports = Products

