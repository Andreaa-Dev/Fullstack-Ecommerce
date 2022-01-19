import React from 'react'
import { Box } from '@mui/system'

import { BoxRow, CustomizedText, CustomizedTitle } from '../../customizedCSS'

function Parallax2() {
  return (
    <Box>
      <CustomizedTitle>PROTOTYPES or toiles </CustomizedTitle>
      <BoxRow>
        <CustomizedText
          sx={{ height: '230px', width: '600px', backgroundColor: 'white' }}
        >
          When the ateliers receive the drawing from the design studio, they set
          to work on prototypes or toiles, also known as "mock ups", for the
          pieces to be shown. At least three fittings are required to achieve
          the perfect result. These fittings involve a real exchange of
          technical knowledge and artisanal excellence, as the Artistic Director
          and design studio's desires are made a reality.
        </CustomizedText>
        <img
          src="https://www.dior.com/couture/var/nfsdior/var/dior/storage/maison-dior/happyend/images/metiers/haute_couture/col2_proto.jpg"
          alt="Maison-Dior"
        />
      </BoxRow>
    </Box>
  )
}

export default Parallax2
