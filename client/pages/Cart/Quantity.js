import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateQuantity } from '../../store'
import TextField from 'material-ui/TextField'


class Quantity extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)

  }

  componentDidMount() {
    this.setState({ value: this.props.value })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value })
    }
  }

  handleChange(evt) {
    this.setState({ value: evt.target.value })
  }

  handleOnBlur(evt) {
    this.props.updateQuantity(evt.target.value, this.props.itemId)
  }

  render() {
    return (
      <div>
        <TextField
          value={this.state.value}
          type="number"
          name="quantity"
          hintText="enter quantity"
          onChange={this.handleChange}
          onBlur={this.handleOnBlur}
        />
      </div>
    )
  }
}


const mapStateToProps = ({ quantity }) => ({ quantity })
const mapDispatchToProps = dispatch => ({
  updateQuantity: (value, itemId) => dispatch(updateQuantity(value, itemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Quantity)
