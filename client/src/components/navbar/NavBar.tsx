import React from 'react'
import { Box, createTheme, ThemeProvider, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'

import NavIcon from './NavIcon'
import SubNav from './SubNav'
import SearchProduct from './SearchProduct'
import { CustomizedLink } from '../customizedCSS'

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
          <Typography variant="h4">
            <CustomizedLink to="/">DIOR</CustomizedLink>
          </Typography>
        </ThemeProvider>
        <NavIcon />
      </Box>
      <SubNav />
    </Box>
  )
}

export default NavBar
