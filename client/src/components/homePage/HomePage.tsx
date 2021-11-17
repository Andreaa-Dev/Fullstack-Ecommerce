import React from 'react'
import { Box } from '@mui/material'

import WorkShop from './WorkShop'
import Gift from './Gift'
import Holiday from './Holiday'
import background from '../images/background.webp'

function HomePage() {
  return (
    <Box sx={{ backgroundImage: `url(${background})` }}>
      <Holiday />
      <WorkShop />
      <Gift />
    </Box>
  )
}

export default HomePage
