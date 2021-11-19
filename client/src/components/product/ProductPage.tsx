import React, { useEffect } from 'react'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-scroll'

import { AppState } from '../../misc/type'
import { fetchData, fetchDataByCategory } from '../../redux/action'
import {
  BoxRow,
  CustomizedButton,
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
      <Box>
        <Link activeClass="active" to="Christmas" spy={true} smooth={true}>
          <CustomizedButton>Christmas</CustomizedButton>
        </Link>
        <Link activeClass="active" to="DIOR ADDICT" spy={true} smooth={true}>
          <CustomizedButton>DIOR ADDICT</CustomizedButton>
        </Link>
        <Link activeClass="active" to="DIORIFIC" spy={true} smooth={true}>
          <CustomizedButton>DIORIFIC</CustomizedButton>
        </Link>
      </Box>
      <Box>
        <BoxRow id="Christmas">
          {data.map((item) => {
            if (item.name.includes('Christmas')) {
              return <ProductItem data={item} />
            }
          })}
        </BoxRow>
        <BoxRow id="DIOR ADDICT">
          {data.map((item) => {
            if (item.name.includes('DIOR ADDICT')) {
              return <ProductItem data={item} />
            }
          })}
        </BoxRow>
        <BoxRow id="DIORIFIC">
          {data.map((item) => {
            if (item.name.includes('DIORIFIC')) {
              return <ProductItem data={item} />
            }
          })}
        </BoxRow>
      </Box>
    </Box>
  )
}

export default ProductPage
