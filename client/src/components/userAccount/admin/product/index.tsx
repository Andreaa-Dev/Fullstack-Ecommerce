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
    let response = await axios.get(`/product`)
    const productData = response.data
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
