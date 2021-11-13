import { Box } from '@mui/system'
import React from 'react'

import { CustomizedTitle } from '../customizedCSS'
import workshopImg from '../images/workshopImg.webp'

function WorkShop() {
  return (
    <Box sx={{ marginTop: '50px', marginBottom: '50px' }}>
      <CustomizedTitle>THE PERSONALISATION WORKSHOP</CustomizedTitle>
      <img src={workshopImg} alt="" />
    </Box>
  )
}

export default WorkShop
