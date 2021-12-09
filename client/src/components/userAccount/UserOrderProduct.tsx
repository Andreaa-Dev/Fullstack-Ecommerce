import React from 'react'
import { Box } from '@mui/system'

import { CartType } from '../../misc/type'
import {
  BoxColumnStart,
  CustomizedText,
  CustomizedTitle,
} from '../customizedCSS'
import { CardContent } from '@mui/material'

type ProductPropType = {
  product: CartType[]
}
function UserOrderProduct({ product }: ProductPropType) {
  return (
    <CardContent>
      <BoxColumnStart>
        {product.map((item) => {
          return (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
              key={item._id}
            >
              <CustomizedTitle sx={{ fontSize: '17px' }}>
                No{product.indexOf(item)}.{' '}
              </CustomizedTitle>
              {/* <Box sx={{ width: '200px' }}>
                <CustomizedTitle sx={{ fontSize: '15px' }}>
                  {item.name}
                </CustomizedTitle>
              </Box> */}
              <Box>
                <img
                  src={item.imageLink}
                  alt={item.name}
                  height="50px"
                  width="50px"
                />
              </Box>

              <CustomizedText sx={{ fontSize: '15px' }}>
                Price: {item.price}
              </CustomizedText>
              <CustomizedText sx={{ fontSize: '15px' }}>
                Quantity: {item.quantity}
              </CustomizedText>
            </Box>
          )
        })}
      </BoxColumnStart>
    </CardContent>
  )
}

export default UserOrderProduct
