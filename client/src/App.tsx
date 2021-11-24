import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Footer from './components/footer/Footer'
import HomePage from './components/homePage/HomePage'
import NavBar from './components/navbar'
import ProductDetail from './components/productDetail/ProductDetail'
import ProductPage from './components/product/ProductPage'
import CreateAccount from './components/user/CreateAccount'
import Cart from './components/cart'

import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/system'
import UserAccount from './components/user/UserAccount'
import Gift from './components/gift/Gift'
import ArtofGift from './components/gift/ArtofGift'
import GiftFinder from './components/gift/giftFinder'
import News from './components/news'
import Craft from './components/news/craft'

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
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="gift/art" element={<ArtofGift />} />
        <Route path="gift/finder" element={<GiftFinder />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/craft" element={<Craft />} />

        <Route path="/user" element={<UserAccount />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
    // </ThemeProvider>
  )
}

export default App
