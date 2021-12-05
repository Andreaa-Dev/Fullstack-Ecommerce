import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CartItem from './CartItem'
import { AppState, CartType } from '../../misc/type'
import { BoxColumn, CustomizedButton, CustomizedText } from '../customizedCSS'
import { addProductQuantity, removeProductQuantity } from '../../redux/action'

function Index() {
  const dispatch = useDispatch()
  const cartData = useSelector((state: AppState) => state.cartState.cartData)

  const onClickHandlerAdd = (productId: string) => {
    dispatch(addProductQuantity(productId))
  }

  const onClickHandlerRemove = (productId: string) => {
    dispatch(removeProductQuantity(productId))
  }

  const userData = useSelector((state: AppState) => state.userState.userById)

  let values = {
    userId: userData?._id,
    products: cartData,
  }
  const onClickHandler = async () => {
    await axios.post('http://localhost:5000/api/v1/order', values)
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
