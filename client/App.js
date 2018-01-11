import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { Main, Signup, UserHome, Cart } from './components'
import { Products } from './containers'
import { me, fetchProducts } from './store'
/**
 * COMPONENT
 */

class App extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <Main>
            <Switch>
              <Route path='/cart' component={Cart} />
              <Route component={Products} />
            </Switch>  
          </Main>
        </Router>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {}
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(fetchProducts())
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(App)

/**
 * PROP TYPES
 */
App.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
}
