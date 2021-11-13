import React from 'react'

import { CustomizedText } from '../customizedCSS'
import workshopImg from '../images/workshopImg.webp'

function WorkShop() {
  return (
    <div>
      <CustomizedText>THE PERSONALISATION WORKSHOP</CustomizedText>
      <img src={workshopImg} alt="" />
    </div>
  )
}

export default WorkShop
