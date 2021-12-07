import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Footer from './components/footer/Footer'
import HomePage from './components/homePage/HomePage'
import NavBar from './components/navbar'
import ProductDetail from './components/productDetail'
import ProductPage from './components/product/ProductPage'
import CreateAccount from './components/user/CreateAccount1'
import Cart from './components/cart'

import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/system'
import Gift from './components/gift'
import ArtofGift from './components/gift/ArtofGift'
import GiftFinder from './components/gift/giftFinder'
import News from './components/news'
import Craft from './components/news/craft'
import History from './components/news/history/History'
import CreateUserAccount from './components/user/CreateUserAccount'
import UserAccount from './components/userAccount'
import UserCheck from './components/userCheck'
import Order from './components/order'
import OrderSuccess from './components/cart/OrderSuccess'
import OrderCancel from './components/cart/OrderCancel'

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
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="/gift" element={<Gift />}>
          {/* <Route path="art" element={<ArtofGift />} />
          <Route path="finder" element={<GiftFinder />} /> */}
        </Route>
        <Route path="gift/art" element={<ArtofGift />} />
        <Route path="gift/finder" element={<GiftFinder />} />

        <Route path="/news" element={<News />}>
          {/* <Route path="craft" element={<Craft />} />
          <Route path="history" element={<History />} /> */}
        </Route>
        <Route path="news/craft" element={<Craft />} />
        <Route path="news/history" element={<History />} />

        <Route path="/userCheck" element={<UserCheck />} />

        <Route path="/createUser" element={<CreateUserAccount />} />
        <Route path="/account/:id" element={<UserAccount />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order/success" element={<OrderSuccess />} />
        <Route path="/order/cancel" element={<OrderCancel />} />
      </Routes>
      <Footer />
    </div>
    // </ThemeProvider>
  )
}

export default App
