import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import queryString from 'query-string'

class CategoryFilter extends Component {
  state = {
    value: null,
  }

  handleChange = (event, index, value) =>
    this.props.history.push(`${this.props.pathname || '/products'}?category=${value}`)

  render() {
    const categoryId = new URLSearchParams(location.search).get('category')

    return (
      <SelectField
        value={Number(categoryId) || null}
        onChange={this.handleChange}
        floatingLabelText="Filter By Category"
        floatingLabelStyle={{ color: 'black' }}
      >
        {
          this.props.categories.map(({ id, name }) => (
            <MenuItem key={id} value={id} primaryText={name} />
          ))
        }
      </SelectField>
    )
  }
}

const mapState = ({ categories }) => ({
  categories: [
    { id: 1, name: 'fire' },
    { id: 2, name: 'water' },
    { id: 3, name: 'wind' }
  ]
})

export default withRouter(connect(mapState)(CategoryFilter))

CategoryFilter.propTypes = {

}
