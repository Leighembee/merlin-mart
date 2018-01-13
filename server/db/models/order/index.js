const Sequelize = require('sequelize')
const db = require('../../db')
// const ProductOrder = require('../product_order')

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
// }, {
//   hooks: {
//     beforeSave: (order) => {
//       return ProductOrder.findAll({
//         where: {
//           orderId: order.id
//         }
//       })
//         .then((products) => {
//           products.forEach((p) => {
//             order.total += (p.price)
//           })
//           return order.total
//         })
//     }
//   }

})


module.exports = Order
