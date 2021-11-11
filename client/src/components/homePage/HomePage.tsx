import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Button, Typography } from '@mui/material'

import mainImg from '../images/mainPage.webp'
import subImg1 from '../images/subImg1.webp'
import subImg2 from '../images/subImg2.webp'
import subImg3 from '../images/subImg3.webp'

const CustomizedBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-item: center;
  text-align: center;
`
const CustomizedText = styled(Typography)`
  color: white;
  margin-top: 1rem;
  font-size: 5;
`

const CustomizedButton = styled('button')`
  border-radius: 20px;
  color: white;
  background-color: #16213e;
  padding: 5px;
`

function HomePage() {
  return (
    <Box sx={{ backgroundColor: '#16213E' }}>
      <Box>
        <img src={mainImg} alt="RougeDior" />
        <Button> DISCOVER</Button>
      </Box>
      <Box>
        <Typography color="white">HOLIDAY LOOK</Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 1,
          }}
        >
          <CustomizedBox>
            <img
              src={subImg1}
              alt=" ROUGE DIOR MINAUDIERE - THE ATELIER OF DREAMS LIMITED EDITION"
              height="400"
              width="350"
            />
            <CustomizedText>
              ROUGE DIOR MINAUDIERE - THE ATELIER OF DREAMS LIMITED EDITION
            </CustomizedText>
            <CustomizedText> MAKE-UP</CustomizedText>
            <CustomizedButton>Discover</CustomizedButton>
          </CustomizedBox>
          <Box>
            <img
              src={subImg2}
              alt="DIORIFIC VERNIS - THE ATELIER OF DREAMS LIMITED EDITION"
              height="400"
              width="350"
            />
            <CustomizedText>
              DIORIFIC VERNIS - THE ATELIER OF DREAMS LIMITED EDITION
            </CustomizedText>
            <CustomizedText> MAKE-UP</CustomizedText>

            <Button>Discover</Button>
          </Box>

          <Box>
            <img
              src={subImg3}
              alt="ROUGE BLUSH - THE ATELIER OF DREAMS LIMITED EDITION"
              height="400"
              width="350"
            />
            <CustomizedText>
              ROUGE BLUSH - THE ATELIER OF DREAMS LIMITED EDITION
            </CustomizedText>
            <CustomizedText> MAKE-UP</CustomizedText>

            <Button>Discover</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
