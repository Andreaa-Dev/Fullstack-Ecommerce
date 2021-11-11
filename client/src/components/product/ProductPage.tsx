import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/system'

import ProductItem from './ProductItem'
import { AppState } from '../../misc/type'
import { fetchData } from '../../redux/action'

function ProductPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const productData = useSelector(
    (state: AppState) => state.productState.product
  )

  console.log(productData, 's')
  return (
    <>
      {productData.map((item) => {
        return (
          <Box
            sx={{
              display: 'grid',
              gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
              justifyContent: 'center',
              p: 5,
            }}
          >
            product page
            <ProductItem data={item} />
          </Box>
        )
      })}
    </>
  )
}

export default ProductPage
