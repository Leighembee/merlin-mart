import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { PersistGate } from 'redux-persist/es/integration/react'
import App from './App'
import '../public/style.css'
// establishes socket connection
import './socket'

const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
)
