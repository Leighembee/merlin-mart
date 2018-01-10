import React from 'react'
import { connect } from 'react-redux'
import { Product } from '../../components'
import RaisedButton from 'material-ui/RaisedButton'

const ProductPage = ({productId}) => (
    <div id="products">
        <Product />
    </div>
)
const mapState = ({ productId }) => ({ productId })
export default connect(mapState)(ProductPage)
