import { TextField } from '@mui/material'
import React from 'react'
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
        id="standard-basic"
        label="Your email address"
        variant="standard"
      />
    </div>
  )
}

export default Newsletter
