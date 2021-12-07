import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../../misc/type'
import { BoxRow, CustomizedLink, CustomizedTitle } from '../customizedCSS'

function ProductRecently() {
  const productRecently = useSelector(
    (state: AppState) => state.productState.productRecently
  )

  return (
    <div>
      <CustomizedTitle>RECENTLY VIEWED</CustomizedTitle>
      <BoxRow>
        {productRecently.map((item) => {
          return (
            <CustomizedLink to={`/product/${item._id}`}>
              <img
                src={item.imageLink}
                alt={item.name}
                height="150px"
                width="150px"
              />
            </CustomizedLink>
          )
        })}
      </BoxRow>
    </div>
  )
}

export default ProductRecently
