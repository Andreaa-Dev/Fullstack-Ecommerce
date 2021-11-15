import { Typography } from '@mui/material'
import React from 'react'
import { CustomizedText } from '../customizedCSS'

function OrderTotal() {
  return (
    <div>
      <Typography> Subtotal</Typography>
      <Typography> Shipping</Typography>
      <Typography> Taxes Included</Typography>
    </div>
  )
}

export default OrderTotal
