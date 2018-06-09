// React
import React from 'react'
import ReactDOM from 'react-dom'
import AppConnect from './App'
import registerServiceWorker from './registerServiceWorker'

// Redux
import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

// Css
import './index.css'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <AppConnect />
  </Provider>, document.getElementById('root'))
registerServiceWorker()
