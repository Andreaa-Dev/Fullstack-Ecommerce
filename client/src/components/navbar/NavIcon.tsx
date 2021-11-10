import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
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
      <FavoriteIcon />
      <PersonIcon />
      <ShoppingCartIcon />
    </Box>
  )
}

export default NavIcon
