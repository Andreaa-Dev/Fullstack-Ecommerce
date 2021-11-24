import React from 'react'
import { Box } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { giftImgList } from '../../../misc/giftImgList'
import { BoxRow, CustomizedText, CustomizedTextHT } from '../../customizedCSS'

function GiftList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <ArrowBackIosIcon sx={{ color: 'white', ':hover': { color: 'black' } }} />
    ),
    nextArrow: (
      <ArrowForwardIosIcon
        sx={{ color: 'white', ':hover': { color: 'black' } }}
      />
    ),
  }
  return (
    <Box sx={{ width: '100%' }}>
      <CustomizedTextHT>YOUR GIFTS MADE BEAUTIFUL</CustomizedTextHT>
      <CustomizedText color="white">
        Custom engraving, a personalised message, complimentary express
        delivery… Dior has thought of everything to make your holidays gifts
        unforgettable.
      </CustomizedText>
      <Box
        sx={{
          mt: '50px',
          mb: '50px',
          pl: '200px',
          pr: '200px',
        }}
      >
        <Slider {...settings}>
          {giftImgList.map((item) => {
            return (
              <Box>
                <BoxRow sx={{ ml: '25px', mr: '25px' }}>
                  <img
                    src={item.name}
                    alt={item.description}
                    height="320px"
                    width="300px"
                  />
                </BoxRow>
                <CustomizedTextHT> {item.description}</CustomizedTextHT>
              </Box>
            )
          })}
        </Slider>
      </Box>
    </Box>
  )
}

export default GiftList
