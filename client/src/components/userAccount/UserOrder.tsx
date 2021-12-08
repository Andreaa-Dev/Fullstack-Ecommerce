import React from 'react'

import { CartType } from '../../misc/type'
import { BoxRow, CustomizedText, CustomizedTitle } from '../customizedCSS'

type CartDataPropType = {
  cartData: CartType[]
}

function UserOrder({ cartData }: CartDataPropType) {
  console.log(cartData, 'j')
  return (
    <div>
      <CustomizedTitle>ORDERS</CustomizedTitle>
      {cartData.map((item) => {
        return (
          <BoxRow>
            <CustomizedText>{item.name} </CustomizedText>
            <img src={item.imageLink} alt={item.name} height="100px" />
          </BoxRow>
        )
      })}
    </div>
  )
}

export default UserOrder
