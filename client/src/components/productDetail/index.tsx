import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import { useParams } from 'react-router-dom'
import { Box, ThemeProvider } from '@mui/system'
import CircleIcon from '@mui/icons-material/Circle'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'

import lipstick1 from '../images/lipstick1.webp'
import lipstick2 from '../images/lipstick2.jpeg'
import ProductVideo from './ProductVideo'
import ProductRecently from './ProductRecently'
import { AppState, ProductType } from '../../misc/type'
import {
  BoxColumn,
  BoxColumnStart,
  BoxRow,
  CustomizedButton,
  CustomizedText,
  CustomizedTitle,
  themes,
} from '../customizedCSS'
import {
  addFavoriteSuccess,
  addToCart,
  fetchProductById,
} from '../../redux/action'

let color: 'action' | 'secondary' = 'action'
const useStyles = makeStyles({
  icon: {
    color: color,
  },
})

function ProductDetail() {
  const [open, setOpen] = useState(false)
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })

  const classes = useStyles()

  const params = useParams() as { id: string }
  const productId = params.id

  const dispatch = useDispatch()

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

  const onClickCartHandler = () => {
    //if user log in yet token?
    if (selectedProduct) {
      const newObj = { ...selectedProduct, quantity: 1 }
      dispatch(addToCart(newObj))
    }
    setOpen(true)
  }
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const isFavorited = favoriteProduct.some((item) => {
    return item._id === selectedProduct?._id
  })

  if (isFavorited) {
    color = 'secondary'
  }

  if (!selectedProduct) {
    return <> </>
  }

  return (
    <ThemeProvider theme={themes}>
      <Box sx={{ ml: '20px', mr: '20px' }}>
        <BoxRow>
          <BoxColumn sx={{ mr: '20px' }}>
            <img
              src={selectedProduct.imageLink}
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
              justifyContent: 'flex-start',
            }}
          >
            <BoxRow sx={{ justifyContent: 'flex-start' }}>
              <CustomizedTitle sx={{ textAlign: 'left' }}>
                {selectedProduct.name}
              </CustomizedTitle>
              <FavoriteIcon
                className={classes.icon}
                id="favIcon"
                color={color}
                onClick={onClickHandler}
                sx={{ fontSize: 30, ml: '50px' }}
              />
            </BoxRow>

            <CustomizedText sx={{ textAlign: 'left' }}>
              {selectedProduct.description}
            </CustomizedText>
            <CustomizedText sx={{ textAlign: 'left' }}>
              {selectedProduct.price} €
            </CustomizedText>
            <Box>
              {selectedProduct.variant.map((item) => {
                return (
                  <CircleIcon sx={{ fontSize: '40px', color: item.hexValue }} />
                )
              })}
            </Box>
            <BoxColumnStart sx={{ justifyContent: 'flex-start' }}>
              <CustomizedButton
                onClick={onClickCartHandler}
                sx={{ m: '0', mt: '20px' }}
              >
                ADD TO CART
              </CustomizedButton>
            </BoxColumnStart>
          </Box>
        </BoxRow>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            A product is added to your cart
          </Alert>
        </Snackbar>

        <ProductVideo sx={{ width: '100%' }} />
        <ProductRecently />
      </Box>
    </ThemeProvider>
  )
}

export default ProductDetail
