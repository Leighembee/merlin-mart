import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Product } from '../../components'

const ProductPage = ({product}) => ( 
    <div id="products">
      <Product key={product.id} name={product.name} image={product.image}  />
    </div>
)
const mapState = ({ products }, ownProps) => {
  return {
    product: products.find(product => product.id === +ownProps.match.params.productId)||{}
  }
}
export default withRouter(connect(mapState)(ProductPage))
