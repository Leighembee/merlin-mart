import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const Product = ({ name, image }) => (
  <div className="product">
    <img src={image} />
    <span className="product-title">{name}</span>
    <RaisedButton labelPosition="before" label="Add to Cart" primary />
  </div>
)

export default Product
