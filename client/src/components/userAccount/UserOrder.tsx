import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DoneIcon from '@mui/icons-material/Done'
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

import {
  BoxColumn,
  BoxRow,
  CustomizedText,
  CustomizedTextHT,
  CustomizedTitle,
  CustomizedTitleHT,
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

  console.log(orderData, 'k ')

  if (orderData) {
    return (
      <BoxColumn>
        <CustomizedTitle>ORDERS</CustomizedTitle>
        {orderData.map((item: any) => {
          return (
            <div>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DoneIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                <CustomizedText>
                  {new Date(item.date).toDateString()}
                </CustomizedText>
              </ListItem>
            </div>
          )
        })}
      </BoxColumn>
    )
  }
  return (
    <>
      <CustomizedTitle>ORDERS</CustomizedTitle>
      <CustomizedText> You have no order history</CustomizedText>
    </>
  )
}

export default UserOrder

//card MUI
