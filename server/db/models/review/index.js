const Sequelize = require('sequelize')
const db = require('../../db')

const Review = db.define('review', { 
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1,
      max: 5
    }
  },
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Review
