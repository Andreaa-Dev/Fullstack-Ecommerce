import React, { useEffect, useState } from 'react'

import {
  BoxColumn,
  CustomizedButton,
  CustomizedLink,
  CustomizedTitle,
} from '../../../customizedCSS'
import axios from 'axios'
import ProductList from './ProductList'
import { ProductType } from '../../../../misc/type'

function ProductPage() {
  const [productList, setProductList] = useState<ProductType[] | undefined>()

  const getProductData = async () => {
    let response = await axios.get(`http://localhost:5000/api/v1/product`)
    const productData = response.data
    console.log(productData, 'l')
    setProductList(productData)
  }

  useEffect(() => {
    getProductData()
  }, [])

  return (
    <div>
      <CustomizedTitle> PRODUCT MANAGEMENT</CustomizedTitle>
      <ProductList productList={productList} />
      <BoxColumn>
        <CustomizedLink to="/admin/product/add">
          <CustomizedButton>Add product</CustomizedButton>
        </CustomizedLink>
      </BoxColumn>
    </div>
  )
}

export default ProductPage
