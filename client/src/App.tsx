import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Footer from './components/footer/Footer'
import HomePage from './components/homePage/HomePage'
import NavBar from './components/navbar/NavBar'
import ProductDetail from './components/productDetail/ProductDetail'
import ProductPage from './components/product/ProductPage'
import CreateAccount from './components/user/CreateAccount'
import ProductByCategory from './components/product/ProductByCategory'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/system'

// export const theme = createTheme({
//   typography: {
//     fontFamily: ['Open Sans Condensed', 'sans-serif'].join(','),
//   },
// })
function App() {
  return (
    // <ThemeProvider theme={theme}>
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
    // </ThemeProvider>
  )
}

export default App
