import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'

import {
  BoxColumn,
  BoxRow,
  CustomizedButton,
  CustomizedText,
  CustomizedTitle,
} from '../customizedCSS'
import { AppState, CartType } from '../../misc/type'
import { useSelector } from 'react-redux'

type ItemPropType = {
  item: CartType
  onClickHandlerRemove: (productId: string) => void
  onClickHandlerAdd: (productId: string) => void
}

function CartItem({
  item,
  onClickHandlerRemove,
  onClickHandlerAdd,
}: ItemPropType) {
  return (
    <div>
      <CustomizedTitle>Product</CustomizedTitle>
      <BoxRow>
        <CustomizedText>{item.name}</CustomizedText>
        <AddCircleIcon onClick={() => onClickHandlerAdd(item._id)} />
        {item.quantity}
        <RemoveCircleIcon onClick={() => onClickHandlerRemove(item._id)} />
      </BoxRow>
    </div>
  )
}

export default CartItem
