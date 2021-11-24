import React from 'react'
import { Box } from '@mui/system'

import { BoxRow, CustomizedText, CustomizedTitle } from '../../customizedCSS'

function Parallax1() {
  return (
    <Box
      sx={{
        width: '500px',
        height: '1050px',
        m: 'auto',
      }}
    >
      <CustomizedTitle>
        FINE SOFT DRESSMAKING and tailoring ateliers
      </CustomizedTitle>
      <BoxRow sx={{ height: '550px' }}>
        <img
          src=" https://www.dior.com/couture/var/nfsdior/var/dior/storage/maison-dior/happyend/images/metiers/haute_couture/col1_ateliers.jpg"
          alt="error"
        />
        <Box>
          <CustomizedText
            sx={{ height: '230px', width: '600px', backgroundColor: 'white' }}
          >
            "Ateliers are the decoders of hieroglyphs", Christian Dior wrote in
            his autobiography. The 60 artisans in Dior's ateliers interpret the
            designer's wishes, understanding his ambitions and what he wants to
            achieve. They recognise the subtleties of his art and express them.
            Haute Couture is divided into two ateliers: tailoring (working with
            the shape and structure of jackets, trousers, and coats) and fine
            soft dressmaking (creating light and supple silhouettes for fluid
            dresses and evanescent petticoats). The functions and processes of
            both ateliers are the same.
          </CustomizedText>
          <Box sx={{ height: '300px', width: '265px' }}>
            <img
              src=" https://www.dior.com/couture/var/nfsdior/var/dior/storage/maison-dior/happyend/images/metiers/haute_couture/col2_ateliers.jpg "
              alt=""
              height="500px"
            />
          </Box>
        </Box>
      </BoxRow>
    </Box>
  )
}

export default Parallax1
