import { Box } from '@mui/system'
import React from 'react'

import {
  CustomizedButton,
  CustomizedLink,
  CustomizedTitleHT,
} from '../customizedCSS'
import workshopImg from '../images/workshopImg.webp'

function WorkShop() {
  return (
    <Box sx={{ marginTop: '50px', marginBottom: '50px' }}>
      <CustomizedTitleHT variant="h5">
        THE PERSONALISATION WORKSHOP
      </CustomizedTitleHT>
      <img src={workshopImg} alt="workshop" />
      <CustomizedLink to="/gift">
        <CustomizedButton>Discover</CustomizedButton>
      </CustomizedLink>
    </Box>
  )
}

export default WorkShop
