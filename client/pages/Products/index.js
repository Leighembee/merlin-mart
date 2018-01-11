import React from 'react'
import { connect } from 'react-redux'
import { Product } from '../../components'
import { withRouter } from 'react-router-dom'
import { CategoryFilter } from '../../containers'
import './style.css'

const Products = ({ products, location }) => {

  const categoryId = new URLSearchParams(location.search).get('category')

  const filteredProducts = categoryId ?
    products.filter(product => product.categoryId === Number(categoryId)) : products

  return (
    <div id="products-wrapper">
      <div id="category-filter-wrapper">
        <CategoryFilter />
      </div>
      <div id="products">
        {
          filteredProducts.map(product => (
            <Product key={product.id} name={product.name} img={product.image} />
          ))
        }
      </div>
    </div>
  )
}

const mapState = ({ products }) => ({
  products
})

export default withRouter(connect(mapState)(Products))
