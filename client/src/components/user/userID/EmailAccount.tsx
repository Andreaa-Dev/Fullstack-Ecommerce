import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function EmailAccount() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Email" variant="outlined" />
    </Box>
  )
}

export default EmailAccount
