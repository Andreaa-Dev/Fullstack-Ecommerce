import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CheckOutForm from './CheckOutForm'

function Index() {
  const [orderData, setOrderData] = useState<any>()

  useEffect(() => {
    async function getOrderData() {
      let response = await axios.get('/order')
      const orderData = response.data
      setOrderData(orderData)
    }

    getOrderData()
  }, [])

  return <CheckOutForm orderData={orderData} />
}

export default Index
