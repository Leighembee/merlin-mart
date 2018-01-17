import React, { Component } from 'react';
import { Orders } from '../../pages'

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  
} from 'material-ui/Table'

export default class UserOrderModal extends Component { 
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const {products} = this.props
    const actions = [
      <RaisedButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <RaisedButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
        style={{margin:'2em'}}
      />,
    ];


    return (
      <div>
        <RaisedButton label="Details" onClick={this.handleOpen} />
        <Dialog
          title="Products"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        ><Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Price</TableHeaderColumn>
        <TableHeaderColumn>Quantity</TableHeaderColumn>
      </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {products.map(product=>{
          return(
            <TableRow key={product.id}>
            <TableRowColumn>{product.name}</TableRowColumn>
            <TableRowColumn>{product.price}</TableRowColumn>
            <TableRowColumn>{product.quantity}</TableRowColumn>
            </TableRow>
          )
        })}
        </TableBody>
        </Table>
        </Dialog>
      </div>
    );
  }
}
