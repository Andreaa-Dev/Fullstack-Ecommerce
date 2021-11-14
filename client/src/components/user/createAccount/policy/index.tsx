import React from 'react'

import { BoxColumn, BoxRow } from '../../../customizedCSS'
import { policyList } from '../../../../misc/policyList'
import SubItem from './SubItem'
import { Box } from '@mui/system'

type ItemType = {
  name: string
}

function index() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      {policyList.map((item: ItemType) => {
        return <SubItem item={item} />
      })}
    </Box>
  )
}

export default index
