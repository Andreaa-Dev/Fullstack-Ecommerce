import React from 'react'
import { Box } from '@mui/system'

import {
  CustomizedButton,
  CustomizedLink,
  CustomizedTitle,
} from '../../../customizedCSS'

function ProductPage() {
  return (
    <Box>
      <CustomizedTitle> Product Page Manage</CustomizedTitle>
      <CustomizedLink to="/admin/product/add">
        <CustomizedButton>Add product</CustomizedButton>
      </CustomizedLink>
    </Box>
  )
}

export default ProductPage
