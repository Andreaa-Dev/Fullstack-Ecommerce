import React from 'react'
import { Box } from '@mui/system'
import { Badge } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

import { CustomizedLink, themes } from '../customizedCSS'
import { useSelector } from 'react-redux'
import { AppState } from '../../misc/type'

function NavIcon() {
  const favoriteProduct = useSelector(
    (state: AppState) => state.productState.favoriteProduct
  )
  const favoriteCount = favoriteProduct.length
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        p: '1rem',
      }}
    >
      <ThemeProvider theme={themes}>
        <Badge badgeContent={favoriteCount} color="primary">
          <FavoriteBorderIcon color="action" />
        </Badge>
        <CustomizedLink to="/cart">
          <Badge badgeContent={4} color="primary">
            <LocalMallOutlinedIcon color="action" />
          </Badge>
        </CustomizedLink>
        <CustomizedLink to="/user">
          <PersonOutlineOutlinedIcon />
        </CustomizedLink>
        <CustomizedLink to="/createAccount">
          <PersonOutlineOutlinedIcon />
        </CustomizedLink>
      </ThemeProvider>
    </Box>
  )
}

export default NavIcon
