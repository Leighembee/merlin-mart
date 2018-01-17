import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Orders} from '../../pages'
import {Tabs, Tab} from 'material-ui/Tabs'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableFooter
  
} from 'material-ui/Table'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class StatusTab extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    const {orders, products} = this.props
    return (
      <div>
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="All Orders" value="a">
          <div>
            <h2 style={styles.headline}>All Orders</h2>
            <Orders orders={orders}/>
          </div>
        </Tab>
        <Tab label="Processing" value="b">
          <div>
            <h2 style={styles.headline}>Processing</h2>
            <Orders orders={orders.filter(order=> order.status=='Processing')}/>
          </div>
        </Tab>
        <Tab label="Completed" value="c">
          <div>
            <h2 style={styles.headline}>Completed</h2>
            <Orders orders={orders.filter(order=> order.status=='Completed')}/>
          </div>
        </Tab>
        <Tab label="Canceled" value="d">
          <div>
          <h2 style={styles.headline}>Canceled</h2>
          <Orders orders={orders.filter(order=> order.status=='Canceled')}/>
          </div>
        </Tab>
      </Tabs>
      <h2 style={styles.headline}>All Products</h2>
      <Table height={'300px'}
      fixedHeader={true}
      fixedFooter={true}
      selectable={true}
      multiSelectable={true}
      >
      <TableHeader displaySelectAll={true} adjustForCheckbox={true}>
      <TableRow>
      <TableHeaderColumn>Name</TableHeaderColumn>
      <TableHeaderColumn>Price</TableHeaderColumn>
      <TableHeaderColumn>Inventory</TableHeaderColumn>
    </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={true}>
      {products.map(product=>{
        return(
          <TableRow key={product.id}>
          <TableRowColumn>{product.name}</TableRowColumn>
          <TableRowColumn>{product.price}</TableRowColumn>
          <TableRowColumn>{product.inventory}</TableRowColumn>
          </TableRow>
        )
      })}
      </TableBody>
      </Table>
</div>
    );
  }
}

const mapState = ({orders, products}) => ({
  orders,
  products
})

export default connect(mapState)(StatusTab)
