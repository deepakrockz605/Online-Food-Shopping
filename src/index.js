import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserHistory } from 'history'
import store from './store'

const storeData = createStore(store)
const history = createBrowserHistory()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router history={history}>
    <Provider store={storeData}>
      <App />
    </Provider>
  </Router>
)

reportWebVitals()
