import React from 'react'
import './index.css'
import App from './App'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

import makeStore from './redux/store'
import axios from 'axios'

axios.interceptors.request.use(
  function (request) {
    // Do something before request is sent
    const userToken = localStorage.getItem('userToken')
    if (userToken) {
      request.headers = { Authorization: `Bearer ${userToken}` }
    }
    return request
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

const store = makeStore()
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
