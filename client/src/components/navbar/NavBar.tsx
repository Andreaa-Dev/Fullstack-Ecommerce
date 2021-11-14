import React from 'react'
import { Box, Typography } from '@mui/material'

import NavIcon from './NavIcon'
import SubNav from './SubNav'
import SearchProduct from './SearchProduct'
import { CustomizedLink } from '../customizedCSS'
import Logo from './Logo'

function NavBar() {
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
        <Logo />
        <NavIcon />
      </Box>
      <SubNav />
    </Box>
  )
}

export default NavBar
