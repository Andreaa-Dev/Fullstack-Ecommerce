import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import {
  BoxColumn,
  BoxRow,
  CustomizedButton,
  CustomizedText,
} from '../customizedCSS'

import UserId from './userID'
import ShippingAddress from './shippingAddress'
import Policy from './policy'
import { policy } from '../../misc/policy'
import GoogleLogIn from './googleLogIn/GoogleLogInPage'

function CreateAccount() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        border: '1px solid #cecece',
        maxWidth: '52.5rem',
        m: 'auto',
        p: 2,
        mt: 5,
        mb: 10,
      }}
    >
      <BoxColumn>
        <CustomizedText variant="h4">YOUR ACCOUNT</CustomizedText>
        <CustomizedText>Create a dior.com account</CustomizedText>
        <GoogleLogIn />

        <Box>
          <BoxRow sx={{ justifyContent: 'space-between', m: 1 }}>
            <CustomizedText> YOUR USER ID</CustomizedText>
            <CustomizedText fontWeight="bold">* Required fields</CustomizedText>
          </BoxRow>

          <UserId />
        </Box>

        <Box>
          <BoxRow sx={{ justifyContent: 'flex-start', m: 1 }}>
            <CustomizedText>SHIPPING ADDRESS</CustomizedText>
          </BoxRow>
          <ShippingAddress />
        </Box>

        <Box>
          <Policy />
        </Box>
      </BoxColumn>
      <BoxColumn>
        <CustomizedButton>CREATE AN ACCOUNT</CustomizedButton>
      </BoxColumn>
      <BoxColumn>
        <CustomizedText sx={{ textAlign: 'justify', width: '115ch' }}>
          {policy.name}
        </CustomizedText>
      </BoxColumn>
    </Box>
  )
}

export default CreateAccount
