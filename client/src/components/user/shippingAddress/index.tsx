import { Box, TextField } from '@mui/material'
import React from 'react'
import { BoxColumn, BoxRow, CustomizedText } from '../../customizedCSS'
import DOB from './DOB'
import OptionalInformation from './OptionalInformation'
import UserDetailInformation from './UserDetailInformation'

function index() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <UserDetailInformation />
      <OptionalInformation />
      <DOB />
    </Box>
  )
}

export default index
