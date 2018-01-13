import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './App'
import '../public/style.css'
// establishes socket connection
import './socket'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
