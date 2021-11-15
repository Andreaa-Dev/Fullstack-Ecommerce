import { Box } from '@mui/material'
import React from 'react'

import { BoxRow, CustomizedText } from '../../customizedCSS'
import Checkboxes from './CheckBox'

type ItemPropType = {
  item: {
    name: string
  }
}

function SubItem({ item }: ItemPropType) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}
    >
      <Checkboxes />
      <CustomizedText> {item.name}</CustomizedText>
    </Box>
  )
}

export default SubItem
