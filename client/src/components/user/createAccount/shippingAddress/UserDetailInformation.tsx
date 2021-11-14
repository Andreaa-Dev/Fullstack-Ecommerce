import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { BoxColumn, BoxColumnStart, BoxRow } from '../../../customizedCSS'

function UserDetailInformation() {
  return (
    // sx={{
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'flex-start',
    // }}
    <BoxRow>
      <Box
        sx={{
          '& > :not(style)': { m: 2, width: '25ch' },
        }}
      >
        <TextField id="standard-basic" label="*First name" variant="standard" />
        <TextField id="standard-basic" label="*Last name" variant="standard" />
      </Box>
    </BoxRow>

    // {/* <TextField id="standard-basic" label="*Address" variant="standard" /> */}
  )
}

export default UserDetailInformation
