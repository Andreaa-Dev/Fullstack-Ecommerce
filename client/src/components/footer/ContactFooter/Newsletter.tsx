import { TextField, Typography } from '@mui/material'
import React from 'react'

function Newsletter() {
  return (
    <div>
      <Typography variant="h6" fontWeight="bold">
        NEWSLETTER
      </Typography>
      <Typography>Sign up to receive exclusive updates and content</Typography>
      <TextField
        id="standard-basic"
        label="Your email address"
        variant="standard"
      />
    </div>
  )
}

export default Newsletter
