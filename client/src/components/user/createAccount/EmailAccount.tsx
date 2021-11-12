import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material'

function EmailAccount() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <Typography>YOUR USER ID</Typography> */}
      <TextField id="standard-basic" label="Email" variant="standard" />
    </Box>
  )
}

export default EmailAccount
