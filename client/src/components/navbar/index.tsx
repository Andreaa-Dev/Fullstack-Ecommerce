import React from 'react'
import { Box } from '@mui/material'

import NavIcon from './NavIcon'
import SubNav from './SubNav'
import SearchProduct from './SearchProduct'
import Logo from './Logo'
import { BoxRow } from '../customizedCSS'

function NavBar() {
  return (
    <Box>
      <BoxRow
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <SearchProduct />
        <Logo />
        <NavIcon />
      </BoxRow>
      <SubNav />
    </Box>
  )
}

export default NavBar
