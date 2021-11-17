import React, { useState } from 'react'
import { Box, MenuItem, TextField } from '@mui/material'

import { countryList } from '../../../misc/countryList'
import { useStyles } from '../../customizedCSS/index'

function OptionalInformation() {
  const classes = useStyles()

  const [countryName, setCountryName] = useState('Country')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(event.target.value)
  }

  return (
    <div>
      <Box sx={{ m: 2 }}>
        <Box sx={{ mt: 2 }}>
          <TextField
            InputLabelProps={{
              classes: {
                root: classes.typography,
              },
            }}
            InputProps={{
              classes: {
                root: classes.typography,
              },
            }}
            fullWidth
            select
            value={countryName}
            onChange={handleChange}
          >
            {countryList.map((item) => (
              <MenuItem key={item.code} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <Box sx={{ mt: 4 }}>
          <TextField
            InputLabelProps={{
              classes: {
                root: classes.typography,
              },
            }}
            fullWidth
            id="standard-basic"
            label="Address"
            variant="outlined"
          />
        </Box>

        <Box sx={{ mt: 4 }}>
          <TextField
            InputLabelProps={{
              classes: {
                root: classes.typography,
              },
            }}
            fullWidth
            id="standard-basic"
            label="Phone"
            variant="outlined"
          />
        </Box>
      </Box>
    </div>
  )
}

export default OptionalInformation
