import React from 'react'

import {
  BoxColumn,
  CustomizedButton,
  CustomizedLink,
  CustomizedTitle,
} from '../customizedCSS'

function OrderCancel() {
  return (
    <BoxColumn>
      <CustomizedTitle>
        Your order was canceled. Please try again !
      </CustomizedTitle>
      <CustomizedLink to="/cart" sx={{ color: 'white' }}>
        <CustomizedButton>Go back to Cart</CustomizedButton>
      </CustomizedLink>
    </BoxColumn>
  )
}

export default OrderCancel
