import React from 'react'
import { Box } from '@mui/system'
import { ProductType } from '../../misc/type'
import {
  CustomizedButton,
  CustomizedLink,
  CustomizedText,
  CustomizedTextProduct,
} from '../customizedCSS'

type DataPropType = {
  data: ProductType
}

function ProductItem({ data }: DataPropType) {
  return (
    <Box
      sx={{
        border: '1px solid #cecece',
        height: '320px',
        width: '450px',
        m: '10px',
        p: '5px',
      }}
    >
      <img height="220px" width="250px" src={data.imageLink} alt="" />
      <CustomizedLink to="/:id">
        <CustomizedTextProduct fontWeight="bold">
          {data.name}
        </CustomizedTextProduct>
      </CustomizedLink>

      <CustomizedTextProduct>{data.description}</CustomizedTextProduct>
    </Box>
  )
}

export default ProductItem
