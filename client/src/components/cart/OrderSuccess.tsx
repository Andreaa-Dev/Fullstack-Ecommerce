import React from 'react'
import {
  BoxColumn,
  CustomizedButton,
  CustomizedLink,
  CustomizedTitle,
} from '../customizedCSS'

function OrderSuccess() {
  return (
    <BoxColumn>
      <CustomizedTitle> Your order was purchased successfully!</CustomizedTitle>
      <CustomizedButton>
        <CustomizedLink to="/" sx={{ color: 'white' }}>
          Continue to shop
        </CustomizedLink>
      </CustomizedButton>
    </BoxColumn>
  )
}

export default OrderSuccess
