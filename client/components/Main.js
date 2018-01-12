import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Navbar } from '../containers'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */


const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Main)

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
}
