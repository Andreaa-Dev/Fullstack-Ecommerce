import React from 'react'
import TextField from '@mui/material/TextField'
import { Box, Typography } from '@mui/material'

import NavIcon from './NavIcon'
import Subnav from './SubNav'
function NavBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Typography variant="h4">DIOR</Typography>
      <NavIcon />
    </Box>
  )
}

export default NavBar
