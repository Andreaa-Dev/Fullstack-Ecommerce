import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CheckOutForm from './CheckOutForm'

function Index() {
  const [orderData, setOrderData] = useState<any>()

  useEffect(() => {
    async function getOrderData() {
      let response = await axios.get('http://localhost:5000/api/v1/order')
      const orderData = response.data
      setOrderData(orderData)
      console.log(orderData, 'f')
    }

    getOrderData()
  }, [])

  return <CheckOutForm orderData={orderData} />
}

export default Index
