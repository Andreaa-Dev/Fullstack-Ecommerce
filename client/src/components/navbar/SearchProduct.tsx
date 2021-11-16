import React from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { BoxRow, useStyles } from '../customizedCSS/index'

function SearchProduct() {
  const classes = useStyles()

  return (
    <BoxRow sx={{ m: 1 }}>
      <TextField
        InputLabelProps={{
          classes: {
            root: classes.typography,
          },
        }}
        id="standard-basic"
        label="What are you looking for ?"
        variant="standard"
      />
      <SearchIcon sx={{ mt: '20px', ml: '10px' }} />
    </BoxRow>
  )
}

export default SearchProduct
