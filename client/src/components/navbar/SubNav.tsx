import React, { useState, MouseEvent } from 'react'
import { Box } from '@mui/system'
import Popover from '@mui/material/Popover'
import { MenuItem } from '@mui/material'

import { CustomizedText } from '../customizedCSS'
import lipstick from '../images/lipstick.webp'
import palette from '../images/palette.jpeg'
import history from '../images/history.webp'
import gift from '../images/gift.webp'

function SubNav() {
  const [anchorEl, setAnchorEl] = useState({
    lipStick: null,
    foundation: null,
    palette: null,
    eyesBrown: null,
    mascara: null,
    nailPolish: null,
    gift: null,
    news: null,
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
      <CustomizedText
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
      </CustomizedText>
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

      <CustomizedText
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
      </CustomizedText>
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

      <CustomizedText
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
      </CustomizedText>
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

      <CustomizedText
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
      </CustomizedText>
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

      <CustomizedText
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
      </CustomizedText>
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

      <CustomizedText
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
      </CustomizedText>
      <Popover
        id="nailPolish"
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

      <CustomizedText
        aria-owns={open ? 'gift' : undefined}
        aria-haspopup="true"
        onMouseEnter={(event: any) => {
          handlePopoverOpen(event, 'gift')
        }}
        onMouseLeave={() => {
          handlePopoverClose('gift')
        }}
        sx={{ borderBottomColor: 'black' }}
      >
        GIFT & SERVICES
      </CustomizedText>
      <Popover
        id="gift"
        sx={{
          pointerEvents: 'none',
        }}
        open={Boolean(anchorEl.gift)}
        anchorEl={anchorEl.gift}
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
          <img src={gift} alt="Gift" height="250" width="650" />
          <MenuItem>ATELIER</MenuItem>
          <MenuItem>GIFT SETS</MenuItem>
          <MenuItem>SERVICES</MenuItem>
        </div>
      </Popover>

      <CustomizedText
        aria-owns={open ? 'news' : undefined}
        aria-haspopup="true"
        onMouseEnter={(event: any) => {
          handlePopoverOpen(event, 'news')
        }}
        onMouseLeave={() => {
          handlePopoverClose('news')
        }}
        sx={{ borderBottomColor: 'black' }}
      >
        NEWS
      </CustomizedText>
      <Popover
        id="news"
        sx={{
          pointerEvents: 'none',
        }}
        open={Boolean(anchorEl.news)}
        anchorEl={anchorEl.news}
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
          <MenuItem>NEWS</MenuItem>
          <MenuItem>FASHIONS SHOW</MenuItem>
          <MenuItem>HISTORY & SAVOIR-FAIRE </MenuItem>
          <img
            src={history}
            alt="Christian Dior History"
            height="300"
            width="400"
          />
        </div>
      </Popover>
    </Box>
  )
}

export default SubNav

//anchor: know where to display
