import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import { UserOrderModal } from './'
import { Orders } from '../pages'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email, orders } = props
  return (
    <div>
      <h3>Welcome, {email}</h3>
      <Orders orders={orders} />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    orders: state.orders,
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
