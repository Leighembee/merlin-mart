import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { Main, Login, Signup, UserHome } from './components'
import { Products, ProductPage, Cart } from './pages'
import { me, fetchProducts, fetchCategories } from './store'

/**
 * COMPONENT
 */

const Authenticated = ({ isLoggedIn, children }) => (
    isLoggedIn ? children : ''
  )

class App extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <div>
        <Router history={history}>
          <Main>
            <Switch>
              {/* Routes placed here are available to all visitors */}
              <Route path="/cart" component={Cart} />
              <Route path="/product/:productId" component={ProductPage} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/products" component={Products} />
              {isLoggedIn && <Route path="/account" component={UserHome} />}
              {/* Displays our Products component as a fallback */}
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
  return {
    // Being 'logged in' for our purposes will be defined has having a
    // state.user that has a truthy id.
    // Otherwise, state.user will be an empty object,
    // and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}


const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(fetchProducts())
      dispatch(fetchCategories())
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
