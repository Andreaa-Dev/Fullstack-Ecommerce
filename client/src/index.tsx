import React from 'react'
import './index.css'
import App from './App'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'

import makeStore from './redux/store'
import axios from 'axios'
import { themes } from './components/customizedCSS'

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://dior-andrea.herokuapp.com/api/v1'
} else {
  axios.defaults.baseURL = 'http://localhost:5000/api/v1'
}

axios.interceptors.request.use(function (request) {
  // Do something before request is sent
  const userToken = localStorage.getItem('userToken')
  if (userToken) {
    request.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken}`,
    }
  }
  return request
})

const store = makeStore()
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={themes}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
