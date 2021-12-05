import axios from 'axios'
import React from 'react'

function OrderProduct() {
  const orderData = axios.get('http://localhost:5000/api/v1/order')
  console.log(orderData, 'g')

  return <div></div>
}

export default OrderProduct
