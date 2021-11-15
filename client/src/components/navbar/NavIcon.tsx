import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import { Box } from '@mui/system'
import { Badge } from '@mui/material'

import { CustomizedLink } from '../customizedCSS'

function NavIcon() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        p: 1.5,
      }}
    >
      <Badge badgeContent={1} color="primary">
        <FavoriteBorderIcon color="action" />
      </Badge>
      <CustomizedLink to="/createAccount">
        <PersonOutlineOutlinedIcon />
      </CustomizedLink>
      <Badge badgeContent={4} color="primary">
        <LocalMallOutlinedIcon color="action" />
      </Badge>
    </Box>
  )
}

export default NavIcon
