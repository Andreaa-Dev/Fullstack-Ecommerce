import React from 'react'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import { BoxColumn, BoxColumnStart, BoxRow } from '../../customizedCSS'

import { useStyles } from '../../customizedCSS/index'

function UserDetailInformation() {
  const classes = useStyles()

  return (
    <Box>
      <BoxRow
        sx={{
          '& > :not(style)': { m: 2, width: '35ch' },
        }}
      >
        <TextField
          InputLabelProps={{
            classes: {
              root: classes.typography,
            },
          }}
          id="standard-basic"
          label="*First name"
          variant="outlined"
        />
        <TextField
          InputLabelProps={{
            classes: {
              root: classes.typography,
            },
          }}
          id="standard-basic"
          label="*Last name"
          variant="outlined"
        />
      </BoxRow>
    </Box>
  )
}

export default UserDetailInformation
