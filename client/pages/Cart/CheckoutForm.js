import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton'

const CheckoutForm = ({ checkout, checkoutForm, onChange }) => {
  return (
    <form
      onChange={onChange}
      onSubmit={(evt) => {
        evt.preventDefault()
        checkout()
      }}
    >
      <div className="checkout-form-wrapper">
        <TextField
          value={checkoutForm.firstName}
          name="firstName"
          hintText="First Name"
        />
        <TextField
          value={checkoutForm.lastName}
          name="lastName"
          hintText="Last Name"
        />
        <TextField
          value={checkoutForm.email}
          name="email"
          hintText="E-mail"
        />
        <TextField
          value={checkoutForm.address}
          name="address"
          hintText="Address/Apt/Bldg"
        />
        <TextField
          value={checkoutForm.city}
          name="city"
          hintText="City"
        />
        <TextField
          value={checkoutForm.state}
          name="state"
          hintText="State"
        />
        <TextField
          value={checkoutForm.zipcode}
          name="zipcode"
          hintText="Zipcode"
        />
        <div className="checkout-btn-wrapper">
          <RaisedButton
            type="submit"
            label="Checkout"
            primary={true}
          />
        </div>
      </div>
    </form>
  )
}

CheckoutForm.propTypes = {

}

export default CheckoutForm
