import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useParams } from 'react-router-dom'
import { Box, ThemeProvider } from '@mui/system'
import CircleIcon from '@mui/icons-material/Circle'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

import lipstick1 from '../images/lipstick1.webp'
import lipstick2 from '../images/lipstick2.jpeg'
import ProductVideo from './ProductVideo'
import ProductRecently from './ProductRecently'
import { AppState, ProductType } from '../../misc/type'
import {
  BoxColumn,
  BoxRow,
  CustomizedButton,
  CustomizedText,
  CustomizedTitle,
  themes,
} from '../customizedCSS'
import { addFavoriteSuccess, fetchProductById } from '../../redux/action'

let color: 'action' | 'secondary' = 'action'
const useStyles = makeStyles({
  icon: {
    color: color,
  },
})

function ProductDetail() {
  const classes = useStyles()

  const params = useParams() as { id: string }
  const productId = params.id

  const dispatch = useDispatch()
  const data = useSelector((state: AppState) => state.productState.productById)
  const favoriteProduct = useSelector(
    (state: AppState) => state.productState.favoriteProduct
  )
  const selectedProduct = useSelector(
    (state: AppState) => state.productState.productById
  )

  const onClickHandler = () => {
    dispatch(addFavoriteSuccess(selectedProduct as ProductType))
  }

  useEffect(() => {
    dispatch(fetchProductById(productId))
  }, [dispatch, productId])

  const isFavorited = favoriteProduct.some((item) => {
    return item._id === selectedProduct?._id
  })

  if (isFavorited) {
    color = 'secondary'
  }

  if (!data) {
    return <> </>
  }
  return (
    <ThemeProvider theme={themes}>
      <Box sx={{ ml: '20px', mr: '20px' }}>
        <BoxRow>
          <BoxColumn>
            <img
              src={data.imageLink}
              alt="error"
              height="350px"
              width="400px"
            />
            <BoxRow>
              <Box sx={{ m: '10px' }}>
                <img src={lipstick1} alt="error" height="200px" width="200px" />
              </Box>
              <img src={lipstick2} alt="error" height="200px" width="200px" />
            </BoxRow>
          </BoxColumn>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              mt: '0',
            }}
          >
            <CustomizedTitle sx={{ textAlign: 'left' }}>
              {data.name}
            </CustomizedTitle>
            <CustomizedText sx={{ textAlign: 'left' }}>
              {data.description}
            </CustomizedText>
            <Box>
              {data.variant.map((item) => {
                return (
                  <CircleIcon sx={{ fontSize: '40px', color: item.hexValue }} />
                )
              })}
            </Box>
            <Box>
              <CustomizedButton> ADD TO CART</CustomizedButton>
              <FavoriteIcon
                className={classes.icon}
                id="favIcon"
                onClick={onClickHandler}
                color={color}
                sx={{ fontSize: 30, textAlign: 'center' }}
              />
            </Box>
          </Box>
        </BoxRow>
        <ProductVideo sx={{ width: '100%' }} />
        <ProductRecently />
      </Box>
    </ThemeProvider>
  )
}

export default ProductDetail
