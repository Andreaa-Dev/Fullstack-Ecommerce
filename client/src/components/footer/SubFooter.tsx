import { Box } from '@mui/system'
import React from 'react'
import ContactFooter from './ContactFooter/ContactFooter'
import MiscFooter from './ContactFooter/MiscFooter'
import Newsletter from './ContactFooter/Newsletter'

function SubFooter() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        p: 5,
        textAlign: 'center',
      }}
    >
      <Newsletter />
      <ContactFooter />
      <MiscFooter />
    </Box>
  )
}

export default SubFooter
