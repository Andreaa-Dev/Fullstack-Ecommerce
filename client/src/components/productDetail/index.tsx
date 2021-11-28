import React, { useEffect } from 'react'
import { Box, ThemeProvider } from '@mui/system'
import { Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import CircleIcon from '@mui/icons-material/Circle'

import lipstick1 from '../images/lipstick1.webp'
import lipstick2 from '../images/lipstick2.jpeg'
import ProductVideo from './ProductVideo'
import ProductRecently from './ProductRecently'
import { CustomizedButton, themes } from '../customizedCSS'
import { AppState } from '../../misc/type'
import { fetchProductById } from '../../redux/action'
import FavoriteButton from './FavoriteButton'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const params = useParams() as { id: string }
  const productId = params.id

  const dispatch = useDispatch()
  const data = useSelector((state: AppState) => state.productState.productById)

  console.log(data, 'hi')

  useEffect(() => {
    dispatch(fetchProductById(productId))
  }, [dispatch, productId])

  if (!data) {
    return <> </>
  }
  return (
    <ThemeProvider theme={themes}>
      <Box>
        <Box>
          <img src={data.imageLink} alt="" />
          <img src={lipstick1} alt="" />
          <img src={lipstick2} alt="" />
        </Box>
        <Box>
          <Typography>{data.name}</Typography>
          <Typography>{data.description}</Typography>
          <Box>
            {data.variant.map((item) => {
              return (
                <CircleIcon sx={{ fontSize: '40px', color: item.hexValue }} />
              )
            })}
          </Box>
        </Box>
        <FavoriteButton />
        <CustomizedButton> ADD TO CART</CustomizedButton>
        <ProductVideo />
        <ProductRecently />
      </Box>
    </ThemeProvider>
  )
}

export default ProductDetail
