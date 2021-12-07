import React, { useEffect, useState } from 'react'
import axios from 'axios'
//@ts-ignore
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import CheckOutForm from './CheckOutForm'

const stripePromise = loadStripe(
  'pk_test_51JybmWIYz4dWwgdcmZ16InryKK9hYIo1lqbWNEf5Juf5fCYcJUKElbXJuOGqcnYYfJQ1xap7qyS8kDzW89a1x2DD00ISOnvmVb'
)
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

  return (
    // <Elements stripe={stripePromise} options={options}>
    <CheckOutForm orderData={orderData} />
    // </Elements>
  )
}

export default Index
