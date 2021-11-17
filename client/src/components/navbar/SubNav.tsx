import React, { useState, MouseEvent } from 'react'
import { Box } from '@mui/system'
import Popover from '@mui/material/Popover'
import { MenuItem } from '@mui/material'

import { CustomizedLink, CustomizedText } from '../customizedCSS'
import lipstick from '../images/lipstick.webp'
import palette from '../images/palette_subNav.jpeg'
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
        pl: 10,
        pr: 10,
        pb: 1,
      }}
    >
      <CustomizedLink to="/product/?category=lipstick">
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
      </CustomizedLink>

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
          <CustomizedText>LIP GLOSSES</CustomizedText>
          <CustomizedText>MATTE ANS SATIN LIPSTICK</CustomizedText>
          <CustomizedText>LIP BALMS</CustomizedText>
        </div>
      </Popover>
      <CustomizedLink to="/product/?category=foundation">
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
      </CustomizedLink>
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
          <CustomizedText>FLUID FOUNDATIONS</CustomizedText>
          <CustomizedText>CUSHION</CustomizedText>
          <CustomizedText>COMPACT FOUNDATIONS </CustomizedText>
        </div>
      </Popover>

      <CustomizedLink to="/product/?category=eyeshadow">
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
      </CustomizedLink>
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
          <CustomizedText>LIMITED EDITION</CustomizedText>
          <CustomizedText>DIOR BACKSTAGE</CustomizedText>
          <img src={palette} alt="Lipstick" height="300" width="400" />
        </div>
      </Popover>

      <CustomizedLink to="/product/?category=eyebrow">
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
      </CustomizedLink>
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
          <CustomizedText>DIOR SHOW</CustomizedText>
          <CustomizedText>DIOR BOLD BROW</CustomizedText>
        </div>
      </Popover>

      <CustomizedLink to="/product/?category=mascara">
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
      </CustomizedLink>
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
          <CustomizedText>DIORSHOW PUMP 'N' VOLUME HD</CustomizedText>
          <CustomizedText>WATERPROOF</CustomizedText>
        </div>
      </Popover>

      <CustomizedLink to="/product/?category=nail_polish">
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
      </CustomizedLink>
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
          <CustomizedText>LIMITED EDITION</CustomizedText>
          <CustomizedText>DIOR VERNIS</CustomizedText>
          <CustomizedText>ALL PRODUCTS</CustomizedText>
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
          <CustomizedText>ATELIER</CustomizedText>
          <CustomizedText>GIFT SETS</CustomizedText>
          <CustomizedText>SERVICES</CustomizedText>
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
          <CustomizedText>NEWS</CustomizedText>
          <CustomizedText>FASHIONS SHOW</CustomizedText>
          <CustomizedText>HISTORY & SAVOIR-FAIRE </CustomizedText>
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
