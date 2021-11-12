import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Footer from './components/footer/Footer'
import HomePage from './components/homePage/HomePage'
import NavBar from './components/navbar/NavBar'
import ProductPage from './components/product/ProductPage'
import CreateAccount from './components/user/createAccount/CreateAccount'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route>
          <Route path="" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/createAccount" element={<CreateAccount />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
