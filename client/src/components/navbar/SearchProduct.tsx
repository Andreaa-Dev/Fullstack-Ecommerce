import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { Drawer } from '@mui/material'

import {
  BoxRow,
  CustomizedLink,
  CustomizedText,
  BoxColumn,
} from '../customizedCSS/index'
import { AppState } from '../../misc/type'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductBySearch } from '../../redux/action'

type Anchor = 'bottom'

function SearchProduct() {
  const [state, setState] = useState({ bottom: false })
  const [userInput, setUserInput] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value)
  }

  const searchProductList = useSelector(
    (state: AppState) => state.productState.product
  )

  // add setTimeout - better performance
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchProductBySearch(userInput))
    }, 500)
  }, [dispatch, userInput])

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: Anchor) => (
    <BoxColumn
      sx={{
        width: 350,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {searchProductList.map((item) => {
        return (
          <BoxRow key={item._id}>
            <img
              src={item.imageLink}
              alt={item.name}
              height="100px"
              width="100px"
            />
            <CustomizedLink to={`product/${item._id}`}>
              <CustomizedText sx={{ textAlign: 'left' }}>
                {item.name}
              </CustomizedText>
            </CustomizedLink>
          </BoxRow>
        )
      })}
    </BoxColumn>
  )

  return (
    <BoxRow sx={{ m: 1 }}>
      <TextField
        sx={{ width: '150px' }}
        id="standard-basic"
        label="What are you looking for ?"
        variant="standard"
        color="primary"
        onChange={handleChange}
      />
      <SearchIcon
        sx={{ mt: '20px', ml: '10px' }}
        onClick={toggleDrawer('bottom', true)}
      />
      <Drawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer('bottom', false)}
      >
        {list('bottom')}
      </Drawer>
    </BoxRow>
  )
}

export default SearchProduct
