import React, { useState } from 'react'
import { Box } from '@mui/system'
import { ThemeProvider } from '@emotion/react'
import { Badge, Drawer } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

import {
  BoxRow,
  CustomizedLink,
  CustomizedText,
  themes,
} from '../customizedCSS'
import { useSelector } from 'react-redux'
import { AppState } from '../../misc/type'

type Anchor = 'right'

function NavIcon() {
  const [state, setState] = useState({ right: false })
  const favoriteProductList = useSelector(
    (state: AppState) => state.productState.favoriteProduct
  )

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {favoriteProductList.map((item) => {
        return (
          <>
            <BoxRow>
              <img
                src={item.imageLink}
                alt="error"
                height="100px"
                width="100px"
              />
              <CustomizedLink to={`product/${item._id}`}>
                <CustomizedText> {item.name}</CustomizedText>
              </CustomizedLink>
            </BoxRow>
          </>
        )
      })}
    </Box>
  )

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
          <FavoriteBorderIcon
            color="action"
            onClick={toggleDrawer('right', true)}
          />
          <Drawer
            anchor="right"
            open={state.right}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </Badge>
        <CustomizedLink to="/cart">
          <Badge badgeContent={4} color="primary">
            <LocalMallOutlinedIcon color="action" />
          </Badge>
        </CustomizedLink>
        <CustomizedLink to="/createUser">
          <PersonOutlineOutlinedIcon />
        </CustomizedLink>
      </ThemeProvider>
    </Box>
  )
}

export default NavIcon
