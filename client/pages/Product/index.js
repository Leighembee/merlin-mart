import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Product } from '../../containers'
import './style.css'

const UserReview = review => (
  <div key={review.id}>
    <h3>{review.title}</h3>
    <div>{review.name}</div>
    <div> {review.description}</div>
  </div>
)
const reviews = [
  {
    id: 1,
    title: 'Fake review',
    name: 'Tommy W.',
    description: 'sdadsadasdadsa'
  },
  {
    id: 2,
    title: 'Fake review1',
    name: 'Tommy W.',
    description: 'sdadsadasdadsa'
  },
  {
    id: 3,
    title: 'Fake review2',
    name: 'Tommy W.',
    description: 'sdadsadasdadsa'
  },
  {
    id: 4,
    title: 'Fake review3',
    name: 'Tommy W.',
    description: 'sdadsadasdadsa'
  }
]

const ProductPage = ({ product }) => (
  <section id="products">
    <Product product={product} />
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
