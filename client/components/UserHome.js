import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UserOrderModal } from '../containers'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import ActionHome from 'material-ui/svg-icons/image/edit'
/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email, orders } = props
  return (
    <div>
      <h3>Welcome, {email}</h3>
      
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Order ID</TableHeaderColumn>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Items</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {orders && orders.map(order => (
            <TableRow key={order.id}>
              <TableRowColumn>{order.id}</TableRowColumn>
              <TableRowColumn>{order.date || 'null' }</TableRowColumn>
              <TableRowColumn>{order.status || 'null'}</TableRowColumn>
              <TableRowColumn>
                <UserOrderModal products={order.products} />
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    orders: state.orders
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
