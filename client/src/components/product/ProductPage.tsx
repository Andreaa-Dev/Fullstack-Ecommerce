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
import { productNameList } from '../../misc/productNameList'
//palette, eyebrow, eyeliner, mascara, eyeshadow, blush(1), bronzer (1), foundation, lipstick,

function ProductPage() {
  let [searchParams] = useSearchParams()
  const category = searchParams.get('category') as string
  console.log(category, 'k')

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
      <BoxRow>
        {productNameList.map((item) => {
          if (item.name === category) {
            return item.subNav.map((subitem) => {
              return (
                <Link
                  activeClass="active"
                  to={subitem.title}
                  spy={true}
                  smooth={true}
                >
                  <CustomizedButton>{subitem.title}</CustomizedButton>
                </Link>
              )
            })
          }
        })}
      </BoxRow>
      <Box>
        {productNameList.map((item) => {
          if (item.name === category) {
            return item.subNav.map((subitem) => {
              return (
                <Box>
                  <CustomizedTitle>{subitem.title}</CustomizedTitle>

                  <Box
                    id={subitem.title}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: ' 1fr 1fr 1fr',
                      m: '50px',
                    }}
                  >
                    {data.map((item) => {
                      if (item.name.includes(subitem.title)) {
                        return <ProductItem data={item} />
                      }
                    })}
                  </Box>
                </Box>
              )
            })
          }
        })}
      </Box>
    </Box>
  )
}

export default ProductPage
