import React from 'react'

import Footer from './components/footer/Footer'
import HomePage from './components/homePage/HomePage'
import NavBar from './components/navbar/NavBar'
import ProductPage from './components/product/ProductPage'
import CreateAccount from './components/user/createAccount/CreateAccount'

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <CreateAccount />
      <ProductPage />
      <Footer />
    </div>
  )
}

export default App
