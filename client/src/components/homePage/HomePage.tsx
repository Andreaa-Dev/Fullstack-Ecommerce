import React from 'react'
import { Box } from '@mui/material'

import mainImg from '../images/mainPage.webp'
import subImg1 from '../images/subImg1.webp'
import subImg2 from '../images/subImg2.webp'
import subImg3 from '../images/subImg3.webp'
import background from '../images/background.webp'
import { CustomizedTitle, CustomizedButton, BoxColumn } from '../customizedCSS'
import WorkShop from './WorkShop'
import Gift from './Gift'

function HomePage() {
  return (
    <Box sx={{ backgroundImage: `url(${background})` }}>
      <Box>
        <img src={mainImg} alt="RougeDior" />
        <CustomizedButton>DISCOVER</CustomizedButton>
      </Box>
      <Box>
        <CustomizedTitle variant="h5">HOLIDAY LOOK</CustomizedTitle>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 1,
          }}
        >
          <BoxColumn>
            <img
              src={subImg1}
              alt=" ROUGE DIOR MINAUDIERE - THE ATELIER OF DREAMS LIMITED EDITION"
              height="400"
              width="350"
            />
            <CustomizedTitle>
              ROUGE DIOR MINAUDIERE - THE ATELIER OF DREAMS LIMITED EDITION
            </CustomizedTitle>
            <CustomizedButton>Discover</CustomizedButton>
          </BoxColumn>
          <BoxColumn>
            <img
              src={subImg2}
              alt="DIORIFIC VERNIS - THE ATELIER OF DREAMS LIMITED EDITION"
              height="400"
              width="350"
            />
            <CustomizedTitle>
              DIORIFIC VERNIS - THE ATELIER OF DREAMS LIMITED EDITION
            </CustomizedTitle>

            <CustomizedButton>Discover</CustomizedButton>
          </BoxColumn>

          <BoxColumn>
            <img
              src={subImg3}
              alt="ROUGE BLUSH - THE ATELIER OF DREAMS LIMITED EDITION"
              height="400"
              width="350"
            />
            <CustomizedTitle>
              ROUGE BLUSH - THE ATELIER OF DREAMS LIMITED EDITION
            </CustomizedTitle>
            <CustomizedButton>Discover</CustomizedButton>
          </BoxColumn>
        </Box>
      </Box>
      <WorkShop />
      <Gift />
    </Box>
  )
}

export default HomePage
