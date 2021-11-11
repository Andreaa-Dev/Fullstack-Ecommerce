import React from 'react'
import { Box, Typography } from '@mui/material'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined'
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined'

function ServiceFooter() {
  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', p: 15 }}>
      <Typography sx={{ textAlign: 'center', mb: 5 }}>
        THE E-BOUTIQUE SERVICES
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr ',
          gridColumnGap: 5,
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            width: 300,
          }}
        >
          <LocalShippingOutlinedIcon />
          <Typography>FREE DELIVERY</Typography>
          <Typography>Free custom duty</Typography>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            width: 300,
          }}
        >
          <ReplayOutlinedIcon />
          <Typography>FREE RETURN</Typography>
          <Typography>
            Enjoy complimentary Standard shipping, with free Customs duty
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            width: 300,
          }}
        >
          <CardGiftcardOutlinedIcon />
          <Typography>ART OF GIFTING</Typography>
          <Typography>
            Your order will be presented in an iconic Dior gift box and
            accompanied by a personalised message
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ServiceFooter
