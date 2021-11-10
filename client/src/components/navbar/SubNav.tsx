import React from 'react'
import { Box } from '@mui/system'
import { List, Menu, MenuItem, Typography } from '@mui/material'
// import mask from '../../images/mask.jpeg'

function SubNav() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleMouseOver = (event: any) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    console.log('hi')
    setAnchorEl(null)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 5,
        flexDirection: 'column',
      }}
    >
      <Box>
        <Typography onMouseEnter={handleMouseOver}>GIFT & SERVICES </Typography>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <List
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            onMouseLeave={handleClose}
          >
            <MenuItem onClick={handleClose}>Face mask</MenuItem>
            <MenuItem onClick={handleClose}>Hand mask</MenuItem>
            <MenuItem onClick={handleClose}>Foot mask</MenuItem>

            {/* <img src={mask} alt="mask" height="150" width="150" /> */}
          </List>
        </Menu>
      </Box>
      <Box>
        <Typography onMouseEnter={handleMouseOver}>MAKE-UP</Typography>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <List
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            onMouseLeave={handleClose}
          >
            <MenuItem onClick={handleClose}>Face mask</MenuItem>
            <MenuItem onClick={handleClose}>Hand mask</MenuItem>
            <MenuItem onClick={handleClose}>Foot mask</MenuItem>

            {/* <img src={mask} alt="mask" height="150" width="150" /> */}
          </List>
        </Menu>
      </Box>
      <Box>
        <Typography onMouseEnter={handleMouseOver}>
          NEWS & FASHION SHOWS
        </Typography>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <List
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            onMouseLeave={handleClose}
          >
            <MenuItem onClick={handleClose}>Face mask</MenuItem>
            <MenuItem onClick={handleClose}>Hand mask</MenuItem>
            <MenuItem onClick={handleClose}>Foot mask</MenuItem>

            {/* <img src={mask} alt="mask" height="150" width="150" /> */}
          </List>
        </Menu>
      </Box>
    </Box>
  )
}

export default SubNav

//anchor: know where to display
