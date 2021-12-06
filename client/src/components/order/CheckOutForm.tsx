import React, { useState } from 'react'
//@ts-ignore
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'

import { CustomizedButton } from '../customizedCSS'

type OrderDataPropType = {
  orderData: any
}
function CheckOutForm({ orderData }: OrderDataPropType) {
  const handleSubmit = async (event: any) => {
    event.preventDefault()
  }
  return <form onSubmit={handleSubmit}></form>
}

export default CheckOutForm
