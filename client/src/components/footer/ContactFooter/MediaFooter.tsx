import React from 'react'
import { Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box } from '@mui/system'

import RegionFooter from './RegionFooter'

function MediaFooter() {
  return (
    <Box>
      <Typography variant="h6" fontWeight="bold">
        FOLLOW US
      </Typography>
      <FacebookIcon sx={{ margin: 1.5 }} />
      <InstagramIcon sx={{ margin: 1.5 }} />
      <TwitterIcon sx={{ margin: 1.5 }} />
      <RegionFooter />
    </Box>
  )
}

export default MediaFooter
