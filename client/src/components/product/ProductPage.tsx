import React, { useEffect } from 'react'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { AppState } from '../../misc/type'
import { fetchData, fetchDataByCategory } from '../../redux/action'
import {
  CustomizedText,
  CustomizedTitle,
  CustomizedTitleProduct,
} from '../customizedCSS'
import ProductItem from './ProductItem'

import { productName } from '../../misc/productName'
import { introductionProduct } from '../../misc/introductionProduct'
//palette, eyebrow, eyeliner, mascara, eyeshadow, blush(1), bronzer (1), foundation, lipstick,

function ProductPage() {
  let [searchParams] = useSearchParams()
  const category = searchParams.get('category') as string

  const dispatch = useDispatch()
  const data = useSelector((state: AppState) => state.productState.product)
  console.log(data, 'd')

  useEffect(() => {
    if (category) {
      dispatch(fetchDataByCategory(category))
    } else {
      dispatch(fetchData())
    }
  }, [dispatch, category])

  return (
    <Box sx={{ m: '10px' }}>
      <CustomizedTitleProduct>{category}</CustomizedTitleProduct>
      <img
        src={productName[category as keyof typeof productName]}
        alt="error"
      />
      <CustomizedText>
        {introductionProduct[category as keyof typeof productName]}
      </CustomizedText>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 5,
          m: 5,
        }}
      >
        {data.map((item) => {
          return <ProductItem data={item} />
        })}
      </Box>
    </Box>
  )
}

export default ProductPage
