import React, { useEffect } from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import lipstick1 from '../images/lipstick1.webp'
import lipstick2 from '../images/lipstick2.jpeg'
import ProductVideo from './ProductVideo'
import ProductRecently from './ProductRecently'
import { CustomizedButton } from '../customizedCSS'
import { AppState } from '../../misc/type'
import { fetchProductbyId } from '../../redux/action'
import { FavoriteBorderTwoTone } from '@mui/icons-material'
import FavoriteButton from './FavoriteButton'

function ProductDetail() {
  const dispatch = useDispatch()
  const data = useSelector((state: AppState) => state.productState.product)

  // useEffect(() => {
  //   dispatch(fetchProductbyId(id))
  // }, [dispatch])
  return (
    <Box>
      <Box>
        <Box>
          <img src="" alt="" />
          <img src={lipstick1} alt="" />
          <img src={lipstick2} alt="" />
        </Box>
        <Box>
          <Typography>name</Typography>
          <Typography>description</Typography>
          variant
        </Box>
        <FavoriteButton />
        <CustomizedButton> ADD TO CART</CustomizedButton>
        <ProductVideo />
        <ProductRecently />
      </Box>
    </Box>
  )
}

export default ProductDetail
