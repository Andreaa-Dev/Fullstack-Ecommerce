import React, { useState } from 'react'
import { Box } from '@mui/system'
import { List, Menu, MenuItem, Tab, Tabs, Typography } from '@mui/material'

import lipstick from '../images/subNav_lipstick.webp'

function SubNav() {
  const [anchorEl, setAnchorEl] = useState({
    lipstick: null,
    foundation: null,
  })

  const handleMouseOver = (event: any, id: string) => {
    setAnchorEl({ ...anchorEl, [id]: event.currentTarget })
  }
  const handleClose = (id: string) => {
    console.log('RUN')
    setAnchorEl({ ...anchorEl, [id]: null })
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        p: 5,
        width: '80%',
      }}
    >
      <Box>
        <Typography
          onMouseEnter={(event) => handleMouseOver(event, 'lipstick')}
        >
          LIPSTICK
        </Typography>
        <Tabs>
          <Tab label="Item One" />
          <Tab label="Item One" />
        </Tabs>
        <Menu
          anchorEl={anchorEl.lipstick}
          keepMounted
          open={Boolean(anchorEl.lipstick)}
          onClose={handleClose}
          onMouseLeave={() => handleClose('lipstick')}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <img src={lipstick} alt="Lipstick" height="300" width="400" />
          <MenuItem>LIP GLOSSES</MenuItem>
          <MenuItem>MATTE ANS SATIN LIPSTICK</MenuItem>
          <MenuItem>LIP BALMS</MenuItem>
        </Menu>
      </Box>
      <Box>
        <div
          onMouseEnter={(event) => handleMouseOver(event, 'foundation')}
          onMouseLeave={() => handleClose('foundation')}
        >
          <Typography>FOUNDATION</Typography>
        </div>
        <Menu
          anchorEl={anchorEl.foundation}
          keepMounted
          open={Boolean(anchorEl.foundation)}
          onClose={handleClose}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <MenuItem>FLUID FOUNDATIONS</MenuItem>
          <MenuItem>CUSHION</MenuItem>
          <MenuItem>COMPACT FOUNDATIONS </MenuItem>

          {/* <img src={mask} alt="mask" height="150" width="150" /> */}
        </Menu>
      </Box>
      {/* <Box>
        <Typography onMouseEnter={handleMouseOver}>EYES PALETTES</Typography>
        <Menu
          // anchorEl={anchorEl}
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
            <MenuItem onClick={handleClose}>LIMITED EDITION</MenuItem>
            <MenuItem onClick={handleClose}>DIOR BACKSTAGE</MenuItem>
          </List>
        </Menu>
      </Box> */}
      {/* <Box>
        <Typography onMouseEnter={handleMouseOver}>EYESBROWNS</Typography>
        <Menu
          // anchorEl={anchorEl}
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
            <MenuItem onClick={handleClose}>DIOR SHOW</MenuItem>
            <MenuItem onClick={handleClose}>DIOR BOLD BROW</MenuItem>

          </List>
        </Menu>
      </Box> */}
      {/* <Box>
        <Typography onMouseEnter={handleMouseOver}> MASCARA</Typography>
        <Menu
          // anchorEl={anchorEl}
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
            <MenuItem onClick={handleClose}>
              DIORSHOW PUMP 'N' VOLUME HD
            </MenuItem>
            <MenuItem onClick={handleClose}>WATERPROOF</MenuItem>
          </List>
        </Menu>
      </Box> */}

      {/* <Box>
        <Typography onMouseEnter={handleMouseOver}> NAIL POLISH</Typography>
        <Menu
          // anchorEl={anchorEl}
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
            <MenuItem onClick={handleClose}>LIMITED EDITION</MenuItem>
            <MenuItem onClick={handleClose}>DIOR VERNIS</MenuItem>
            <MenuItem onClick={handleClose}>ALL PRODUCTS</MenuItem>
          </List>
        </Menu>
      </Box> */}
    </Box>
  )
}

export default SubNav

//anchor: know where to display
