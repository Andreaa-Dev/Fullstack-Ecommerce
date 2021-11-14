import { Box } from '@mui/system'
import React from 'react'

import { CustomizedText, CustomizedTitle } from '../customizedCSS'
import workshopImg from '../images/workshopImg.webp'

function WorkShop() {
  return (
    <Box sx={{ marginTop: '50px', marginBottom: '50px' }}>
      <CustomizedText variant="h5">THE PERSONALISATION WORKSHOP</CustomizedText>
      <img src={workshopImg} alt="" />
    </Box>
  )
}

export default WorkShop
