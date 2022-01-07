import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Footer from './components/footer/Footer'
import HomePage from './components/homePage'
import NavBar from './components/navbar'
import ProductDetail from './components/productDetail'
import ProductPage from './components/product/ProductPage'
import Cart from './components/cart'
import Gift from './components/gift'
import ArtofGift from './components/gift/ArtofGift'
import GiftFinder from './components/gift/giftFinder'
import News from './components/news'
import Craft from './components/news/craft'
import History from './components/news/history/History'
import CreateUserAccount from './components/createUser/CreateUserAccount'
import UserAccount from './components/userAccount'
import UserCheck from './components/userCheck'
import Order from './components/order'
import OrderSuccess from './components/cart/OrderSuccess'
import OrderCancel from './components/cart/OrderCancel'
import ProductPageAdmin from './components/userAccount/admin/product'
import AddProductAdmin from './components/userAccount/admin/product/AddProductAdmin'
import UserPageAdmin from './components/userAccount/admin/user'
import EditUserInformation from './components/userAccount/user/userInformation/EditUserInformation'
import ChangePassword from './components/userAccount/ChangePassword'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="product/:id" element={<ProductDetail />} />

        <Route path="/gift" element={<Gift />} />
        <Route path="gift/art" element={<ArtofGift />} />
        <Route path="gift/finder" element={<GiftFinder />} />

        <Route path="/news" element={<News />} />
        <Route path="news/craft" element={<Craft />} />
        <Route path="news/history" element={<History />} />

        <Route path="/userCheck" element={<UserCheck />} />
        <Route path="/createUser" element={<CreateUserAccount />} />
        <Route path="/account/:id" element={<UserAccount />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order/success" element={<OrderSuccess />} />
        <Route path="/order/cancel" element={<OrderCancel />} />

        <Route path="/admin/product" element={<ProductPageAdmin />} />
        <Route path="/admin/product/add" element={<AddProductAdmin />} />
        <Route path="/admin/user" element={<UserPageAdmin />} />

        <Route path="/user/edit/:id" element={<EditUserInformation />} />
        <Route path="/userCheck/changepassword" element={<ChangePassword />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
