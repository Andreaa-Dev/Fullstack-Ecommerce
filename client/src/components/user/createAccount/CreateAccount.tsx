import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import {
  BoxColumn,
  BoxRow,
  CustomizedButton,
  CustomizedText,
} from '../../customizedCSS'

import UserId from './userID'
import ShippingAddress from './shippingAddress'
import Policy from './policy'
import { policy } from '../../../misc/policy'

function CreateAccount() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <BoxColumn>
        <CustomizedText variant="h4">YOUR ACCOUNT</CustomizedText>
        <CustomizedText>Create your Dior account</CustomizedText>
        <Box>
          <CustomizedText> YOUR USER ID</CustomizedText>
          <CustomizedText> * Required fields</CustomizedText>
        </Box>

        <Box>
          <UserId />
          <ShippingAddress />
          <Policy />
        </Box>
      </BoxColumn>
      <BoxColumn>
        <CustomizedButton>CREATE AN ACCOUNT</CustomizedButton>
      </BoxColumn>
      <CustomizedText sx={{ textAlign: 'justify' }}>
        {policy.name}
      </CustomizedText>
    </Box>
  )
}

export default CreateAccount
