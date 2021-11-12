import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/system'

import ProductItem from './ProductItem'
import { AppState } from '../../misc/type'
import { fetchData } from '../../redux/action'
import SortProduct from './SortProduct'

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
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr ',
        justifyContent: 'center',
        gap: 10,
        p: 10,
      }}
    >
      <SortProduct />
      {productData.map((item) => {
        return <ProductItem data={item} />
      })}
    </Box>
  )
}

export default ProductPage
