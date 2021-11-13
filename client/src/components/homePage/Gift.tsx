import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Box } from '@mui/system'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { giftImgList } from '../../misc/giftImgList'
import { CustomizedText } from '../customizedCSS'

function Gift() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <ArrowBackIosIcon sx={{ color: 'black' }} />,
    nextArrow: <ArrowForwardIosIcon sx={{ color: 'black' }} />,
  }
  return (
    <Box
      sx={{
        paddingLeft: '150px',
        paddingRight: '150px',
        margin: '20px',
      }}
    >
      <CustomizedText variant="h5">YOUR GIFTS MADE BEAUTIFUL</CustomizedText>
      <CustomizedText>
        Custom engraving, personalised message, express delivery… Dior has
        thought of everything to make your Holidays gifts unforgettable.
      </CustomizedText>

      <Slider {...settings}>
        {giftImgList.map((item) => {
          return (
            <Box
              sx={{
                marginTop: '10',
              }}
            >
              <img src={item.name} alt="" height="324px" width="300px" />
              <CustomizedText> {item.description}</CustomizedText>
            </Box>
          )
        })}
      </Slider>
    </Box>
  )
}

export default Gift
