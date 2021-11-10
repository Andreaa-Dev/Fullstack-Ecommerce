import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Box } from '@mui/system'

function NavIcon() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <FavoriteBorderIcon />
      <PersonOutlineOutlinedIcon />
      <ShoppingCartOutlinedIcon />
    </Box>
  )
}

export default NavIcon
