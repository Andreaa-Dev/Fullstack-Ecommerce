import React from 'react'
import { StripeProvider, Elements } from 'react-stripe-elements'

import OrderProduct from './OrderProduct'

function index() {
  return (
    <div>
      <OrderProduct />
    </div>
  )
}

export default index
