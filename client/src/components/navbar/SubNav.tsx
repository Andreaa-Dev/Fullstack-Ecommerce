import React, { useState, MouseEvent } from 'react'
import { Box } from '@mui/system'
import Popover from '@mui/material/Popover'

import {
  BoxColumn,
  BoxRow,
  CustomizedLink,
  CustomizedText,
} from '../customizedCSS'
import { productNameList } from '../../misc/productNameList'

function SubNav() {
  const [anchorEl, setAnchorEl] = useState({
    lipstick: null,
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
    console.log('run')
  }

  const open = Boolean(anchorEl)
  return (
    <Box sx={{ width: '70%', m: 'auto', mb: '20px', mt: '20px' }}>
      <BoxRow sx={{ justifyContent: 'space-between' }}>
        {productNameList.map((item) => {
          return (
            <Box>
              <CustomizedLink to={`/product/?category=${item.name}`}>
                <CustomizedText
                  aria-owns={open ? item.name : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(event: any) => {
                    handlePopoverOpen(event, item.name)
                  }}
                >
                  {item.name}
                </CustomizedText>
              </CustomizedLink>
              <Popover
                id={item.name}
                open={Boolean(anchorEl[item.name as keyof typeof anchorEl])}
                anchorEl={anchorEl[item.name as keyof typeof anchorEl]}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                disableRestoreFocus
              >
                <Box
                  onMouseLeave={() => {
                    handlePopoverClose(item.name)
                  }}
                >
                  <img src={item.img} alt="Lipstick" height="300" width="300" />
                  <div>
                    {item.subNav?.map((item) => {
                      return <CustomizedText>{item.title}</CustomizedText>
                    })}
                  </div>
                </Box>
              </Popover>
            </Box>
          )
        })}
      </BoxRow>
    </Box>
  )
}

export default SubNav

//anchor: know where to display
