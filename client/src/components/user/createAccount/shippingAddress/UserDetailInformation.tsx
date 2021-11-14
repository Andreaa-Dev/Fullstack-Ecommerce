import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { BoxColumn, BoxColumnStart, BoxRow } from '../../../customizedCSS'

function UserDetailInformation() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <TextField id="standard-basic" label="*First name" variant="standard" />
      <TextField id="standard-basic" label="*Last name" variant="standard" />
      <TextField id="standard-basic" label="*Address" variant="standard" />
    </Box>
  )
}

export default UserDetailInformation
