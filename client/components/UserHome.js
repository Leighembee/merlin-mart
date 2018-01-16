import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Order ID</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Items</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRowColumn>TODO:ORDER ID</TableRowColumn>
          <TableRowColumn>TODO:STATUS</TableRowColumn>
          <TableRowColumn>
            <TableBody displayRowCheckbox={false}>
              <Table>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn>Item ID</TableHeaderColumn>
                  <TableHeaderColumn>Quantity</TableHeaderColumn>
                  <TableHeaderColumn>Price</TableHeaderColumn>
               </TableRow>
               <TableBody displayRowCheckbox={false}>
                <TableRowColumn>TODO:ORDER ID</TableRowColumn>
                <TableRowColumn>TODO:STATUS</TableRowColumn>
               </TableBody>
            </TableHeader>
              </Table>
            </TableBody>
          </TableRowColumn>
          {/*orders && orders.map(order => (
            <TableRow key={order.id}>
              <TableRowColumn>{order.id}</TableRowColumn>
              <TableRowColumn>{order.status}</TableRowColumn>
            </TableRow>
            ))*/}
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
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
