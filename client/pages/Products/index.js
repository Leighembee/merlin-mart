import React from 'react'
import { connect } from 'react-redux'
import { Product } from '../../components'
import './style.css'

const Products = ({ products }) => (
  <div id="products">
    {
      products.map(product => (
        <Product key={product.id} name={product.name} img={product.image} />
      ))
    }
  </div>
)

const mapState = ({ products }) => ({
  products
})

export default connect(mapState)(Products)
