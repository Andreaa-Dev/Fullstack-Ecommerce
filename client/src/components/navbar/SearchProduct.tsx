import React from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { useStyles } from '../customizedCSS/index'

function SearchProduct() {
  const classes = useStyles()

  return (
    <div>
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
      <Button>
        <SearchIcon />
      </Button>
    </div>
  )
}

export default SearchProduct
