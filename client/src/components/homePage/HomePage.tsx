import React from 'react'
import { Box } from '@mui/material'

import WorkShop from './WorkShop'
import Gift from './Gift'
import Holiday from './Holiday'

function HomePage() {
  return (
    <Box>
      <Holiday />
      <WorkShop />
      <Gift />
    </Box>
  )
}

export default HomePage
