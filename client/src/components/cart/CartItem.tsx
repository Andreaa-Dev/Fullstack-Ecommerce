import React from 'react'
import { BoxColumn, CustomizedButton } from '../customizedCSS'

function CartItem() {
  return (
    <div>
      img/name/short description/ price
      <CustomizedButton>Edit</CustomizedButton>
      <CustomizedButton>Remove</CustomizedButton>
    </div>
  )
}

export default CartItem
