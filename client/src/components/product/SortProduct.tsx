import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

import { sortList } from '../../misc/sortList'

function SortProduct() {
  const flatProps = {
    options: sortList.map((item) => item.name),
  }
  return (
    <div>
      <Autocomplete
        {...flatProps}
        id="flat-demo"
        renderInput={(params) => (
          <TextField {...params} label="Sort " variant="standard" />
        )}
      />
    </div>
  )
}

export default SortProduct
