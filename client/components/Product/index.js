import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import './style.css'

const Product = ({ name, image, id }) => (
  <Paper className="product" zDepth={3} >
      <img src={image} />
      <span className="product-title">{name}</span>
      <RaisedButton labelPosition="before" label="Add to Cart" primary />
  </Paper>
)

export default Product
