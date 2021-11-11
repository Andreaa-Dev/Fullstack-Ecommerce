import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import HomePage from './components/homePage/HomePage'
import ProductPage from './components/product/ProductPage'
import CreateAccount from './components/user/createAccount/CreateAccount'
import makeStore from './redux/store'

const store = makeStore()
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/createAccount" element={<CreateAccount />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
