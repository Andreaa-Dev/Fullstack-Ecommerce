import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import { Box } from '@mui/system'

export default function MaterialUIPickers() {
  const [value, setValue] = useState<Date | null>(
    new Date('2014-08-18T21:11:54')
  )

  const handleChange = (newValue: Date | null) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ marginTop: 4 }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="dd.mm.yyyy"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  )
}
