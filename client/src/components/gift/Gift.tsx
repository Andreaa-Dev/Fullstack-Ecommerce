import React from 'react'
import { Box } from '@mui/system'

import GiftVideo from './GiftVideo'
import background from '../images/background.webp'
import gift from '../images/gift.gif'
import {
  CustomizedBoxHT,
  CustomizedButton,
  CustomizedLink,
  CustomizedTitleHT,
} from '../customizedCSS'

function Gift() {
  return (
    <CustomizedBoxHT>
      <GiftVideo />
      <CustomizedTitleHT>ART OF GIFTING</CustomizedTitleHT>
      <img src={gift} alt="" />
      <CustomizedLink to="art">
        <CustomizedButton>DISCOVER</CustomizedButton>
      </CustomizedLink>

      <CustomizedTitleHT>GIFT FINDER</CustomizedTitleHT>
      <CustomizedLink to="finder">
        <CustomizedButton>DISCOVER</CustomizedButton>
      </CustomizedLink>
    </CustomizedBoxHT>
  )
}

export default Gift
