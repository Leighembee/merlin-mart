import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import './style.css'

const tableData = [
  {
    name: 'John Smith',
    status: 'Canceled',
  },
  {
    name: 'Randal White',
    status: 'Canceled',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Proccesing',
  },
  {
    name: 'Steve Brown',
    status: 'Created',
  },
  {
    name: 'Joyce Whitten',
    status: 'Completed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Processing',
  },
  {
    name: 'Adam Moore',
    status: 'completed',
  },
];
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
        {tableData.map((row, index) => (
          <TableRow key={index}>
            <TableRowColumn>{index}</TableRowColumn>
            <TableRowColumn>{row.name}</TableRowColumn>
            <TableRowColumn>{row.status}</TableRowColumn>
          </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}

const mapState = ({ orders }) => ({ orders })

export default connect(mapState)(Orders)
