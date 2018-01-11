import React from 'react'
import { connect } from 'react-redux'

const Cart = ({ products }) => (
  <div id="cart">
    {/* {
      products.map(product => (
        <Product name={product.name} />
      ))
    } */}
  </div>
)

const mapState = ({ products }) => ({
  products
})

export default connect(mapState)(Cart)
