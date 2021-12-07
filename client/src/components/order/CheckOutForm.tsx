import React from 'react'

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
