import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'

const Product = ({ name, image, id }) => (
  <div className="product">
      <img src={image} />
      <span className="product-title">{name}</span>
      <RaisedButton labelPosition="before" label="Add to Cart" primary />
  </div>
)

export default Product
