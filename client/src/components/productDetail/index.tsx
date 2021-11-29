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
import { BoxColumn, BoxRow, CustomizedButton, themes } from '../customizedCSS'
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
      <BoxRow>
        <BoxColumn>
          <img src={data.imageLink} alt="error" height="450px" width="600px" />
          <BoxRow>
            <img src={lipstick1} alt="error" height="200px" width="200px" />
            <img src={lipstick2} alt="error" height="200px" width="200px" />
          </BoxRow>
        </BoxColumn>
        <BoxColumn>
          <Typography>{data.name}</Typography>
          <Typography>{data.description}</Typography>
          <Box>
            {data.variant.map((item) => {
              return (
                <CircleIcon sx={{ fontSize: '40px', color: item.hexValue }} />
              )
            })}
          </Box>
          <FavoriteIcon
            className={classes.icon}
            id="favIcon"
            onClick={onClickHandler}
            color={color}
          />
          <CustomizedButton> ADD TO CART</CustomizedButton>
        </BoxColumn>
      </BoxRow>
      <ProductVideo sx={{ m: '20px' }} />
      <ProductRecently />
    </ThemeProvider>
  )
}

export default ProductDetail
