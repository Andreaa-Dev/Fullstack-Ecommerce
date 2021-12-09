import axios from 'axios'
import React, { useEffect, useState } from 'react'

import UserOrderItem from './UserOrderItem'
import {
  BoxColumn,
  BoxColumnStart,
  CustomizedText,
  CustomizedTitle,
} from '../customizedCSS'

type UserIdPropType = {
  userId: string | undefined
}
function UserOrder({ userId }: UserIdPropType) {
  const [orderData, setOrderData] = useState<any>()

  useEffect(() => {
    async function getOrderByUser() {
      let response = await axios.get(
        `http://localhost:5000/api/v1/order/user/${userId}`
      )
      const orderData = response.data
      setOrderData(orderData)
    }
    getOrderByUser()
  }, [userId])

  if (orderData) {
    return (
      <BoxColumn>
        <CustomizedTitle sx={{ mb: '10px' }}>ORDER HISTORY</CustomizedTitle>

        <BoxColumnStart>
          {orderData.map((item: any) => {
            return <UserOrderItem item={item} orderData={orderData} />
          })}
        </BoxColumnStart>
      </BoxColumn>
    )
  }
  return (
    <>
      <CustomizedTitle>ORDER HISTORY</CustomizedTitle>
      <CustomizedText> You have no order history</CustomizedText>
    </>
  )
}

export default UserOrder
