import React from 'react'
import { Box } from '@mui/system'
import { ProductType } from '../../misc/type'
import {
  CustomizedButton,
  CustomizedText,
  CustomizedTextProduct,
} from '../customizedCSS'

type DataPropType = {
  data: ProductType
}

function ProductItem({ data }: DataPropType) {
  return (
    <Box sx={{ border: '1px solid #cecece' }}>
      <img height="220px" width="250px" src={data.imageLink} alt="" />
      <CustomizedTextProduct fontWeight="bold">
        {data.name}
      </CustomizedTextProduct>
      <CustomizedTextProduct>{data.description}</CustomizedTextProduct>
    </Box>
  )
}

export default ProductItem
