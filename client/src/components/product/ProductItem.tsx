import React from 'react'
import { Box } from '@mui/system'
import { useDispatch } from 'react-redux'

import { ProductType } from '../../misc/type'
import { CustomizedLink, CustomizedTextProduct } from '../customizedCSS'
import { addProductRecently } from '../../redux/action'

type DataPropType = {
  data: ProductType
}

function ProductItem({ data }: DataPropType) {
  const dispatch = useDispatch()

  const onClickHandler = () => {
    dispatch(addProductRecently(data))
  }
  let productId = data._id
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

      <CustomizedLink to={productId}>
        <CustomizedTextProduct fontWeight="bold" onClick={onClickHandler}>
          {data.name}
        </CustomizedTextProduct>
      </CustomizedLink>

      <CustomizedTextProduct>{data.description}</CustomizedTextProduct>
    </Box>
  )
}

export default ProductItem
