import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import IconButton from 'material-ui/IconButton'
import ContentFilter from 'material-ui/svg-icons/content/filter-list'
import { UserOrderModal } from '../../components'
import './style.css'

// Replace tableData with orders in future, note: orders is an array
const Orders = ({ orders }) => {
  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Order ID</TableHeaderColumn>
          <TableHeaderColumn>Created At</TableHeaderColumn>
          <TableHeaderColumn>Updated At</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
          <TableHeaderColumn>Items</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {orders && orders.map(order => (
          <TableRow key={order.id}>
            <TableRowColumn>{order.id}</TableRowColumn>
            <TableRowColumn>{order.createdAt.slice(0, 10) || 'null' }</TableRowColumn>
            <TableRowColumn>{order.updatedAt.slice(0, 10) || 'null' }</TableRowColumn>
            <TableRowColumn>{order.status || 'null'}</TableRowColumn>
            <TableRowColumn>
              <UserOrderModal products={order.products} />
            </TableRowColumn>
          </TableRow>
      ))}
      </TableBody>
    </Table>
  )
}

export default Orders
