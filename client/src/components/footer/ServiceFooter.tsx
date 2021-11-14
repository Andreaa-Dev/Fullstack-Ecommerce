import React from 'react'
import { Box, Typography } from '@mui/material'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined'
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined'
import { CustomizedText, CustomizedTitle } from '../customizedCSS'

function ServiceFooter() {
  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', p: 15 }}>
      <CustomizedTitle sx={{ textAlign: 'center', mb: 5 }}>
        THE E-BOUTIQUE SERVICES
      </CustomizedTitle>
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
          <CustomizedTitle>FREE DELIVERY</CustomizedTitle>
          <CustomizedText>Free custom duty</CustomizedText>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            width: 300,
          }}
        >
          <ReplayOutlinedIcon />
          <CustomizedTitle>FREE RETURN</CustomizedTitle>
          <CustomizedText>
            Enjoy complimentary Standard shipping, with free Customs duty
          </CustomizedText>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            width: 300,
          }}
        >
          <CardGiftcardOutlinedIcon />
          <CustomizedTitle>ART OF GIFTING</CustomizedTitle>
          <CustomizedText>
            Your order will be presented in an iconic Dior gift box and
            accompanied by a personalised message
          </CustomizedText>
        </Box>
      </Box>
    </Box>
  )
}

export default ServiceFooter

//stack
