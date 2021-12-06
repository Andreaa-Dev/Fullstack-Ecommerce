import React from 'react'
import {
  CustomizedButton,
  CustomizedLink,
  CustomizedTitle,
} from '../customizedCSS'

function OrderSuccess() {
  return (
    <div>
      <CustomizedTitle> Your order was purchased successfully!</CustomizedTitle>
      <CustomizedButton>
        <CustomizedLink to="/">Continue to shop</CustomizedLink>
      </CustomizedButton>
    </div>
  )
}

export default OrderSuccess
