import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import './style.css'
import { checkoutCart, removeFromCart } from '../../store'
import map from 'lodash/map'
import RaisedButton from 'material-ui/RaisedButton'
import CheckoutForm from './CheckoutForm'
import Quantity from './Quantity'


class Cart extends Component {
  constructor() {
    super()
    this.state = {
      checkoutForm: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipcode: ''
      }
    }
  }

  onCheckoutFormChange(evt) {
    this.setState({
      checkoutForm: {
        ...this.state.checkoutForm,
        [evt.target.name]: evt.target.value
      }
    })
  }

  render() {
    const { items, removeFromCart, checkout, user } = this.props
    return (
      <div id="cart">
        <div id="cart-item">
          {Object.keys(items).length > 0 ? map(items, (item, id) => (
            <Paper key={id} className="cart-item" zDepth={2}>
              <img
                alt={item.name}
                src="http://via.placeholder.com/50x50"
              />
              <div>{item.name}</div>
              <div>$ {item.quantity * item.price.toFixed()}.00</div>
              <Quantity
                value={item.quantity}
                itemId={id}
              />
              <RaisedButton
                labelPosition="before"
                label="Remove"
                primary
                onClick={() => removeFromCart(id)}
              />
            </Paper>
          )) : <div>Your cart is empty.</div>}
        </div>
        <CheckoutForm
          checkout={() => checkout(this.props.items, this.state.checkoutForm)}
          checkoutForm={this.state.checkoutForm}
          onChange={this.onCheckoutFormChange.bind(this)}
        />
      </div>)
  }
}

const mapState = ({ cart, user }) => ({
  user,
  items: cart.items || {}
})


const mapDispatch = dispatch => ({
  checkout: (items, checkoutForm) =>
    dispatch(checkoutCart(items, checkoutForm)),
  removeFromCart: id => dispatch(removeFromCart(id)),
  handleChange(event) {
    this.setState({ value: event.target.value.toUpperCase() })
  }
})

export default connect(mapState, mapDispatch)(Cart)
