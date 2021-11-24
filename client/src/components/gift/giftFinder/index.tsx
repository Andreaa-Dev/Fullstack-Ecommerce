import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box } from '@mui/system'

import {
  CustomizedBoxHT,
  CustomizedButton,
  CustomizedText,
  CustomizedTextHT,
} from '../../customizedCSS'
import { title } from '../../../misc/titleGift'
import { type } from '../../../misc/typeGift'
import { forWho } from '../../../misc/forGift'
import GiftList from './GiftList'

function GiftFinder() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <ArrowBackIosIcon
        sx={{
          color: 'white',
          ':hover': { color: '#ce944a' },
          fontSize: 15,
        }}
      />
    ),
    nextArrow: (
      <ArrowForwardIosIcon
        sx={{ color: 'white', ':hover': { color: '#ce944a' }, fontSize: 20 }}
      />
    ),
  }
  return (
    <CustomizedBoxHT>
      <CustomizedTextHT>gift finder</CustomizedTextHT>
      <Box>
        <CustomizedText color="white">TO INDULGE</CustomizedText>
        <Box
          sx={{
            m: 'auto',
            width: '250px',
          }}
        >
          <Slider {...settings}>
            {title.map((item) => {
              return (
                <Box
                  sx={{
                    width: '250px',
                  }}
                >
                  <CustomizedTextHT> {item.name}</CustomizedTextHT>
                </Box>
              )
            })}
          </Slider>
        </Box>
      </Box>

      <Box>
        <CustomizedText color="white">WITH A DREAM OF</CustomizedText>
        <Box
          sx={{
            m: 'auto',
            width: '250px',
          }}
        >
          <Slider {...settings}>
            {type.map((item: any) => {
              return (
                <Box
                  sx={{
                    width: '250px',
                  }}
                >
                  <CustomizedTextHT> {item.name}</CustomizedTextHT>
                </Box>
              )
            })}
          </Slider>
        </Box>
      </Box>
      <Box>
        <CustomizedText color="white">FOR A PLEASURE</CustomizedText>
        <Box
          sx={{
            m: 'auto',
            width: '250px',
          }}
        >
          <Slider {...settings}>
            {forWho.map((item: any) => {
              return (
                <Box
                  sx={{
                    width: '250px',
                  }}
                >
                  <CustomizedTextHT> {item.name}</CustomizedTextHT>
                </Box>
              )
            })}
          </Slider>
        </Box>
      </Box>
      <CustomizedButton>Find the perfect gift</CustomizedButton>
      <GiftList />
    </CustomizedBoxHT>
  )
}

export default GiftFinder
