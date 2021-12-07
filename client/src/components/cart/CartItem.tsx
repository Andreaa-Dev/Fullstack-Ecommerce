import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'

import {
  BoxRow,
  CustomizedButton,
  CustomizedLink,
  CustomizedText,
  CustomizedTitle,
} from '../customizedCSS'
import { CartType } from '../../misc/type'
import { removeToCart } from '../../redux/action'

import { Button } from '@mui/material'

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
  const dispatch = useDispatch()
  const onClickHandlerRemoveCart = () => {
    dispatch(removeToCart(item))
  }

  const [buttonStatus, setButtonStatus] = useState(false)

  useEffect(() => {
    if (item.quantity <= 1) {
      setButtonStatus(true)
    } else setButtonStatus(false)
  }, [item.quantity])
  return (
    <div>
      <BoxRow>
        <img
          src={item.imageLink}
          alt={item.name}
          height="100px"
          width="100px"
        />
        <CustomizedLink to={`/product/${item._id}`}>
          <CustomizedText>{item.name}</CustomizedText>
        </CustomizedLink>
        <div>{item.price} €</div>
        <Button>
          <AddCircleIcon onClick={() => onClickHandlerAdd(item._id)} />
        </Button>
        <CustomizedText>{item.quantity}</CustomizedText>
        <Button disabled={buttonStatus}>
          <RemoveCircleIcon onClick={() => onClickHandlerRemove(item._id)} />
        </Button>
        <CustomizedButton
          onClick={onClickHandlerRemoveCart}
          sx={{ width: '25px', height: '12px' }}
        >
          Remove
        </CustomizedButton>
      </BoxRow>
    </div>
  )
}

export default CartItem
