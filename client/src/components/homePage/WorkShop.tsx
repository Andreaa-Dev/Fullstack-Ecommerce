import { Box } from '@mui/system'
import React from 'react'

import { CustomizedButton, CustomizedTitleHT } from '../customizedCSS'
import workshopImg from '../images/workshopImg.webp'

function WorkShop() {
  return (
    <Box sx={{ marginTop: '50px', marginBottom: '50px' }}>
      <CustomizedTitleHT variant="h5">
        THE PERSONALISATION WORKSHOP
      </CustomizedTitleHT>
      <img src={workshopImg} alt="" />
      <CustomizedButton>Discover</CustomizedButton>
    </Box>
  )
}

export default WorkShop
