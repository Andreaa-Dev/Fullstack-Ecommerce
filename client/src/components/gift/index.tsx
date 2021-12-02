import React from 'react'
import { Box } from '@mui/system'

import GiftVideo from './GiftVideo'
import background from '../images/background.webp'
import gift from '../images/gift.gif'
import giftFinder from '../images/gift.webp'

import {
  CustomizedBoxHT,
  CustomizedButton,
  CustomizedLink,
  CustomizedTitleHT,
} from '../customizedCSS'

function index() {
  return (
    <CustomizedBoxHT>
      <GiftVideo />
      <CustomizedTitleHT>ART OF GIFTING</CustomizedTitleHT>
      <img src={gift} alt="error" />
      <CustomizedLink to="art">
        <CustomizedButton>DISCOVER</CustomizedButton>
      </CustomizedLink>

      <CustomizedTitleHT>GIFT FINDER</CustomizedTitleHT>
      <img src={giftFinder} alt="error" />
      <CustomizedLink to="finder">
        <CustomizedButton>DISCOVER</CustomizedButton>
      </CustomizedLink>
    </CustomizedBoxHT>
  )
}

export default index
