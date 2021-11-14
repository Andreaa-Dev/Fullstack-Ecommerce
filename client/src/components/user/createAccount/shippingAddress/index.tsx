import { Box } from '@mui/material'
import React from 'react'
import { BoxColumn, BoxRow } from '../../../customizedCSS'
import DOB from './DOB'
import UserDetailInformation from './UserDetailInformation'

function index() {
  return (
    <Box>
      <UserDetailInformation />
      <DOB />
    </Box>
  )
}

export default index
