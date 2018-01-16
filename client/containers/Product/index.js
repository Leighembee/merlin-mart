import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import { addToCart } from '../../store'
import './style.css'

const Product = ({ product, addToCart }) => (
  <Paper className="product" zDepth={3} >
    <Link className="product" to={`/product/${product.id}`}>  
      <img alt={product.name} src={product.image} />
      <span className="product-title">{product.name}</span>
    </Link>
    <RaisedButton
      labelPosition="before"
      label="Add to Cart"
      primary
      onClick={() => addToCart(product)}
    />
  </Paper>
)

const mapDispatch = dispatch => ({
  addToCart: product => dispatch(addToCart(product))
})

export default connect(null, mapDispatch)(Product)
