import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import PasswordAccount from './PasswordAccount'
import EmailAccount from './EmailAccount'

function CreateAccount() {
  return (
    <Box
      component="form"
      sx={{
        p: 4,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4">YOUR ACCOUNT</Typography>
      <Typography>Create your Dior account</Typography>
      <EmailAccount />
      <PasswordAccount />
    </Box>
  )
}

export default CreateAccount
