import React from 'react'
import { Box } from '@mui/system'

import ParallaxNews from './ParallaxNews'
import { CustomizedText, CustomizedTitle } from '../../customizedCSS'

function index() {
  return (
    <Box>
      <Box
        sx={{
          height: '800px',
          backgroundImage: `url("https://www.dior.com/couture/var/nfsdior/var/dior/storage/maison-dior/happyend/images/metiers/haute_couture/header_fixed.jpg")`,
          backgroundRepeat: 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CustomizedTitle sx={{ fontSize: '130px', fontWeight: 'bold' }}>
          HAUTE COUTURE
        </CustomizedTitle>
        <CustomizedText sx={{ width: '500px', margin: 'auto' }}>
          "Haute couture must not forget to stay constantly alive, adapted to
          the needs of every modern woman's life", Christian Dior wrote in 1953.
          From his very first show on 12 February 1947, Dior has brought to life
          elegant and feminine creations that are resolutely unclassifiable. The
          artisans in the atelier at 30 Avenue Montaigne in Paris are masterly
          couturiers and privileged witnesses, continuing an ancestral
          expertise.
        </CustomizedText>
      </Box>

      <ParallaxNews />
    </Box>
  )
}

export default index
