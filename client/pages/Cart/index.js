import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import './style.css'
import map from 'lodash/map'
import RaisedButton from 'material-ui/RaisedButton'
import { removeFromCart } from '../../store'

const Cart = ({ items, removeFromCart }) => (
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
          <RaisedButton
            labelPosition="before"
            label="Remove"
            primary
            onClick={() => removeFromCart(id)}
          />
        </Paper>
    )) : <div>Your cart is empty.</div>}
    </div>
  </div>
)

const mapState = ({ cart }) => ({
  items: cart.items
})

const mapDispatch =  dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id))
})

export default connect(mapState, mapDispatch)(Cart)
