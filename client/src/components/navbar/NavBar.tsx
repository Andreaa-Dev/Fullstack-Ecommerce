import React from 'react'
import { Box, createTheme, ThemeProvider, Typography } from '@mui/material'

import NavIcon from './NavIcon'
import SubNav from './SubNav'
import SearchProduct from './SearchProduct'
import Test from './Test'

function NavBar() {
  const themes = createTheme({
    typography: {
      fontFamily: ['Zen Antique', 'serif'].join(','),
    },
  })
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <SearchProduct />
        <ThemeProvider theme={themes}>
          <Typography variant="h4">DIOR</Typography>
        </ThemeProvider>
        <NavIcon />
      </Box>
      <SubNav />
      <Test />
    </Box>
  )
}

export default NavBar
