import React from 'react'
import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import location from '../images/location.webp'

function LocationFooter() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${location})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 10,
      }}
    >
      <Typography>OUR BOUTIQUES</Typography>
      <TextField
        id="standard-basic"
        label="City, Post code, Country"
        variant="standard"
      />
    </Box>
  )
}

export default LocationFooter
