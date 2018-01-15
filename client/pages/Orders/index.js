import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import './style.css'

// Replace tableData with orders in future, note: orders is an array
const Orders = ({ orders }) => {
  return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn tooltip="The ID">Order ID</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders && orders.map(order => (
            <TableRow key={order.id}>
              <TableRowColumn>{order.id}</TableRowColumn>
              <TableRowColumn>{order.name}</TableRowColumn>
              <TableRowColumn>{order.status}</TableRowColumn>
            </TableRow>
            ))}
        </TableBody>
      </Table>
  )
}

export default Orders
