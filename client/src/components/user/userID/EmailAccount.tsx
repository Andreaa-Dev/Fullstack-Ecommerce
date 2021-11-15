import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import { useStyles } from '../../customizedCSS/index'
// import { makeStyles } from '@mui/styles'

// const useStyles = makeStyles({
//   typography: {
//     fontFamily: 'Open Sans Condensed',
//   },
// })

function EmailAccount() {
  const classes = useStyles()
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        InputLabelProps={{
          classes: {
            root: classes.typography,
          },
        }}
        id="standard-basic"
        label="Email"
        variant="outlined"
      />
    </Box>
  )
}

export default EmailAccount
