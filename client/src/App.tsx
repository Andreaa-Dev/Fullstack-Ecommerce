import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Footer from './components/footer/Footer'
import HomePage from './components/homePage/HomePage'
import NavBar from './components/navbar/NavBar'
import ProductDetail from './components/productDetail/ProductDetail'
import ProductPage from './components/product/ProductPage'
import CreateAccount from './components/user/createAccount/CreateAccount'
import ProductByCategory from './components/product/ProductByCategory'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/productCategory" element={<ProductByCategory />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
