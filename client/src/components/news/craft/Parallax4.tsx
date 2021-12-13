import React from 'react'
import { Box } from '@mui/system'

import { BoxRow, CustomizedText, CustomizedTitle } from '../../customizedCSS'

function Parallax4() {
  return (
    <div>
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
            src="https://www.dior.com/couture/var/nfsdior/var/dior/storage/maison-dior/happyend/images/metiers/haute_couture/col1_montage.jpg"
            alt="error"
          />
          <Box>
            <CustomizedText
              sx={{
                height: '230px',
                width: '600px',
                backgroundColor: 'white',
              }}
            >
              The different elements of a dress or suit are now assembled and
              arranged on a wooden (Stockman) mannequin. The back of a dress is
              made, a true spine, as seen here in fine soft dressmaking: "I am
              sewing the two parts together, the lining and the fabric, with
              thread I'll remove later". Here, we use an involved and
              traditional hand-stitching technique for the suit, which involves
              sewing the inside of the jacket's collar and lapels to create all
              the hold essential to the piece, and so that it falls well: "You
              cannot hide bad tailoring. We need to be meticulous so that it's
              perfect.", we are told at the atelier.
            </CustomizedText>
          </Box>
        </BoxRow>

        <div>
          <img
            src="https://www.dior.com/couture/var/nfsdior/var/dior/storage/maison-dior/happyend/images/metiers/haute_couture/slide_montage5.jpg"
            alt="error"
          />
        </div>
      </Box>
    </div>
  )
}

export default Parallax4
