import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Product } from '../../containers'
import './style.css'

const UserReview = review => (
  <div>
    <h3>{review.title}</h3>
    <div>{review.name}</div>
    <div> {review.description}</div>
  </div>
)
const reviews = [
  {
    title: 'Fake review',
    name: 'Tommy W.',
    description: 'sdadsadasdadsa'
  },
  {
    title: 'Fake review1',
    name: 'Tommy W.',
    description: 'sdadsadasdadsa'
  },
  {
    title: 'Fake review2',
    name: 'Tommy W.',
    description: 'sdadsadasdadsa'
  },
  {
    title: 'Fake review3',
    name: 'Tommy W.',
    description: 'sdadsadasdadsa'
  }
]

const ProductPage = ({ product }) => (
  <section id="products">
    <Product key={product.id} name={product.name} image={product.image}  />
    <div id="description">
      {product.description}
      <ul>
        {reviews.map(rev => (UserReview(rev)))}
      </ul>
    </div>
  </section>
)
const mapState = ({ products }, ownProps) => (
  {
    product: products.find(product => product.id === +ownProps.match.params.productId) || {}
  }
)
export default withRouter(connect(mapState)(ProductPage))
