import React from 'react'
import { connect } from 'react-redux'
import { Product } from './Product'
import '../pages/Products/style.css'

const Cart = ({ products }) => (
  <div id="products">
    {
      products.map(product => (
        <Product name={product.name} />
      ))
    }
  </div>
)

const mapState = ({ products }) => ({
  products
})

export default connect(mapState)(Cart)
