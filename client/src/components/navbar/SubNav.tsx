import React, { useState, MouseEvent } from 'react'
import { Box } from '@mui/system'
import Popover from '@mui/material/Popover'
import { MenuItem, Typography } from '@mui/material'

import lipstick from '../images/lipstick.webp'
import palette from '../images/palette.jpeg'

function SubNav() {
  const [anchorEl, setAnchorEl] = useState({
    lipStick: null,
    foundation: null,
    palette: null,
    eyesBrown: null,
    mascara: null,
    nailPolish: null,
  })

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>, id: string) => {
    setAnchorEl({ ...anchorEl, [id]: event.currentTarget })
  }
  const handlePopoverClose = (id: string) => {
    setAnchorEl({ ...anchorEl, [id]: null })
  }

  const open = Boolean(anchorEl)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 5,
      }}
    >
      <Typography
        aria-owns={open ? 'lipStick' : undefined}
        aria-haspopup="true"
        onMouseEnter={(event: any) => {
          handlePopoverOpen(event, 'lipStick')
        }}
        onMouseLeave={() => {
          handlePopoverClose('lipStick')
        }}
        sx={{ borderBottomColor: 'black' }}
      >
        LIPSTICK
      </Typography>
      <Popover
        id="lipStick"
        sx={{
          pointerEvents: 'none',
        }}
        open={Boolean(anchorEl.lipStick)}
        anchorEl={anchorEl.lipStick}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <img src={lipstick} alt="Lipstick" height="300" width="300" />
        <div>
          <MenuItem>LIP GLOSSES</MenuItem>
          <MenuItem>MATTE ANS SATIN LIPSTICK</MenuItem>
          <MenuItem>LIP BALMS</MenuItem>
        </div>
      </Popover>

      <Typography
        aria-owns={open ? 'foundation' : undefined}
        aria-haspopup="true"
        onMouseEnter={(event: any) => {
          handlePopoverOpen(event, 'foundation')
        }}
        onMouseLeave={() => {
          handlePopoverClose('foundation')
        }}
      >
        FOUNDATION
      </Typography>
      <Popover
        id="foundation"
        sx={{
          pointerEvents: 'none',
        }}
        open={Boolean(anchorEl.foundation)}
        anchorEl={anchorEl.foundation}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div>
          <MenuItem>FLUID FOUNDATIONS</MenuItem>
          <MenuItem>CUSHION</MenuItem>
          <MenuItem>COMPACT FOUNDATIONS </MenuItem>
        </div>
      </Popover>

      <Typography
        aria-owns={open ? 'palette' : undefined}
        aria-haspopup="true"
        onMouseEnter={(event: any) => {
          handlePopoverOpen(event, 'palette')
        }}
        onMouseLeave={() => {
          handlePopoverClose('palette')
        }}
        sx={{ borderBottomColor: 'black' }}
      >
        EYES PALETTES
      </Typography>
      <Popover
        id="palette"
        sx={{
          pointerEvents: 'none',
        }}
        open={Boolean(anchorEl.palette)}
        anchorEl={anchorEl.palette}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div>
          <MenuItem>LIMITED EDITION</MenuItem>
          <MenuItem>DIOR BACKSTAGE</MenuItem>
          <img src={palette} alt="Lipstick" height="300" width="400" />
        </div>
      </Popover>

      <Typography
        aria-owns={open ? 'eyesBrown' : undefined}
        aria-haspopup="true"
        onMouseEnter={(event: any) => {
          handlePopoverOpen(event, 'eyesBrown')
        }}
        onMouseLeave={() => {
          handlePopoverClose('eyesBrown')
        }}
        sx={{ borderBottomColor: 'black' }}
      >
        EYESBROWNS
      </Typography>
      <Popover
        id="eyesbrown"
        sx={{
          pointerEvents: 'none',
        }}
        open={Boolean(anchorEl.eyesBrown)}
        anchorEl={anchorEl.eyesBrown}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div>
          <MenuItem>DIOR SHOW</MenuItem>
          <MenuItem>DIOR BOLD BROW</MenuItem>
        </div>
      </Popover>

      <Typography
        aria-owns={open ? 'mascara' : undefined}
        aria-haspopup="true"
        onMouseEnter={(event: any) => {
          handlePopoverOpen(event, 'mascara')
        }}
        onMouseLeave={() => {
          handlePopoverClose('mascara')
        }}
        sx={{ borderBottomColor: 'black' }}
      >
        MASCARA
      </Typography>
      <Popover
        id="mascara"
        sx={{
          pointerEvents: 'none',
        }}
        open={Boolean(anchorEl.mascara)}
        anchorEl={anchorEl.mascara}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div>
          <MenuItem>DIORSHOW PUMP 'N' VOLUME HD</MenuItem>
          <MenuItem>WATERPROOF</MenuItem>
        </div>
      </Popover>

      <Typography
        aria-owns={open ? 'nailPolish' : undefined}
        aria-haspopup="true"
        onMouseEnter={(event: any) => {
          handlePopoverOpen(event, 'nailPolish')
        }}
        onMouseLeave={() => {
          handlePopoverClose('nailPolish')
        }}
        sx={{ borderBottomColor: 'black' }}
      >
        NAIL POLISH
      </Typography>
      <Popover
        id="mascara"
        sx={{
          pointerEvents: 'none',
        }}
        open={Boolean(anchorEl.nailPolish)}
        anchorEl={anchorEl.nailPolish}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div>
          <MenuItem>LIMITED EDITION</MenuItem>
          <MenuItem>DIOR VERNIS</MenuItem>
          <MenuItem>ALL PRODUCTS</MenuItem>
        </div>
      </Popover>
    </Box>
  )
}

export default SubNav

//anchor: know where to display
