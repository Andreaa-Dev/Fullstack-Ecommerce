import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box } from '@mui/system'

import { CustomizedText } from '../../customizedCSS'
import RegionFooter from './RegionFooter'

function MediaFooter() {
  return (
    <Box>
      <CustomizedText variant="h6" fontWeight="bold">
        FOLLOW US
      </CustomizedText>
      <FacebookIcon sx={{ margin: 1.5 }} />
      <InstagramIcon sx={{ margin: 1.5 }} />
      <TwitterIcon sx={{ margin: 1.5 }} />
      <RegionFooter />
    </Box>
  )
}

export default MediaFooter
