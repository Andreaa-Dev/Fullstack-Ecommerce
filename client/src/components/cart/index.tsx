import React from 'react'
import { BoxRow, CustomizedText } from '../customizedCSS'
import CartItem from './CartItem'
import OrderTotal from './OrderTotal'

function index() {
  return (
    <BoxRow>
      <CustomizedText>MY SHOPPING BAG</CustomizedText>
      <CustomizedText>YOUR ITEMS </CustomizedText>
      <CartItem />
      <OrderTotal />
    </BoxRow>
  )
}

export default index
