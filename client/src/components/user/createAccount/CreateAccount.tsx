import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import PasswordAccount from './PasswordAccount'
import EmailAccount from './EmailAccount'
import { BoxColumn, BoxRow } from '../../customizedCSS'

function CreateAccount() {
  return (
    <BoxColumn
      component="form"
      sx={{
        p: 4,
      }}
    >
      <Typography variant="h4">YOUR ACCOUNT</Typography>
      <Typography>Create your Dior account</Typography>
      <Typography> * Required fields</Typography>

      <BoxRow>
        <EmailAccount />
        <PasswordAccount />
      </BoxRow>
    </BoxColumn>
  )
}

export default CreateAccount
