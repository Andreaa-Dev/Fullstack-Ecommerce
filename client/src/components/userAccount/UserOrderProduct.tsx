import { Box } from '@mui/system'
import React from 'react'
import { CartType } from '../../misc/type'
import { CustomizedTitle } from '../customizedCSS'

type ProductPropType = {
  product: CartType[]
}
function UserOrderProduct({ product }: ProductPropType) {
  return (
    <div>
      {product.map((item) => {
        return (
          <Box key={item._id}>
            <CustomizedTitle>{item.name}</CustomizedTitle>
          </Box>
        )
      })}
    </div>
  )
}

export default UserOrderProduct
