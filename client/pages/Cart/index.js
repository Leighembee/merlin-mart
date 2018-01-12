import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import './style.css'

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

const Cart = ({ items }) => (
  <div id="cart">
    <Paper zDepth={3} style={style}>
      <div>{items[0].name}</div>
    </Paper>
  </div>
)

const mapState = ({ cartItems }) => ({
  items: cartItems
})

export default connect(mapState)(Cart)
