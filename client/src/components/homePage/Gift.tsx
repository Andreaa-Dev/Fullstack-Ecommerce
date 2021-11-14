import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Box } from '@mui/system'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { giftImgList } from '../../misc/giftImgList'
import { CustomizedText, CustomizedTitle } from '../customizedCSS'

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
        margin: '50px',
      }}
    >
      <CustomizedText variant="h5" color="black">
        YOUR GIFTS MADE BEAUTIFUL
      </CustomizedText>
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
              <Box sx={{ margin: 1 }}>
                <img
                  src={item.name}
                  alt={item.description}
                  height="324px"
                  width="300px"
                />
              </Box>

              <CustomizedText> {item.description}</CustomizedText>
            </Box>
          )
        })}
      </Slider>
    </Box>
  )
}

export default Gift