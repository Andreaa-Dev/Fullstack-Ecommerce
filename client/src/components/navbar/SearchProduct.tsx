import React from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

function SearchProduct() {
  return (
    <div>
      <TextField
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
