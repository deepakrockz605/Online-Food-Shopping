import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import cartReducer from './reducers/cartReducer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserHistory } from 'history'

const store = createStore(cartReducer)
const history = createBrowserHistory()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)

reportWebVitals()
