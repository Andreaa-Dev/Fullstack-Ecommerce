import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CartItem from './CartItem'
import { AppState, CartType } from '../../misc/type'
import {
  BoxColumn,
  BoxColumnStart,
  CustomizedButton,
  CustomizedText,
  CustomizedTitle,
} from '../customizedCSS'
import { addProductQuantity, removeProductQuantity } from '../../redux/action'

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
  if (cartData.length === 0) {
    return (
      <>
        <CustomizedText>Your cart is empty</CustomizedText>
      </>
    )
  }

  const eachOrderAmount = cartData.map((item) => {
    return item.price * item.quantity
  })
  let totalOrderAmount = 0
  eachOrderAmount.map((item) => (totalOrderAmount = item + totalOrderAmount))
  return (
    <BoxColumn>
      <CustomizedText>MY SHOPPING BAG</CustomizedText>
      <CustomizedText>YOUR ITEMS </CustomizedText>
      <BoxColumnStart>
        {cartData.map((item) => {
          return (
            <CartItem
              item={item}
              onClickHandlerAdd={onClickHandlerAdd}
              onClickHandlerRemove={onClickHandlerRemove}
            />
          )
        })}
      </BoxColumnStart>
      <CustomizedTitle>Total: {totalOrderAmount} €</CustomizedTitle>
      <CustomizedButton onClick={onClickHandler}>
        PROCESS TO CHECKOUT
      </CustomizedButton>
    </BoxColumn>
  )
}

export default Index
