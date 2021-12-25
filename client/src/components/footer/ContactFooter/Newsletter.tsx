import React from 'react'
import { TextField } from '@mui/material'

import { CustomizedText } from '../../customizedCSS'

function Newsletter() {
  return (
    <div>
      <CustomizedText variant="h6" fontWeight="bold">
        NEWSLETTER
      </CustomizedText>
      <CustomizedText>
        Sign up to receive exclusive updates and content
      </CustomizedText>
      <TextField
        sx={{ width: '320px' }}
        id="standard-basic"
        label="Your email address"
        variant="standard"
      />
    </div>
  )
}

export default Newsletter
