import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const Product = ({ name }) => (
  <div className="product">
    <span className="product-title">{name}</span>
    <RaisedButton labelPosition="before" label="Add to Cart" primary />
  </div>
)

export default Product
