import React from 'react'
import { Box } from '@mui/system'

import mainImg from '../images/xmas_cover.webp'

import {
  CustomizedTextHT,
  CustomizedTitleHT,
  CustomizedButton,
  BoxColumn,
} from '../customizedCSS'
import { holidayList } from '../../misc/holidayList'

function Holiday() {
  return (
    <Box>
      <Box>
        <img src={mainImg} alt="RougeDior" />
        <CustomizedButton>DISCOVER</CustomizedButton>
      </Box>

      <Box>
        <CustomizedTitleHT color="white">HOLIDAY LOOK</CustomizedTitleHT>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 1,
          }}
        >
          {holidayList.map((item) => {
            return (
              <BoxColumn>
                <img src={item.img} alt={item.name} height="400" width="350" />
                <CustomizedTextHT sx={{ fontSize: '20px' }}>
                  {item.name}
                </CustomizedTextHT>
                <CustomizedButton>Discover</CustomizedButton>
              </BoxColumn>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default Holiday
