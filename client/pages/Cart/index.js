import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import './style.css'

const Cart = ({ items }) => (
  <div id="cart">
    <div id="cart-items">
      {items.length ? items.map(item => (
        <Paper key={item.id} className="cart-item" zDepth={3}>
          <img src="http://via.placeholder.com/50x50" />
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
