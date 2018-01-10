import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import './style.css'

const Products = ({ products }) => {
  return (
    <div id="products">
      {
        products.map(product => (
          <div className="product">
            <span className="product-title">{product.name}</span>
            <RaisedButton labelPosition="before" label="Add to Cart" primary />
          </div>
        ))
      }
    </div>
  )
}

const mapState = ({ products }) => ({
  products
})

export default connect(mapState)(Products)
