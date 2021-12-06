import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CartItem from './CartItem'
import { AppState, CartType, RemoveProductToCart } from '../../misc/type'
import { BoxColumn, CustomizedButton, CustomizedText } from '../customizedCSS'
import {
  addProductQuantity,
  removeProductQuantity,
  removeToCart,
} from '../../redux/action'

type Order = {
  _id: string
  date: Date
  userId: string
  products: CartType[]
}

function Index() {
  const dispatch = useDispatch()
  const cartData = useSelector((state: AppState) => state.cartState.cartData)
  const userData = useSelector((state: AppState) => state.userState.userById)

  const onClickHandlerAdd = (productId: string) => {
    dispatch(addProductQuantity(productId))
  }

  const onClickHandlerRemove = (productId: string) => {
    dispatch(removeProductQuantity(productId))
  }
  const onClickHandlerRemoveCart = () => {
    dispatch(removeToCart)
  }

  let values = {
    userId: userData?._id,
    products: cartData,
  }
  const onClickHandler = async () => {
    const response = await axios.post(
      'http://localhost:5000/api/v1/order',
      values
    )
    const order = response.data as Order
    const result = await axios.post('http://localhost:5000/api/v1/payment', {
      receipt_email: userData?.email,
      order,
    })

    const checkoutUrl = result.data.url
    window.location.href = checkoutUrl
  }
  return (
    <BoxColumn>
      <CustomizedText>MY SHOPPING BAG</CustomizedText>
      <CustomizedText>YOUR ITEMS </CustomizedText>
      <BoxColumn>
        {cartData.map((item) => {
          return (
            <CartItem
              item={item}
              onClickHandlerAdd={onClickHandlerAdd}
              onClickHandlerRemove={onClickHandlerRemove}
              onClickHandlerRemoveCart={onClickHandlerRemoveCart}
            />
          )
        })}
      </BoxColumn>
      <CustomizedButton onClick={onClickHandler}>
        PROCESS TO CHECKOUT
      </CustomizedButton>
    </BoxColumn>
  )
}

export default Index
