import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { BoxColumn, BoxColumnStart, BoxRow } from '../../customizedCSS'

import OptionalInformation from './OptionalInformation'

function UserDetailInformation() {
  return (
    <Box>
      <BoxRow
        sx={{
          '& > :not(style)': { m: 2, width: '35ch' },
        }}
      >
        <TextField id="standard-basic" label="*First name" variant="outlined" />
        <TextField id="standard-basic" label="*Last name" variant="outlined" />
      </BoxRow>
    </Box>
  )
}

export default UserDetailInformation
