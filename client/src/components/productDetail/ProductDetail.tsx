import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

import lipstick1 from '../images/lipstick1.webp'
import lipstick2 from '../images/lipstick2.jpeg'
import ProductVideo from './ProductVideo'
import ProductRecently from './ProductRecently'

function ProductDetail() {
  return (
    <Box>
      <Box>
        <Box>
          <img src="" alt="" />
          <img src={lipstick1} alt="" />
          <img src={lipstick2} alt="" />
        </Box>
        <Box>
          <Typography>name</Typography>
          <Typography>description</Typography>
          variant
        </Box>
        <ProductVideo />
        <ProductRecently />
      </Box>
    </Box>
  )
}

export default ProductDetail
