import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'

import {
  BoxRow,
  CustomizedButton,
  CustomizedLink,
  CustomizedText,
} from '../customizedCSS'
import { CartType } from '../../misc/type'
import { removeToCart } from '../../redux/action'

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
    <Box>
      <BoxRow sx={{ justifyContent: 'flex-start', width: '1000px' }}>
        <img
          src={item.imageLink}
          alt={item.name}
          height="100px"
          width="100px"
        />
        <Box sx={{ width: '500px' }}>
          <CustomizedLink to={`/product/${item._id}`}>
            <CustomizedText sx={{ textAlign: 'left', ml: '40px', mr: '40px' }}>
              {item.name}
            </CustomizedText>
          </CustomizedLink>
        </Box>
        <Box sx={{ width: '50px', ml: '10px', mr: '10px' }}>{item.price} €</Box>
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
    </Box>
  )
}

export default CartItem
