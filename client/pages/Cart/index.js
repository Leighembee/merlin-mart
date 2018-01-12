import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import './style.css'
import map from 'lodash/map'

const Cart = ({ items }) => (
  <div id="cart">
    <div id="cart-items">
      {Object.keys(items).length > 0 ? map(items, (item, id) => (
        <Paper key={id} className="cart-item" zDepth={3}>
          <img
            alt={item.name}
            src="http://via.placeholder.com/50x50"
          />
          <div>{item.name}</div>
          <div>{item.quantity * item.price}</div>
          <input value={item.quantity} />
        </Paper>
    )) : <div>Your cart is empty.</div>}
    </div>
  </div>
)

const mapState = ({ cartItems }) => ({
  items: cartItems
})

export default connect(mapState)(Cart)
