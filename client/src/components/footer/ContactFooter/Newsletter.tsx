import React from 'react'
import { TextField } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

import { CustomizedText, themes } from '../../customizedCSS'

function Newsletter() {
  return (
    <ThemeProvider theme={themes}>
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
    </ThemeProvider>
  )
}

export default Newsletter
