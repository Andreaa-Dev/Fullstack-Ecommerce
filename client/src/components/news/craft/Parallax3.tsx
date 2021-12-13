import React from 'react'
import { Box } from '@mui/system'

import { BoxRow, CustomizedText, CustomizedTitle } from '../../customizedCSS'

function Parallax3() {
  return (
    <Box
      sx={{
        width: '500px',
        height: '1050px',
        m: 'auto',
      }}
    >
      <CustomizedTitle sx={{ color: 'white', fontWeight: 'bold' }}>
        FINAL ASSEMBLY{' '}
      </CustomizedTitle>
      <BoxRow sx={{ height: '550px' }}>
        <img
          src=" https://www.dior.com/couture/var/nfsdior/var/dior/storage/maison-dior/happyend/images/metiers/haute_couture/col2_attributions.jpg"
          alt="error"
        />
        <Box>
          <CustomizedText
            sx={{ height: '230px', width: '600px', backgroundColor: 'white' }}
          >
            The final fabrics, embroidery and other elements needed to make the
            piece are allocated to the toile following the fittings. This almost
            ceremonial process described by Christian Dior has never changed.
          </CustomizedText>
        </Box>
      </BoxRow>
    </Box>
  )
}

export default Parallax3
