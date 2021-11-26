import React from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { ThemeProvider } from '@emotion/react'

import { BoxRow, useStyles, themes } from '../customizedCSS/index'

function SearchProduct() {
  const classes = useStyles()

  return (
    <BoxRow sx={{ m: 1 }}>
      <ThemeProvider theme={themes}>
        <TextField
          InputLabelProps={{
            classes: {
              root: classes.typography,
            },
          }}
          id="standard-basic"
          label="What are you looking for ?"
          variant="standard"
          color="primary"
        />
        <SearchIcon sx={{ mt: '20px', ml: '10px' }} />
      </ThemeProvider>
    </BoxRow>
  )
}

export default SearchProduct
