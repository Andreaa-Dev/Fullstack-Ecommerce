import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import PasswordAccount from './userID/PasswordAccount'
import EmailAccount from './userID/EmailAccount'
import { BoxColumn, BoxRow, CustomizedText } from '../../customizedCSS'
import ShippingAddress from './shippingAddress'

function CreateAccount() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <BoxColumn component="form">
        <CustomizedText variant="h4">YOUR ACCOUNT</CustomizedText>
        <CustomizedText>Create your Dior account</CustomizedText>
        <BoxRow>
          <CustomizedText> YOUR USER ID</CustomizedText>
          <CustomizedText> * Required fields</CustomizedText>
        </BoxRow>

        <BoxRow>
          <EmailAccount />
          <PasswordAccount />
        </BoxRow>
      </BoxColumn>
      <BoxColumn>
        <ShippingAddress />
      </BoxColumn>
    </Box>
  )
}

export default CreateAccount
