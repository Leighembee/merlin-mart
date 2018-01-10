import React from 'react'
import { connect } from 'react-redux'
import './style.css'

const Products = ({ products }) => {
  return (
    <div className="products-container">
      {
        products.map(product => (
          <div className="product-item">{product.name}</div>
        ))
      }
    </div>
  )
}

const mapState = ({ products }) => ({
  products
})

export default connect(mapState)(Products)
